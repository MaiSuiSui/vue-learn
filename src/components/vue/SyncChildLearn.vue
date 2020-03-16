<template>
    <div>
        <el-button type="success" @click="close()">子--关闭</el-button>
        <div v-if="this.dialogVisible" class="box">
        </div>
    </div>
</template>

<script>
    export default {
        name: "syncLearn",
        props:{
            visibily:{
                type:Boolean,
            },
        },
        data() {
            return {
                dialogVisible: true,
            };
        },
        watch:{
            visibily(val){
                this.dialogVisible = val;
            }
        },
        methods: {
            close(){
                this.dialogVisible = false;
                this.$emit('update:visibily',this.dialogVisible);
            }
        },
    }
</script>

<style scoped>
    .box{
        width: 200px;
        height: 200px;
        border: 1px solid red;
    }

</style>