<template>
  <div id="app">
    <el-menu
       default-active="2"
       class="el-menu-vertical-demo menu-list"
       style="margin-right: 3%;padding-left: 2%;"
       @open="handleOpen"
       @close="handleClose"
       background-color="#409EFF"
       text-color="#fff"
       active-text-color="#67C23A"
    >
      <el-menu-item>
        <router-link to="/FORM">FORM</router-link>
      </el-menu-item>
      <el-menu-item>
        <router-link to="/COMPUTER">COMPUTER</router-link>
      </el-menu-item>
      <el-menu-item>
        <router-link to="/SLOT">SLOT</router-link>
      </el-menu-item>
      <el-menu-item>
        <router-link to="/V_IF&&V_FOR">V_IF&&V_FOR</router-link>
      </el-menu-item>
      <el-menu-item>
        <router-link to="/Child">Child</router-link>
      </el-menu-item>
      <el-menu-item>
        <router-link to="/ArrayStudy">ArrayStudy</router-link>
      </el-menu-item>
      <el-menu-item>
        <router-link to="/syncLearn">syncLearn</router-link>
      </el-menu-item>
      <el-menu-item>
        <router-link to="/YiBuFunctionCallback">YiBuFunctionCallback</router-link>
      </el-menu-item>
      <el-menu-item>
        <router-link to="/Copy">Copy</router-link>
      </el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    handleOpen(key, keyPath) {
      // eslint-disable-next-line
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // eslint-disable-next-line
      console.log(key, keyPath);
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: left;
}
a{
  text-decoration:none;
  color:#fff;
}
li{
  list-style: none;
  text-align: center;
  width: 10%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 0px !important;
}
.menu-list{
  width: 10%;
  text-align: center;
  margin-right: 5%;
}
</style>
