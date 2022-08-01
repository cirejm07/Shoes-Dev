<script>
export default{
  name: 'Header',
}
</script>

<template>
  <div class="flex justify-center md:justify-end text-red-700 font-medium">
    
    <router-link to="/login" class="md:border-2 p-2 rounded-full md:border-red-600 cursor-pointer hover:bg-red-600 hover:text-white">Login</router-link>
    <router-link to="/register" class="ml-2 md:border-2 p-2 rounded-full md:border-red-600 cursor-pointer hover:bg-red-600 hover:text-white">Signup</router-link>
  </div>
</template>

<style scoped>


</style>
