<script setup>
import {ref} from 'vue'
let n = ref(0);
let aboutlist = ref([
  {title:'裝潢之道，精工細作。',img_url:'img1.jpg'},
  {title:'從設計到實現，讓家更精彩。',img_url:'img2.jpg'},
  {title:'創新裝潢，提升生活質感。',img_url:'img3.jpg'},
  {title:'美學與實用，完美結合。',img_url:'img4.jpg'},
  {title:'打造獨特空間，彰顯個性品味。',img_url:'img5.jpg'},
  {title:'匠心工藝，成就理想之家。',img_url:'img6.jpg'}
])
function action(i){
  n.value = i;
}
</script>

<template>  
<div class="container">
  <div class="about">
    <div class="about-faith mt-50" >
      <h3 class="title">誠信為本，信譽卓著</h3>
      <p class="subtitle">憑借卓越的服務和品質，獲得政府單位、行業組織及官方媒體的多項嘉獎，成為您可信賴的選擇。</p>
      <ul>
          <li class="box1">
              <p>
                <span>匠心獨運，打造夢想家居。</span>
              </p>
          </li>
          <li class="box2">
              <p>
                <span>引領國際裝潢品牌</span>
              </p>
          </li>
          <li class="box3">
              <p>
                <span>精益求精，呈現完美生活空間。</span>
              </p>
          </li>
          <li  class="box4">
              <p>
                <span>設計之美，質感之選。</span>
              </p>
          </li>    
          <li  class="box5">
              <p>
                <span>專業裝潢，品味生活。</span>
              </p>
          </li>    
          <li  class="box6">
              <p>
                <span>創意設計，家居煥然一新。</span>
              </p>
          </li>    
          <li  class="box7">
              <p>
                <span>品質至上，讓家更溫馨。</span>
              </p>
          </li>    
      </ul>
    </div>
    <div class="about-leading mt-50">
      <div class="title-box">
        <h3 class="title">金鑽品質，引領潮流</h3>
        <p class="subtitle">匠心獨具，標準化手工藝，實力非凡。</p>
      </div>
      <!-- <ul>
          <li @click="n=1">点击的第一个模块</li>
          <li @click="n=2">点击的第二个模块</li>
          <li @click="n=3">点击的第三个模块</li>
          <li @click="n=4">点击的第四个模块</li>
          <li @click="n=5">点击的第五个模块</li>
          <li @click="n=6">点击的第六个模块</li>
      </ul>
      <div>
          <p v-show="n==1">这是显示的第一个图片</p>
          <p v-show="n==2">这是显示的第二个图片</p>
          <p v-show="n==3">这是显示的第三个图片</p>
          <p v-show="n==4">这是显示的第四个图片</p>
          <p v-show="n==5">这是显示的第五个图片</p>
          <p v-show="n==6">这是显示的第六个图片</p>
      </div> -->
      <div class="list-box">
        <ul>
          <li 
          v-for='(v,i) in aboutlist' :key=i 
          :class="n==i?'selected':''"
          @click="action(i)"
          >
          {{ v.title }}
        </li>
      </ul>
      <div class="img-show">
        <img 
         v-show="n==i"
         v-for = '(v,i) in aboutlist' :key=i 
         :src="`/src/assets/images/${v.img_url}`" alt=""
        >
      </div>

      </div>
    </div>

    <div class="about-jin mt-50">
        <h3 class="title">合作共創 OPPORTUNITY AWAITS</h3>
        <p class="subtitle">共同開啟成功之路</p>
    </div>
    <ul class="about-ul">
        <li>
            <img src="@/assets/images/20.jpg" alt="">
            <span class="btit">加盟優勢</span>
        </li>
        <li>
            <img src="@/assets/images/21.jpg" alt="">
            <span class="btit">優惠方案</span>
        </li>
        <li>
            <img src="@/assets/images/22.jpg" alt="">
            <span class="btit">加盟說明</span>
        </li>
        <li>
            <img src="@/assets/images/23.jpg" alt="">
            <span class="btit">申請加盟</span>
        </li>
    </ul>
  </div>
</div>
</template>

<style scoped>

</style>
