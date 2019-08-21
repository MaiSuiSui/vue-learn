import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import routes from './router/index'

Vue.use(ElementUI);
Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:routes
}).$mount('#app')
