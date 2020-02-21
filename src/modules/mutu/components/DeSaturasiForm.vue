<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Desaturasi : ">
        <el-switch
          v-model="form.kejadian"
          >
        </el-switch>
      </el-form-item>
      <el-form-item label="Catatan : ">
        <el-input
          type="textarea"
          autosize
          placeholder="Tambahkan catatan anda disini"
          v-model="form.note">
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
          kejadian:false,
          note:''
        }
      }
   }
}
</script>