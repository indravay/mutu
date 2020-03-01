<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px" v-loading="loadingForm">
      <el-form-item label="Elektif ">
        <el-switch
          v-model="elektif"
          >
        </el-switch>
      </el-form-item>

      <el-form-item label="Registrasi">
        <el-date-picker
          v-model="date_registrasi"
          type="date"
          :disabled = "!elektif"
          placeholder="Hari Registrasi">
        </el-date-picker>
        <el-time-picker
          arrow-control
          v-model="jam_registrasi"
          :disabled = "!elektif"
          placeholder="Jam Registrasi">
        </el-time-picker>
      </el-form-item>
      
      <el-form-item label="Rencana OK">
        <el-date-picker
          v-model="date_rencana_ok"
          type="date"
          :disabled = "!elektif"
          placeholder="Hari Rencana OK">
        </el-date-picker>
        <el-time-picker
          arrow-control
          v-model="jam_rencana_ok"
          :disabled = "!elektif"
          placeholder="Jam Rencana OK">
        </el-time-picker>
      </el-form-item>

      <el-form-item label="OK">
        <el-date-picker
          v-model="date_ok"
          type="date"
          :disabled = "!elektif"
          placeholder="Hari Rencana OK">
        </el-date-picker>
        <el-time-picker
          arrow-control
          v-model="jam_ok"
          :disabled = "!elektif"
          placeholder="Jam Rencana OK">
        </el-time-picker>
      </el-form-item>
      <el-form-item label="Catatan : ">
        <el-input
          type="textarea"
          autosize
          :disabled = "!elektif"
          placeholder="Tambahkan catatan anda disini"
          v-model="form.note">
        </el-input>
      </el-form-item>
      <el-form-item label="Penundaan ">
        <el-switch
          v-model="penundaan"
          >
        </el-switch>
      </el-form-item>
      
      <el-form-item label="Alasan : ">
        <el-input
          type="textarea"
          autosize
          :disabled = "!penundaan"
          placeholder="Tambahkan catatan anda disini"
          v-model="note_penundaan">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button :loading="loadingButton" type="primary" @click='submitProcess' size="small"><i class="el-icon-check"/> Simpan</el-button>
        <!-- <el-button type="danger" size="small"><i class="el-icon-close"/> Reset</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import moment from 'moment'
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  
  props: ['id'],
  data(){
    return {
      jam_registrasi:new Date(),
      date_registrasi:new Date(),
      jam_rencana_ok:new Date(),
      date_rencana_ok:new Date(),
      jam_ok:new Date(),
      date_ok:new Date(),
      elektif:false,
      loadingButton:false,
      loadingForm:false,
      note_penundaan:'',
      note:'',
      penundaan:false,
      form:{

      }
    }
  },
  mounted(){
    this.loadingForm = true
    this.$store.dispatch('mutu/getDataForm',{type:'elektif', noreg:this.id}).then((res) =>{
      if(res.data != null){
        this.jam_registrasi = res.data.jam_registrasi,
        this.date_registrasi = res.data.jam_registrasi,
        this.jam_rencana_ok = res.data.jam_rencana,
        this.date_rencana_ok = res.data.jam_rencana,
        this.jam_ok = res.data.jam_operasi,
        this.date_ok = res.data.jam_operasi,
        this.elektif = res.data.elektif,
        this.note_penundaan = res.data.note_penundaan,
        this.note = res.data.note,
        this.penundaan = res.data.penundaan
      }
      this.loadingForm = false
    })
  },
  methods:{
    ...mapActions('mutu',['updateMutu']),
    ...mapMutations(['CLEAR_ERRORS']),
    submitProcess(){
      this.loadingButton = true
      this.CLEAR_ERRORS()
      let form = {
        elektif:this.elektif,
        jam_registrasi : moment(this.date_registrasi).format('YYYY-MM-DD')+' '+moment(this.jam_registrasi).format('HH:mm:ss'),
        jam_rencana : moment(this.date_rencana_ok).format('YYYY-MM-DD')+' '+moment(this.jam_rencana_ok).format('HH:mm:ss'),
        jam_operasi : moment(this.date_ok).format('YYYY-MM-DD')+' '+moment(this.jam_ok).format('HH:mm:ss'),
        penundaan : this.penundaan,
        note : this.note,
        note_penundaan : this.note_penundaan
      }
      this.updateMutu({type:'elektif', noreg:this.id, form:form}).then((response) =>{
          this.loadingButton = false;
          this.$toast.success(response, 'Berhasil')
          this.$emit('setStatus',this.type)
      }).catch((err) => {
          this.loadingButton = false
          this.toast.error(err, 'Gagal')
      })
    },
    clearForm(){
      for (var key in this.form) {
        if (this.form.hasOwnProperty(key)) {
            this.form[key] = ''
        }
      }
    },
  },
}
</script>
<style>
  .el-time-spinner__item{
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
</style>