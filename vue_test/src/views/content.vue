<template>
  <div>
      <h1>计数器</h1>
       <p>count:{{$store.state.count}}</p>
       <button @click = "fun">count+1</button>
       <button @click="$store.commit('addFun',3)">调用addFun</button>
       <!-- 传参用这种方法 -->
  </div>
 
 
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
    data(){
        return{
            msg:''
        }
    },
    computed: {
      ...mapState(['count','num'])  
    },
 methods: {
     ...mapMutations(['add','addFun']),
     fun(){
         this.$store.commit('add')
     }
 }
}
</script>

<style>

</style>