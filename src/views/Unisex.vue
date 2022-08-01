<template>
   <div class="text-gray-700 grid md:grid-cols-5"> <!-- content wrapper -->
 
<MenNav :route="route" />
<main class="px-16 py-6 bg-gray-100 md:col-span-4">
  <!-- <Header /> -->
<div>
  <div>
    <h4 class="mt-12 font-bold pb-2 border-b border-gray-200">Basketball Shoes</h4>
    
    <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10"> 
      <!-- Cards -->
      <div class="card" v-for="shoe in basket" :key="shoe.id"> 
        <img :src="shoe.imageUrl" alt="vue logo" class="w-full h-32 sm:h-48 object-cover">
        <div class="m-4"> 
          <span class="font-bold">{{ shoe.name }}</span>
          <span class="block text-gray-500 text-sm">{{ shoe.gender }}</span>
          <span class="block text-gray-500 text-sm">{{ shoe.category }}</span>
        </div>
        <div class="badge"> 
          <span>2 Stars ⭐</span>
        </div>
      </div>
    </div>
  </div>

  <div>
    <h4 class="mt-12 font-bold pb-2 border-b border-gray-200">Walking Shoes</h4>
    
    <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10"> 
      <!-- Cards -->
      <div class="card" v-for="shoe in walking" :key="shoe.id"> 
        <img :src="shoe.imageUrl" alt="vue logo" class="w-full h-32 sm:h-48 object-cover">
        <div class="m-4"> 
          <span class="font-bold">{{ shoe.name }}</span>
          <span class="block text-gray-500 text-sm">{{ shoe.gender }}</span>
          <span class="block text-gray-500 text-sm">{{ shoe.category }}</span>
        </div>
        <div class="badge"> 
          <span>2 Stars ⭐</span>
        </div>
      </div>
    </div>
  </div>

  <div>
    <h4 class="mt-12 font-bold pb-2 border-b border-gray-200">Running Shoes</h4>
    
    <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10"> 
      <!-- Cards -->
      <div class="card" v-for="shoe in running" :key="shoe.id"> 
        <img :src="shoe.imageUrl" alt="vue logo" class="w-full h-32 sm:h-48 object-cover">
        <div class="m-4"> 
          <span class="font-bold">{{ shoe.name }}</span>
          <span class="block text-gray-500 text-sm">{{ shoe.gender }}</span>
          <span class="block text-gray-500 text-sm">{{ shoe.category }}</span>
        </div>
        <div class="badge"> 
          <span>2 Stars ⭐</span>
        </div>
      </div>
    </div>
  </div>

   <div>
    <h4 class="mt-12 font-bold pb-2 border-b border-gray-200">Training/Gym Shoes</h4>
    
    <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10"> 
      <!-- Cards -->
      <div class="card" v-for="shoe in training" :key="shoe.id"> 
        <img :src="shoe.imageUrl" alt="vue logo" class="w-full h-32 sm:h-48 object-cover">
        <div class="m-4"> 
          <span class="font-bold">{{ shoe.name }}</span>
          <span class="block text-gray-500 text-sm">{{ shoe.gender }}</span>
          <span class="block text-gray-500 text-sm">{{ shoe.category }}</span>
        </div>
        <div class="badge"> 
          <span>2 Stars ⭐</span>
        </div>
      </div>
    </div>
  </div>

    <h4 class="mt-12 font-bold pb-2 border-b border-gray-200">Most Popular</h4>
    
    <div class="mt-8"> 
      <!-- cards -->
    </div>
    <div class="flex justify-center">  
      <div class="bg-gray-200 btn">Load more..</div>
    </div>
</div>
</main>
</div>
</template>

<script>
import MenNav from '../components/MenNav.vue'
import { ref } from '@vue/reactivity'
import { auth, shoesCollectionRef } from '../firebase'
import { onBeforeMount, onMounted } from '@vue/runtime-core'
import { onSnapshot } from '@firebase/firestore'
import { useRoute } from 'vue-router'



export default {
    name: 'UnisexView',
    components: { MenNav },
    setup() {
      const route = useRoute()
      const name = ref('')
      const basket = ref([])
      const running = ref([])
      const walking = ref([])
      const training = ref([])

    onBeforeMount(() => {
        let user = auth.currentUser;
      if(user) {
       name.value = user.email.split('@')[0]
      }
    })

    onMounted(() => {
       onSnapshot(shoesCollectionRef, (querySnapshot) => {
  const getShoes = [];
  querySnapshot.forEach((doc) => {
    const shoe = {
      id: doc.id,
      category: doc.data().category,
      description: doc.data().description,
      gender: doc.data().gender,
      imageUrl: doc.data().imageUrl,
      name: doc.data().name,
      price: doc.data().price,
      size: doc.data().size
    }
      getShoes.push(shoe)
  })
    basket.value = getShoes.filter((getShoe) => getShoe.gender === 'Unisex' && getShoe.category === 'Basketball')
    running.value = getShoes.filter((getShoe) => getShoe.gender === 'Unisex' && getShoe.category === 'Running')
    walking.value = getShoes.filter((getShoe) => getShoe.gender === 'Unisex' && getShoe.category === 'Walking')
    training.value = getShoes.filter((getShoe) => getShoe.gender === 'Unisex' && getShoe.category === 'Training & Gym')
    })
    })
    
    
    

    return { name, basket, running, walking, training, route }
    }
}
</script>

<style>

</style>