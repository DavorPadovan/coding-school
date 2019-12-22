import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isDrawerFixed: false,
    franchises: [
      {
        id: '1',
        title: 'CodingSchool Slovenia',
        website: 'https://www.codingschool.si',
        street: 'Ljubljanska cesta 100',
        zip: '8000',
        city: 'Novo mesto',
        active: true
      }, {
        id: '2',
        title: 'CodingSchool Austria',
        website: 'https://www.codingschool.at',
        street: 'Strasse 100',
        zip: '1000',
        city: 'Wien',
        active: true
      }, {
        id: '3',
        title: 'CodingSchool Germany',
        website: 'https://www.codingschool.de',
        street: 'Strasse 100',
        zip: '1000',
        city: 'Berlin',
        active: true
      }, {
        id: '4',
        title: 'CodingSchool Portugal',
        website: 'https://www.codingschool.pt',
        street: 'Avenida 100',
        zip: '1000',
        city: 'Lisbon',
        active: false
      }, {
        id: '5',
        title: 'CodingSchool Italy',
        website: 'https://www.codingschool.it',
        street: 'Strada 100',
        zip: '1000',
        city: 'Milan',
        active: false
      }, {
        id: '6',
        title: 'CodingSchool Croatia',
        website: 'https://www.codingschool.hr',
        street: 'Ulica 100',
        zip: '1000',
        city: 'Zagreb',
        active: true
      }, {
        id: '7',
        title: 'CodingSchool Serbia',
        website: 'https://www.codingschool.rs',
        street: 'Ulica 100',
        zip: '1000',
        city: 'Beograd',
        active: true
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
