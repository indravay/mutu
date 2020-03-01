<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px" v-loading="loadingForm">
        <el-form-item label="SBAR ">
            <el-switch
            v-model="form.sbar"
            >
            </el-switch>
        </el-form-item>
        <el-form-item label="Pengerjaan : ">
            <el-switch
            v-model="form.dikerjakan"
            active-text="Dikerjakan"
            :disabled = "!form.sbar"
            >
            </el-switch>
        </el-form-item>
        <el-form-item label="Keseuaian : ">
            <el-switch
            v-model="form.sesuai"
            active-text="Sesuai"
            :disabled = "!form.sbar"
            >
            </el-switch>
        </el-form-item>
        <el-form-item label="Catatan : ">
            <el-input
            type="textarea"
            autosize
            placeholder="Tambahkan catatan anda disini"
            :disabled = "!form.sbar"
            v-model="form.note">
            </el-input>
        </el-form-item>
        <el-form-item>
            <el-button :loading="loadingButton" type="primary" @click='submitProcess' size="small"><i class="el-icon-check"/> Simpan</el-button>
            <!-- <el-button type="danger" size="small"><i class="el-icon-close"/> Reset</el-button> -->
        </el-form-item>
    </el-form>
    <br>
    
  </div>
</template>
<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  props: ['id'],
  mounted(){
    this.loadingForm = true
    this.$store.dispatch('mutu/getDataForm',{type:'sbar', noreg:this.id}).then((res) =>{
      if(res.data != null){
        this.form.sbar = !!res.data.sbar
        this.form.dikerjakan = !!res.data.dikerjakan
        this.form.sesuai = !!res.data.sesuai
        this.form.note = res.data.note
      }
      this.loadingForm = false
    })
  },
  data() {
    return {
      form: {
        sbar:false,
        dikerjakan:false,
        sesuai:false,
        note:''
      },
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
    submitProcess(){
      this.loadingButton = true
      this.CLEAR_ERRORS()
      this.updateMutu({type:'sbar', noreg:this.id, form:this.form}).then((response) =>{
          this.loadingButton = false;
          this.$toast.success(response, 'Berhasil')
          this.$emit('setStatus','sbar')
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