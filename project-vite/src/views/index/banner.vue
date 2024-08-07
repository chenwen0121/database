<script setup>
import { ref,onMounted } from 'vue'
import { Avatar,PhoneFilled,BrushFilled } from '@element-plus/icons-vue'
import axios from'axios'
let bannerlist = ref(
    [
        { id: 1, img_url: 'banner.jpg' },
        { id: 2, img_url: 'banner1.jpg' },
        { id: 3, img_url: 'banner2.jpg' },
    ]
)
// onMounted(async () => {
//   try {
//     let res = await axios.get('/api/bannerlist'); // 請求 banners
//     bannerlist.value = res.data; // 確保數據正確賦值
//     console.log(res.data);
//   } catch (error) {
//     console.error("Error fetching data:", error); // 錯誤處理
//   }
// });
</script>

<template>
    <div class="banner">
        <div class="banner-list">   
            <div class="block text-center" m="t-4">
                <el-carousel trigger="click" height="600px">
                    <el-carousel-item v-for="item in bannerlist" :key="item.id" style="height: 600px">
                        <img :src="`/src/assets/images/${item.img_url}`" alt="">
                         <!-- <img :src="item.img_url" alt=""> -->
                    </el-carousel-item>
                    <div class="indexFrom">
                        <div class="form_bg">
                            <div class="form_head">
                                <b>免費獲取</b>裝潢報價
                                <div class="regform">
                                    <el-input 
                                    v-model="input1" 
                                    style="width: 240px" 
                                    size="large"
                                    placeholder="請輸入姓名" 
                                    :prefix-icon="Avatar" 
                                    />
                                    <el-input 
                                    v-model="input1" 
                                    style="width: 240px" 
                                    size="large"
                                    placeholder="請輸入電話" 
                                    :prefix-icon="PhoneFilled" 
                                    />
                                    <el-input 
                                    v-model="input1" 
                                    style="width: 240px" 
                                    size="large"
                                    placeholder="請輸入裝潢面積" 
                                    :prefix-icon="BrushFilled" 
                                    />
                                </div>
                                <el-button type="primary" color="var(--bgcolor)">獲取報價</el-button>
                            </div>
                            <div class="privacy">
                                    <input type="checkbox" class="checkbox-type"/>
                                    <span>已閱讀並同意《用戶隱私保護協議》</span>
                            </div>
                        </div>
                    </div>
                </el-carousel>
            </div>
            <div class="banner-item">
                <img src="@/assets/images/footer_bottom.png" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped></style>
