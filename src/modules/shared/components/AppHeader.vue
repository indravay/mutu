<template>
 <div class="header">
    <router-link :to="{ name: 'setup'}">
      <div class="setup-wrapper" style="left:20">
        <el-menu class="el-menu-demo" mode="horizontal">
          <el-menu-item index="2">
            <template slot="title"><i class="el-icon-setting" /> Setup</template>
            
          </el-menu-item>
        </el-menu>
      </div>
    </router-link>
    <router-link :to="{ name: 'user-list'}">
      <div class="setup-wrapper1" style="left:220">
        <el-menu class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1">
            <template slot="title"><i class="el-icon-user" /> User</template>
            
          </el-menu-item>
        </el-menu>
      </div>
    </router-link>
    <router-link :to="{ name: 'mutu'}"> <span class="title"><span>SI</span>IMUT</span> </router-link>
    <div class="menu-wrapper">
      <el-menu class="el-menu-demo" mode="horizontal">
        <el-submenu index="2">
          <template slot="title"><font-awesome-icon icon="user" /> Indra Rudyarta</template>
          <el-menu-item index="2-1" @click="modalProfile = true">Akun</el-menu-item>
          <el-menu-item index="2-2" @click="logoutConfirm">Logout</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <el-dialog title="Pengaturan Akun" :visible.sync="modalProfile">
      <profile-modal/>
    </el-dialog>
  </div>  
  
</template>
<script>
import { mapActions, mapMutations, mapState } from 'vuex' 
import ProfileModal from '../../user/components/ProfileModal'
export default {
  components:{
    ProfileModal
  },
  data(){
    return {
      modalProfile : false
    }
  },
  methods:{
    ...mapActions('auth',['logout']),
    logoutConfirm(){
      this.$confirm('Apakah anda yakin ingin keluar?', 'Logout', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'info'
      }).then(() => {
        this.logout().then(() =>{
          this.$router.push('/mutu')
        })
      })
    }
  }
}
</script>
<style scoped>
a:-webkit-any-link {
  text-decoration: none
}
.menu-wrapper{
  position:absolute;
  top:15px;
  right:20px;
  border:1px solid #ddd;
  border-radius:20px;
  padding:0 20px;
}
.setup-wrapper{
  position:absolute;
  top:15px;
  left:20px;
  border:1px solid #ddd;
  border-radius:20px;
  padding:0 20px;
}

.setup-wrapper1{
  position:absolute;
  top:15px;
  left:140px;
  border:1px solid #ddd;
  border-radius:20px;
  padding:0 20px;
}
.user-menu{
  float:right;;
  font-size:14px;
  padding: 8px 20px;
  border:1px solid #34495e;
  border-radius:20px;
}

.user-menu svg, .el-submenu__title svg {
  margin-right:5px;
}
.el-menu--horizontal>.el-menu-item.is-active {
  border:none;
}
.header{
  width:calc(100vw - 40px);
  padding:20px;
  background:#fff;
  text-align:center;
  position:relative;
  box-shadow: 0 0 18px 0 rgba(0, 0, 0, .12);
}

.header .title{
  font-size:30px;
  color:#34495e;
  font-weight:bold
}

.header .title span{
  color:#92857A;
}
</style>
<style>
  .el-menu.el-menu--horizontal{
    border:0;
  }

  .el-menu--horizontal>.el-submenu .el-submenu__title, .el-menu--horizontal>.el-menu-item{
    padding:0;
    height:40px;
    line-height:40px;
  }

  .el-menu-item{
    font-family:inter;
  }

  .el-menu-item .el-icon-setting{
    height:20px;
    width:20px;
  }
</style>




