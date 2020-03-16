<template>
    <div class="box">
        <header style="background: pink;flex:1;">
            <slot name="header">header</slot>
        </header>
        <main style="background: antiquewhite;flex:3;">
            <slot>main</slot>
        </main>
        <footer style="background: coral;height:30px;flex:1;">
            <slot name="footer">footer</slot>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "NamedSlot"
    }
</script>

<style scoped>
    .box{
        width:300px;
        height:300px;
        color: #2c3e50;
        background: #42b983;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .box div{
    }
</style>