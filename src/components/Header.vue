<script setup>

</script>

<template>
  <header>
    <div class="wrapper m-3">
      <h1 class="text-center">meteo <br> radar</h1>
    </div>
  </header>
</template>

<style scoped>

h1 {
  line-height: 110%;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 24px;
  margin-bottom: 0;
}
div {
  border-radius: 100px; 
  background-color: #E3F6F5;
  height: 70px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 575.98px) { 

h1 {
  font-size: 16px;
}

div {
  height: 50px;
  width: 50px;
}
   
}

</style>
