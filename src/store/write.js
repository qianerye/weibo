const state = {
    myWriteData : []
}
const mutations = {
    setMyWriteData(state , payload){
        state.myWriteData =  Object.assign([] ,  payload.myWriteData)
    }
}
const actions = {
    addMyWriteDate({ commit } , payload){
        commit('setMyWriteData' , payload)
    }
}

export default  {
    namespaced :true,
    state,
    mutations,
    actions
}