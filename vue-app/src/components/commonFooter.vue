<template>
    <footer class="footer" :style = "{backgroundColor:curMenu.bgColor}">
        <!-- 这里用v-for来给每个入绑定不同颜色 -->
        <!-- v-for必须要绑定一个key属性，一般会把数据库中的id作为key -->
        <div v-for = "obj in menuList" :key ="obj.path" @click="changeMenu(obj)">
            <router-link :to="obj.path" >{{obj.name}}</router-link>
            <!-- <router-link to="/music">音乐</router-link>
            <router-link to="/book">图书</router-link>
            <router-link to="/photo">图片</router-link> -->
        </div>
    </footer>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
    // 这里的data()是一个方法，应用return是因为组件可以重复调用，不希望组件之间可以相互影响
    data(){
        return {
            curColor:'#ff0000',
            // 当前被选中一项的背景色
            menuList:[
                {
                    name:'电影',
                    path:'/',
                    bgColor:'#ff0000'
                },
                 {
                    name:'音乐',
                    path:'/music',
                    bgColor:'#ff00ff'
                },
                 {
                    name:'图书',
                    path:'/book',
                    bgColor:'#ff0036'
                },
                 {
                    name:'图片',
                    path:'/photo',
                     bgColor:'#00ff00'
                },
            ]
        }
    },
    computed: {
    ...mapState(['curMenu'])
    },
    methods: {
         ...mapMutations(['setCurMenu']),
        // 切换菜单时会更换颜色
        changeMenu(obj){
             this.curColor = obj.bgColor
             this.setCurMenu(obj)

        }
    },
    created(){
        this.menuList.forEach((value,index)=>{
            console.log(index)
            if(value.path == this.path){
                this.setCurMenu(value)

            }
        })
    },
    
}
</script>

<style lang="scss" scoped>
.footer{
    display:flex;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: red;
    div{
        flex:1;
        a{
            color: #000000
        }
        .router-link-exact-active {
        color: #fff;
        }

    }
}

</style>