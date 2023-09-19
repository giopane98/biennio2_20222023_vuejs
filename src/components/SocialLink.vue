<script setup>
  defineProps({
    id: Number,
    name: String,
    url: String,
  })
</script>

<template>
 
  <li><a :href="url">{{ name }}</a></li>
</template>

<style scoped>

</style>
