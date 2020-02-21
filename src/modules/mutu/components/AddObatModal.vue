<template>
  <div>
    <el-input class="search-input" placeholder="Cari nama obat">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <el-table :data="gridData">
      <el-table-column property="obat" label="Obat"></el-table-column>
      <el-table-column
          label="Aksi"
          width="180">
          <template>
            <el-button type="success" size="mini"><i class="el-icon-plus" /> Tambah</el-button>
          </template>
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        gridData: [{
          obat: 'Batu',
        }, {
          obat: 'Kerikil',
        }, {
          obat: 'Emas',
        }],
      };
    }
  };
</script>