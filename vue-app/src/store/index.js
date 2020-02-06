import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 当前被选中的菜单项目的信息
    curMenu: {
      name: '电影',
      bgColor: '#ff0000'
    },
    // 存在这里是因为他们photo和photoDetails要共享数据，共用一个json文件
    photoList:[]

  },
  mutations: {
    setCurMenu(state, data) {
      state.curMenu = data
    },
    setPhotoList(state,data){
      state.photoList = data
    }
  },
  actions: {
  },
  modules: {
  }
})
