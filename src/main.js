import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import VueIziToast from 'vue-izitoast';
import 'element-ui/lib/theme-chalk/index.css';
import './registerServiceWorker'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser,faUserMd, faUserNurse, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import locale from 'element-ui/lib/locale/lang/en'
import 'izitoast/dist/css/iziToast.min.css';

Vue.use(ElementUI, { locale })
Vue.use(VueIziToast);

library.add(faUser, faUserMd, faUserNurse, faAddressCard)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
if(localStorage.getItem('token')){
  store.dispatch('auth/getUser').then(
    startVue()
  );
}else{
  startVue()
}


function startVue() {
  new Vue({
    store,
    router,
    render: h => h(App)
  }).$mount('#app')
}

