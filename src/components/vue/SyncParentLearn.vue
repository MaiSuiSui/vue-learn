<template>
    <div>
        <el-button type="text" @click="isShow = !isShow">关闭</el-button>
       <SyncChildLearn  :visibily.sync="isShow"/>
    </div>
</template>

<script>
import SyncChildLearn from './SyncChildLearn';
export default {
    name: "syncParentLearn",
    components:{ SyncChildLearn },
    data(){
        return{
            isShow:true,
        }
    },
}
</script>

<style scoped>

</style>