<template>
  <el-tabs v-model="activeName" >
    <el-tab-pane label="Profile" name="profile">
      <el-form ref="form" :model="formProfile" label-width="140px">
        <el-form-item label="Nama Pengguna">
          <el-input v-model="formProfile.nama"></el-input>
        </el-form-item>
        <div style="margin-top:20px;overflow:hidden">
          <el-button :loading="loadingButton" @click="changeProfileSubmit" type="primary" style="float:right" size="small"><i class="el-icon-check"/> Ubah</el-button>
        </div>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="Password" name="password">
      <el-form ref="form" :model="formPassword" label-width="140px">
        <el-form-item label="Password lama">
          <el-input v-model="formPassword.old_password" show-password></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="formPassword.new_password" show-password></el-input>
        </el-form-item>
        <el-form-item label="Ulangi Password">
          <el-input v-model="formPassword.new_password_confirmation" show-password></el-input>
        </el-form-item>
        <div style="margin-top:20px;overflow:hidden">
          <el-button :loading="loadingButton" @click="changePasswordSubmit" type="primary" style="float:right" size="small"><i class="el-icon-check"/> Ubah</el-button>
        </div>
      </el-form>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import { mapActions, mapMutations, mapState } from 'vuex'
  export default {
    data() {
      return {
        activeName: 'profile',
        formProfile:{
          nama : ''
        },
        formPassword:{
          old_password : '',
          new_password : '',
          new_password_confirmation:''
        },
        loadingButton:false
      };
    },
    computed:{
      ...mapState(['errors','info']),
      ...mapState('auth',['currentUser','isLoggedIn']),
    },
    mounted(){
      this.formProfile.nama = this.currentUser.nama
    },
    methods:{
    ...mapActions('user',['changeProfile','changePassword']),
    ...mapMutations(['CLEAR_ERRORS']),
    changeProfileSubmit(){
      this.loadingButton = true
      this.CLEAR_ERRORS()
      this.changeProfile({id: this.currentUser.id, form:this.formProfile}).then((response) =>{
          this.loadingButton = false;
          this.$toast.success(response, 'Berhasil')
      }).catch((err) => {
          console.log(this.errors)
          this.loadingButton = false
          this.toast.error(err, 'Gagal')
      })
    },
    changePasswordSubmit(){
      this.loadingButton = true
      this.CLEAR_ERRORS()
      this.changePassword({id: this.currentUser.id ,form:this.formPassword}).then((response) =>{
          this.loadingButton = false;
          this.$toast.success(response, 'Berhasil')
      }).catch((err) => {
          console.log(this.errors)
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
  };
</script>