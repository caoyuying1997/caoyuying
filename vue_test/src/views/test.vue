<template>
  <div id="course">
      <h1>测试内容</h1>
      <button @click="back">回退按钮</button>
  </div>
</template>

<script>
export default {
    methods: {
        back(){
            this.$route.back()
        }
    }

}
</script>

<style>

</style>