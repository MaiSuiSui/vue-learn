import Vue from 'vue';
import VueRouter from 'vue-router';
import Parent from "../components/Parenst";
import FORM from "../components/FORM";
import SLOT from "../components/SLOTT";
import VIF from "../components/V_IF&&V_FOR";
import COMPUTER from "../components/COMPUTER";
import Child from "../components/Child";

Vue.use(VueRouter);

const routes = new VueRouter({
    routes:[
        {
            path:'/',
            name:'Parent',
            component:Parent,
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
        {
            path:'/Child',
            name:'Child',
            component:Child,
        }
    ],
});
export default routes;