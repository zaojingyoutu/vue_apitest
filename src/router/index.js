import {createRouter, createWebHashHistory} from 'vue-router'
// import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "layout" */ '../layout/layout'),
        children: [
            {
                path: '/index',
                name: 'home',
                meta: {
                    title: '首页'
                },
                component: () => import(/* webpackChunkName: "about" */ '../views/Home')
            },
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
                path: '/create_api',
                name: 'create_api',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/api/create_api.vue')
            },
            {
                path: '/api',
                name: 'apiList',
                 meta: {
                    title: '接口列表'
                },
                component: () => import(/* webpackChunkName: "about" */ '../views/api/api_list.vue')
            },

            {
                path: '/apiDetail',
                name: 'apiDetail',
                 meta: {
                    title: '接口'
                },
                component: () => import(/* webpackChunkName: "layout" */ '../views/api/debug'),

            },
            {
                path: '/create_case',
                name: 'create_case',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/case/create_case.vue')
            },
            {
                path: '/case',
                name: 'caseList',
                 meta: {
                    title: '接口列表'
                },
                component: () => import(/* webpackChunkName: "about" */ '../views/case/case_list.vue')
            },

            {
                path: '/caseDetail',
                name: 'caseDetail',
                 meta: {
                    title: '接口'
                },
                component: () => import(/* webpackChunkName: "layout" */ '../views/case/case.vue'),

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

            }
            ,
            {
                path: '/reportList',
                name: 'reportList',
                 meta: {
                    title: '测试报告列表'
                },
                component: () => import(/* webpackChunkName: "report" */ '../views/report/reportList'),

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
            {
                path: '/locust',
                name: 'locust',
                 meta: {
                    title: 'locust'
                },
                component: () => import(/* webpackChunkName: "tools" */ '../views/locust/index'),
            },
            {
                path: '/locust/web',
                name: 'locustWeb',
                 meta: {
                    title: 'locustWeb'
                },
                component: () => import(/* webpackChunkName: "tools" */ '../views/locust/locustWeb.vue'),    
            },
            {
                path: '/locustReport',
                name: 'locustReport',
                 meta: {
                    title: 'locustReport'
                },
                component: () => import(/* webpackChunkName: "locustReport" */ '../views/locustReport/list.vue'),    
            },
            {
                path: '/locustReport/ditail',
                name: 'ditail',
                 meta: {
                    title: 'ditail'
                },
                component: () => import(/* webpackChunkName: "ditail" */ '../views/locustReport/detail.vue'),    
            },
            {
                path: '/customFun',
                name: 'customFun',
                 meta: {
                    title: 'customFun'
                },
                component: () => import(/* webpackChunkName: "tools" */ '../views/customFun/index'),

            },
            {
                path: '/chat',
                name: 'chat',
                 meta: {
                    title: 'chat'
                },
                component: () => import(/* webpackChunkName: "tools" */ '../components/aiChat.vue'),

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
