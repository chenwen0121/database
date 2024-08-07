<script setup>
import {ref} from 'vue'
let footerlist = ref([
    {
        title:'關於我們',
        list:['品牌介紹','品牌文化','品牌歷程','品牌目標','人才計畫']
    },
    {
        title:'產品中心',
        list:['產品介紹','產品展示','使用說明']
    },
    {
        title:'資訊中心',
        list:['品牌資訊','優惠活動','熱門資訊','家俱動態']
    }
])
</script>

<template>
<div>
   <div class="footer">
    <div class="footer-list">
        <div class="footer-left">
            <ul>
                <li v-for="(v,i) in footerlist" :key='i'>
                    <p>{{ v.title }}</p>
                    <a href="#" v-for="(item,i) in v.list" :key="i">{{ item }}</a>
                </li>
            </ul>
        </div>
        <div class="footer-right">
            <img src="@/assets/images/map2.jpg" alt="">   
        </div>
    </div>
    <div class="foot_text">
        <div></div>
        <span>Copyright © 2010-2024 by Addegcn Tacechnology Ltd. All Righlts reserneved.</span>
    </div>
   </div>
</div>
</template>

<style scoped>

</style>

