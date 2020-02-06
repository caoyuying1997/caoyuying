<template>
    <div class ='row'  id = "translateFrom">
        <div class = 'col-md-6 col-md-offset-3'>
            <form v-on:submit = 'onSubmit' class = 'well from-inline' id = 'ha'>
                <input type="text" v-model ="connect" placeholder="请输入要翻译的内容" class ='form-control'>
                <select v-model="language" class = 'form-control'>
                    <option value="en">English</option>
                    <option value="ru">Russian</option>
                    <option value="ko">Korean</option>
                    <option value="ja">Janpenese</option>
                </select>
                <input type="submit" value="翻译">
            </form>
       </div>
       

    </div>
</template>
<script>
export default {
    data:function(){
        return {
            connect:'',
            language:''
        }
    },
    methods: {
        onSubmit(e){
            // alert(this.connect)
            // 阻止浏览器的默认行为，这样刷新之后输入框之后还会又内容
            e.preventDefault();
            // this.emit用于子组件向父组件进行传值
            this.$emit("formSubmit", this.connect,this.language)
            // 第一个参数是自定义的事件，第二个参数是要传递的内容
        }
    },
    created () {
        this.language = 'en'
        // 默认是英语
    }
}
</script>
<style>
#ha{
    border: 1px solid #ccc;
    border-radius: 10px
}
</style>