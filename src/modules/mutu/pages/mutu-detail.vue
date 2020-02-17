<template>
  <el-container>
    <el-aside style="width:400px">
      <div class="info-pasien">
        <span class="info-title">Registrasi Pasien</span>
        <ul class="info-detail">
          <li><font-awesome-icon icon="address-card" /> 200219REG-000001</li>
          <li><font-awesome-icon icon="user" /> I Gede Indra Rudyarta</li>
          <li><font-awesome-icon icon="user-md" /> dr. Made Suka Antara K, Sp.OG</li>
          <li><font-awesome-icon icon="user-nurse" /> dr. Novandi Kurniawan, Sp.An</li>
        </ul>

        
      </div>
    </el-aside>
    <el-main class="main-menu">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane name="ko">
          <span slot="label">Keselamatan Operasi <i class="not-done el-icon-error"></i></span>
          User 
        </el-tab-pane>
        <el-tab-pane name="ss">
          <span slot="label">Kejadian Salah Sisi <i class="not-done el-icon-error"></i></span>
          User 
        </el-tab-pane><el-tab-pane name="elektif">
          <span slot="label">Elektif <i class="not-done el-icon-error"></i></span>
          User 
        </el-tab-pane>
        <el-tab-pane name="kepatuhan">
          <span slot="label">Identifikasi Pasien <i class="not-done el-icon-error"></i></span>
          User 
        </el-tab-pane>
        <el-tab-pane name="sbar">
          <span slot="label">Pelaksanaan SBAR <i class="not-done el-icon-error"></i></span>
          User 
        </el-tab-pane>
        <el-tab-pane name="sha">
          <span slot="label">Stiker High Alert <i class="not-done el-icon-error"></i></span>
          User 
        </el-tab-pane>
        <el-tab-pane name="pptt">
          <span slot="label">Pemasangan Pengaman TT <i class="not-done el-icon-error"></i></span>
          User 
        </el-tab-pane>
        <el-tab-pane name="kd">
          <span slot="label">Kesalahan Diagnosis <i class="not-done el-icon-error"></i></span>
          User 
        </el-tab-pane>
      </el-tabs>
      <p>Ini Detail</p>
    </el-main>
  </el-container>
  
</template>
<style>
  .main-menu{
    padding:50px;
  }

  /* .el-tabs__item:hover{
    color:#434A3B;
  } */


</style>
<style scoped>
  .not-done{
    color:#e74c3c;
  }

  .done{
    color:#2ecc71;
  }

  .info-pasien{
    background:#434A3B;
    width:calc(100%-20px);
    padding:10px;
    margin-top:50px;
    color:#fff;
    font-size:14px;
    position:relative;
  }

  .info-title{
    font-size:20px;
    background:#fff;
    color:#434A3B;
    padding:20px;
    position:absolute;
    top:20px;
    left:0;
  }

  .info-detail{
    margin-top:100px;
    list-style-type: none;
  }

  .info-detail li{
    padding:10px 5px;
  }

</style>
<script>
  export default {
    data() {
      return {
        activeName: 'ko'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
