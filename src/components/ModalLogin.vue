<template>
  <div class="">
  <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
    Signup
  </button>
  
  <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable">
    Login
  </button>
</div>

<div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
  <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
    <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
          Create an Account
        </h5>
        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form @submit.prevent="registerHandler" class="modal-body relative p-4">
      <p v-if="error" class="text-danger my-2">{{error}}</p>
      <div class="mb-3">
    <label for="image" class="form-label w-100 text-start">Avatar</label>
    <div v-if="image">
    <img class="upload-image mx-auto" :src="image" alt="" />
    </div>
    <div v-if="loadingState">
      <p>{{ loadingState }}</p>
    </div>
    <div v-if="!loadingState">
      
    </div>
    <input @change="imageHandler" type="file" class="form-control" id="image" aria-describedby="emailHelp">
     </div>
        <div class="mb-3">
    <label for="regName" class="form-label w-100 text-start">Full Name</label>
    <input v-model="regName" type="text" class="form-control" id="regName" aria-describedby="nameHelp">
  </div>
        <div class="mb-3">
    <label for="regEmail" class="form-label w-100 text-start">Email address</label>
    <input v-model="regEmail" type="email" class="form-control" id="regEmail" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="regPassword" class="form-label w-100 text-start">Password</label>
    <input v-model="regPassword" type="password" class="form-control" id="regPassword">
  </div>
  <div class="mb-3">
    <label for="regAddress" class="form-label w-100 text-start">Address</label>
    <input v-model="regAddress" type="text" class="form-control" id="regAddress">
  </div>
  <div
        class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
        <button type="button"
          class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-dismiss="modal">
          Close
        </button>
        <input type="submit" value="REGISTER NOW"
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
      </div>
       <p class="cta-modal text-end w-max ms-auto me-5" data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable">Already got an account?</p>
      </form>
      
    </div>
  </div>
</div>


<!-- LOGIN -->
<div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenteredScrollable" tabindex="-1" aria-labelledby="exampleModalCenteredScrollable" aria-modal="true" role="dialog">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
    <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalCenteredScrollableLabel">
          Welcome, Please Login
        </h5>
        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form @submit.prevent="loginHandler" class="modal-body relative p-4">
      <p v-if="error === 'User disabled'" class="text-danger my-2">{{error}}</p>
        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label w-100 text-start">Email address</label>
    <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <p v-if="error === 'User not found' || error === 'Invalid Email'" class="text-danger text-start mt-1">{{ error }}</p>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label w-100 text-start">Password</label>
    <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
     <p v-if="error === 'Invalid Password'" class="text-danger text-start mt-1">{{ error }}</p>
  </div>
  <div class="form-check text-start">
    <span v-if="!isCheck" class="text-danger text-start"> Please check the box in order to sign in. </span>
    <span v-else class="text-start"> I agree to terms and condition of Shoes Unlimited.</span>
    <input @click="checking" v-model="isCheck" id="checkBtn" type="checkbox" class="form-check-input">
  </div>
    <p  class="form-check-label mb-3 text-start" for="exampleCheck1">By checking the box, you agree to Shoes Unlimited's  Privacy Policy and Terms of Use.</p>
  <div
        class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
        <button type="button"
          class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-dismiss="modal">
          Close
        </button>
        <input :disabled="!isCheck" type="submit" value="LOGIN"
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
      </div>
      </form>
      <p class="cta-modal text-end w-max ms-auto me-5" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Don't have an account?</p>
    </div>
  </div>
</div>

</template>

<script>
import { ref } from '@vue/reactivity'
import { auth, usersCollectionRef } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth'
import { useRouter } from 'vue-router'
import { doc, setDoc } from '@firebase/firestore'
import { getDownloadURL, getStorage, ref as imageRef, uploadBytes, uploadBytesResumable } from '@firebase/storage'
import Swal from 'sweetalert2'

export default {
    name: 'ModalLogin',
    setup() {
      const regEmail = ref('')
      const regPassword = ref('')
      const regName = ref('')
      const regAddress = ref('')
      const regError = ref(null)
      const router = useRouter()

      const image = ref(null)
      const email = ref('')
      const password = ref('')
      const error = ref(null)
      const isCheck = ref(true)
      const checkValue = ref(false)
      const loadingState = ref('')


      const checking = (e) => {
          if(e.target.checked){
            checkValue.value = true
           console.log(checkValue)
          }
      }

      // const router = useRouter()
      const loginHandler = () => {
        signInWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
          if(data.user.uid  === '7W29HGeCdfPpqASfWeHlZkOY9t63'){
            console.log(data)
            window.location.assign('/admin')
          } else {
            window.location.assign('/')
          }
          if (checkValue.value == false){
             error.value = 'Please check the box'
          } 

          } )
        .catch((err) => {
          if(err.code === 'auth/user-not-found'){
            error.value = 'User not found'
          } else if (err.code === 'auth/invalid-email'){
            error.value = 'Invalid Email'
          }
          else if (err.code === 'auth/wrong-password'){
            error.value = 'Invalid Password'
          } else if (err.code === 'auth/user-disabled'){
            error.value = 'User disabled'
          } else if (isCheck.value === false){
            email.value = ''
            password.value = ''
            return err
          }
        })
       }

       const imageHandler = (e) => {
        var file = e.target.files[0]
        console.log(file)
        var storage = getStorage();
        var storageRef = imageRef(storage, 'assets/' + file.name);

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

        const registerHandler =  () => {
        createUserWithEmailAndPassword(auth, regEmail.value, regPassword.value)
          .then(() => {
           setDoc(doc(usersCollectionRef, auth.currentUser.uid), {
            id: auth.currentUser.uid,
            name: regName.value,
            address: regAddress.value,
            image: image.value
        })
          let timerInterval
          Swal.fire({
            title: `Welcome ${regName.value}`,
            html: 'We will redirect to page in <b></b> milliseconds.',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
              const b = Swal.getHtmlContainer().querySelector('b')
              timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
              }, 100)
            },
            willClose: () => {
              clearInterval(timerInterval)
            }
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log('I was closed by the timer')
            }
          })
          setTimeout(() => {
            window.location.assign('/')
          },1999)
          })
          .catch((err) => {
            console.log(err.message)
            if(err.code === 'auth/weak-password'){
              error.value = 'Password should be at least 6 characters'
            } else if(err.code === 'auth/invalid-email'){
              error.value = 'Invalid Email'
            } else if(err.code === 'auth/email-already-in-use'){
              error.value = 'Email already registered'
            }
          })
      }

       return { loadingState,checking, checkValue, image ,email, password, isCheck, loginHandler , error, regEmail, regPassword, regName, regAddress, regError, imageHandler ,registerHandler  }
  }
}
</script>

<style scoped>

.cta-modal {
  cursor:pointer
}

.upload-image {
  width: 350px;
  border-radius: 50%;
  height: 300px;
  border: 1px solid rgb(156, 152, 152);
}

</style>