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
        width="280">
        <template>
          <el-button type="warning" size="mini"><i class="el-icon-edit" /> Edit</el-button>
          <el-button type="danger" size="mini" @click="hapus"><i class="el-icon-close" /> Hapus</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top:20px;">
      <el-button type="primary" size="small"><i class="el-icon-check"/> Simpan</el-button>
      <el-button type="danger" size="small"><i class="el-icon-close"/> Reset</el-button>
    </div>

    <el-dialog title="Tambah Obat" :visible.sync="dialogTableVisible">
      <add-obat-modal/>
    </el-dialog>
  </div>
</template>
<script>
    import AddObatModal from '../components/AddObatModal'
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
      },
      methods:{
        hapus(){
          this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: 'Delete completed',
              offset: 0
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: 'Delete canceled'
            });          
          });
        }
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