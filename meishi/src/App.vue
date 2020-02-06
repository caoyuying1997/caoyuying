<template>
  <div id="app">
    <div id = 'head-img'>
      <img src="./assets/imgs/1.png" alt="">
    </div>
    <div id ='info'>
      <div id = "info-first">
        <img src="./assets/imgs/2.png" alt="">
        <span>小库君</span>
        <p>10分钟前</p>
        <div id = 'btn'>关注</div>
      </div>
      <p id  = "title">我的美食分享，喜欢的请点赞哟！！！</p>
      <ul id = 'chatu'>
        <li>
          <img src="./assets/imgs/3.png" alt="">
        </li>
        <li>
          <img src="./assets/imgs/4.png" alt="">
        </li>
        <li>
          <img src="./assets/imgs/5.png" alt="">
        </li>
        <li>
          <img src="./assets/imgs/6.png" alt="">
        </li>
      </ul>
      <span class="share">留言182</span>
      <span class="to">   分享99</span>

    </div>
     <div id ='info'>
      <div id = "info-first">
        <img src="./assets/imgs/2.png" alt="">
        <span>小库君</span>
        <p>10分钟前</p>
        <div id = 'btn'>关注</div>
      </div>
      <p id  = "title">我的美食分享，喜欢的请点赞哟！！！</p>
      <ul id = 'chatu'>
        <li>
          <img src="./assets/imgs/3.png" alt="">
        </li>
        <li>
          <img src="./assets/imgs/4.png" alt="">
        </li>
        <li>
          <img src="./assets/imgs/5.png" alt="">
        </li>
        <li>
          <img src="./assets/imgs/6.png" alt="">
        </li>
      </ul>
      <span class="share">留言182</span>
      <span class="to">   分享99</span>

    </div>
     <div id ='info'>
      <div id = "info-first">
        <img src="./assets/imgs/2.png" alt="">
        <span>小库君</span>
        <p>10分钟前</p>
        <div id = 'btn'>关注</div>
      </div>
      <p id  = "title">我的美食分享，喜欢的请点赞哟！！！</p>
      <ul id = 'chatu'>
        <li>
          <img src="./assets/imgs/3.png" alt="">
        </li>
        <li>
          <img src="./assets/imgs/4.png" alt="">
        </li>
        <li>
          <img src="./assets/imgs/5.png" alt="">
        </li>
        <li>
          <img src="./assets/imgs/6.png" alt="">
        </li>
      </ul>
      <span class="share">留言182</span>
      <span class="to">   分享99</span>

    </div>
    <div id = 'footer'>
      <ul id = 'footer-list'>
        <li>
          <div class = 'iconimg'>
            <i  class = 'iconfont icon-yemian-copy-copy'></i>
          </div>
          <p>首页</p>
        </li>
        <li>
          <div>
            <i  class = 'iconfont icon-yemian-copy-copy'></i>
          </div>
          <p>首页</p>
        </li>
        <li>
          <div>
            <i  class = 'iconfont icon-yemian-copy-copy'></i>
          </div>
          <p>首页</p>
        </li>
        <li>
          <div>
            <i  class = 'iconfont icon-yemian-copy-copy'></i>
          </div>
          <p>首页</p>
        </li>
        <li>
          <div>
            <i  class = 'iconfont icon-yemian-copy-copy'></i>
          </div>
          <p>首页</p>
        </li>
      </ul>
    
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
 
  }
}
</script>

<style lang="scss" scoped>

#app{
  max-width: 500px;
  margin: 0 auto;
  background: #f8f8f8;
  

}
#app>#head-img{
  width:100%;
  position: fixed;
  top:0;
  left:0;
}
#head-img>img{
  width:100%;
  height: 138.5px;
}
#info{
  height: 205px;
  width:350px;
  border: 1px solid #D8D8D8;
  border-radius: 10px;
  background: #ffffff;;
  position: relative;
  top:65px;
  left:13px;
  margin-bottom:5px;
  
}
#info-first{
  width:100%;
  height: 74px;
  position: relative;
}
#info-first>img{
  width:48px;
  height: 45px;
  margin-top:13px;
  margin-left:15px
}
#info-first>span{
  font-size:15px;
  position: absolute;
  top:20px;
  margin-left:10px;

}
#info-first>p{
  font-size: 10px;
  position: absolute;
  color:#D8D8D8;
  top:30px;
  left:70px;

}
#info-first>#btn{
  width:45px;
  height:20px;
  line-height: 20px;
  border:1px solid #ffd8da;
  border-radius: 20px;
  color:#ffd8da;
  font-size: 10px;
  text-align: center;
  position: absolute;
  right:30px;
  top:25px;
}
#info>#title{
  position: absolute;
  top:50px;
  margin-left:20px;
}
#info>#chatu{
  width:100%;
  height: 89px;
  display: flex;
  flex:wrap;
  list-style: none;
  position: absolute;
  left:-25px;

}

#chatu img{
  height: 73px;
  width:73px;
  border-radius: 10px;
  margin-top:10px;
  margin-right: 10px;
  
  
  

}
#info>.share{
  color:#D8D8D8;
  position: absolute;
  right:55px;
  font-size: 10px;
  bottom:10px;
}
#info>.to{
  color:#D8D8D8;
  position: absolute;
  right:10px;
  font-size: 10px;
  bottom:10px;
}
#footer{
  width:100%;
  height: 49px;
  position: fixed;
  bottom: 0;
  background: #ffffff;
}

#footer-list{
  width:100%;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}
#footer-list li{
  
  margin-right:40px;
  margin-left:-10px;
}

#footer-list div{
    width:30px;
    height: 30px;
    position: absolute;
    top:2px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 0;
    
}
#footer-list i{
  color: #D8D8D8;
  font-size: 20px
}
#footer-list p{
    height: 20px;
    width: 40px;
    font-size: 14px;
    color:  #D8D8D8;
    transform: translate(-2%,-30%);
    text-align:center;
    // margin-top:5px
    
    
}



</style>
