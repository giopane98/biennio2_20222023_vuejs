<script setup>

</script>

<template>
 <section id="button">
  <div id="bg" class="text"> 
    <p>Your location</p>
  </div>
  <div id="border"></div>
 </section>
</template>

<style scoped>
#button {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  top: -24%;
}

#bg {
  background-color: #E3F6F5;
  height: 73px;
  width: 237px;
  border-radius: 0 36px 0 36px;
  z-index: 1;
}

.text {
  display: flex;
  align-items: center;
  justify-content: center;
}

p {
  margin-bottom: 0;
  font-size: 1.2rem;
  font-weight: 500;
}

#border {
  border: 2px solid #2C698D;
  border-radius: 0 36px 0 36px;
  height: 73px;
  width: 237px;
  top: -52px;
  left: 32px;
}

@media (max-width: 1100px) { 

#button {
  top: -196px;
  left: 32px;
}
#bg {
  height: 53px;
  width: 207px;
}
#border {
  height: 53px;
  width: 207px;
  top: -40px;
  left: 48px;
}
p {
  font-size: 1.1rem;
}
   
}

@media (max-width: 900px) { 

#button {
  display: none;
}
   
}

</style>
