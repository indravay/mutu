<template>
  <div>
    <el-form ref="form" :model="form" label-width="140px">
      <el-form-item label="Username" :error='JSON.stringify(errors.username)'>
        <el-input v-model="form.username"></el-input>
        <template slot="error">
          <p class="help is-danger" v-for="(item, index) in errors.username" :key="'username'+index">{{item}}</p>
        </template>
      </el-form-item>
      <el-form-item label="Nama Pengguna" :error='JSON.stringify(errors.nama)'>
        <el-input v-model="form.nama"></el-input>
        <template slot="error">
          <p class="help is-danger" v-for="(item, index) in errors.nama" :key="'nama'+index">{{item}}</p>
        </template>
      </el-form-item>
      <el-form-item label="Password" :error='JSON.stringify(errors.password)'>
        <el-input v-model="form.password" show-password></el-input>
        <template slot="error">
          <p class="help is-danger" v-for="(item, index) in errors.password" :key="'nama'+index">{{item}}</p>
        </template>
      </el-form-item>
      <el-form-item label="Ulangi Password" :error='JSON.stringify(errors.password_confirmation)'>
        <el-input v-model="form.password_confirmation" show-password></el-input>
        <template slot="error">
          <p class="help is-danger" v-for="(item, index) in errors.password_confirmation" :key="'nama'+index">{{item}}</p>
        </template>
      </el-form-item>
      
      <el-form-item label="Hak Akses" :error='JSON.stringify(errors.role)'>
        <el-select v-model="form.role" placeholder="Pilih hak akses">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <template slot="error">
          <p class="help is-danger" v-for="(item, index) in errors.role" :key="'nama'+index">{{item}}</p>
        </template>
      </el-form-item>
      <div style="margin-top:20px;overflow:hidden">
        <el-button :loading="loadingButton" @click="createUserProcess" type="primary" style="float:right" size="small"><i class="el-icon-check"/> Simpan</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  computed:{
    ...mapState(['errors','info']),
    ...mapState('auth',['currentUser','isLoggedIn']),
  },
  methods:{
    ...mapActions('user',['createUser']),
    ...mapMutations(['CLEAR_ERRORS']),
    createUserProcess(){
      this.loadingButton = true
      this.CLEAR_ERRORS()
      this.createUser({form:this.form}).then((response) =>{
          this.loadingButton = false;
          this.$toast.success(response, 'Berhasil')
          this.clearForm()
          this.$emit('closeModal')
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
  data() {
    return {
      options:[
        {
          value:0,
          label:'Superadmin'
        },
        {
          value:1,
          label:'User'
        },
      ],
      loadingButton:false,
      form:{
        username : '',
        nama: '',
        password: '',
        password_confirmation:'',
        role:'',
      }
    }
  }
}
</script>