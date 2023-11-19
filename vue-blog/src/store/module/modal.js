export default {
  namespaced:true,
  state: {
    isShow:false,
    type:''
  },
  mutations: {
    //登陆注册模态框 关闭or展示
    CLOSE(state){
      state.isShow = false
    },
    OPEN(state){
      state.isShow = true
    },
    //改变状态为登录or注册
    CHANGE_TYPE(state,payload){
      state.type = payload.type
    }
  },
  actions: {
    close({commit}){
      commit('CLOSE')
    },
    confirm({commit}){
      commit('CLOSE')
    },
    //修改type，切换登录/注册状态 => 展示模态框
    open({commit},type){
      commit('CHANGE_TYPE',{type})
      commit('OPEN')
    }
  }
}