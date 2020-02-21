<template>
  <div>
    <el-input placeholder="Nama Obat" v-model="nama_obat"></el-input>
    <div style="margin-top:20px;overflow:hidden">
      <el-button type="primary" style="float:right" size="small"><i class="el-icon-check"/> Simpan</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nama_obat: ''
    }
  }
}
</script>