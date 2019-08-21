<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <input type="text" v-model="a.b">
    <test v-model="a"/>
    <p>{{a.b}}</p>
    <router-view></router-view>
  </div>
</template>

<script>
import test from './components/test'
export default {
  name: 'app',
  components: {
    test
  },
  data() {
    return {
      a: {}
    }
  }
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
}
</style>
