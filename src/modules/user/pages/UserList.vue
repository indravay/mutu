<template>
  <el-container>
    <el-main>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="20" >
          <el-col :span="24" class="header-title">
            <el-col :span="12">
              <p class="title"><b >LIST USER</b></p>
              <!-- <span class="sub-title">Terakhir diupdate : 20 Februari 2020, 20:00</span> -->
            </el-col>
            <el-button style="float:right" type="primary" @click="inputModal = true" icon="el-icon-plus"> Tambah</el-button>
            <el-input class="search-input" v-model="search" v-on:keyup.native.enter="getData()" clearable placeholder="Cari berdasarkan Nama">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </el-col>
          <el-table
            :data="data"
            border
            v-loading="isLoading"
            style="width: 100%">
            <el-table-column
              prop="nama"
              label="Nama"
            >
            </el-table-column>
            <el-table-column
              prop="username"
              label="Username"
            >
            </el-table-column>
            <el-table-column
              prop="role"
              label="Role"
              width="120">
            </el-table-column>
            
            <el-table-column
              label="Aksi"
              width="250"
              >
              <template slot-scope="scope">
                <el-button type="warning" size="mini" @click="reset(scope.$index)"><i class="el-icon-edit" /> Reset</el-button>
                <el-button type="danger" size="mini" @click="hapus(scope.$index)"><i class="el-icon-close" /> Hapus</el-button>
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

    <el-dialog title="Tambah User" :visible.sync="inputModal">
      <user-modal @closeModal="closeModal" type="input"/>
    </el-dialog>

  </el-container>
</template>

<script>
  import UserModal from '../components/UserModal'
  import { mapActions, mapMutations, mapState } from 'vuex'
  export default {
    components:{
      UserModal
    },
    mounted(){
      this.$store.dispatch('user/getListUser',{search:'',page:1}).then(() =>{
          this.isLoading = false
      })
    },
    methods: {
      ...mapMutations(['CLEAR_ERRORS']),
      ...mapActions('user',['getListUser','deleteUser','resetUser']),
      handleClick() {
        console.log('click');
      },

      showPage(el){
        this.current = el
        this.getData(el)
      },
      getData(page=this.current){
        this.isLoading = true
        this.getListUser({search:this.search,page:page}).then(() =>{
            this.isLoading = false
        })
      },
      hapus(id){
        this.$confirm('Apakah anda yakin ingin menghapus user '+this.data[id].nama+'?', 'Hapus User', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'error'
        }).then((response) => {
          this.deleteUser({id:this.data[id].id}).then((resp) =>{       
            this.$toast.success(resp, 'Berhasil')
            this.getData()
          }).catch((error) => { 
            this.toast.error(error, 'Gagal') 
          });
        }).catch((error) => {   
        });
      },
      reset(id){
        this.$confirm('Apakah anda yakin ingin mereset password user '+this.data[id].nama+'? Password akan dirubah menjadi '+this.data[id].username+'123456', 'Reset', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then((response) => {
          this.resetUser({id:this.data[id].id}).then((resp) =>{       
            this.$toast.success(resp, 'Berhasil')
          }).catch((error) => { 
            this.toast.error(error, 'Gagal') 
          });
        })
      },
      closeModal(){
        this.inputModal = false
        this.getData()
      },
      
    },
    computed:{
      ...mapState(['errors','info']),
      ...mapState('user',['data','page','perPage','totalData']),
      ...mapState('auth',['currentUser','isLoggedIn']),
    },
    data() {
      return {
        current:1,
        isLoading : true,
        inputModal:false,
        search:''
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
.el-table td{
  padding:5px 0 ;
}

.el-button.is-round{
  padding:10px 25px;
}

.el-pagination.is-background{
  padding-top:20px;
}

.el-pagination{
  margin-top:20px;
}
</style>