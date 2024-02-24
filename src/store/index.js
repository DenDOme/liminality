import { createStore } from 'vuex'
import { devRequest } from '@/utils/api.js'


export default createStore({
  state: {
    deverloper: [],
  },
  getters: {
    devs: (state) => {state.deverloper},
  },
  mutations: {
    SET_DEVS: (state , deverloper) => {
      state.deverloper = deverloper
    }
  },
  actions: {
    // GET_DEVS: ({commit}) => {
    //   return new Promise((resolve, reject) => {
    //     devRequest().then((data) => {
    //       commit('SET_DEVS', data);
    //       resolve();
    //     }).catch((error) => {
    //       reject(error);
    //     })
    //   })
    // }
  },
  modules: {

  }
})
