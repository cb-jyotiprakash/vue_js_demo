import Vue from 'vue'
import App from './App.vue'
import Message from './components/Message.vue'
import Users from './components/Users.vue'
import Home from './components/Home.vue'
import VueRouter from 'vue-router'


Vue.component('app-message', Message)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
    {path: '/users/:teamId', component: Users},
    {path: '/', component: Home}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
