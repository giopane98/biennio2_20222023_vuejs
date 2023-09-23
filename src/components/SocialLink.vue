<script setup>
  defineProps({
    id: Number,
    name: String,
    url: String,
    icon_svg: String,
  })
</script>

<template>
  <li><a :href="url">
   <img :src="icon_svg" width="30" height="30">
  </a></li>
</template>

<style scoped>
 a:hover {
    color: #133041;
  }

  @media (max-width: 575.98px)  { 
    img {
      width: 20px;
      height: 20px;
    }
  }

</style>
