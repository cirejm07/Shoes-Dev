<template>
<ReusableNav />

  <div>
   <h1 class="text-red-800 text-5xl mt-5">404</h1>
   <h2 class="text-red-700 text-6xl mb-10">Page Not Found</h2>
  </div>
  <FooterView />
</template>

<script>
import ReusableNav from './ReusableNav.vue'
import FooterView from '../components/FooterView.vue'

export default {
    name: 'NotFound',
    components: { ReusableNav, FooterView },
}
</script>

<style>

</style>