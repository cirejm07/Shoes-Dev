<template>
  <div class="d-md-flex flex-wrap justify-content-evenly align-items-center mx-auto">
    
    <div v-for="shoe in shoes" :key="shoe.id" class="home">
  <div class="card mx-2" style="width: 18rem; height: 500px">
  <img :src="shoe.imageUrl" class="card-img-top" :alt="shoe.name">
  <div class="card-body">
    <p>id - {{shoe.id}}</p>
    <h5 class="card-title">Name - {{shoe.name}}</h5>
    <p>Price - {{shoe.price}}</p>
    <p>Category: {{shoe.category}}</p>
    <p>Gender - {{shoe.gender}}</p>
    <div class="d-flex justify-content-end">
      <router-link class="btn btn-primary h-25 me-1" :to="{path:`/edit/${shoe.id}`}">Edit</router-link>
     <p @click.prevent="deleteHandler(shoe.id)" class="btn btn-danger">Delete</p>
    </div>
  </div>
</div>
    <br>
  </div>
  </div>

</template>

<script>
import { ref } from '@vue/reactivity'
import { auth, shoesCollectionRef } from '../firebase'
import { onBeforeMount, onMounted } from '@vue/runtime-core'
import { deleteDoc, doc, onSnapshot } from '@firebase/firestore'
export default {
    name: 'AdminView',
    setup() {
      const name = ref('')
      const shoes = ref([])
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
    shoes.value = getShoes
    })
}) 
    

    return { name, shoes }
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

</style>