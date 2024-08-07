<script setup>
import {ref} from 'vue'
const imglist = ref([
  {id:1,url:'37.jpg'},
  {id:2,url:'31.jpg'},
  {id:3,url:'32.jpg'},
  {id:4,url:'33.jpg'},
])
const imglist1 = ref([
  {id:5,url:'34.jpg'},
  {id:6,url:'35.jpg'},
  {id:7,url:'30.jpg'},
  {id:8,url:'38.jpg'},
  {id:9,url:'39.jpg'},
  {id:10,url:'40.jpg'}
])
const imglist2 = ref([
  {id:9,url:'39.jpg'},
  {id:10,url:'40.jpg'},
  {id:1,url:'37.jpg'},
  {id:2,url:'31.jpg'}
])


</script>

<template>  
<div class="container_collocation">
  <div class="col_title">
    <h3>玩佈置</h3>
  </div>
  <div class="col_imglist">
    <h4 class="col_subtitle">創意裝潢，打造專屬你的溫馨家園</h4>
    <ul>
      <li v-for="(item,i) in imglist" :key="i">
        <img :src="`/src/assets/images/${item.url}`" alt="">
      </li>
    </ul>
    <h4 class="col_subtitle">精心設計，每一處細節都是生活的藝術</h4>
    <ul>
      <li v-for="(item,i) in imglist" :key="i">
        <img :src="`/src/assets/images/${item.url}`" alt="">
      </li>
    </ul>
    <h4 class="col_subtitle">夢想之家，從這裡開始佈置</h4>
    <ul>
      <li v-for="(item,i) in imglist" :key="i">
        <img :src="`/src/assets/images/${item.url}`" alt="">
      </li>
    </ul>
  </div>
</div>
</template>

<style scoped>

</style>
