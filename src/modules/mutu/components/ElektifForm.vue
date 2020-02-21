<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Elektif ">
        <el-switch
          v-model="form.elektif"
          >
        </el-switch>
      </el-form-item>

      <el-form-item label="Registrasi">
        <el-date-picker
          v-model="date_registrasi"
          type="date"
          :disabled = "!form.elektif"
          placeholder="Hari Registrasi">
        </el-date-picker>
        <el-time-picker
          arrow-control
          v-model="jam_registrasi"
          :disabled = "!form.elektif"
          placeholder="Jam Registrasi">
        </el-time-picker>
      </el-form-item>
      
      <el-form-item label="Rencana OK">
        <el-date-picker
          v-model="date_rencana_ok"
          type="date"
          :disabled = "!form.elektif"
          placeholder="Hari Rencana OK">
        </el-date-picker>
        <el-time-picker
          arrow-control
          v-model="jam_rencana_ok"
          :disabled = "!form.elektif"
          placeholder="Jam Rencana OK">
        </el-time-picker>
      </el-form-item>

      <el-form-item label="OK">
        <el-date-picker
          v-model="date_ok"
          type="date"
          :disabled = "!form.elektif"
          placeholder="Hari Rencana OK">
        </el-date-picker>
        <el-time-picker
          arrow-control
          v-model="jam_ok"
          :disabled = "!form.elektif"
          placeholder="Jam Rencana OK">
        </el-time-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="small"><i class="el-icon-check"/> Simpan</el-button>
        <el-button type="danger" size="small"><i class="el-icon-close"/> Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data(){
    return {
      jam_registrasi:new Date(2020, 9, 10, 0, 0),
      date_registrasi:new Date(2020, 9, 10),
      jam_rencana_ok:new Date(2020, 9, 10, 0, 0),
      date_rencana_ok:new Date(2020, 9, 10),
      jam_ok:new Date(2020, 9, 10, 0, 0),
      date_ok:new Date(2020, 9, 10),
      form : {
        elektif:false,
        jam_registrasi:new Date(2020, 9, 10, 0, 0)
      }
    }
  }
}
</script>
<style>
  .el-time-spinner__item{
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
</style>