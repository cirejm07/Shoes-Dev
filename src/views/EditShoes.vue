<template>
<div class="container-main">
    <h2>Edit Shoe</h2>
  <div class="row justify-content-center">
    <div class="mb-3 col-4">
      <form @submit.prevent="updateHandler" class="container">
        <div class="mb-3 col">
          <label for="name" class="form-label">Name</label>
          <input  v-model="name" type="text" class="form-control" id="name" aria-describedby="emailHelp">
        </div>
        <div class="mb-3 col">
          <label for="description" class="form-label">Description</label>
          <textarea  v-model="description" name="" id="description" cols="50" rows="3" placeholder="Describe the product"></textarea>
        </div>
        <div class="row justify-content-center">
        <div class="mb-3 col-6">
          <label for="price" class="form-label">Price</label>
          <input  v-model="price" type="number" class="form-control" id="price" aria-describedby="emailHelp">
        </div>
        <div class="mb-3 col-6">
          <label for="size" class="form-label">Size</label>
          <input  v-model="size" type="number" class="form-control" id="size" aria-describedby="emailHelp">
        </div>
        </div>
        <div class="mb-3 col">
          <label for="gender" class="form-label mx-2">Gender</label>
          <select  v-model="gender" id="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Unisex">Unisex</option>
          </select>
 
          <label for="category" class="form-label mx-2">Category</label>
          <select  v-model="category" id="category">
            <option value="Running">Running</option>
            <option value="Walking">Walking</option>
            <option value="Basketball">Basketball</option>
            <option value="Training & Gym">Training & Gym</option>
          </select>
        </div>
          <button type="submit" class="btn btn-primary">Edit Shoe</button>
      </form>
    </div>
    <div class="col-4 mt-4">  
      <form @submit.prevent="updateHandler" class="container">
        <div><img :src="imageUrl" :alt="name"></div>
          <label for="image-url" class="form-label">Image Url</label>
          <input  v-model="imageUrl" type="text" class="form-control" id="image-url" aria-describedby="emailHelp">
      </form>
    </div>
  </div>
</div>
</template>

<script>
import { shoesCollectionRef } from '@/firebase'
import { doc, getDoc, setDoc  } from '@firebase/firestore'
import { ref } from '@vue/reactivity'
import { useRoute, useRouter } from 'vue-router'
import { onBeforeMount } from '@vue/runtime-core'


export default {
    name:'EditShoes',
    setup() {
    const cityId = ref(null)
    const route = useRoute()
    const router = useRouter()
    const shoeRef = ([])
    cityId.value = route.params.id
    
      const imageUrl = ref(null)
      const name = ref(null)
      const description = ref(null)
      const price = ref(null)
      const size = ref(null)
      const category = ref(null)
      const gender = ref(null)
   
    onBeforeMount(async () => {
    const docRef = doc(shoesCollectionRef, cityId.value);
    shoeRef.value = docRef
    console.log(shoeRef)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      let ImageUrlData = docSnap.data().imageUrl
      imageUrl.value = ImageUrlData
      let nameData = docSnap.data().name
      name.value = nameData
      let descriptionData = docSnap.data().description
      description.value = descriptionData
      let priceData = docSnap.data().price
      price.value = priceData
      let sizeData = docSnap.data().size
      size.value = sizeData
      let categoryData = docSnap.data().category
      category.value = categoryData
      let genderData = docSnap.data().gender
      gender.value =  genderData
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    })
    
  const updateHandler = async () => {
   try{
     await setDoc(shoeRef.value, {
      imageUrl: imageUrl.value,
      name: name.value,
      description: description.value,
      price: price.value,
      size: size.value,
      category: category.value,
      gender: gender.value
    })
    alert(`Shoe ID: ${cityId.value} has been updated`)
    router.push('/admin')
   }
   catch(err){
    console.log(err.message)
   }
  }

      

    return { cityId, shoeRef, imageUrl, name,  description, price, size, category, gender, updateHandler }
    }
}
</script>

<style scoped>
img {
  width: 150px;
}
</style>

