<script setup>
defineProps({
  data: Object,
})
</script>

<template>
  <section id="button">
    <div id="bg">
    <div class="row ">
      <div id="icon" class="col-xl-4 text-center col-md-4 col-sm-4">
        <img :src="'public/icon-weather/' + data.weather[0].icon + '.svg'" alt="">
         <h3>{{ data.weather[0].description }}</h3>
      </div>
      <div id="temperatura" class="col-xl-4 col-md-4 col-sm-5">
        <h3>{{ (new Date(data.dt_txt)).toLocaleDateString('it-IT', { day: 'numeric', month: "long" }) }}</h3>
        <h1>{{ data.main.temp }}</h1>
        <h2> {{ (new Date(data.dt_txt)).toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' }) }}</h2>
      </div>
      <div class="col-xl-4 col-md-4 col-sm-3">
        <div class="humidity">
           <img id="aria" src="public/icon-weather/humidity.svg" alt="">
           <h2>{{ data.main.humidity }}</h2>
        </div>
        <div class="wind">
           <img id="aria" src="public/icon-weather/wind.svg" alt="">
           <h2>{{ data.wind.speed }}</h2>
        </div>
      </div>
    </div>
    </div>
   </section>
</template>

<style scoped>

#button {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

#bg {
  display: flex;
  justify-content: center;
  background-color: #E3F6F5;
  height: 340px;
  width: 1040px;
  border-radius: 0 212px 0 212px;
  margin-top: 4%;
  margin-bottom: 4%;
}
#icon {
  padding-left: 12%;
}
#temperatura {
  padding-left: 8%;
}

.row {
  width: 1040px;
  align-items: center;
}

h1 {
  font-size: 4rem;
}

h2 {
  font-size: 1.5rem;
  color: black;
  font-weight: 400;
  margin-bottom: 0;
}

#aria {
  margin-right: 5%;
}
.humidity{
  display: flex;
  align-items: center;
}
.wind{
  display: flex;
  align-items: center;
}

@media (max-width: 1199.98px) {
  #bg {
    width: 900px;
  }
}

@media (max-width: 767.98px) { 
  #bg {
    height: 260px;
    width: 690px;
    border-radius: 0 100px 0 100px;
  }

  img {
    width: 80%;
  }

  h3 {
    font-size: 1.5rem;
  }

  h1 {
    font-size: 3.5rem;
  }

  h2 {
    font-size: 1.2rem;
  }

  #aria {
    width: 16%;
  }
}


@media (max-width: 575.98px)  { 

  .row {
    width: 100px;
    flex-wrap: nowrap;
    margin-left: -220px;
  }

  #bg {
  height: 200px;
  width: 100%;
  border-radius: 0 50px 0 50px;
  margin-top: 4%;
  margin-bottom: 4%;
 }

 img {
  width: 70%;
 }

 h1 {
  font-size: 2.25rem;
 }

 h2 {
  font-size: 0.8rem;
 }
 h3 {
  font-size: 0.9rem;
 }

 #aria {
  width: 25%;
 }
}
</style>