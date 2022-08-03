<<<<<<< HEAD:src/views/AboutView.vue
<template>
<div class="container-fluid" id="img">
  <div class="row justify-content-center">
    <div class="col-12"><p class="fs-1 fw-bold fst-italic text-light mt-4">About Us</p></div>
    <div class="col-4 mt-4">
      <img src="https://static01.nyt.com/images/2018/12/13/sports/13shoes-web1/13shoes-web1-articleLarge-v3.gif?quality=75&auto=webp&disable=upscale" class="d-block w-100" id="shoes" alt="...">" class="d-block w-100" alt="...">
    </div>
    <div class="col-6"><p class="fs-5 fw-lighter text-light text-sm-start mx-5">At Apptopia, we want to solve the biggest problem in mobile: everyone is guessing.
Publishers need to know what apps to build, how to monetize them, and where to price them. Advertisers and brands need to identify their target users, and determine where to allocate resources in order to reach them most effectively. Investors need to know which apps and genres are growing the quickest, and where users are really spending their time (and money).
In business, we need data to make informed decisions. Apptopia provides the most actionable mobile app insights in the industry. We aim to make this data available to as many people as possible.</p></div>
  </div><br><br>

<!-- <div class="container mx-auto">
      <h2 class="mt-12 font-bold pb-2 text-gray-300">Meet our group</h2>
    </div>
<div class="container mx-auto flex justify-between gap-4 grid-cols-3">
  <div class="max-w-sm rounded overflow-hidden shadow-2xl hover:bg-violet-900">
  <img class="w-full" src="https://iconape.com/wp-content/png_logo_vector/avatar-4.png" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl text-gray-300 mb-2">Winefredo Sailes</div>
    <p class="text-gray-400 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  </div>

  <div class="max-w-sm rounded overflow-hidden shadow-2xl">
  <img class="w-full" src="https://iconape.com/wp-content/png_logo_vector/avatar-4.png" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl text-gray-300 mb-2">Jeric Moreno</div>
    <p class="text-gray-400 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  </div>

  <div class="max-w-sm rounded overflow-hidden shadow-2xl">
  <img class="w-full" src="https://iconape.com/wp-content/png_logo_vector/avatar-4.png" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl text-gray-300 mb-2">Irwin Gatbonton</div>
    <p class="text-gray-400 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  </div>
</div> -->

  <div class="container justify-content-center">
    <div class="col-12"><p class="fs-2 fw-bold text-light mt-4">Meet our group</p></div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <img src="https://iconape.com/wp-content/png_logo_vector/avatar-4.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Wine Fredo</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://i.pinimg.com/originals/b9/b9/f7/b9b9f75aecadb229fe904d3783918896.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Jeric Raval</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://media.philstar.com/photos/2019/06/10/met1-erwin-tulfo-geremy-pintolo_2019-06-10_21-26-18.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Erwin Tulfo</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
              </div>
          </div>
        </div>
      </div>
  </div>
  <br>
</div>
  
</template>

<script>

export default {
    name: 'AboutView'
}
</script>
    
<style scoped>
#img{
  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://www.fairfaxcounty.gov/parks/sites/parks/files/Assets/documents/recenters/calendars/Spring%20Hill_030116_0081.jpg");
  background-position: center;
  background-size: cover;
}
#shoes {
  border-radius: 2%;
}
img{
  width: 400px;
  height: 300px;
}

=======
<template>

<div class="container-fluid" id="img">
  <div class="row justify-content-center">
    <div class="col-12"><p class="fs-1 fw-bold fst-italic text-light mt-4">About Us</p></div>
    <div class="col-4 mt-5">
      <img src="https://static01.nyt.com/images/2018/12/13/sports/13shoes-web1/13shoes-web1-articleLarge-v3.gif?quality=75&auto=webp&disable=upscale" class="d-block w-100" id="shoes" alt="...">" class="d-block w-100" alt="...">
    </div>
    <div class="col-6"><p class="fs-5 fw-normal text-light text-start mx-5">At Apptopia, we want to solve the biggest problem in mobile: everyone is guessing.
Publishers need to know what apps to build, how to monetize them, and where to price them. Advertisers and brands need to identify their target users, and determine where to allocate resources in order to reach them most effectively. Investors need to know which apps and genres are growing the quickest, and where users are really spending their time (and money).
In business, we need data to make informed decisions. Apptopia provides the most actionable mobile app insights in the industry. We aim to make this data available to as many people as possible.</p></div>
  </div>
</div>
  <div class="container justify-content-center">
    <div class="col-12"><p class="fs-2 fw-bold text-light mt-4">Meet our group</p></div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <img src="https://iconape.com/wp-content/png_logo_vector/avatar-4.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Wine Fredo</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://i.pinimg.com/originals/b9/b9/f7/b9b9f75aecadb229fe904d3783918896.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Jeric Raval</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://media.philstar.com/photos/2019/06/10/met1-erwin-tulfo-geremy-pintolo_2019-06-10_21-26-18.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Erwin Tulfo</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
              </div>
          </div>
        </div>
      </div>
  </div>
  <br>

</template>

<script>


export default {
    name: 'TheAboutPage',
    components: {  }
}
</script>
    
<style scoped>
#img{
  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://www.fairfaxcounty.gov/parks/sites/parks/files/Assets/documents/recenters/calendars/Spring%20Hill_030116_0081.jpg");
  background-position: center;
  background-size: cover;
}
#shoes {
  border-radius: 2%;
}
img{
  width: 400px;
  height: 300px;
}

>>>>>>> d5eeaa8b629d376f860f5730f3d81f155ef053c1:src/views/TheAboutPage.vue
</style>