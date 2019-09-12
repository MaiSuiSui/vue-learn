<template>
    <div>
        <h1>组件自定义model练习</h1>
        v-model:parentNum:<input :value="value" @input="$emit('input',$event.target.value)"/>
    </div>
</template>

<script>
    export default {
        name: "Vmodel",
        props:{
            value:{
                type:String,
                default:null
            }
        }
    }
</script>

<style scoped>

</style>