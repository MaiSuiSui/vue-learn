<template>
    <div>
        <h1>
            子组件
        </h1>
        子组件接收的父组件的数据：<span>{{this.parentComponentData}}</span>
        <hr/>
        <h1>子组件改变父组件的值--子组件通知父组件更改值-》父组件将新值再传递给子组件</h1>
        <input type="text" :value="value" @change="$emit('addParentNum',$event.target.value)"/>
        <p>this.parentNum:{{this.parentNum}}</p>
        <hr/>
    </div>
</template>

<script>
    export default {
        name: "Child",
        props:{
            parentComponentData:{
                type:String,
                default:null,
            },
            parentNum:{
                type:String,
                default:null,
            },
            value:{
                type:String,
                default:null,
            },
        },
        data(){
            return{
                childDate:null
            }
        },
        mounted() {
            console.log('this.value',this.value);
        }
    }
</script>

<style scoped>

</style>