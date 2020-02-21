<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Penyetuju : ">
        <el-input
          placeholder="Tambahkan nama ttd penyetuju"
          v-model="form.penyetuju">
        </el-input>
      </el-form-item>
      <el-form-item label="Pembuat : ">
        <el-input
          placeholder="Tambahkan nama ttd pembuat"
          v-model="form.pembuat">
        </el-input>
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" size="small"><i class="el-icon-check"/> Simpan</el-button>
        <el-button type="danger" size="small"><i class="el-icon-close"/> Reset</el-button>
      </el-form-item>
    </el-form>
    <br>
    
  </div>
</template>
<script>
export default {
  props: ['types'],
   data() {
      return {
        form: {
          penyetuju:'',
          pembuat:'',
          note:''
        }
      }
   }
}
</script>