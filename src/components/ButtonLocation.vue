<script setup>

</script>

<template>
 <section id="button">
  <div id="bg" class="text"> 
    <a href="">Aggiorna la tua posizione</a>
  </div>
  <div id="border"></div>
 </section>
</template>

<style scoped>
#button {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  top: -0.9%;
}

#bg {
  background-color: #E3F6F5;
  height: 73px;
  width: 300px;
  border-radius: 0 36px 0 36px;
  z-index: 1;
}

#border {
  border: 2px solid #2C698D;
  border-radius: 0 36px 0 36px;
  height: 73px;
  width: 300px;
  top: -54px;
  left: 24px;
}

.text {
  display: flex;
  align-items: center;
  justify-content: center;
}

a {
  margin-bottom: 0;
  font-size: 1.2rem;
  font-weight: 500;
}



@media (max-width: 1199.98px){ 

#button {
  top: -196px;
  left: 32px;
}
#bg {
  height: 60px;
  width: 250px;
}
#border {
  height: px;
  width: 250px;
  top: -44px;
  left: 22px;
}
a {
  font-size: 1.1rem;
}
   
}

@media (max-width: 900px) { 

#button {
  display: none;
}
   
}

</style>
