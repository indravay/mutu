
<template>
  <div class="wrapper">
    <app-header v-if="!$route.meta.disabledHeader"></app-header>
    <router-view />
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