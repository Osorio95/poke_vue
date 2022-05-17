<template>

  <HeaderVue />

  <RouterView />
  
  <BottomFooter />

</template>

<script>
import HeaderVue from './components/layouts/TopHeader.vue'
import BottomFooter from './components/layouts/BottomFooter.vue'

export default {
  components: {
    HeaderVue,
    BottomFooter
  }
}
</script>