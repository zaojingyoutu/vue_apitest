import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component:() => import(/* webpackChunkName: "layout" */ '../layout/layout') ,
     children:[
         {
  path: '/create_projrct',
  name: 'create_projrct',
  component: () => import(/* webpackChunkName: "about" */ '../views/create_projrct')
  },
{
  path: '/project',
  name: 'project',
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
    component: () => import(/* webpackChunkName: "about" */ '../views/case_list')
  },

  {
  path: '/create_projrct',
  name: 'create_projrct',
  component: () => import(/* webpackChunkName: "about" */ '../views/create_projrct')
  },
         {
  path: '/debug',
  name: 'debug',
  component: () => import(/* webpackChunkName: "layout" */ '../views/case/debug'),

  },
   {
  path: '/variate_list',
  name: 'variate_list',
  component: () => import(/* webpackChunkName: "variate_list" */ '../views/variate/variate_list'),

  },
   {
  path: '/create_variate',
  name: 'create_variate',
  component: () => import(/* webpackChunkName: "create_variate" */ '../views/variate/create_variate'),

  }, 
  {
    path: '/create_testplan',
    name: 'create_testplan',
    component: () => import(/* webpackChunkName: "create_variate" */ '../views/testplan/create_testplan'),
  
    },
    {
      path: '/testplan',
      name: 'testplan',
      component: () => import(/* webpackChunkName: "testplan" */ '../views/testplan/testplan'),
    
      },
      {
        path: '/report',
        name: 'report',
        component: () => import(/* webpackChunkName: "report" */ '../views/report/report'),
      
        },
      {
        path: '/userList',
        name: 'userList',
        component: () => import(/* webpackChunkName: "userList" */ '../views/user/userList.vue'),
      
        },
    {
        path: '/createUser',
        name: 'createUser',
        component: () => import(/* webpackChunkName: "createUser" */ '../views/user/createUser.vue'),
      
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/login/login')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
