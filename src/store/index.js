import {getUsers , getMock} from '@/api'
//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)
const state = {
  users: [],
  mockSlider: [],
  x : 1
}
const getters = {
  users: state => state.users,
  mockSlider: state => state.mockSlider
}
const mutations = {
  SET_USERS(state, users) {
    state.users = users
  },
  SET_MOCK_SLIDER(state, mockSlider) {
    state.mockSlider = mockSlider
  }
}
const actions = {
  async getUsersAction({commit}) {
    const response = await getUsers()
    commit('SET_USERS', response.data)
  },
  async getMockSlider({commit})
  {
    const response = await getMock()
    // console.log(response)
    commit('SET_MOCK_SLIDER', response.data)
  }
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})