<<<<<<< HEAD:src/views/WomenView.vue
<template>
  <div class="text-gray-700 grid md:grid-cols-5"> <!-- content wrapper -->
 
<MenNav :basketHandler="basketHandler" :walkingHandler="walkingHandler" :runningHandler="runningHandler" :trainingAndGymHandler="trainingAndGymHandler" :showAllHandler="showAllHandler" :route="route" />
<main class="px-16 py-6 bg-gray-100 md:col-span-4">
  <!-- <Header /> -->
<div>


  <div v-if="showAllShoe">
    <h4 class="mt-12 font-bold pb-2 border-b border-gray-200">All Shoes</h4>
    
    <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10"> 
      <!-- Cards -->
      <div class="card" v-for="shoe in shoes" :key="shoe.id"> 
         <router-link :to="{path:`/shoe/${shoe.id}`}">
        <img :src="shoe.imageUrl" alt="vue logo" class="w-full h-32 sm:h-48 object-cover">
        <div class="text-start m-4"> 
          <span class="font-bold">{{ shoe.name }}</span>
          <span class="block text-gray-500 text-sm">{{ shoe.gender }}</span>
          <span class="block text-gray-500 text-sm">{{ shoe.category }}</span>
          <span class="block text-gray-500 text-sm">₱ {{ shoe.price }}</span>
        </div>
      </router-link>
      </div>
    </div>
  </div>
  
  <div v-if="isBasketball">
    <h4 class="mt-12 font-bold pb-2 border-b border-gray-200">Basketball Shoes</h4>
    
    <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10"> 
      <!-- Cards -->
      <div class="card" v-for="shoe in basket" :key="shoe.id">
        <router-link :to="{path:`/shoe/${shoe.id}`}">
        <img :src="shoe.imageUrl" alt="vue logo" class="w-full h-32 sm:h-48 object-cover">
        <div class="text-start m-4"> 
          <span class="font-bold">{{ shoe.name }}</span>
          <span class="block text-gray-500 text-sm">{{ shoe.gender }}</span>
          <span class="block text-gray-500 text-sm">{{ shoe.category }}</span>
          <span class="block text-gray-500 text-sm">₱ {{ shoe.price }}</span>
        </div>
      </router-link>
      </div>
    </div>
  </div>

  <div v-if="isWalking">
    <h4 class="mt-12 font-bold pb-2 border-b border-gray-200">Walking Shoes</h4>
    
    <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10"> 
      <!-- Cards -->
      <div class="card" v-for="shoe in walking" :key="shoe.id"> 
         <router-link :to="{path:`/shoe/${shoe.id}`}">
        <img :src="shoe.imageUrl" alt="vue logo" class="w-full h-32 sm:h-48 object-cover">
        <div class="text-start m-4"> 
          <span class="font-bold">{{ shoe.name }}</span>
          <span class="block text-gray-500 text-sm">{{ shoe.gender }}</span>
          <span class="block text-gray-500 text-sm">{{ shoe.category }}</span>
          <span class="block text-gray-500 text-sm">₱ {{ shoe.price }}</span>
        </div>
      </router-link>
      </div>
    </div>
  </div>

  <div v-if="isRunning">
    <h4 class="mt-12 font-bold pb-2 border-b border-gray-200">Running Shoes</h4>
    
    <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10"> 
      <!-- Cards -->
      <div class="card" v-for="shoe in running" :key="shoe.id"> 
         <router-link :to="{path:`/shoe/${shoe.id}`}">
        <img :src="shoe.imageUrl" alt="vue logo" class="w-full h-32 sm:h-48 object-cover">
        <div class="text-start m-4"> 
          <span class="font-bold">{{ shoe.name }}</span>
          <span class="block text-gray-500 text-sm">{{ shoe.gender }}</span>
          <span class="block text-gray-500 text-sm">{{ shoe.category }}</span>
          <span class="block text-gray-500 text-sm">₱ {{ shoe.price }}</span>
        </div>
      </router-link>
      </div>
    </div>
  </div>

   <div v-if="isTrainingAndGym">
    <h4 class="mt-12 font-bold pb-2 border-b border-gray-200">Training/Gym Shoes</h4>
    
    <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10"> 
      <!-- Cards -->
      <div class="card" v-for="shoe in training" :key="shoe.id"> 
         <router-link :to="{path:`/shoe/${shoe.id}`}">
        <img :src="shoe.imageUrl" alt="vue logo" class="w-full h-32 sm:h-48 object-cover">
        <div class="text-start m-4"> 
          <span class="font-bold">{{ shoe.name }}</span>
          <span class="block text-gray-500 text-sm">{{ shoe.gender }}</span>
          <span class="block text-gray-500 text-sm">{{ shoe.category }}</span>
          <span class="block text-gray-500 text-sm">₱ {{ shoe.price }}</span>
        </div>
      </router-link>
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

