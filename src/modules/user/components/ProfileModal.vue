<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="Profile" name="profile">
      <el-form ref="form" :model="formProfile" label-width="140px">
        <el-form-item label="Nama Pengguna">
          <el-input v-model="formProfile.nama"></el-input>
        </el-form-item>
        <div style="margin-top:20px;overflow:hidden">
          <el-button type="primary" style="float:right" size="small"><i class="el-icon-check"/> Ubah</el-button>
        </div>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="Password" name="password">
      <el-form ref="form" :model="formPassword" label-width="140px">
        <el-form-item label="Password lama">
          <el-input v-model="formPassword.old_password" show-password></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="formPassword.password" show-password></el-input>
        </el-form-item>
        <el-form-item label="Ulangi Password">
          <el-input v-model="formPassword.password_confirmation" show-password></el-input>
        </el-form-item>
        <div style="margin-top:20px;overflow:hidden">
          <el-button type="primary" style="float:right" size="small"><i class="el-icon-check"/> Ubah</el-button>
        </div>
      </el-form>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'profile',
        formProfile:{
          nama : ''
        },
        formPassword:{
          old_password : '',
          password : '',
          password_confirmation:''
        }
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>