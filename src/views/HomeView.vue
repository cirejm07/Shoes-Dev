<template>
<!-- <WelcomeNav :title="getId === '7W29HGeCdfPpqASfWeHlZkOY9t63' ? 'Admin' : 'Hi'" :user="userName" :signoutHandler="signoutHandler" />
  <div v-if="isShow && getId === '7W29HGeCdfPpqASfWeHlZkOY9t63'">
   <AdminNav :user="userName" :signoutHandler="signoutHandler" />
  </div>
  <div v-else-if="getId !== '7W29HGeCdfPpqASfWeHlZkOY9t63'">
    <CustomerNavVue :user="userName" :signoutHandler="signoutHandler" />
  </div> -->

<body class="bg-gray-200 font-sans leading-normal tracking-normal">
	<!--Header-->
	<div class="w-full m-0 p-0 bg-cover bg-bottom object-cover" style="background-image:url('https://cdn.shopify.com/s/files/1/0276/9879/0535/files/Hero-2_7b518bd5-fc42-4b95-8726-19ea0c91d066_2048x2048.jpg?v=1585570565'); height: 60vh; max-height:450px; background-position: center; background-repeat: no-repeat; background-size: cover;">
			<div class="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal block">
				<!--Title-->
				<p class="text-xl md:text-xl text-green-700 font-bold">Limited Time Offer, Online Purchase Only!</p>
					<p class="text-green-700 font-extrabold text-3xl md:text-5xl uppercase italic">
						Shoes Unlimited Offer
					</p>
					<p class="text-xl md:text-2xl text-green-700 font-bold">Take 20% Off 'Sale Must Haves'</p>
					<button class="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full">Buy Now!</button>
			</div>
		</div>
		
		<!--Container-->
		<div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
			
			<div class="mx-0 sm:mx-6">
				
				<!--Nav-->
				<nav class="mt-0 w-full">
					<div class="container mx-auto flex items-center">
						<div class="mb-5 flex w-1/2 justify-end content-center">		
							
						</div>

					</div>
				</nav>

				<div class="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
					
				<!--Lead Card-->
				<div v-for="shoe in trendingShoe" :key="shoe.id" class="flex h-full bg-white rounded overflow-hidden shadow-lg">
					<router-link :to="{path:`/shoe/${shoe.id}`}" class="flex flex-wrap no-underline hover:no-underline">
						<div class="w-full md:w-2/3 rounded-t">	
							<img style="height: 500px; width:100%;" :src="shoe.imageUrl" class="h-full w-full shadow">
						</div>

						<div class="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
							<div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
								
								<div class="mt-3 w-full font-bold text-xl text-gray-900 px-6">Trending</div>
								<p class="w-full mt-2 text-gray-800 font-serif text-base px-6 mb-5">
									{{ shoe.name }}
								</p>
								<p class="w-100 text-gray-800 font-serif text-base px-6 mb-5">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, nemo natus quis sunt ducimus suscipit eius corporis nulla, nostrum perspiciatis explicabo perferendis, dolore magnam? Incidunt ex fuga soluta eligendi veniam.
								</p>
							</div>

							<div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
								<div class="flex items-center justify-between">
									<img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author">
									<p class="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
								</div>
							</div>
						</div>

					</router-link>
				</div>
				<!--/Lead Card-->


				<!--Posts Container-->
				<div class="flex flex-wrap justify-between pt-12 -mx-6">

					<!--1/3 col -->
					<div class="h-50 w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
						<div class="card-container flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
							<router-link to="/men" class="flex flex-wrap no-underline hover:no-underline">
								<img src="https://images.unsplash.com/photo-1582274528667-1e8a10ded835?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" class="h-64 w-full rounded-t">
								<p class="gender-card w-full text-gray-600 text-xs md:text-sm px-6">Men</p>
							</router-link>
						</div>
					</div>
				
					
					<!--1/3 col -->
					<div class="h-50 w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
						<div class="card-container flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
							<router-link to="/women" class="flex flex-wrap no-underline hover:no-underline">
								<img src="https://images.unsplash.com/photo-1616847220575-31b062a4cd05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" class="h-64 w-full rounded-t">
								<p class="gender-card w-full text-gray-600 text-xs md:text-sm px-6">Women</p>
							</router-link>
						</div>
					</div>

					<!--1/3 col -->
					
					<div class=" w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
						<div class="card-container flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
							<router-link to="/unisex" class="flex flex-wrap no-underline hover:no-underline"> 
								<img src="https://images.unsplash.com/photo-1600950207944-0d63e8edbc3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" class="h-64 w-full rounded-t">
								<p class="gender-card w-full text-gray-600 text-xs md:text-sm px-6">Unisex</p>
								
							</router-link>
						</div>
						
					</div>


					<!--1/2 col -->
					<div class="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
						<div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
							<a href="#" class="flex flex-wrap no-underline hover:no-underline">
								<img src="https://source.unsplash.com/collection/3657445/800x600" class="h-full w-full rounded-t pb-6">
								<p class="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
								<div class="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
								<p class="text-gray-800 font-serif text-base px-6 mb-5">
									Lorem ipsum eu nunc commodo posuere et sit amet ligula. 
								</p>
							</a>
						</div>
						<div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
							<div class="flex items-center justify-between">
								<img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author">
								<p class="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
							</div>
						</div>
					</div>

					<!--1/2 col -->
					<div class="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
						<div class="flex-1 flex-row bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
							<a href="#" class="flex flex-wrap no-underline hover:no-underline">	
								<img src="https://source.unsplash.com/collection/764827/800x600" class="h-full w-full rounded-t pb-6">
								<p class="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
								<div class="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
								<p class="text-gray-800 font-serif text-base px-6 mb-5">
									Lorem ipsum eu nunc commodo posuere et sit amet ligula. 
								</p>
							</a>
						</div>
						<div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
							<div class="flex items-center justify-between">
								<img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author">
								<p class="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
							</div>
						</div>
					</div>



					<!--2/3 col -->
					<div class="w-full md:w-2/3 p-6 flex flex-col flex-grow flex-shrink">
						<div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
							<a href="#" class="flex flex-wrap no-underline hover:no-underline">	
								<img src="https://source.unsplash.com/collection/325867/800x600" class="h-full w-full rounded-t pb-6">
								<p class="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
								<div class="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
								<p class="text-gray-800 font-serif text-base px-6 mb-5">
									Lorem ipsum eu nunc commodo posuere et sit amet ligula. 
								</p>
							</a>
						</div>
						<div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
							<div class="flex items-center justify-between">
								<img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author">
								<p class="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
							</div>
						</div>
					</div>

					<!--1/3 col -->
					<div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
						<div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
							<a href="#" class="flex flex-wrap no-underline hover:no-underline">
								<img src="https://source.unsplash.com/collection/1118905/800x600" class="h-full w-full rounded-t pb-6">
								<p class="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
								<div class="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
								<p class="text-gray-800 font-serif text-base px-6 mb-5">
									Lorem ipsum eu nunc commodo posuere et sit amet ligula. 
								</p>
							</a>
						</div>
						<div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
							<div class="flex items-center justify-between">
								<img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author">
								<p class="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
							</div>
						</div>
					</div>

				</div>
				<!--/ Post Content-->
						
			</div>
			
			
				<!--Subscribe-->	
				<div class="container font-sans bg-green-100 rounded mt-8 p-4 md:p-24 text-center">
					<h2 class="font-bold break-normal text-2xl md:text-4xl">Subscribe to Ghostwind CSS</h2>
					<h3 class="font-bold break-normal font-normal text-gray-600 text-base md:text-xl">Get the latest posts delivered right to your inbox</h3>
					<div class="w-full text-center pt-4">
						<form action="#">
							<div class="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
								<input type="email" placeholder="youremail@example.com" class="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none">
								<button type="submit" class="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400">Subscribe</button>
							</div>
						</form>
					</div>
				</div>
				<!-- /Subscribe-->
			
	
				<!--Author-->
				<div class="flex w-full items-center font-sans p-8 md:p-24">
					<img class="w-10 h-10 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of Author">
					<div class="flex-1">
						<p class="text-base font-bold text-base md:text-xl leading-none">Ghostwind CSS</p>
						<p class="text-gray-600 text-xs md:text-base">Tailwind CSS version of Ghost's Casper theme by <a class="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500" href="https://www.tailwindtoolbox.com">TailwindToolbox.com</a></p>
					</div>
					<div class="justify-end">
						<button class="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full">Read More</button>
					</div>
				</div>
				<!--/Author-->
			
		</div>
	

	</div>
  </body>
