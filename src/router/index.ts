import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import type { App } from 'vue';
const routesCache = new Map()
function importAll (r:any) {
  r.keys().forEach((key:any) => {
    routesCache.set(key.replace(/\/index.vue|\.\//gi, ''), r(key))
  })
}
importAll(require.context('../views/dashboard/', true, /\.vue$/))
const constantRouterMap = []
for (let item of routesCache.entries()) {
  constantRouterMap.push({
    path: '/' + item[0],
    component: item[1].default
  })
}

let arr:any = [
]
arr = [...arr, ...constantRouterMap]

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect:'heLiYongYaoJianCeZhiBiao',
    children:arr,
    component:()=> import(/* webpackChunkName: "Layout" */ '../views/layout/index.vue')
    // children:[
    //   {
    //     path:'heLiYongYaoJianCeZhiBiao',
    //     component: () => import(/* webpackChunkName: "about" */ '../views/dashboard/heLiYongYaoJianCeZhiBiao/index.vue')
    //   }
    // ]
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// config router
export function setupRouter(app: App<Element>) {
  app.use(router);
}

export default router;

