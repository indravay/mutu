<template>
 <div class="header">
    <span class="title"><span>SI</span>IMUT</span>
    <div class="menu-wrapper">
      <el-menu class="el-menu-demo" mode="horizontal">
        <el-submenu index="2">
          <template slot="title"><font-awesome-icon icon="user" /> Indra Rudyarta</template>
          <el-menu-item index="2-1">Profile</el-menu-item>
          <el-menu-item index="2-2">Logout</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    
  </div>  
  
</template>
<style scoped>
.menu-wrapper{
  position:absolute;
  top:20px;
  right:20px;
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

  .el-menu--horizontal>.el-submenu .el-submenu__title{
    padding:0;
    height:40px;
    line-height:40px;
  }

  .el-menu-item{
    font-family:inter;
  }
</style>




