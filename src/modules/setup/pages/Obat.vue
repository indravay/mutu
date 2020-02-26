<template>
  <div>
    <el-button style="float:right" type="primary" @click="inputData" icon="el-icon-plus"> Tambah</el-button>
    <el-input class="search-input" v-model="search" v-on:keyup.native.enter="getData()" clearable placeholder="Cari nama obat">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <el-table
      :data="data"
      v-loading="isLoading"
      style="width: 100%">
      <el-table-column
        prop="nama_obat"
        label="Obat"
      >
      </el-table-column>
     
      <el-table-column
        label="Aksi"
        width="200">
        <template slot-scope="scope"> 
          <el-button type="warning" size="mini" @click="editData(scope.$index)"><i class="el-icon-edit" /> Edit</el-button>
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

    <el-dialog title="Tambah Obat" :visible.sync="inputModal">
      <add-obat-modal @closeModal="closeModal"/>
    </el-dialog>

    <el-dialog title="Edit Obat" :visible.sync="editModal">
      <add-obat-modal :form='selectedData' types='update' @closeModal="closeModal"/>
    </el-dialog>
  </div>
</template>
<script>
    import AddObatModal from '../components/AddObatModal'
    import { mapActions, mapMutations, mapState } from 'vuex'
    export default {
      components:{
        AddObatModal
      },
      mounted(){
        this.$store.dispatch('obat/getListObat',{search:'',page:1}).then(() =>{
            this.isLoading = false
        })
      },
      
      data() {
        return {
          current:1,
          selected:0,
          isLoading : true,
          inputModal:false,
          editModal:false,
          selectedData:{},
          search:''
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
        editData(id){
          this.CLEAR_ERRORS()
          this.selectedData = Object.assign({}, this.data[id])
          this.editModal = true
        },
        inputData(){
          this.CLEAR_ERRORS()
          this.inputModal = true
        },
        hapus(id){
          this.$confirm('Apakah anda yakin ingin menghapus obat '+this.data[id].nama_obat+'?', 'Hapus Obat', {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'error'
          }).then((response) => {
            this.deleteObat({id:this.data[id].id_obat}).then((resp) =>{       
              this.$toast.success(resp, 'Berhasil')
              this.getData()
            }).catch((error) => { 
              this.toast.error(error, 'Gagal') 
            });
          }).catch((error) => {   
          });
        },
        closeModal(){
          this.inputModal = false
          this.editModal = false
          this.getData()
        },
        
      }
    }
  </script>

<style>
  .search-input{
    width:300px;
    float:right;
    margin-right:10px;
  }

  .el-message-box, .el-message {
    font-family: Inter
  }

  .el-message{
    right:0;
  }
</style>