<template>
<div class="container-main">
    <h2>Add Shoe</h2>
  <div class="row justify-content-center">
    <div class="mb-3 col-4">
      <form @submit.prevent="addHandler"  class="container">
      <div class="mb-3 col">
          <label for="brand" class="form-label">Brand</label>
          <input v-model="brand" type="text" class="form-control" id="brand" aria-describedby="emailHelp">
        </div>
        <div class="mb-3 col">
          <label for="name" class="form-label">Name</label>
          <input v-model="name" type="text" class="form-control" id="name" aria-describedby="emailHelp">
        </div>
        <div class="mb-3 col">
          <label for="description" class="form-label">Description</label><br>
          <textarea class="border form-control" v-model="description" id="description" cols="53" rows="8" placeholder="Describe the product"></textarea>
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
          <select class="border" v-model="gender" id="gender">
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
          <button type="submit" class="btn btn-primary mt-6">Add Shoe</button>
      </form>
    </div>
  <div class="col-4 mt-4">
      <div v-if="image" class="d-flex justify-center"><img class="img-fluid" :src="image" alt=""></div>
      <div v-if="loadingState">{{ loadingState }}</div>
        <label for="image-url" class="form-label mt-4">Image</label>
        <input @change="imageHandler" type="file" class="form-control" id="image-url" aria-describedby="emailHelp">
  </div> 

  </div>
</div>
</template>

<script>

import { shoesCollectionRef } from '../firebase'
import { addDoc, serverTimestamp, setDoc } from '@firebase/firestore'
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { getDownloadURL, getStorage, ref as imageRef, uploadBytes, uploadBytesResumable } from '@firebase/storage'

export default {
    name:'AdminAdd',
    setup() {
      const router = useRouter()


      const image = ref(null)
      const brand = ref(null)
      const name = ref(null)
      const description = ref(null)
      const price = ref(null)
      const size = ref(null)
      const category = ref(null)
      const gender = ref(null)
      const loadingState = ref('')


      const addHandler = async () => {
         try{
          const addDocument = await addDoc(shoesCollectionRef, {
          image:image.value, 
          brand: brand.value,
          name: name.value, 
          description: description.value, 
          price: price.value, 
          size: size.value, 
          category: category.value, 
          gender: gender.value,
          createdAt: serverTimestamp()
         })
         router.push('/admin')
         console.log(addDocument)
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

      return { image, loadingState, brand, name, description, price, size, category, gender, addHandler,imageHandler  }
    }
}
</script>

<style scoped>
img {
  width: 150px;
  height: 150px;
}
</style>