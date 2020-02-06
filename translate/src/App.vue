<template>
  <div id="app">
    <h1>在线翻译</h1>
    <h5 class ='text-muted'>方便 | 简易 | 便捷</h5>
    <TranslateFrom v-on:formSubmit='translateText'></TranslateFrom>
    <TranslateTo v-text='translated'></TranslateTo>
  </div>
</template>

<script>
import TranslateFrom from './components/translateFrom'
import TranslateTo from './components/translateTo'
import axios from 'axios'

export default {
  name: 'App',
  data(){
    return{
      translated:''
    }
    // 记住用来接收请求参数的这个属性必须要return
  },
  components: {
    TranslateFrom,
    TranslateTo

  },
  methods: {
    translateText(text,language){
      // alert(text)
      axios.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180802T072252Z.7fb2f98c9da21370.977ca030bf49a05272c581c24562ffbc22ec54ba&lang='+language+'&text='+text)
        .then(res =>{
          // console.log(res.data.text[0])
          this.translated = res.data.text[0]
      
          
        })
        .catch(err =>{
          console.log(err)
        })
    }
    
  }
}
</script>

<style>
#app{
  text-align: center
}
#app>h5{
  color: gray
}
</style>
