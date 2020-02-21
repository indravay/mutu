<template>
  <div class="wrapper">
    <app-header></app-header>
    <el-container>
      <el-main>
        <el-container>
          <el-aside>
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
             >
              <router-link :to="{ name: 'obat'}">
                <el-menu-item index="1" >
                  <i class="el-icon-goods"></i>
                  <span>Obat</span>
                </el-menu-item>
              </router-link>
              <router-link :to="{ name: 'setting'}">
              <el-menu-item index="2">
                <i class="el-icon-setting"></i>
                <span>Setting</span>
              </el-menu-item>
              </router-link>
            </el-menu>
          </el-aside>
          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </el-main>
    </el-container>
    
  </div>
</template>
<script>
import AppHeader from '../../shared/components/AppHeader'
export default {
  name: 'App',
  components: {
    AppHeader,
  }
}
</script>
<style scoped>
a:-webkit-any-link {
  text-decoration: none;
}

.search-input{
  width:300px;
  float:right;
  margin-right:10px;
}
</style>