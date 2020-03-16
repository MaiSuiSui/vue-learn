<template>
  <div class="hello">
    <h1>vue--demo练习网站</h1>
    <h2>父组件</h2>
    parentData：<input type="text" v-model="parentData"/>
    parentNum：<input type="text" v-model="parentNum"/>
    <hr/>
    <Child
            :parentComponentData="this.parentData"
            :parentNum="this.parentNum"
            @input="newNum"
    />
    <Vmodel
      v-model="parentNum"
    />
  </div>
</template>

<script>
import Child from "./Child";
import Vmodel from "./common/Vmodel";
export default {
  name: 'Parents',
  components: {Vmodel, Child},
  data(){
    return{
      parentData:null,
      parentNum:'1',
    };
  },
  methods:{
    newNum(newParentNum){
      this.parentNum = newParentNum;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
