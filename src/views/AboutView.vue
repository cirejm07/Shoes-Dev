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
    name: 'AboutView',
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

</style>