<script setup>
import {ref} from 'vue'
let informationimg = ref([
    {id:1,img_url:'1.jpg'},
    {id:2,img_url:'2.jpg'},
    {id:3,img_url:'3.jpg'},
])
let informationlist =ref([
    {
        title:'選擇完美地板：讓家居更美麗、更舒適',
        date:'2024-05-05',
        text:'地板不僅是家居風格的重要組成部分，還直接影響到我們的生活質量。無論是追求美觀還是實用性，選擇合適的地板材料和風格至關重要。讓你地板選擇更輕鬆的秘訣。',
        img_url:'4.jpg'   
    },
    {
        title:'打造完美廚房：從設計到維護的一站式指南',
        date:'2024-06-01',
        text:'擁有一個完美的廚房是每個家庭主婦的夢想。不僅要美觀實用，還要符合現代生活的需求。在這篇文章中，我們將為你介紹從廚房設計、裝修到日常維護的全方位指南，讓你的廚房既實用又美觀。',
        img_url:'5.jpg'   
    },
    {
        title:'規劃夢想廚房的秘訣：實用與美觀兼具',
        data:'2024-07-25',
        text:'夢想中的廚房應該是什麼樣子？無論是現代簡約還是古典優雅，我們都希望它既美觀又實用。讓你廚房脫胎換骨的秘訣，幫助你創造一個既好看又好用的烹飪空間。',
        img_url:'6.jpg'   
    }
])
</script>

<template>  
<div class="information">
    <div class="index_title">
        <h3>裝潢資訊</h3>
        <p>了解裝潢知識,裝潢不留遺憾</p>
    </div>
    <div class="information-list">
        <div class="information-left">
            <el-carousel height="380px" indicator-position="none" arrow="always">
                <el-carousel-item v-for="(v,i) in informationimg" :key="i">
                        <img :src="`/src/assets/images/${v.img_url}`" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="information-right">
            <ul>
                <li v-for="(v,i) in informationlist" :key="i">
                    <div class="information-r-img">
                        <img :src="`/src/assets/images/${v.img_url}`" alt="">
                    </div>
                    <div class="information-r-list">
                        <h4>{{v.title}}</h4>
                        <p class="information-time">{{v.data}}</p>
                        <p class="information-text">{{v.text}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<style scoped>

</style>