import { ref } from '@vue/reactivity'
import { auth, shoesCollectionRef } from '../firebase'
import { onBeforeMount, onMounted } from '@vue/runtime-core'
import { onSnapshot } from '@firebase/firestore'
import MenNav from '../components/MenNav.vue'
import { useRoute } from 'vue-router'
export default {
    name:'WomenView',
    components:{ MenNav },
    setup() {
    const isBasketball = ref(false)
    const isWalking = ref(false)
    const isRunning = ref(false)
    const isTrainingAndGym = ref(false)
    const showAllShoe = ref(true)

    // const isBasketball = ref(true)
    // const isWalking = ref(false)
    // const isRunning = ref(false)
    // const isTrainingAndGym = ref(false)
    // const showAllShoe = ref(false)

    const route = useRoute()
    const name = ref('')
    const shoes = ref([])
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
    shoes.value = getShoes.filter((getShoe) => getShoe.gender === 'Female')
    basket.value = getShoes.filter((getShoe) => getShoe.gender === 'Female' && getShoe.category === 'Basketball')
    running.value = getShoes.filter((getShoe) => getShoe.gender === 'Female' && getShoe.category === 'Running')
    walking.value = getShoes.filter((getShoe) => getShoe.gender === 'Female' && getShoe.category === 'Walking')
    training.value = getShoes.filter((getShoe) => getShoe.gender === 'Female' && getShoe.category === 'Training & Gym')
    })
    })

    const basketHandler = () => {
      isBasketball.value = true
      isWalking.value = false
      isRunning.value = false
      isTrainingAndGym.value = false
      showAllShoe.value = false
    }
    const walkingHandler = () => {
      isWalking.value = true
      isBasketball.value = false
       isRunning.value = false
       isTrainingAndGym.value = false
       showAllShoe.value = false
    }
    const runningHandler = () => {
      isRunning.value = true
       isBasketball.value = false
       isWalking.value = false
       isTrainingAndGym.value = false
       showAllShoe.value = false
    }
    const trainingAndGymHandler = () => {
      isTrainingAndGym.value = true
       isBasketball.value = false
       isWalking.value = false
       isRunning.value = false
       showAllShoe.value = false
    }

    const showAllHandler = () => {
      showAllShoe.value = true
      isTrainingAndGym.value = false
      isBasketball.value = false
      isWalking.value = false
      isRunning.value = false
    }
    
    return { name, showAllShoe , shoes, basket, running, walking, training, route, showAllHandler , isBasketball, isWalking, isRunning, isTrainingAndGym, basketHandler, walkingHandler, runningHandler, trainingAndGymHandler }
    }
}
</script>

<style scoped>
.carousel-item img{
  width: 100% !important;
  height: 600px !important;
}
a{
  text-decoration: none;
  color: #000;
}
=======
<template>

  <div class="text-gray-700 grid md:grid-cols-5"> <!-- content wrapper -->
 <MenNav :basketHandler="basketHandler" :walkingHandler="walkingHandler" :runningHandler="runningHandler" :trainingAndGymHandler="trainingAndGymHandler" :showAllHandler="showAllHandler" />
<main class="px-16 py-6 bg-gray-100 md:col-span-4">
  <!-- <Header /> -->
