<script setup>
defineProps({
  data: Object,
})

</script>

<template>
 <div id="meteo">
  <div id="circle"></div>
  <div id="small" class="text-center">
     <h2>{{ data.city.name }}</h2>
     <h1 class="outlined-text">{{ data.list[0].main.temp }}</h1>
  </div>
 </div>
</template>

<style scoped>
  #meteo {
    display: flex;
    justify-content: center;
    align-items: center;
    top: -3%;
    left: 74%;
    width: 350px;
  }

  #circle {
    width: 350px;
    height: 350px;
    border-radius: 100%;
    position: absolute;
  }

  #small {
    width: 170px;
    height: 170px;
    border-radius: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .outlined-text {
    -webkit-text-stroke-width: 2px; /* Spessore del bordo */
    -webkit-text-stroke-color: #2C698D; /* Colore del bordo */
    color: transparent; 
  }

  @media (max-width: 1199.98px) {

  #meteo {
    top: -540px;
    left: 72%;
    width: 240px;
  }
  #circle {
    width: 240px;
    height: 240px;
  }

  #small {
    width: 150px;
    height: 150px;
  }
  
  h1 {
    font-size: 2.7rem;
  }
  .outlined-text {
    -webkit-text-stroke-width: 2px;
  }

  h2 {
    font-size: 0.8rem;
    margin-bottom: -0.2rem;
  }
}

  @media (max-width: 991.98px) { 

     #meteo {
      width: 250px;
      left: 68%;
      top: -390px;
    }

    #circle {
      width: 200px;
      height: 200px;
    }

    #small {
      width: 115px;
      height: 115px;
    }

    h1 {
      font-size: 1.8rem;
    }
    .outlined-text {
    -webkit-text-stroke-width: 1.3px;
    }

    h2 {
      font-size: 0.6rem;
      margin-bottom: -0.2rem;
    }

   }


  @media (max-width: 575.98px) { 
    #meteo {
      width: 140px;
      left: 70%;
      top: -300px;
    }

    #circle {
      width: 140px;
      height: 140px;
    }

    #small {
      width: 80px;
      height: 80px;
    }

    h1 {
      font-size: 1.5rem;
    }

    .outlined-text {
    -webkit-text-stroke-width: 1px;
    }

    h2 {
      font-size: 0.5rem;
      margin-bottom: -0.2rem;
    }

   }
  
  
</style>

