<script setup>
import {ref} from 'vue'
let headlist = ref([
    {title:'首頁',path:'/index'},
    {title:'全屋設計',path:'/house'},
    {title:'廚房設計',path:'/kitchen'},
    {title:'家居搭配',path:'/collocation'},
    {title:'相關流程',path:'/case'},
    {title:'關於我們',path:'/about'},
])
</script>

<template>
<div class="header">
    <div class="header-list">
        <div class="header-top">
            <div class="logo">
                <a href="#" title="家居裝飾"></a>
            </div>
            <ul class="header-menu">
                <li v-for="(v,i) in headlist" :key='i'> <!--i 當前索引的信息-->
                    <router-link :to="v.path">
                    <span>{{v.title}}</span>
                    </router-link>
                </li>   

            </ul>
            <div class="header-right">
                <div class="header-right-l">
                    <!-- <img src="@/assets/images/telt.png" alt=""> -->
                </div>
                <div class="header-right-r">
                    <p>24小時資訊專線:</p>
                    <p>(04)2200-5050</p>
                </div>
            </div>
        </div> 
    </div>
</div>
</template>

<style scoped>

</style>

