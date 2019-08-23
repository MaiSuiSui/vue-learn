<template>
  <div class="hello">
    <h1>vue--demo练习网站</h1>
    <input type="text" v-model.number="phone"/>
    <TwoWayDataBinding
      :phone="phone"
    />
  </div>
</template>

<script>
  import TwoWayDataBinding from "./TwoWayDataBinding";
export default {
  name: 'HelloWorld',
  components: {TwoWayDataBinding},
  data(){
    return{
      phone:null,
    };
  },
  updated(){
    // console.log('HelloWord',this.phone,typeof this.phone);
  },
  props: {
    msg: String
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
