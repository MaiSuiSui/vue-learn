<template>
    <div>
        <ul  v-for="(item,index) in arr">
            <li key="item.id">
                <div class="toDo">
                    <elButton
                            size="mini"
                            type="text"
                            @click="modulseAdd(item.id)"
                    >添加</elButton
                    >
                    <span style="color: #409eff;padding: 0px 2px;"
                    >|</span
                    >
                    <elButton
                            size="mini"
                            type="text"
                            @click="modulseCopy(index)"
                    >复制</elButton
                    >
                    <span
                            style="color: #409eff;padding: 0px 2px;"
                    >|</span
                    >
                    <elButton
                            size="mini"
                            style="height: 30px;"
                            type="text"
                            @click="modulseDeleted(item.id)"
                    >删除</elButton
                    >
                </div>
                <p>
                    {{item.content}}
                </p>
                <elButtonGroup
                        style="margin-left: 126px;"
                >
                    <elButton
                            size="mini"
                            plain
                            icon="el-icon-upload2"
                            @click="move(index, 'sticky')"
                    ></elButton>
                    <elButton
                            size="mini"
                            plain
                            icon="el-icon-top"
                            @click="move(index, 'up')"
                    ></elButton>
                    <elButton
                            size="mini"
                            plain
                            icon="el-icon-download"
                            @click="move(index, 'setTail')"
                    ></elButton>
                    <elButton
                            size="mini"
                            plain
                            icon="el-icon-bottom"
                            @click="move(index, 'down')"
                    ></elButton>
                </elButtonGroup>
            </li>
        </ul>
    </div>

</template>

<script>
    export default {
        name: "Copy",
        data(){
            return{
                arr:[{content:"1",id:0},{content:"2",id:1},{content:"3",id:2},{content:"4",id:3}]
            }
        },
        methods:{
            uniqueId(){
                let idArr = [];
                this.arr.forEach(item => idArr.push(item.id));
                let maxId = Math.max(...idArr);
                return maxId;
            },
            //传进来的i值应该是索引值，因为复制元素出现的位置是被复制元素的下方。
            modulseCopy(i){
                //这一步是深拷贝，很重要。如果不进行被复制元素的深拷贝，那么代表元素唯一性的id会是重复的，会引起上下移的混乱。
                let copyOne = JSON.parse(JSON.stringify(this.arr[i]));
                //这一步保证了每个元素key得唯一性。
                copyOne.id = this.uniqueId() + 1;
                this.arr.splice(i+1,0,copyOne);
            },
            async move(i, kind) {
                if (kind === 'up' && i > 0) {
                    const item = this.arr.splice(i, 1)[0];
                    this.arr.splice(i - 1, 0, item);
                } else if (kind === 'down' && i < this.arr.length - 1) {
                    this.arr.splice(i + 1, 0, this.moduleArr.splice(i, 1)[0]);
                } else if (kind === 'sticky' && i !== 0) {
                    this.arr.splice(0, 0, this.arr.splice(i, 1)[0]);
                } else if (kind === 'setTail' && i !== this.arr.length - 1) {
                    this.arr.splice(
                        this.arr.length - 1,
                        0,
                        this.arr.splice(i, 1)[0]
                    );
                }
            }
        }
    }
</script>

<style scoped>
    ul{
        display: flex;
        flex-direction: column;
    }
    li{
        width: 300px;
        height: 89px;
        border: 1px solid darkblue;
        text-align: center;
    }
    .toDo{
        margin-left: 185px;
        margin-top: -10px;
    }
</style>