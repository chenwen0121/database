<script setup>
import {ref} from 'vue'
import Banner from './banner.vue'
import Advantage from './advantage.vue'
import Renovation from './renovation.vue'
import Information from './information.vue'
</script>

<template>  
  <banner/>
  <div class="container">
    <Advantage />
    <Renovation />
    <Information />
  </div>
</template>

<style scoped>

</style>
