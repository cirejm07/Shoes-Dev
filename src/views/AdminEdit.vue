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
          <textarea class="border"  v-model="description" name="" id="description" cols="53" rows="3" placeholder="Describe the product"></textarea>
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
          <select  class="border" v-model="gender" id="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Unisex">Unisex</option>
          </select>
 
          <label for="category" class="form-label mx-2">Category</label>
          <select class="border" v-model="category" id="category">
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
        <div v-if="image" class="d-flex justify-center"><img class="img-fluid" :src="image" alt=""></div>
        <div v-if="loadingState">
          {{ loadingState }}
        </div>
          <label for="image-url" class="form-label">Image Url</label>
           <input @change="imageHandler" type="file" class="form-control" id="image-url" aria-describedby="emailHelp">
      </form>
    </div>
  </div>
</div>
</template>

<script>
import { shoesCollectionRef } from '../firebase'
import { doc, getDoc, setDoc  } from '@firebase/firestore'
import { ref } from '@vue/reactivity'
import { useRoute, useRouter } from 'vue-router'
import { onBeforeMount } from '@vue/runtime-core'
import { getDownloadURL, getStorage, ref as imageRef, uploadBytes, uploadBytesResumable } from '@firebase/storage'

export default {
    name:'AdminEdit',
    setup() {
    const shoeId = ref(null)
    const route = useRoute()
    const router = useRouter()
    const shoeRef = ([])
    shoeId.value = route.params.id
    
      const image = ref(null)
      const name = ref(null)
      const description = ref(null)
      const price = ref(null)
      const size = ref(null)
      const category = ref(null)
      const gender = ref(null)
      const loadingState = ref(null)

    onBeforeMount(async () => {
    const docRef = doc(shoesCollectionRef, shoeId.value);
    shoeRef.value = docRef
    console.log(shoeRef)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      let ImageUrlData = docSnap.data().image
      image.value = ImageUrlData
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
      image: image.value,
      name: name.value,
      description: description.value,
      price: price.value,
      size: size.value,
      category: category.value,
      gender: gender.value
    })
    alert(`Shoe ID: ${shoeId.value} has been updated`)
    router.push('/admin')
   }
   catch(err){
    console.log(err.message)
   }
  }

  const imageHandler = (e) => {
        var file = e.target.files[0]
        console.log(file)
        var storage = getStorage();
        var storageRef = imageRef(storage, 'products/' + file.name);

        uploadBytes(storageRef, file).then((snapshot) => {
          image.value = snapshot
        });
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed', 
        (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
        case 'paused':
          loadingState.value = 'Upload is paused'
          break;
        case 'running':
          loadingState.value = 'Upload is ' + progress + '% done'
          break;
        }
        }, 
        (error) => {
          loadingState.value = 'Upload Failed'
        }, 
        () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      image.value = downloadURL
      console.log('File available at', downloadURL);
          });
        }
      );
            }

      

    return { imageHandler, loadingState ,shoeId, shoeRef, image, name,  description, price, size, category, gender, updateHandler }
    }
}
</script>

<style scoped>
img {
  width: 150px;
}
</style>

