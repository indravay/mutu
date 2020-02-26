<template>
  <div>
    <el-form v-loading="isLoading" ref="form" :model="form" label-width="120px">
      <el-form-item label="Penyetuju : ">
        <el-input
          placeholder="Tambahkan nama ttd penyetuju"
          v-model="form.penyetuju"
          >
        </el-input>
      </el-form-item>
      <el-form-item label="Pembuat : ">
        <el-input
          placeholder="Tambahkan nama ttd pembuat"
          v-model="form.pembuat">
        </el-input>
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" :loading="loadingButton" size="small" @click="update"><i class="el-icon-check" /> Simpan</el-button>
        <!-- <el-button type="danger" size="small"><i class="el-icon-close"/> Reset</el-button> -->
      </el-form-item>
    </el-form>
    <br>
    
  </div>
</template>
<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  mounted(){
    this.isLoading = true
    this.$store.dispatch('setting/getListSetting').then(() =>{
        this.isLoading = false
        this.form = Object.assign({},this.data)
    })
  },
  data() {
    return {
      form: {
        penyetuju:'',
        pembuat:''
      },
      isLoading:true,
      loadingButton:false,
    }
  },
  computed:{
    ...mapState(['errors','info']),
    ...mapState('setting',['data']),
    ...mapState('auth',['currentUser','isLoggedIn']),
  },
  methods:{
    ...mapMutations(['CLEAR_ERRORS']),
    ...mapActions('setting',['getListSetting','updateSetting']),

    update(){
      this.loadingButton = true
      this.$confirm('Apakah anda yakin ingin menguupdate setting?', 'Update Setting', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'info'
      }).then((response) => {
        this.updateSetting({form:this.form}).then((resp) =>{       
          this.$toast.success(resp, 'Berhasil')
          this.loadingButton = false
        }).catch((error) => { 
          this.toast.error(error, 'Gagal') 
          this.loadingButton = false
        });
      }).catch((error) => {   
        this.loadingButton = false
      });
    }
  }
}
</script>