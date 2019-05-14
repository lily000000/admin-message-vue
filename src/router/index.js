import Vue from 'vue';
import Router from 'vue-router';
import Loading from 'components/loading';
import SideLayout from '@/layout/sideLayout';


Vue.use(Router);
const Home = () => ({
    component: import('@/pages/home/index'),
    loading: Loading
});
const Analysis = () => ({
    component: import('@/pages/analysis/analysis'),
    loading: Loading
});
const Customer = () => ({
    component: import('@/pages/customer/customer'),
    loading: Loading
});
const Addcustomer = () =>({
    component:import('@/pages/addcustomer/addcustomer')
})
const Tagmanage = () =>({
    component:import('@/pages/tagmanage/tagmanage')
})
const Permission = () => ({
    component: import('@/pages/error/Permission'),
    loading: Loading
});
const Login = () => ({
    component: import('@/pages/login/login'),
    loading: Loading
});
const page404 = () => ({
    component: import('@/pages/error/404'),
    loading: Loading
});
const page403 = () => ({
    component: import('@/pages/error/403'),
    loading: Loading
});
export default new Router({
    mode: 'history',  //路由配置，不设置默认为hash
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/',
            component: SideLayout,
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/home',
                    component: Home,
                    meta: { title: '首页' }
                },
                {
                    path: '/analysis',
                    component: Analysis,
                    meta: { title: '数据分析' }
                },
                {
                    path: '/customer',
                    component: Customer,
                    meta: { title: '客户管理' }
                },
                {
                    path: '/addcustomer',
                    component: Addcustomer,
                    meta: { title: '新增客户' }
                },
                {
                    path: '/tagmanage',
                    component: Tagmanage,
                    meta: { title: '标签管理' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: Permission,
                    meta: { title: '权限管理', permission: true }
                },
                {
                    path: '/404',
                    component: page404,
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: page403,
                    meta: { title: '403' }
                }
            ]
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
