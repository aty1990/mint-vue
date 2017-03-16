export default [
    {
        path: '/list',
        component: resolve => require(['pages/list/index'], resolve)
    },
    {
        path: '/home',
        component: resolve => require(['pages/home/index'], resolve)
        /*children: [
            {
                path: '/list',
                component: resolve => require(['pages/list/index'], resolve)
            },
            {
                path: '/home',
                component: resolve => require(['pages/home/index'], resolve)
            }
        ]*/
    },
    {
        path: '/tabbar',
        component: resolve => require(['pages/tabber/index'], resolve)
    },
    {
        path: '/navbar', 
        component: resolve => require(['pages/tabber/navbar'], resolve)
    },
    {
        path: '/button', 
        component: resolve => require(['pages/tabber/button'], resolve)
    },
    {
        path: '/lazyload', 
        component: resolve => require(['pages/tabber/lazyload'], resolve)
    },
    {
        path: '/slot', 
        component: resolve => require(['pages/layout/'], resolve)
    },
    {
        path: '*', //其他页面，强制跳转到列表页面
        redirect: '/list'
    }
   
]