<div>


  <div v-if="showAllShoe">
    <h4 class="mt-12 font-bold pb-2 border-b border-gray-200">All Shoes</h4>
    
    <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10"> 
      <!-- Cards -->
      <div class="card" v-for="shoe in shoes" :key="shoe.id"> 
         <router-link :to="{path:`/shoe/${shoe.id}`}">
        <img :src="shoe.imageUrl" alt="vue logo" class="w-full h-32 sm:h-48 object-cover">
        <div class="text-start m-4"> 
          <span class="font-bold">{{ shoe.name }}</span>
          <span class="block text-gray-500 text-sm">{{ shoe.gender }}</span>
          <span class="block text-gray-500 text-sm">{{ shoe.category }}</span>
          <span class="block text-gray-500 text-sm">₱ {{ shoe.price }}</span>
        </div>
      </router-link>
      </div>
    </div>
  </div>
  
  <div v-if="isBasketball">
    <h4 class="mt-12 font-bold pb-2 border-b border-gray-200">Basketball Shoes</h4>
    
    <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10"> 
      <!-- Cards -->
      <div class="card" v-for="shoe in basket" :key="shoe.id">
        <router-link :to="{path:`/shoe/${shoe.id}`}">
        <img :src="shoe.imageUrl" alt="vue logo" class="w-full h-32 sm:h-48 object-cover">
        <div class="text-start m-4"> 
          <span class="font-bold">{{ shoe.name }}</span>
          <span class="block text-gray-500 text-sm">{{ shoe.gender }}</span>
          <span class="block text-gray-500 text-sm">{{ shoe.category }}</span>
          <span class="block text-gray-500 text-sm">₱ {{ shoe.price }}</span>
        </div>
      </router-link>
      </div>
    </div>
  </div>

  <div v-if="isWalking">
    <h4 class="mt-12 font-bold pb-2 border-b border-gray-200">Walking Shoes</h4>
    
    <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10"> 
      <!-- Cards -->
      <div class="card" v-for="shoe in walking" :key="shoe.id"> 
         <router-link :to="{path:`/shoe/${shoe.id}`}">
        <img :src="shoe.imageUrl" alt="vue logo" class="w-full h-32 sm:h-48 object-cover">
        <div class="text-start m-4"> 
          <span class="font-bold">{{ shoe.name }}</span>
          <span class="block text-gray-500 text-sm">{{ shoe.gender }}</span>
          <span class="block text-gray-500 text-sm">{{ shoe.category }}</span>
          <span class="block text-gray-500 text-sm">₱ {{ shoe.price }}</span>
        </div>
      </router-link>
      </div>
    </div>
  </div>

  <div v-if="isRunning">
    <h4 class="mt-12 font-bold pb-2 border-b border-gray-200">Running Shoes</h4>
    
    <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10"> 
      <!-- Cards -->
      <div class="card" v-for="shoe in running" :key="shoe.id"> 
         <router-link :to="{path:`/shoe/${shoe.id}`}">
        <img :src="shoe.imageUrl" alt="vue logo" class="w-full h-32 sm:h-48 object-cover">
        <div class="text-start m-4"> 
          <span class="font-bold">{{ shoe.name }}</span>
          <span class="block text-gray-500 text-sm">{{ shoe.gender }}</span>
          <span class="block text-gray-500 text-sm">{{ shoe.category }}</span>
          <span class="block text-gray-500 text-sm">₱ {{ shoe.price }}</span>
        </div>
      </router-link>
      </div>
    </div>
  </div>

   <div v-if="isTrainingAndGym">
    <h4 class="mt-12 font-bold pb-2 border-b border-gray-200">Training/Gym Shoes</h4>
    
    <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10"> 
      <!-- Cards -->
      <div class="card" v-for="shoe in training" :key="shoe.id"> 
         <router-link :to="{path:`/shoe/${shoe.id}`}">
        <img :src="shoe.imageUrl" alt="vue logo" class="w-full h-32 sm:h-48 object-cover">
        <div class="text-start m-4"> 
          <span class="font-bold">{{ shoe.name }}</span>
          <span class="block text-gray-500 text-sm">{{ shoe.gender }}</span>
          <span class="block text-gray-500 text-sm">{{ shoe.category }}</span>
          <span class="block text-gray-500 text-sm">₱ {{ shoe.price }}</span>
        </div>
      </router-link>
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

import { ref } from '@vue/reactivity'
import { auth, shoesCollectionRef } from '../firebase'
import { onBeforeMount, onMounted } from '@vue/runtime-core'
import { onSnapshot } from '@firebase/firestore'
import MenNav from '../components/MenNav.vue'
import { useRoute } from 'vue-router'



export default {
    name:'TheWomenPage',
    components:{ MenNav },
    setup() {
    const isBasketball = ref(false)
    const isWalking = ref(false)
    const isRunning = ref(false)
    const isTrainingAndGym = ref(false)
    const showAllShoe = ref(true)
    const route = useRoute()
    const name = ref('')
    const shoes = ref([])
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
    shoes.value = getShoes.filter((getShoe) => getShoe.gender === 'Female')
    basket.value = getShoes.filter((getShoe) => getShoe.gender === 'Female' && getShoe.category === 'Basketball')
    running.value = getShoes.filter((getShoe) => getShoe.gender === 'Female' && getShoe.category === 'Running')
    walking.value = getShoes.filter((getShoe) => getShoe.gender === 'Female' && getShoe.category === 'Walking')
    training.value = getShoes.filter((getShoe) => getShoe.gender === 'Female' && getShoe.category === 'Training & Gym')
    })
    })

    const basketHandler = () => {
      isBasketball.value = true
      isWalking.value = false
      isRunning.value = false
      isTrainingAndGym.value = false
      showAllShoe.value = false
    }
    const walkingHandler = () => {
      isWalking.value = true
      isBasketball.value = false
       isRunning.value = false
       isTrainingAndGym.value = false
       showAllShoe.value = false
    }
    const runningHandler = () => {
      isRunning.value = true
       isBasketball.value = false
       isWalking.value = false
       isTrainingAndGym.value = false
       showAllShoe.value = false
    }
    const trainingAndGymHandler = () => {
      isTrainingAndGym.value = true
       isBasketball.value = false
       isWalking.value = false
       isRunning.value = false
       showAllShoe.value = false
    }

    const showAllHandler = () => {
      showAllShoe.value = true
      isTrainingAndGym.value = false
      isBasketball.value = false
      isWalking.value = false
      isRunning.value = false
    }
    
    return { name, showAllShoe , shoes, basket, running, walking, training, route, showAllHandler , isBasketball, isWalking, isRunning, isTrainingAndGym, basketHandler, walkingHandler, runningHandler, trainingAndGymHandler }
    }
}
</script>

<style scoped>
.carousel-item img{
  width: 100% !important;
  height: 600px !important;
}

a{
  text-decoration: none;
  color: #000;
}

>>>>>>> d5eeaa8b629d376f860f5730f3d81f155ef053c1:src/views/TheWomenPage.vue
</style>