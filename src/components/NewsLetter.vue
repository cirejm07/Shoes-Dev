<template>
  <div class="container my-24 px-6 mx-auto border-t-2 border-gray-400">
        
          <section class="mb-32 text-gray-800 text-center lg:text-left mt-5">
            <div class="flex flex-wrap justify-center">
              <div class="grow-0 shrink-0 basis-auto w-full lg:w-10/12 px-3">
                <div class="grid lg:grid-cols-2 gap-x-6 items-center">
                  <div class="mb-10 lg:mb-0">
                    <h2 class="text-3xl font-bold">
                      Do not miss any updates.
                      <br />
                      <span class="text-blue-600"
                        >Subscribe to the newsletter</span
                      >
                    </h2>
                  </div>

                  <div class="mb-6 md:mb-0">
                    <div class="md:flex flex-row">
                      <input
                        type="text"
                        class="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Enter your email"
                      />
                      <button
                        type="submit"
                        class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
         </div>
</template>

<script>
export default {
    name: 'NewsLetter',
}
</script>

<style>

</style>