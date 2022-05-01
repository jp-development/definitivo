import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/advisers',
      component : () => import('../components/responsive/Login.vue'),
    },
    {
      path: '/advisers/home',
      component : () => import('../components/responsive/Home.vue'),
    },
    {
      path: '/advisers/orders',
      component : () => import('../components/responsive/Order.vue'),
    },
    { 
      path: '/admin',
      component: () => import('../views/AdminView.vue'),
      children : [
        {
          path: 'dashboard',
          component : () => import('../components/admin/Dashboard.vue'),
        },
        {
          path: 'advisers',
          component : () => import('../components/advisers/Advisers.vue'),
          children : [
            {
              path: '',
              component: () => import('../components/advisers/AdvisersIndex.vue'),
            },
            {
              path: 'create',
              component : () => import('../components/advisers/AdvisersCreate.vue')
            }
          ],
        },
        {
          path: 'campaigns',
          component : () => import('../components/campaings/Campaings.vue'),
          children: [
            {
              path: '',
              component : () => import('../components/campaings/CampaingsIndex.vue'),
            },
            {
              path: 'chat',
              component: () => import('../components/campaings/ChatCampaings.vue')
            },
            {
              path: 'create',
              component : () => import('../components/campaings/CampaingCreate.vue'),
            }
          ]
        }
      ],
      redirect: {path: '/admin/dashboard'}
    }
  ]
})

export default router
