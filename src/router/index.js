import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'

// import VipView from '../views/VipView.vue'
import ITView from '../views/ITView.vue'
import BackEndView from '../views/BackEndView.vue'
import FrontEndView from '../views/FrontEndView.vue'
import LayoutView from '../views/LayoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/reg',
      name: 'reg',
      component: RegisterView
    },
    {
      path: '/',
      name: 'layout',
      component: LayoutView,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: HomeView,
        },
        // {
        //   path: 'vip',
        //   name: 'vip',
        //   component: VipView
        // },
        {
          path: 'it',
          name: 'it',
          component: ITView,
          children: [
            {
              path: '/it/backend',
              name: 'backend',
              component: BackEndView
            },
            {
              path: '/it/frontend',
              name: 'frontend',
              component: FrontEndView
            },
          ]
        },
      ]
    }
  ]
})

export default router
