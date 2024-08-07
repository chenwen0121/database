<script setup>
import {ref} from 'vue'
import Banner from '../index/banner.vue'
const activeName = ref('1');
const houselist = ref([
    {
     id:1,
     label: '現代化廚房設計',
     tabs:[
        {img_url:'img1.jpg',title:'設計配置:L型'},
        {img_url:'img2.jpg',title:'設計配置:一字型'},
        {img_url:'img3.jpg',title:'設計配置:一字型'},
        {img_url:'img4.jpg',title:'設計配置:L型'}
     ]  
    },
    {
     id:2,
     label: '鄉村風廚房',
     tabs:[
        {img_url:'img5.jpg',title:'設計配置:一字型'},
        {img_url:'img6.jpg',title:'設計配置:中島式'},
        {img_url:'img7.jpg',title:'設計配置:L型'},
        {img_url:'img8.jpg',title:'設計配置:一字型'}
     ]  
    },
    {
     id:3,
     label: '北歐風廚房',
     tabs:[
        {img_url:'img9.jpg',title:'設計配置:中島式'},
        {img_url:'img4.jpg',title:'設計配置:L型'},
        {img_url:'img3.jpg',title:'設計配置:一字型'},
        {img_url:'img2.jpg',title:'設計配置:中島式'}
     ]  
    }
])
</script>

<template>
    <div class="container">
        <div class="kit_title">
            <h3>打造夢想廚房：設計與功能完美融合</h3>
        </div>
        <div class="house-tabs mt-50">
            <div class="house-title">功能與美觀並重，打造理想烹飪空間</div>
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
            <div class="house-title">定制廚房，滿足您的每一個需求</div>
            <div class="house-sub">創造出獨一無二的廚房空間</div>
            <ul id="kit_box">
                <li class="li1"><img src="@/assets/images/30.jpg" alt=""></li>
                <li class="li2"><img src="@/assets/images/31.jpg" alt=""></li>
                <li class="li3"><img src="@/assets/images/32.jpg" alt=""></li>
                <li class="li4"><img src="@/assets/images/33.jpg" alt=""></li>
                <li class="li5"><img src="@/assets/images/34.jpg" alt=""></li>
            </ul>
        </div>
        <div class="house-carousel">
            <el-carousel indicator-position="none" arrow="always" :autoplay="false">
                <el-carousel-item>
                    <img src="@/assets/images/40.jpg" alt="">
                    <img src="@/assets/images/39.jpg" alt="">
                    <img src="@/assets/images/38.jpg" alt="">
                    <img src="@/assets/images/37.jpg" alt="">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="@/assets/images/36.jpg" alt="">
                    <img src="@/assets/images/35.jpg" alt="">
                    <img src="@/assets/images/34.jpg" alt="">
                    <img src="@/assets/images/33.jpg" alt="">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="@/assets/images/32.jpg" alt="">
                    <img src="@/assets/images/31.jpg" alt="">
                    <img src="@/assets/images/30.jpg" alt="">
                    <img src="@/assets/images/40.jpg" alt="">
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
