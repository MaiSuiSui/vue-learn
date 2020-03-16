<template>
    <div style="background: pink;color:#000;width: 100px;height: 100px;margin-left: 500px;margin-bottom: 10px;">
        <slot v-bind:user="user">{{ user.lastName }}</slot>
        <slot name="link" v-bind:link="link">{{ user.one }}</slot>
    </div>
</template>

<script>
    export default {
        name: "ScopeSlot",
        data(){
            return{
                user:{
                    firstName:'Lin',
                    lasterName:'suisui'
                },
                link:{
                    one:'1111',
                    two:'2222',
                },

            };
        },
    }
</script>

<style scoped>

</style>