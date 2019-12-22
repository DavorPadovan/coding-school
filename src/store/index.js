import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isDrawerFixed: false,
    franchises: [
      {
        id: '1',
        title: 'SmartNinja Slovenia',
        website: 'https://www.smartninja.si',
        street: 'Ulica Slavka Gruma 100',
        zip: '8000',
        city: 'Novo mesto',
        active: true
      }, {
        id: '2',
        title: 'SmartNinja Austria',
        website: 'https://www.smartninja.at',
        street: 'Ulica Slavka Gruma 100',
        zip: '1000',
        city: 'Wien',
        active: true
      }, {
        id: '3',
        title: 'SmartNinja Germany',
        website: 'https://www.smartninja.at',
        street: 'Ulica Slavka Gruma 100',
        zip: '1000',
        city: 'Wien',
        active: true
      }, {
        id: '4',
        title: 'SmartNinja Portugal',
        website: 'https://www.smartninja.at',
        street: 'Ulica Slavka Gruma 100',
        zip: '1000',
        city: 'Wien',
        active: false
      }
    ]
  },
  getters: {
    getFranchiseByID: (state) => (id) => {
      return state.franchises.find(franchise => franchise.id === id)
    }
  },
  mutations: {
    getSavedDrawerType: (state) => {
      state.isDrawerFixed = localStorage.isDrawerFixed === 'true'
    },
    toggleDrawerType: (state) => {
      state.isDrawerFixed = !state.isDrawerFixed
    }
  },
  actions: {
    toggleDrawerType: (state) => {
      localStorage.isDrawerFixed = !state.state.isDrawerFixed
      state.commit('toggleDrawerType')
    }
  }
})
