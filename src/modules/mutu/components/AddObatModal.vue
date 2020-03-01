<template>
  <div>
    <el-input class="search-input" v-model="search" placeholder="Cari nama obat"  v-on:keyup.native.enter="getData()">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <el-table :data="data" v-loading="isLoading">
      <el-table-column property="nama_obat" label="Obat"></el-table-column>
      <el-table-column
          label="Aksi"
          width="100">
          <template slot-scope="scope">
            <el-button type="success" size="mini" @click="addObat(scope.row)" v-if="!listSelected.includes(scope.row.id_obat)"><i class="el-icon-plus" /> Tambah</el-button>
          </template>
        </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :page-size="perPage"
      @current-change='showPage'
      :total="totalData">
    </el-pagination>
  </div>
</template>

<script>
  import { mapActions, mapMutations, mapState } from 'vuex'
  export default {
    props: ['dataSelected'],
    data() {
      return {
        current:1,
        selected:0,
        isLoading : false,
        inputModal:false,
        editModal:false,
        selectedData:{},
        search:'',
        listSelected:[],
      }
    },
    mounted(){
      console.log('ss')
      if(this.dataSelected){
        this.listSelected =  this.dataSelected.map(obj => obj.obat_id);
      }
    },
    computed:{
      ...mapState(['errors','info']),
      ...mapState('obat',['data','page','perPage','totalData']),
      ...mapState('auth',['currentUser','isLoggedIn']),
    },
    methods:{
      ...mapMutations(['CLEAR_ERRORS']),
      ...mapActions('obat',['getListObat','deleteObat','resetObat']),
      showPage(el){
        this.current = el
        this.getData(el)
      },
      getData(page=this.current){
        this.isLoading = true
        this.getListObat({search:this.search,page:page}).then(() =>{
            this.isLoading = false
        })
      },
      addObat(data){
        this.listSelected.push(data.id_obat)
        this.$emit('addDataObat',data)
      }
      
    }
  }
</script>