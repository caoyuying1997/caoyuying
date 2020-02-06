<template>
  <div id="app">
    
    <common-header/>
    <!-- 替换的是这部分内容所以在这里面给他嵌套一个，div然后有一个上外边距 -->
    <div id="contanier">
      <router-view/>
    </div>

    <common-footer/>
  </div>
</template>
<script>
// 引入头部和尾部的组件
import commonHeader from '@/components/commonHeader.vue'
import commonFooter from '@/components/commonFooter.vue'

export default {
  components: {
    commonHeader,
    commonFooter
  }
  
}
</script>

<style lang="scss">
#contanier{
  margin-top: 50px
}

</style>
