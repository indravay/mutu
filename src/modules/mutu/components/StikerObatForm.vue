<template>
  <div>
    <el-button style="float:right" size="small" type="primary" @click="dialogTableVisible = true" icon="el-icon-plus"> Tambah</el-button>
    <!-- <el-input class="search-input" placeholder="Cari nama obat">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input> -->
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="nama_obat"
        label="Obat"
      >
      </el-table-column>
      <el-table-column
        prop="label"
        label="Label"
        width="180">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.label"
            >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column
        label="Aksi"
        width="180">
        <template slot-scope="scope">
          <el-button type="danger" size="mini" @click="deleteDataObat(scope.$index)"><i class="el-icon-close"  /> Hapus</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top:20px;">
      <el-button :loading="loadingButton" type="primary" @click='submitProcess' size="small"><i class="el-icon-check"/> Simpan</el-button>
      <!-- <el-button type="danger" size="small"><i class="el-icon-close"/> Reset</el-button> -->
    </div>

    <el-dialog title="Pilih Obat" :visible.sync="dialogTableVisible">
      <add-obat-modal @addDataObat='addDataObat' :dataSelected='tableData' v-if="dialogTableVisible"/>
    </el-dialog>
  </div>

 
</template>

<script>
  import { mapActions, mapMutations, mapState } from 'vuex'
  import AddObatModal from './AddObatModal'
  export default {
  props: ['id'],
    components:{
      AddObatModal
    },
    mounted(){
      this.$store.dispatch('obat/getListObat',{search:'',page:1}).then(() =>{
        this.isLoading = false
      })

      this.$store.dispatch('mutu/getDataForm',{type:'label_obat', noreg:this.id}).then((res) =>{
        this.tableData = res.data
      })
    },
    data() {
      return {
        dialogTableVisible:false,
        tableData: [],
        loadingButton:false,
        loadingForm:false
      }
    },
    computed:{
      ...mapState(['errors','info']),
      ...mapState('auth',['currentUser','isLoggedIn']),
    },
    methods:{
      ...mapActions('mutu',['updateMutu']),
      ...mapMutations(['CLEAR_ERRORS']),
      getData(page=this.current){

      },

      submitProcess(){
        this.loadingButton = true
        this.CLEAR_ERRORS()
        this.updateMutu({type:'label_obat', noreg:this.id, form:this.tableData}).then((response) =>{
            this.loadingButton = false;
            this.$toast.success(response, 'Berhasil')
            this.$emit('setStatus','label_obat')
        }).catch((err) => {
            this.loadingButton = false
            this.toast.error(err, 'Gagal')
        })
      },

      addDataObat(data){
        this.tableData.push({
          obat_id : data.id_obat,
          nama_obat : data.nama_obat,
          terlabel : 0
        })
      },
      
      deleteDataObat(index){
        this.tableData.splice(index, 1);
      }
    }
  }
</script>

<style scoped>
  .search-input{
    width:300px;
    float:right;
    margin-right:10px;
  }
</style>

<style>
.el-dialog__body{
  padding:20px 20px 30px;
}
</style>