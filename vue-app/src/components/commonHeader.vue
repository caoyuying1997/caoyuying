<template>
<header class="header" :style="{backgroundColor:curMenu.bgColor}">
   {{curMenu.name}}
   <span class = "header-home" @click="goHome">首页</span>
</header>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
    computed: {
        ...mapState(['curMenu'])
    },
    methods: {
        ...mapMutations(['setCurMenu']),
        goHome(){
            this.setCurMenu({
                name:'电影',
                bgColor: '#ff0000'
            })
            this.$router.push('/')
            // 注意push是router下的方法
        }
    }
    
}
</script>
 
 <style lang="scss" scoped>
 .header{
     width: 100%;
     height :1rem;
     background-color :red;
     line-height :1rem;
     text-align :center;
     position :fixed;
     left :0;
     top:0;
     color: #fff;
     z-index:1;
     .header-home{
         position:absolute;
         left:0.2rem;

     }
 }
 </style>
