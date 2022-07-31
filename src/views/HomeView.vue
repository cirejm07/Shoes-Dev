<template>
<div class="text-gray-700"> <!-- content wrapper -->
 
<!-- <HomeNav /> -->
<main class="px-16 py-6 bg-gray-100">
  <Header />
<p class="">Home Page</p>
</main>
</div>

</template>

<script>
import HomeNav from '../components/HomeNav.vue';
import Header from '../components/Header.vue';

export default {
    name: "HomeView",
    components: { HomeNav, Header }
}
</script>

<style scoped>

</style>