</template>

<script>
import { ref } from '@vue/reactivity'
import { auth, shoesCollectionRef } from '../firebase'
import { onBeforeMount, onMounted } from '@vue/runtime-core'
import { deleteDoc, doc, onSnapshot } from '@firebase/firestore'




export default {
    name: 'HomeView',
	components: {  },
    setup() {
      const name = ref('')
    	const menShoe = ref([])
		const womenShoe = ref([])
		const uniSexShoe = ref([])
		const trendingShoe = ref([])

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
    menShoe.value = getShoes.filter((getShoe, index) => getShoe.gender === 'Male' &&  Math.ceil(index * Math.random() << 0)).slice(0,1)
	womenShoe.value = getShoes.filter((getShoe, index) => getShoe.gender === 'Female' &&  Math.ceil(index * Math.random() << 0)).slice(0,1)
	uniSexShoe.value = getShoes.filter((getShoe, index) => getShoe.gender === 'Unisex' &&  Math.ceil(index * Math.random() << 0)).slice(0,1)
	trendingShoe.value = getShoes.filter((getShoe, index) =>Math.floor(Math.random() * Math.floor(Math.random() * index))).slice(0,1)
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
    

    return { name, menShoe, womenShoe, uniSexShoe , deleteHandler, trendingShoe }
    }
}
</script>

<style scoped>
.card-container {
	position: relative;
}
.card-container img {
	height: 400px;
}
.gender-card {
	background: rgba(0, 0, 0, 0.7);
	padding: 2px 10px;
	position: absolute;
	left: 10;
	bottom: 40%;
	transform: translate(-10%, 40%);
	width: 40%;
	text-align: left;
	width: fit-content;
	text-transform: uppercase;
	color: #fff;
}

</style>