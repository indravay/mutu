import Home from '../pages/UserHome.vue'
import Login from '../pages/UserLogin.vue';
import List from '../pages/UserList.vue';

const setupRoutes = [
  {
    path: '/user',
    component: Home,
    children: [
      {
        path: 'list',
        name: 'user-list',
        component: List,
        meta: { requiresAuth: true }
      },
      {
        path: 'login',
        name: 'user-login',
        component: Login,
        meta: { disabledHeader: true }
      },
      {
        path: '',
        name: 'user',
        redirect: { name: 'user-list' }
      }
    ]
  }
];

export default setupRoutes;