<template>
  
  <el-container>
    <el-main>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="20" >
          <el-col :span="24" class="header-title">
            <el-col :span="10">
              <p class="title"><b >LIST DATA </b></p>
              <span class="sub-title" v-if="lastUpdate">Terakhir diupdate : {{$options.filters.indoDateTime(lastUpdate)}}</span>
            </el-col>
            
            <el-button 
              style="float:right" 
              @click="confirmLoadSanata"
              type="primary" icon="el-icon-refresh" 
            >
              Refresh Data
            </el-button>
            
          </el-col>
          <el-col :span="24" >
            <el-date-picker
              style="float:right"
              v-model="date"
              type="daterange"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date">
            </el-date-picker>
            <el-input class="search-input" v-on:keyup.native.enter="getData(1)" v-model="search" placeholder="Cari berdasarkan NRM/Nama pasien">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </el-col>
          <el-table
            :data="data"
            v-loading="isLoading"
            border
            style="width: 100%">
            <el-table-column
              prop="tgl_masuk"
              label="Tanggal"
              width="150">
              <template slot-scope="scope">
                {{$options.filters.indoDate(scope.row.tgl_masuk)}}
              </template>
            </el-table-column>
            <el-table-column
              prop="noreg"
              label="No Registrasi"
              width="150">
            </el-table-column>
            <el-table-column
              prop="nrm"
              label="NRM"
              width="120">
            </el-table-column>
            <el-table-column
              prop="nama_pasien"
              label="Nama Pasien"
              >
            </el-table-column>
            <el-table-column
              label="Status"
              width="100"
              >
              <template slot-scope="scope">
                <el-tag effect="dark" :type='(scope.row.status >= 15)?"success":(scope.row.status == 0)?"danger":"warning"'>{{scope.row.status}}/15</el-tag>
              </template>
            </el-table-column>
            <el-table-column
              label="Aksi"
              width="150"
              >
              <template slot-scope="scope">
                <router-link :to="{ name: 'detail', params: { id: scope.row.noreg }}">
                  <el-button size="mini" icon="el-icon-search" type="success" round>Detail</el-button>
                </router-link>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            layout="prev, pager, next"
            :page-size="perPage"
            @current-change='showPage'
            :total="totalData">
          </el-pagination>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  import moment from 'moment'
  import { mapActions, mapMutations, mapState } from 'vuex'
  export default {
    methods: {
      handleClick() {
        console.log('click');
      }
    },
    mounted(){
      this.$store.dispatch('mutu/getListRegistrasi',{date_start:'',date_end:'',search:'',page:1}).then(() =>{
          this.isLoading = false
      })
    },
    computed:{
      ...mapState(['errors','info']),
      ...mapState('mutu',['data','page','perPage','totalData','lastUpdate']),
      ...mapState('auth',['currentUser','isLoggedIn']),
    },
    watch:{
      date: function(newData, oldData){
        this.date_start = moment(newData[0]).format('YYYY-MM-DD')
        this.date_end = moment(newData[1]).format('YYYY-MM-DD')
        this.getData(1)
      }
        
    },
    data() {
      return {
        date:'',
        date_start:'',
        date_end:'',
        isLoading:true,
        search:'',
        sanataLoading: '',
      }
    },
    methods:{
      ...mapMutations(['CLEAR_ERRORS']),
      ...mapActions('mutu',['getListRegistrasi','getListRegistrasiFromSanata']),
      showPage(el){
        this.current = el
        this.getData(el)
      },
      getData(page=this.current){
        this.isLoading = true
        this.getListRegistrasi({date_start:this.date_start,date_end:this.date_end,search:this.search,page:page}).then(() =>{
            this.isLoading = false
        })
      },
      confirmLoadSanata(){
        if(this.date_start != this.date_end){
          this.$confirm('Apakah anda yakin ingin mengambil data lebih dari 1 hari?  terdapat kemungkinan proses berjalan lama', 'Load data sanata', {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'info'
          }).then((response) => {
            this.loadSanata()
          }).catch((error) => {   
          });
        }else{
          this.loadSanata()
        }
        
      },
      loadSanata() {
        this.sanataLoading = this.$loading({
          lock: true,
          text: 'Import Data Sanata...',
        })
        this.getListRegistrasiFromSanata({date_start:this.date_start,date_end:this.date_end}).then((response) => {
          this.sanataLoading.close();
          this.$toast.success(response, 'Berhasil')
          this.getData(1)
        }).catch((err) => {
            this.sanataLoading.close();
            this.toast.error(err, 'Gagal')
        })
      }
    }
  }
</script>

<style scoped>
  .title{
    font-size:25px;
    margin:0;
    /* float:left; */
  }


  .title p{
    margin:0;
  }

  .sub-title{
    color:#999;
    margin-top:10px;
    font-size:12px;
  }

  .header-title{
    margin-top:40px;
  }

  .search-input{
    margin-bottom:20px;
    width:300px;
    margin-left:10px;
    float:right;
  }

  .refresh-input{
    margin-bottom:20px;
    width:200px;
    margin-left:10px;
    float:right;
  }
</style>
<style>
  .el-table tr td{
    font-size:12px;
  }
  
  .el-loading-spinner .el-loading-text{
    font-size:20px;
    margin-top:25px;
    font-family:Inter;
  }

  .el-table td{
    padding:5px 0 ;
  }

  .el-button.is-round{
    padding:10px 25px;
  }

  .el-picker-panel__body{
    font-family:Inter
  }
</style>