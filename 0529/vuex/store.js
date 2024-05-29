let store = new Vuex.Store({
    state:{
        title:'hello vuex',
        count: 999
    },
    mutations:{
        add(state){
            state.count += 1;
        }
    }
});
export default store;