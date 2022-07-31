<template>
<div class="container-main">
    <h2>Add Shoe</h2>
  <div class="row justify-content-center">
    <div class="mb-3 col-4">
      <form @submit.prevent="addHandler"  class="container">
        <div class="mb-3 col">
          <label for="name" class="form-label">Name</label>
          <input v-model="name" type="text" class="form-control" id="name" aria-describedby="emailHelp">
        </div>
        <div class="mb-3 col">
          <label for="description" class="form-label">Description</label>
          <textarea v-model="description" name="" id="description" cols="50" rows="3" placeholder="Describe the product"></textarea>
        </div>
        <div class="row justify-content-center">
        <div class="mb-3 col-6">
          <label for="price" class="form-label">Price</label>
          <input v-model="price" type="number" class="form-control" id="price" aria-describedby="emailHelp">
        </div>
        <div class="mb-3 col-6">
          <label for="size" class="form-label">Size</label>
          <input v-model="size" type="number" class="form-control" id="size" aria-describedby="emailHelp">
        </div>
        </div>
        <div class="mb-3 col">
          <label for="gender" class="form-label mx-2">Gender</label>
          <select v-model="gender" id="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Unisex">Unisex</option>
          </select>
        
          <label for="category" class="form-label mx-2">Category</label>
          <select v-model="category" id="category">
            <option value="Running">Running</option>
            <option value="Walking">Walking</option>
            <option value="Basketball">Basketball</option>
            <option value="Training & Gym">Training & Gym</option>
          </select>
        </div>
          <button type="submit" class="btn btn-primary">Add Shoe</button>
      </form>
    </div>
  <div class="col-4 mt-4">
    <form @submit.prevent="addHandler"  class="container">
      <div><img :src="imageUrl" alt=""></div>
        <label for="image-url" class="form-label mt-4">Image Url</label>
        <input v-model="imageUrl" type="text" class="form-control" id="image-url" aria-describedby="emailHelp">
    </form>
  </div> 
<!-- <div>
  <p>imageUrl - <img :src="imageUrl" :alt="imageUrl"></p>
  <p>name - {{name}}</p>
  <p>description - {{description}}</p>
  <p>price - {{price}}</p>
  <p>size - {{size}}</p>
  <p>category - {{category}}</p>
  <p> gender - {{gender}}</p>
</div> -->


  </div>
</div>
</template>

<script>

import { shoesCollectionRef } from '../firebase'
import { addDoc } from '@firebase/firestore'
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'

export default {
    name:'AddShoes',
    setup() {
      const router = useRouter()


      const imageUrl = ref(null)
      const name = ref(null)
      const description = ref(null)
      const price = ref(null)
      const size = ref(null)
      const category = ref(null)
      const gender = ref(null)

      const addHandler = async () => {
         try{
          const addDocument = await addDoc(shoesCollectionRef, {
          imageUrl:imageUrl.value, 
          name: name.value, 
          description: description.value, 
          price: price.value, 
          size: size.value, 
          category: category.value, 
          gender: gender.value
         })
         router.push('/admin')
         console.log(addDocument)
         }
         catch(err){
          console.log(err.message)
         }
      }

      return { imageUrl, name, description, price, size, category, gender, addHandler  }
    }
}
</script>

<style scoped>
img {
  width: 150px;
  height: 150px;
}
</style>