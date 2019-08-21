import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from "../components/HelloWorld";
import FORM from "../components/FORM";
import SLOT from "../components/SLOT";
import VIF from "../components/V_IF&&V_FOR";
import COMPUTER from "../components/COMPUTER";

Vue.use(VueRouter);

const routes = new VueRouter({
    routes:[
        {
            path:'/',
            name:'HelloWorld',
            component:HelloWorld,
        },
        {
            path:'/FORM',
            name:'FORM',
            component:FORM,
        },
        {
            path:'/COMPUTER',
            name:'COMPUTER',
            component:COMPUTER,
        },
        {
            path:'/SLOT',
            name:'SLOT',
            component:SLOT,
        },
        {
            path:'/V_IF&&V_FOR',
            name:'VIF',
            component:VIF,
        },
    ],
});
export default routes;