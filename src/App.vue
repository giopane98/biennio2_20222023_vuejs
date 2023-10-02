<script >

import Header from './components/Header.vue'
import SectionHero from './components/SectionHero.vue'
import SocialLink from './components/SocialLink.vue'
import CircleMeteo from './components/CircleMeteo.vue'
import SectionMeteo from './components/SectionMeteo.vue'
import ButtonLocation from './components/ButtonLocation.vue'
import HourlyWeather from './components/HourlyWeather.vue'



/* qui stiamo importando il nostro file json */
import contentsData from './assets/contents.json'

/* questo lo scriviamo sennò il nostro file json non viene valorizzato */
export default {
  data() {
    return {
      contents: contentsData,
      meteoData: null,
    };
  },

methods:{
  loadData  (lat, lng) {
    const url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&lat=${lat}&lon=${lng}&appid=ca0bc81789a77b485742ed7b77c9a1b9&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // salvo dentro meteoData quello che ho ricevuto dell'API in oggetto javascript
        this.meteoData = data;
        console.log(this.meteoData);
      });
    
  }
},
  // una volta caricata la pagina chiedi la posizione e poi richiama loadData
 beforeMount () {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position)
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      this.loadData(lat, lng)
    });
  },

/* definisco qui tutti i componenti che vorrei utilizzare */
  components: {
    Header,
    SocialLink,
    SectionHero,
    CircleMeteo,
    SectionMeteo,
    ButtonLocation,
    HourlyWeather,
  },
};


</script> 

<template>
  <main>
    <Header/> 
    <SectionHero/>
    
    <!-- v-if= significa CircleMeteo mostrarlo solo quando sarà valorizzato -->
    <CircleMeteo
      v-if="meteoData"
      :data="meteoData"
    />
    <ButtonLocation/>

    <SectionMeteo/>

    <HourlyWeather
      v-if="meteoData"
      v-for="data in meteoData.list"
      :data="data"
    />


    <div id="social-links" class="row text-center">
      <ul>
        <li v-for="link in contents.social_links" :key="link.id">
          <SocialLink 
            :url="link.url"
            :icon_svg="link.icon_svg"
          />
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped>

header {
  line-height: 1.5;
}

ul {
  list-style-type: none;
}

#social-links {
  margin-top: 5%;
  margin-bottom: 5%;
}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
@media (max-width: 575.98px)  { 
    
  #social-links {
    margin-bottom: 2%;
  }
}
</style>
