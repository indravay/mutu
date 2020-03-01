<template>
  <div class="wrapper">
    <app-header></app-header>
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
import AppHeader from '../../shared/components/AppHeader'
export default {
  name: 'App',
  components: {
    AppHeader,
  }
}
</script>