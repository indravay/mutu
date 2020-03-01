import axios from 'axios';
import Vue from 'vue'
import store from '../store/index.js'
import router from '../router/index.js'
const eventsHub = new Vue()

const $axios = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    // headers: {
    //   Authorization: localStorage.getItem('token') != 'null' ? 'Bearer ' + localStorage.getItem('token'):'',
    //   'Content-Type': 'application/json'
    // }
});

$axios.interceptors.request.use (
  function (config) {
      const token = store.state.token
      if (token) config.headers.Authorization = `Bearer ${token}`;
      return config;
  },
  function (error) {
      return Promise.reject (error);
  }
);

$axios.interceptors.response.use(null, (error) => {
  console.log(error.message)
  if (error.message === 'Network Error'){
    store.commit('SET_ERRORS',{'expired' : 'Koneksi gagal'})
    eventsHub.toast.error('Tidak dapat terhubung ke server, silahkan periksa kembali koneksi anda', 'Gagal')
  }
  else if (error.response.status == 401) {
    store.commit('auth/USER_LOGOUT')
    store.commit('SET_ERRORS',{'expired' : 'Sesi anda telah berakhir'})
    console.log(router.currentRoute)
    if(router.currentRoute.meta.requiresAuth){
      router.push({ name: 'user-login' })
    }
  }
  
 
  return Promise.reject(error)
})

export default $axios;