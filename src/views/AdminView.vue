<template>
<div v-if="isLoading" class="loading-container">
  <h1 class="m-auto">LOADING</h1> <img class="loading" src="../assets/loading.gif" alt="" />
</div>
<div v-if="!isLoading" class="text-gray-700 grid md:grid-cols-5"> <!-- content wrapper -->

 <AdminSideNav :maleShoesHandler="maleShoesHandler" :showAllShoeHandler="showAllShoeHandler" :femaleShoesHandler="femaleShoesHandler" :unisexShoesHandler="unisexShoesHandler" />
<main class="px-16 py-6 bg-gray-100 md:col-span-4">
  <!-- <Header /> -->
<div>
  <div v-if="allShoes">
    <div class="d-md-flex align-items-end pb-2 border-b border-gray-200">
      <h4 class="mt-12 font-bold">All Shoes</h4>
    <div class="flex justify-center align-items-center ms-auto">
      <input v-model="searchAllShoe" type="text" class="form-control me-3 w-100" placeholder="Search"  />
       
      <div class="btn-group dropstart">
  <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    <fa icon="filter" />
  </button>
  <ul class="dropdown-menu">
    <li><span class="dropdown-item">Basketball</span></li>
    <li><span class="dropdown-item">Walking</span></li>
    <li><span class="dropdown-item">Running</span></li>
    <li><span class="dropdown-item">Training & Gym</span></li>
  </ul>
</div>
    </div>
    </div>
    <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10"> 
      <!-- Cards -->
      <div class="card" v-for="shoe in searchAllShoeFilter" :key="shoe.id"> 
        <img :src="shoe.imageUrl" alt="vue logo" class="w-full h-32 sm:h-48 object-cover">
        <div class="text-start m-4"> 
          <span class="font-bold block">{{ shoe.id }}</span>
          <span class="font-bold block">{{ shoe.name }}</span>
          <span class="block text-gray-500 text-sm">{{ shoe.gender }}</span>
          <span class="block text-gray-500 text-sm">{{ shoe.category }}</span>
          <span class="block text-gray-500 text-sm">₱ {{ shoe.price }}</span>
           <div class="d-flex justify-content-end">
            <router-link class="btn btn-primary h-25 me-1" :to="{path:`/edit/${shoe.id}`}">Edit</router-link>
            <p @click.prevent="deleteHandler(shoe.id)" class="btn btn-danger">Delete</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="isMaleShoes">
    <h4 class="mt-12 font-bold pb-2 border-b border-gray-200">Male Shoes</h4>
    
    <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10"> 
      <!-- Cards -->
      <div class="card" v-for="shoe in maleShoes" :key="shoe.id"> 
        <img :src="shoe.imageUrl" alt="vue logo" class="w-full h-32 sm:h-48 object-cover">
        <div class="text-start m-4"> 
          <span class="font-bold block">{{ shoe.id }}</span>
          <span class="font-bold">{{ shoe.name }}</span>
          <span class="block text-gray-500 text-sm">{{ shoe.gender }}</span>
          <span class="block text-gray-500 text-sm">{{ shoe.category }}</span>
          <span class="block text-gray-500 text-sm">₱ {{ shoe.price }}</span>
           <div class="d-flex justify-content-end">
            <router-link class="btn btn-primary h-25 me-1" :to="{path:`/edit/${shoe.id}`}">Edit</router-link>
            <p @click.prevent="deleteHandler(shoe.id)" class="btn btn-danger">Delete</p>
          </div>
        </div>
      </div>
    </div>
  </div>

   <div v-if="isFemaleShoes">
    <h4 class="mt-12 font-bold pb-2 border-b border-gray-200">Female Shoes</h4>
    
    <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10"> 
      <!-- Cards -->
      <div class="card" v-for="shoe in femaleShoes" :key="shoe.id"> 
        <img :src="shoe.imageUrl" alt="vue logo" class="w-full h-32 sm:h-48 object-cover">
        <div class="text-start m-4"> 
          <span class="font-bold block">{{ shoe.id }}</span>
          <span class="font-bold">{{ shoe.name }}</span>
          <span class="block text-gray-500 text-sm">{{ shoe.gender }}</span>
          <span class="block text-gray-500 text-sm">{{ shoe.category }}</span>
          <span class="block text-gray-500 text-sm">₱ {{ shoe.price }}</span>
           <div class="d-flex justify-content-end">
            <router-link class="btn btn-primary h-25 me-1" :to="{path:`/edit/${shoe.id}`}">Edit</router-link>
            <p @click.prevent="deleteHandler(shoe.id)" class="btn btn-danger">Delete</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="isUnisexShoes">
    <h4 class="mt-12 font-bold pb-2 border-b border-gray-200">Unisex Shoes</h4>
    
    <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10"> 
      <!-- Cards -->
      <div class="card" v-for="shoe in uniSexShoes" :key="shoe.id"> 
        <img :src="shoe.imageUrl" alt="vue logo" class="w-full h-32 sm:h-48 object-cover">
        <div class="text-start m-4"> 
          <span class="font-bold block">{{ shoe.id }}</span>
          <span class="font-bold">{{ shoe.name }}</span>
          <span class="block text-gray-500 text-sm">{{ shoe.gender }}</span>
          <span class="block text-gray-500 text-sm">{{ shoe.category }}</span>
          <span class="block text-gray-500 text-sm">₱ {{ shoe.price }}</span>
           <div class="d-flex justify-content-end">
            <router-link class="btn btn-primary h-25 me-1" :to="{path:`/edit/${shoe.id}`}">Edit</router-link>
            <p @click.prevent="deleteHandler(shoe.id)" class="btn btn-danger">Delete</p>
          </div>
        </div>
      </div>
    </div>
  </div>


