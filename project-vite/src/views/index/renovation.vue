<script setup>
import { ref } from 'vue'
import Banner from './banner.vue'
import Advantage from './advantage.vue'
let renovationlist = ref([
    {
        title:'新北巴黎帝景',
        sub:'新古典',
        num:214,
        img_url:'img1.jpg'
    },
    {
        title:'竹南巴黎世家',
        sub:'豪華風格',
        num:560,
        img_url:'img2.jpg'
    },
    {
        title:'新古典',
        sub:'無印風格',
        num:150,
        img_url:'img3.jpg'
    },
    {
        title:'大安富源',
        sub:'北歐時尚',
        num:664,
        img_url:'img4.jpg'
    },
    {
        title:'高雄家院',
        sub:'日式經典',
        num:874,
        img_url:'img5.jpg'
    },
    {
        title:'天母要您館',
        sub:'華麗時尚',
        num:652,
        img_url:'img6.jpg'
    },
    {
        title:'竹東海南古宅',
        sub:'工業風格',
        num:365,
        img_url:'img7.jpg'
    },
    {
        title:'天母河內專案',
        sub:'簡約風格',
        num:266,
        img_url:'img8.jpg'
    },
    {
        title:'台中雙橡園',
        sub:'輕奢風格',
        num:290,
        img_url:'img9.jpg'
    }
])
</script>

<template>
<div class="container">
    <div class="renovation">
        <div class="index_title">
            <h3>實景案例</h3>
            <p>看看大家怎麼裝</p>
        </div>
        <div class="renovation-list">
        <ul>
            <li v-for="(v,i) in renovationlist" :key="i">
                <div class="renovation-card">
                    <a href="#">
                        <div class="renovation-img">
                            <img :src="`/src/assets/images/${v.img_url}`" alt="">
                        </div>

                        <div class="renovation-box">
                            <h3>{{v.title}}</h3>
                            <div class="renovation-box-info">
                                <p>{{v.sub}}</p>
                                <span><i class="iconfont icon-aixin"></i>{{v.num}}人查看</span>
                            </div>
                        </div>
                        <div class="renovation-hover">
                            <span>查看詳情</span>
                        </div>
                    </a>
                </div>
            </li>
        </ul>
        </div>
    </div>      
</div>


</template>

<style scoped></style>
