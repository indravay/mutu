<template>
  <div>
    <el-form ref="form" :model="form" label-width="auto">
      <el-form-item label="" :error='JSON.stringify(errors.nama_obat)'>
        <el-input placeholder="Nama Obat" v-model="form.nama_obat"></el-input>
        <template slot="error">
          <p class="help is-danger" v-for="(item, index) in errors.nama_obat" :key="'nama_obat'+index">{{item}}</p>
        </template>
      </el-form-item>
      
      <div style="margin-top:20px;overflow:hidden">
        <el-button :loading="loadingButton" type="primary" @click='submitObatProcess' style="float:right" size="small"><i class="el-icon-check"/> Simpan</el-button>
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
    ...mapActions('obat',['createObat', 'updateObat']),
    ...mapMutations(['CLEAR_ERRORS']),
    submitObatProcess(){
      this.loadingButton = true
      this.CLEAR_ERRORS()
      if(this.types == 'input'){
        this.createObat({form:this.form}).then((response) =>{
            this.loadingButton = false;
            this.$toast.success(response, 'Berhasil')
            this.clearForm()
            this.$emit('closeModal')
        }).catch((err) => {
            this.loadingButton = false
            this.toast.error(err, 'Gagal')
        })
      }else{
        console.log(this.form)
        this.updateObat({form:this.form}).then((response) =>{
            this.loadingButton = false;
            this.$toast.success(response, 'Berhasil')
            this.clearForm()
            this.$emit('closeModal')
        }).catch((err) => {
            this.loadingButton = false
            this.toast.error(err, 'Gagal')
        })
      }
     
    },
    clearForm(){
      for (var key in this.form) {
        if (this.form.hasOwnProperty(key)) {
            this.form[key] = ''
        }
      }
    },
  },
  props: {
    form: {
      type: Object,
      default () {
        return {
          id:0,
          nama_obat: ''
        }
      }
    },
    types: {
      type: String,
      default:'input'
    }
  },
  data() {
    return {
      loadingButton:false,
    }
  }
}
</script>