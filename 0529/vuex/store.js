let store = new Vuex.Store({
    state:{
        title:'hello vuex',
        count: 999,
        products:['11','22','33'],
    },
    mutations:{
        add(state,payload){
            state.count += payload;
        }
    },
    getters:{
        test(state){
            return state.products.filter(data=>data === '11');
        }
    }
});
export default store;