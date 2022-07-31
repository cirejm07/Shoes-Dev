<template>

</template>

<script>
import { ref } from '@vue/reactivity'
import { auth, shoesCollectionRef } from '../firebase'
import { onBeforeMount, onMounted } from '@vue/runtime-core'
import { deleteDoc, doc, onSnapshot } from '@firebase/firestore'
export default {
    name: 'HomeView',
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
    
    const deleteHandler = async (shoeId)  => {
        
        try{
          let shoeRef = doc(shoesCollectionRef, shoeId)
        await deleteDoc(shoeRef)
        alert('shoe deleted')
        }
        catch(error){
          console.log(error)
        }
    }
    

    return { name, shoes, deleteHandler }
    }
}
</script>

<style scoped>


</style>