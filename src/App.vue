<script >

import Header from './components/Header.vue'
import SectionHero from './components/SectionHero.vue'
import SocialLink from './components/SocialLink.vue'
import Footer from './components/Footer.vue'
import SectionMeteo from './components/SectionMeteo.vue'
import ButtonLocation from './components/ButtonLocation.vue'


/* qui stiamo importando il nostro file json */
import contentsData from './assets/contents.json'

/* questo lo scriviamo sennò il nostro file json non viene valorizzato */
export default {
  data() {
    return {
      contents: contentsData,
    };
  },

/* definisco qui tutti i componenti che vorrei utilizzare */
  components: {
    Header,
    SocialLink,
    Footer,
    SectionHero,
    SectionMeteo,
    ButtonLocation,
  },
};

</script> 

<template>
  <main>
    <Header/> 
    <SectionHero/>
    <SectionMeteo/>
    <ButtonLocation/>

    <div id="social-links" class="row">
      <ul>
        <li v-for="link in contents.social_links" :key="link.id">
          <SocialLink 
            :id="link.id"
            :name="link.name"
            :url="link.url"
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

#social-links {
  background-color: #E3F6F5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
