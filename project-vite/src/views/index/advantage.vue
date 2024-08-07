<script setup>
import {ref} from 'vue'
import { CountTo } from 'vue3-count-to';
let advantagelist = ref([
    {num:'50',name:'萬+菁英家庭選擇'},
    {num:'20',name:'個城市直營分公司'},
    {num:'98',name:'家直營店面'},
    {num:'26',name:'個服務城市'}
])
let advantagelist1 = ref([
    {icon:'icon-a-ziyuan22',title:'高效品質',sub:'10年以上師傅,統一培訓考核,統一管理,高素質的師傅為您帶來高品質的技術。'},
    {icon:'icon-yanshou',title:'驗收嚴格',sub:'150個施工重點,360度無死角驗收,層層把關,交給您一個安心完美的新家。'},
    {icon:'icon-fuwu',title:'服務專業',sub:'回報每天施工進度,施工現場盡收眼底,從未有過的五星級裝潢體驗。'},
    {icon:'icon-ketangxiaobangyang',title:'口碑評價',sub:'科學的評價系統,可查詢施工人員的客戶口碑,施工經驗和能力,對客戶滿意低的人員實行淘汰機制。'}
])
</script>

<template>  
<div class="container_bg">
    <div class="advantage">
        <div class="index_title">
            <h3>品牌優勢</h3>
            <p>值得信賴的實力派</p>
        </div>
        <div class="advantage-item1">
            <ul>
                <li v-for="(v,i) in advantagelist" :key="i">
                    <!-- <span class="advantage-num">{{ v.num }}</span> -->
                    <CountTo :startVal="0" :endVal="v.num" :duration="5000" class="advantage-num">{{ v.num }}</CountTo>
                    <span>{{v.name}}</span>
                </li>
            </ul>
        </div>
        <div class="advantage-item2">
            <ul>
                <li v-for="(v,i) in advantagelist1" :key="i">
                    <i class='iconfont' :class="v.icon"></i>
                    <h4>{{v.title}}</h4>
                    <p>{{v.sub}}</p>
                </li>

            </ul>
        </div>
    </div>
</div>
</template>

<style scoped>

</style>
