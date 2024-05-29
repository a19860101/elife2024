let store = new Vuex.Store({
    state:{
        title:'hello vuex',
        count: 999
    },
    mutations:{
        add(state,payload){
            state.count += payload;
        }
    }
});
export default store;