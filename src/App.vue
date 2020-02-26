<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
@font-face {
  font-family: 'inter';
  src:  url('./assets/font/Inter-Regular.ttf');
}

.help.is-danger{
  color:#F56C6C;
  margin:5px 0;
  line-height:20px;
  font-size:12px;
}

#app {
  font-family: 'inter';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#app{
  overflow-x:hidden
}

body{
  margin: 0;
  /* background: #ecf0f1; */
}
</style>
