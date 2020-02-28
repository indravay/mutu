import Home from '../pages/MutuHome.vue';
import List from '../pages/MutuList.vue';
import Detail from '../pages/MutuDetail.vue';

const mutuRoutes = [
  {
    path: '/mutu',
    component: Home,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'list',
        name: 'mutu-list',
        component: List
      },
      {
        path: 'detail/:id',
        name: 'detail',
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