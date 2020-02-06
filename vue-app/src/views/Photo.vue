<template>
    <div id="photo">
        <img  v-for ="(item,index) in $store.state.photoList" :key = 'index' :src="item.src" alt="" class = 'img-info' @click="goDetails(index)">
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data () {
        return {
            // photoList:[]
        }
    },
    methods: {
        goDetails(index){
            this.$router.push('/photodetails/'+index)
        }
    },
    created () {
        axios.get('/data/photodata.json')
            .then(res=>{
                console.log(res)
                this.$store.commit("setPhotoList",res.data.photoData)
                // setPhotoList方法名，res.data.photoData传的参数

            })
            .catch(err =>{
                console.log(err)
            })
        
    }
}
</script>
<style lang="scss" scoped>
.img-info{
    width: 50%
}
</style>>