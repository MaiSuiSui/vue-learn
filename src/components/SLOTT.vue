<template>
    <div>
        <h1>
            slot练习
        </h1>

        <nav-link url="/profit">
            hahhahahhahahha
            <p>
                89808908989
            </p>
<!--            Logged in as {{ user.name }}-->
        </nav-link>

        <div>
            <nav-link url="/profit"/>
        </div>

        <NamedSlot>
            <template v-slot:header>
                我是大头
            </template>
            <template >
                我是啥
            </template>
            <template v-slot:footer>
                我是小脚
            </template>
        </NamedSlot>

        <ScopeSlot>
            <template v-slot:default="slotProps">
                {{ slotProps.user.firstName }}
                777777
            </template>
        </ScopeSlot>

        <ScopeSlot>
            <template v-slot:default="slotProps">
                {{ slotProps.user.lasterName }}
            </template>
            <template v-slot:link="slotProps">
                {{ slotProps.link.two }}
            </template>
        </ScopeSlot>
    </div>
</template>

<script>
import NavLink from "./vue/NavLink";
import NamedSlot from "./vue/NamedSlot";
import ScopeSlot from "./vue/ScopeSlot";

export default {
    name: 'SLOTT',
    components:{
        NavLink,
        NamedSlot,
        ScopeSlot,
    },
    // data(){
    //   return{
    //       user:{
    //           name:'lss',
    //       }  ,
    //   };
    // },
}
</script>

<style scoped>

</style>