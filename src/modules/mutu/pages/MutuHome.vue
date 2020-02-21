<template>
  <div class="wrapper">
    <app-header></app-header>
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