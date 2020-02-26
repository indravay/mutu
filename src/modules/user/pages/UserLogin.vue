<template>
  <div class="login-wrapper">
    <div class="login-card-wrapper">
      <div class="title-wrap">
        <div class="title-content">
          <!-- <h2 align="center"><img class="img-logo" src="../../../assets/logo.png"></h2> -->
          <!-- <h2 class="title-login">Login<br>OK-Scheduler</h2> -->
          <span class="title"><span>SI</span>IMUT</span>
        </div>
      </div>
      <el-card class="box-card">
        <div class="card-content card-content-login">
          <el-form label-position="top" ref="form" :model="form" label-width="140px">
            <el-form-item label="Username" class="custom-labels">
              <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="Password" class="custom-labels">
              <el-input v-model="form.password" show-password></el-input>
            </el-form-item>
            <div style="margin-top:20px;overflow:hidden">
              <el-button :loading="loadingButton" type="primary"  v-on:keyup.native.enter="onSubmit" style="float:right" size="small" @click="onSubmit"><i class="el-icon-check"/> Login</el-button>
            </div>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
  import { mapActions, mapMutations, mapState } from 'vuex' 
  export default {
    data() {
      return {
        form: {
          username: '',
          password: ''
        },
        loadingButton:false
      }
    },
    computed:{
      ...mapState(['errors']),
      ...mapState('auth',['isLoggedIn']),
    },
    methods: {
      ...mapActions('auth',['login']),
      ...mapMutations(['CLEAR_ERRORS']),

      onSubmit(evt) {
        evt.preventDefault()
        this.CLEAR_ERRORS()
        this.loadingButton = true
        this.login(this.form).then(() =>{
          if(this.isLoggedIn){
            this.CLEAR_ERRORS()
            this.$router.push('/mutu')
          }else{
            console.log('aaaaa')
            console.log(this.isLoggedIn)
            // this.$toast.error(this.errors.login, 'Gagal')
          }

          this.loadingButton = false
        }).catch((err) => {
          this.loadingButton = false
          this.toast.error(err.login, 'Gagal')
        })
      },
      onReset(evt) {
        evt.preventDefault()
        this.form.email = ''
        this.form.name = ''
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
<style>
.custom-labels .el-form-item__label{
  line-height:0;
}

</style>
<style scoped>
.title-content .title{
  font-size:30px;
  color:#34495e;
  font-weight:bold
}
.title-content .title span{
  color:#92857A;
}
.card-login{
  border-radius:8px;
}
.card-content-login{
  padding-top:30px !important;
}
.img-logo{
  height:auto !important;
  /* float:left; */
}
.btn-login, .btn-login:hover{
  background:#243082;
  color:#fff;
  margin-top:10px;
}

.btn-login[disabled]{
  opacity:80%;
  color:#000;
}
.title-login{
  color:#243082;
  width:200px;
  font-size:18px;
  margin-left:60px;
  font-weight:bold;
}
.title-wrap{
  margin-bottom:30px;
  text-align:center;
}

.title-content{
  text-align:left;
  width:180px;
  margin:0 auto;
  border-radius:8px;
  text-align:center;
}

.card{
  box-shadow: 6px 11px 41px -28px #a99de7;
}

.login-wrapper{
  height:100vh;
  background:#ddd;
  width:100vw;
  overflow:hidden;
  display:flex;
  flex-wrap:wrap;
  justify-content: center;
  align-items: center;
  font-size:14px;
}

.login-card-wrapper{
  width:400px;
  padding:20px;
  margin-top:-50px;
}

/* .spinner-border{
  height:16px;
  width:16px;
  border: 3px solid currentColor;
  border-right-color:transparent;
} */

</style>