import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/services/api'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        chartsList: [],
    },
    getters: {
        GET_CHARTS_LIST: (state) => {
            return state.chartsList
        },
    },
    mutations: {
        ADD_CHART: (state, payload) => {
            state.chartsList.unshift(payload)
        },
        DELETE_CHART_BY_INDEX: (state, index) => {
            state.chartsList.splice(index, 1)
        },
        CLEAR_CHART_LIST: (state) => {
            state.chartsList = []
        },
    },
    actions: {
        GET_PIE_CHART_DATA: async (context, form) => {
            const response = await api.get(form.dataSource)
            if (response?.data) {
                context.commit('ADD_CHART', { type: form.chartType, data: response.data })
            }
        },
    },
})
