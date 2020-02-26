import Home from '../pages/SetupHome.vue'
import Obat from '../pages/Obat.vue';
import Setting from '../pages/Setting.vue';

const setupRoutes = [
  {
    path: '/setup',
    component: Home,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'setting',
        name: 'setting',
        component: Setting
      },
      {
        path: 'obat',
        name: 'obat',
        component: Obat
      },
      {
        path: '',
        name: 'setup',
        redirect: { name: 'setting' }
      }
    ]
  }
];

export default setupRoutes;