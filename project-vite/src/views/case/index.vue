<script setup>
import {ref} from 'vue'
const processcase = [
  {
    content: '1.初次洽談與需求確認：',
    timestamp: '客戶與裝潢公司進行初次洽談，了解客戶的基本需求、預算和風格偏好,確認裝潢範圍、功能需求以及大致時間安排。',
  },
  {
    content: '2.現場測量：',
    timestamp: '設計師到現場進行精確測量，記錄房屋結構、尺寸、管線位置等信息,為後續設計方案提供準確數據',
  },
  {
    color: '#0bbd89',
    size: 'large',
    content: '3.設計方案與預算報價：',
    timestamp: '根據客戶需求和測量數據，提供初步設計方案和效果圖,進行預算編制，提供詳細報價單。',
  },
]
const processcase1 = [
{
    content: '4.方案討論與修改：',
    timestamp: '與客戶進行方案討論，根據客戶反饋對設計方案進行修改和優化,確認最終設計方案和預算。',
  },
  {
    content: '6.工程計劃與排期：',
    timestamp: '制定詳細的工程計劃和排期表，明確各階段的工作內容和完成時間,確保各環節有序進行。',
  },
  {
    content: '7.進場施工準備：',
    timestamp: '施工團隊進場前進行準備工作，包括材料進場、施工工具準備等,清理施工現場，保護不涉及裝潢的區域。',
  },
  {
    content: '8.基礎工程：',
    timestamp: '進行拆除和改造工程，包括牆體拆改、水電管線改造等,確保基礎工程合格，為後續施工打好基礎。',
  },
]
const processcase2 = [
{
    content: '9.隱蔽工程驗收：',
    timestamp: '隱蔽工程完成後，進行驗收，包括水電、管線、結構加固等,驗收合格後進行封閉處理，進入下一步施工。',
  },
  {
    content: '10.木工與泥水工程：',
    timestamp: '進行木工施工，包括吊頂、隔斷、家具製作等。',
  },
  {
    content: '11.油漆與裝飾工程：',
    timestamp: '進行牆面、天花板的油漆施工，確保表面光滑、顏色均勻,裝飾工程，包括壁紙、燈具、軟裝配飾等安裝。',
  },
  {
    content: '12.現場清理與驗收：',
    timestamp: '完成所有施工後，進行現場清理，確保現場整潔,與客戶進行最終驗收，確保所有工程符合合同約定。',
  },
  {
    content: '13.售後服務與保修：',
    timestamp: '提供售後服務，包括保修和維修，解決客戶在使用過程中遇到的問題,定期回訪，確保客戶滿意度和使用體驗。',
  }
]
</script>

<template> 
<div class="container-process">
  <div class="title">
    <h3>相關流程</h3>
  </div>
  <div class="processlist">
    <img src="@/assets/images/img4.jpg" alt="">
    <el-timeline style="max-width: 800px">
    <el-timeline-item
      v-for="(activity, index) in processcase"
      :key="index"
      size='large'
      color='#C99F5F'
      :timestamp="activity.timestamp"
      :color="activity.color"
    >
    <el-card>
      <h3>{{ activity.content }}</h3>
    </el-card>
    </el-timeline-item>
  </el-timeline>
  </div>
  <div class="processlist">
    <el-timeline style="max-width: 800px">
      <el-timeline-item
      v-for="(activity, index) in processcase1"
      :key="index"
      size='large'
      color='#C99F5F'
      :timestamp="activity.timestamp"
      :color="activity.color"
      >
      <el-card>
        <h3>{{ activity.content }}</h3>
      </el-card>
    </el-timeline-item>
  </el-timeline>
  <img class='pro1_img' src="@/assets/images/img5.jpg" alt="">
  </div>
  <div class="processlist">
    <img class='pro2_img' src="@/assets/images/img6.jpg" alt="">
    <el-timeline style="max-width: 800px">
      <el-timeline-item
      v-for="(activity, index) in processcase1"
      :key="index"
      size='large'
      color='#C99F5F'
      :timestamp="activity.timestamp"
      :color="activity.color"
      >
      <el-card>
        <h3>{{ activity.content }}</h3>
      </el-card>
    </el-timeline-item>
  </el-timeline>
  </div>
  <div class="title2">
    <h3>收費標準</h3>
  </div>
  <div class="standard">
    <ul>
      <li>
        <img src="@/assets/images/icon1.png" alt="">
        <h4>設計費用</h4>
        <p>依照設計現場、屋況、坪數大小情況而定</p>
      </li>
      <li>
        <img src="@/assets/images/icon2.png" alt="">
        <h4>工程管理費</h4>
        <p>總工程款 X 10%</p>
      </li>
      <li>
        <img src="@/assets/images/icon3.png" alt="">
        <h4>監工管理費用</h4>
        <p>監工管理費為工程總價的8-10%</p>
      </li>
      <li>
        <img src="@/assets/images/icon4.png" alt="">
        <h4>丈量提案費</h4>
        <p>因個人需求不同</p>
      </li>
    </ul>
  </div>
</div> 

</template>

<style scoped>

</style>
