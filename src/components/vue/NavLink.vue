<template>
    <a
            v-bind:href="url"
            class="nav-link"
    >
        <slot>6666</slot>
    </a>
</template>

<script>
    export default {
        name: "NavLink",
        data(){
            return{
                url:null,
            };
        },
    }
</script>

<style scoped>
    .nav-link{
        background: #42b983;
        color: #2c3e50;
    }

</style>