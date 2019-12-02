import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import schoolofnet from './views/schoolofnet.vue'
import vuemastery from './views/vuemastery.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/schoolofnet',
            name: 'schoolofnet',
            component: schoolofnet
        },
        {
            path: '/vuemastery',
            name: 'vuemastery',
            component: vuemastery
        },
    ],
    mode: 'history'
})