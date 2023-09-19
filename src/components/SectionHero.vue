<script setup>

</script>

<template>
 <div class="bg_image" >
    <img class="image" src="@/assets/img_sky.svg">
 </div>
</template>

<style scoped>
  .title {
    font-size: 1em;
  }

  .bg_image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image {
    width: 90%;
  }

@media (max-width: 575.98px) { 

  .image {
    width: 110%;
  }
   
}
  
</style>
