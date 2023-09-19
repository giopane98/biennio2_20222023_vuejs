<script setup>


</script>

<template>
 <div id="meteo">
  <div id="circle"></div>
  <div id="small" class="text-center">
    <!-- qui vorrei mettere città e temperatura -->
  </div>
 </div>
</template>

<style scoped>
  #meteo {
    display: flex;
    justify-content: center;
    align-items: center;
    top: -50%;
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
    width: 190px;
    height: 190px;
    border-radius: 100%;
    position: relative;
  }

  @media (max-width: 1100px) {

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

   }

  @media (max-width: 575.98px) { 
    #meteo {
      width: 180px;
      left: 64%;
      top: -300px;
    }

    #circle {
      width: 160px;
      height: 160px;
    }

    #small {
      width: 90px;
      height: 90px;
    }

   }
  
  
</style>

