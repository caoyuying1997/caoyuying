<template>
  <div id = "movie">
    <ul>
      <li v-for ='obj in movieList' :key ='obj.id' class = 'movielist' @click="goDetails(obj.id)">
        <img :src="obj.images.medium" alt="" class="movie-img">
        <div class = 'movie-info'>
          <h3>{{obj.name}}</h3>
          <p>上映年份：{{obj.year}}</p>
          <p>演员：<span v-for="item in obj.casts" :key = 'item.id'>{{item.name}}</span></p>
          <p>导演：<span v-for="item in obj.directors" :key = 'item.id'>{{item.name}}</span></p>
        </div>
      </li>
    </ul>
    <img v-show = "isShow" src="@/assets/imgs/loading.gif" alt="" class="movie-loading">
  </div>
</template>

<script>
// 引入axios接口请求，ajaxs一般用在dom的接口请求
import axios from 'axios'


export default {
  data () {
    return {
      movieList:[],
      isShow:false
    }
  },
  methods: {
    getList(){
      this.isShow = true
      // start是请求开始位置的索引，count表示的是一次请求多少数据
      axios.get(`https://douban.uieee.com/v2/movie/top250?start=${this.movieList.length}&count=10`)
      .then(res=>{
        console.log(res)
        // 把这个返回的信息赋值给movieList,需要重复请求，这里用扩展运算符
        this.movieList =[...this.movieList,...res.data.subjects] 
        this.isShow = false
      })
      .catch(err=>{
        console.log(err)
      })

    },
    goDetails(id) {
      this.$router.push('/moviedetails/'+id)
    }
  },
  // 调用接口
  created () {
     this.getList();

      window.onscroll = () =>{
        // 可视区域的高度
        let height = document.documentElement.clientHeight;
        // 滚上去的高度
        let top = document.documentElement.scrollTop;
        // 总高度
        let  tall = document.documentElement.scrollHeight;

        // 判断一下页面是不是划入到了底部
        if(tall == top + height){
          console.log(tall)
            this.getList();
        }
      }
  }
 
}
</script>
<style lang="scss" scoped>
.movielist{
  position: relative;
  display: flex;
  background: #ffffff;
  .movie-img{
    width: 2rem;
    padding: .2rem .4rem;
  }
  .movie-info{
    flex:1;
    margin-top:0.1rem;
    margin-left:0.2rem;
  }
  &::after{
    content: '';
    display:block;
    border-bottom: 1px soild #ccc ;
    position:absolute;
    left: .4rem;
    right: .4rem;
    bottom: 0;
    transform: scaleY(0.5);

    


  }
}

.movie-loading{
  position: fixed;
  width: 1.5rem;
  height: 1.5rem;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%)

}


</style>
