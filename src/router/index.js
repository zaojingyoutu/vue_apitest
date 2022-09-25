import {createRouter, createWebHashHistory} from 'vue-router'
// import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "layout" */ '../layout/layout'),
        children: [

            {

                path: '/create_projrct',
                name: 'create_projrct',
                meta: {
                    title: '创建项目'
                },
                component: () => import(/* webpackChunkName: "about" */ '../views/create_projrct')
            },
            {
                path: '/project',
                name: 'project',
                meta: {
                    title: '项目列表'
                },
                component: () => import(/* webpackChunkName: "about" */ '../views/project')
            },
            {
                path: '/create_case',
                name: 'create_case',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/create_case')
            },
            {
                path: '/case',
                name: 'caseList',
                 meta: {
                    title: '用例列表'
                },
                component: () => import(/* webpackChunkName: "about" */ '../views/case_list')
            },

            {
                path: '/debug',
                name: 'debug',
                 meta: {
                    title: '用例'
                },
                component: () => import(/* webpackChunkName: "layout" */ '../views/case/debug'),

            },
            {
                path: '/variate_list',
                name: 'variate_list',
                 meta: {
                    title: '变量列表'
                },
                component: () => import(/* webpackChunkName: "variate_list" */ '../views/variate/variate_list'),

            },
            {
                path: '/create_variate',
                name: 'create_variate',
                 meta: {
                    title: '创建变量'
                },
                component: () => import(/* webpackChunkName: "create_variate" */ '../views/variate/create_variate'),

            },
            {
                path: '/create_testplan',
                name: 'create_testplan',
                 meta: {
                    title: '创建测试计划'
                },
                component: () => import(/* webpackChunkName: "create_variate" */ '../views/testplan/create_testplan'),

            },
            {
                path: '/testplan',
                name: 'testplan',
                 meta: {
                    title: '测试计划列表'
                },
                component: () => import(/* webpackChunkName: "testplan" */ '../views/testplan/testplan'),

            },
            {
                path: '/report',
                name: 'report',
                 meta: {
                    title: '测试报告'
                },
                component: () => import(/* webpackChunkName: "report" */ '../views/report/report'),

            },
            {
                path: '/userList',
                name: 'userList',
                 meta: {
                    title: '用户列表'
                },
                component: () => import(/* webpackChunkName: "userList" */ '../views/user/userList.vue'),

            },
            {
                path: '/createUser',
                name: 'createUser',
                 meta: {
                    title: '添加用户'
                },
                component: () => import(/* webpackChunkName: "createUser" */ '../views/user/createUser.vue'),

            },
            {
                path: '/tools',
                name: 'tools',
                 meta: {
                    title: '工具箱'
                },
                component: () => import(/* webpackChunkName: "tools" */ '../views/tool/tool.vue'),

            },
            {
                path: '/uploads',
                name: 'uploads',
                 meta: {
                    title: '上传文件'
                },
                component: () => import(/* webpackChunkName: "tools" */ '../views/files/uploads'),

            },
            {
                path: '/filesList',
                name: 'filesList',
                 meta: {
                    title: '文件列表'
                },
                component: () => import(/* webpackChunkName: "tools" */ '../views/files/filesList'),

            },

        ]
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About')
    },
    {
        path: '/login',
        name: 'login',
         meta: {
                    title: '登录'
                },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "login" */ '../views/login/login')
    },

]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title ? to.meta.title : '接口测试平台';
    if (to.path === '/') {
        next({path: '/login'})
    } else {
        next()
    }
})

export default router
