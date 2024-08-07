<script setup>
import {ref} from 'vue'
import Banner from '../index/banner.vue'
const activeName = ref('1');
const houselist = ref([
    {
     id:1,
     label: '三房兩廳',
     tabs:[
        {img_url:'img1.jpg',title:'裝潢面積:30坪'},
        {img_url:'img2.jpg',title:'裝潢面積:35坪'},
        {img_url:'img3.jpg',title:'裝潢面積:29坪'},
        {img_url:'img4.jpg',title:'裝潢面積:33坪'}
     ]  
    },
    {
     id:2,
     label: '兩房兩廳',
     tabs:[
        {img_url:'img5.jpg',title:'裝潢面積:21坪'},
        {img_url:'img6.jpg',title:'裝潢面積:20坪'},
        {img_url:'img7.jpg',title:'裝潢面積:19坪'},
        {img_url:'img8.jpg',title:'裝潢面積:24坪'}
     ]  
    },
    {
     id:3,
     label: '一房一廳',
     tabs:[
        {img_url:'img9.jpg',title:'裝潢面積:11坪'},
        {img_url:'img4.jpg',title:'裝潢面積:9坪'},
        {img_url:'img3.jpg',title:'裝潢面積:10坪'},
        {img_url:'img2.jpg',title:'裝潢面積:12坪'}
     ]  
    }
])
</script>

<template>
<Banner />
    <div class="container">
        <div class="house-tabs mt-50">
            <div class="house-title">時尚裝潢,衝擊顛覆你的想像</div>
            <div class="house-sub">眾多風格,多元選擇</div>
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane :label="v.label" :name="String(v.id)" v-for="(v,i) in houselist" :key="i">
                    <ul>
                        <li v-for="(item,i) in v.tabs" :key="i">
                            <img :src="`/src/assets/images/${item.img_url}`" alt="">
                            <span>{{item.title}}</span>
                        </li>
                    </ul>
                </el-tab-pane>
            </el-tabs>
        </div>
        <div class="house-grid mt-50">
            <div class="house-title">時尚裝潢,衝擊顛覆你的想像</div>
            <div class="house-sub">眾多風格,多元選擇</div>
            <ul>
                <li class="li1"><img src="@/assets/images/house1.png" alt=""></li>
                <li class="li2"><img src="@/assets/images/house2.png" alt=""></li>
                <li class="li3"><img src="@/assets/images/house3.png" alt=""></li>
                <li class="li4"><img src="@/assets/images/house4.png" alt=""></li>
                <li class="li5"><img src="@/assets/images/house5.png" alt=""></li>
            </ul>
        </div>
        <div class="house-carousel">
            <el-carousel indicator-position="none" arrow="always" :autoplay="false">
                <el-carousel-item>
                    <img src="@/assets/images/img1.jpg" alt="">
                    <img src="@/assets/images/img2.jpg" alt="">
                    <img src="@/assets/images/img3.jpg" alt="">
                    <img src="@/assets/images/img4.jpg" alt="">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="@/assets/images/img5.jpg" alt="">
                    <img src="@/assets/images/img6.jpg" alt="">
                    <img src="@/assets/images/img7.jpg" alt="">
                    <img src="@/assets/images/img8.jpg" alt="">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="@/assets/images/img9.jpg" alt="">
                    <img src="@/assets/images/img1.jpg" alt="">
                    <img src="@/assets/images/img2.jpg" alt="">
                    <img src="@/assets/images/img3.jpg" alt="">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="@/assets/images/img3.jpg" alt="">
                    <img src="@/assets/images/img4.jpg" alt="">
                    <img src="@/assets/images/img5.jpg" alt="">
                    <img src="@/assets/images/img6.jpg" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<style scoped>

</style>
