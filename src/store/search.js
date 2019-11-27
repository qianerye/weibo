const state = {
    heatSearchData : null,
    accurateSearchData : null
}
const mutations = {
    setHeatSearchData(state , payload){
        state.heatSearchData = Object.assign({} ,  payload.heatSearchData)
    },
    setAccurateSearchData(state , payload){
        state.accurateSearchData =  Object.assign({} ,  payload.accurateSearchData)
    }
}
const actions = {
    addHeatSearchData({ commit } , payload){
        commit('setHeatSearchData' , payload)
    },
    addAccurateSearchData({ commit } , payload){
        commit('setAccurateSearchData' , payload)
    }
}

export default  {
    namespaced :true,
    state,
    mutations,
    actions
}