</div>
</main>
</div>

</template>

<script>
import { ref } from '@vue/reactivity'
import { auth, shoesCollectionRef } from '../firebase'
import { computed, onBeforeMount, onMounted } from '@vue/runtime-core'
import { deleteDoc, doc, onSnapshot } from '@firebase/firestore'
import AdminSideNav from '../components/AdminSideNav.vue'


export default {
    name: 'AdminView',
    components:{ AdminSideNav },
    setup() {
      const isLoading = ref(true)
      const searchAllShoe = ref('')

      const name = ref('')
      const shoes = ref([])

      const allShoes = ref(true)
      const isMaleShoes = ref(false)
      const isFemaleShoes = ref(false)
      const isUnisexShoes = ref(false)

      const maleShoes = ref([])
      const femaleShoes = ref([])
      const uniSexShoes = ref([])

    // onBeforeMount(() => {
    //     let user = auth.currentUser;
    //   if(user) {
    //    name.value = user.email.split('@')[0]
    //   }
    // })

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
    shoes.value = getShoes
    maleShoes.value = (getShoes).filter((getShoe) => getShoe.gender === 'Male')
    femaleShoes.value = (getShoes).filter((getShoe) => getShoe.gender === 'Female')
    uniSexShoes.value = (getShoes).filter((getShoe) => getShoe.gender === 'Unisex')
    isLoading.value= false
    })
}) 
    const showAllShoeHandler = () => {
      allShoes.value = true
      isMaleShoes.value = false
      isFemaleShoes.value = false
      isUnisexShoes.value = false
    }
    const maleShoesHandler = () => {
      isMaleShoes.value = true
      allShoes.value = false
      isFemaleShoes.value = false
      isUnisexShoes.value = false
    }
    const femaleShoesHandler = () => {
      isFemaleShoes.value = true
      allShoes.value = false
      isMaleShoes.value = false
      isUnisexShoes.value = false
    }
    const unisexShoesHandler = () => {
      isUnisexShoes.value = true
      isFemaleShoes.value = false
      allShoes.value = false
      isMaleShoes.value = false
    }

    const searchAllShoeFilter = computed(() => {
      return shoes.value.filter(
        ({ name, id, category, gender }) => [ name, id, category, gender ]
          .some(val => val.toLowerCase().includes(searchAllShoe.value.toLowerCase()))
      );
      
    })

    

    return {isLoading,searchAllShoe, searchAllShoeFilter , name, shoes, allShoes,maleShoes, isMaleShoes, maleShoesHandler, showAllShoeHandler, femaleShoes, isFemaleShoes, femaleShoesHandler, uniSexShoes, isUnisexShoes, unisexShoesHandler }
    },
    methods: {
        async deleteHandler (shoeId) {
         
        try{
          
        
       this.$swal({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

await this.$swal({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes, delete it!',
  cancelButtonText: 'No, cancel!',
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    let shoeRef = doc(shoesCollectionRef, shoeId)
     deleteDoc(shoeRef)
    .then(() => {
      this.$swal(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
    })
    
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === this.DismissReason.cancel
  ) {
    this.$swal(
      'Cancelled',
      'Your imaginary file is safe :)',
      'error'
    )
  }
})
        
}
  catch(error){
          console.log(error)
        }
      }

      
    }
}
</script>

<style scoped>

img{
  width: 100%;
  height: 200px;
}

.loading-container {
  position: relative;
  width: fit-content;
  margin: 3rem auto;
}
.loading {
  height: 200px;
  position: absolute;
  top: -45%;
  left: 50%;
  transform: translate(-50%, -45%);
}

</style>