<template>
    <el-menu
            class="menu-list"
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
    </el-menu>
</template>

<script>
    export default {
        name: "Menu",
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
    }
</script>

<style scoped>
    .menu-list{
        width: 10%;
        position: absolute;
        top: 0;
        left: 0;
    }

</style>