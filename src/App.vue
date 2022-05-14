<template>

  <HeaderVue />

  <RouterView />
  
</template>

<script>
import HeaderVue from './components/layouts/TopHeader.vue'

export default {
  components: {
    HeaderVue
  }
}
</script>