<template>
    <div>
        <h1>
            vue双向数据绑定学习
        </h1>
        <input type="text" v-model.number="newPhone" v-on:update:phone="newPhone = $event"/>
        <p>{{this.newPhone}}</p>
        <p>this.props.phone:{{this.phone}}</p>
    </div>
</template>

<script>
    export default {
        name: "TwoWayDataBinding",
        updated(){
            // console.log(this.phone,typeof this.phone);
        },
        data(){
            return{
                newPhone:8888,
            }
        },
        props:{
            phone:{
                type:Number,
                default:null,
            }
        }
    }
</script>

<style scoped>

</style>