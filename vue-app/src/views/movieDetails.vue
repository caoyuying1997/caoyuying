<template>
  <div id="movie-detail">
    <img :src="details.images.medium" alt="">

    <h3>{{details.title}}</h3>

    <p>{{details.summary}}</p>
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      details: {}  
    }
  },

  created () {
    // 用模板字符串是在做字符串的拼接，这里用模板字符串是为了发送请求的时候需要传对应电影的id通过id来获取对应的电影信息
    // movie点击谁，就通过id请求相对应的内容，并不是全请求下来比对，这里在链接中已经拼上了点击图像的id
    axios.get(`https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/subject/${this.$route.params.id}`)
      .then(res => {
        console.log(res)
        // 把获取到的数据赋值给details
        this.details = res.data
      })
      .catch( err => {
        console.log(err)
      })
  }
}
</script>

<style>
#movie-detail{
    margin-bottom: 1rem;
}
</style>