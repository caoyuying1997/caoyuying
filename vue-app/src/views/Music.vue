<template>
    <div id="music">
       <img class = 'music-img' v-for = "obj in list"  :src="obj.bg"  :key = 'obj.id' alt="" @click="goDetails(obj.id)">
    
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data () {
        return {
            list:[]
        }
    },
    created () {
        // '/'表示的是根目录下，就是8080
        axios.get('/data/musiclist.json')
            .then(res=>{
                console.log(res)
                this.list = res.data.albums
            })
            .catch(err=>{
                console.log(err)
            })
    },
    methods: {
        goDetails(id){
            // 改变路由
            this.$router.push(
                {
                    name:'musicDetails',
                    query:{
                        id
                    }
                }
            )
        }
    }
    
}
</script>
<style lang="scss" scoped>
.music-img{
    width: 50%

}
</style>