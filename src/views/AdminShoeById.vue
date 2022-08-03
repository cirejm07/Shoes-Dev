<template>
<div class="container mt-2 d-flex justify-content-center align-items-center">
 <div class="row container">
    <div class="col-md-6 d-md-flex justify-content-md-end">
        <div>
            <img :src="imageUrl" :alt="name">
            <div class="flex">
                <p @click="backHistoryHandler" class="btn btn-outline-dark mt-3">Back</p>
            </div>
        </div>
    </div>
    <div class="col-md-6 text-start">
        <span class="fw-bold lead">{{ name }}</span>
        <p>{{ gender }} shoe</p>
        <p>₱ {{ price }}</p>
        <img :src="imageUrl" style="width: 50px; height: 50px; border: 1px solid black; border-radius: 5px;">
        <p class="btn btn-dark border rounded-1 mt-3">Add to cart</p>
        <p>{{ description }}</p>
    </div>
 </div>
</div>
</template>

<script>
import { shoesCollectionRef } from '../firebase'
import { doc, getDoc  } from '@firebase/firestore'
import { ref } from '@vue/reactivity'
import { useRoute, useRouter } from 'vue-router'
import { onBeforeMount } from '@vue/runtime-core'
export default {
    name: 'AdminShoeById',
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
    
    const backHistoryHandler = () => {
        router.go(-1)
    }
      

    return { cityId, shoeRef, imageUrl, name,  description, price, size, category, gender, backHistoryHandler }
    }
}
</script>

<style scoped>
img{
    width: 300px;
    height: 250px;
}
</style>