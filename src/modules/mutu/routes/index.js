import Home from '../pages/mutu-home.vue';
import List from '../pages/mutu-list.vue';
import Detail from '../pages/mutu-detail.vue';

const mutuRoutes = [
  {
    path: '/mutu',
    component: Home,
    children: [
      {
        path: 'list',
        name: 'mutu-list',
        component: List
      },
      {
        path: 'detail/:id',
        name: 'detail',
        component: Detail
      },
      {
        path: '',
        redirect: { name: 'mutu-list' }
      }
    ]
  }
];

export default mutuRoutes;