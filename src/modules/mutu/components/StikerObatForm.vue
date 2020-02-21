<template>
  <div>
    <el-button style="float:right" size="small" type="primary" @click="dialogTableVisible = true" icon="el-icon-plus"> Tambah</el-button>
    <el-input class="search-input" placeholder="Cari nama obat">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="nama"
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
        <template>
          <el-button type="danger" size="mini"><i class="el-icon-close" /> Hapus</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top:20px;">
      <el-button type="primary" size="small"><i class="el-icon-check"/> Simpan</el-button>
      <el-button type="danger" size="small"><i class="el-icon-close"/> Reset</el-button>
    </div>

    <el-dialog title="Pilih Obat" :visible.sync="dialogTableVisible">
      <add-obat-modal/>
    </el-dialog>
  </div>

 
</template>

  <script>
    import AddObatModal from './AddObatModal'
    export default {
      components:{
        AddObatModal
      },
      data() {
        return {
          dialogTableVisible:false,
          tableData: [{
            nama: 'Paracetamol',
            label: true
          }, {
            nama: 'Ganja',
            label: false
          }, {
            nama: 'Antibiotik',
            label: true
          }]
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