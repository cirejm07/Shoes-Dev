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
      <div class="modal-body relative p-4">
        <div class="mb-3">
    <label for="exampleInputName1" class="form-label w-100 text-start">Full Name</label>
    <input v-model="name" type="text" class="form-control" id="exampleInputname1" aria-describedby="nameHelp">
    <!-- <p v-if="error === 'User not found' || error === 'Invalid Email'" class="text-danger text-start mt-1">{{ error }}</p> -->
  </div>
        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label w-100 text-start">Email address</label>
    <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <!-- <p v-if="error === 'User not found' || error === 'Invalid Email'" class="text-danger text-start mt-1">{{ error }}</p> -->
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label w-100 text-start">Password</label>
    <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
    <!-- <p v-if="error === 'Invalid Password'" class="text-danger text-start mt-1">{{ error }}</p> -->
  </div>
  <div class="mb-3">
    <label for="exampleInputAddress1" class="form-label w-100 text-start">Address</label>
    <input v-model="address" type="text" class="form-control" id="exampleInputAddress1">
    <!-- <p v-if="error === 'Invalid Password'" class="text-danger text-start mt-1">{{ error }}</p> -->
  </div>
      </div>
      <div
        class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
        <button type="button"
          class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-dismiss="modal">
          Close
        </button>
        <button type="button"
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
          Register Now
        </button>
      </div>
    </div>
  </div>
</div>

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
      <div class="modal-body relative p-4">
        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label w-100 text-start">Email address</label>
    <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">

  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label w-100 text-start">Password</label>
    <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="form-check text-start">
    <span v-if="!isCheck" class="text-danger text-start"> Please check the box in order to sign in. </span>
    <span v-else class="text-start"> I agree to terms and condition of Shoes Unlimited.</span>
    <input @click="checking" v-model="isCheck" id="checkBtn" type="checkbox" class="form-check-input">
  </div>
    <p  class="form-check-label mb-3 text-start" for="exampleCheck1">By checking the box, you agree to Shoes Unlimited's  Privacy Policy and Terms of Use.</p>
  
      </div>
      <div
        class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
        <button type="button"
          class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-dismiss="modal">
          Close
        </button>
        <button type="button"
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
          Login
        </button>
        
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
    name: 'ModalLogin',
}
</script>

<style>

</style>