<template>
<div id="music-details">
     <aplayer v-if="list.length>0" 
      autoplay
      :music="list[0]"
      :list="list"
    />
  </div>


</template>
<script>
import axios from 'axios'
import Aplayer from 'vue-aplayer'

export default {
    data () {
        return {
            list:[]
        }
    },
    components: {
        Aplayer
    },
    created () {
        axios.get('/data/musicdata.json')
            .then(res=>{
                console.log(res)
                // 因为Aplayer的artist和数据库中的属性名不一样，对数组进行遍历然后对他的属性名进行一个修改
                res.data.musicData.forEach(item=>{
                    item.artist = item.author 
                    item.pic = item.musicImgSrc
                   


                })

                
                this.list = res.data.musicData
            
            })
            .catch(err => {
                console.log(err)
            })
    }
}
</script>
<style lang="scss" scoped>

</style>>