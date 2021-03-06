import Home from '../pages/MutuHome.vue';
import List from '../pages/MutuList.vue';
import Detail from '../pages/MutuDetail.vue';

const mutuRoutes = [
  {
    path: '/mutu',
    component: Home,
    children: [
      {
        path: 'list',
        name: 'mutu-list',
        meta: { requiresAuth: true, keepAlive:true },
        component: List
      },
      {
        path: 'detail/:id',
        name: 'detail',
        meta: { requiresAuth: true },
        component: Detail,
        props: true
      },
      {
        path: '',
        name: 'mutu',
        redirect: { name: 'mutu-list' }
      }
    ]
  }
];

export default mutuRoutes;