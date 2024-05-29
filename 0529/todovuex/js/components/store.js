const store = new Vuex.Store({
    state:{
        todos:[
            {
                id:1,
                name:'todo 1',
                isCompleted: true,
            },
            {
                id:2,
                name:'todo 2',
                isCompleted: true,
            },
            {
                id:3,
                name:'todo 3',
                isCompleted: false,
            },
        ]
    },
    mutations:{
        add(state,payload){
            state.todos.push({
                id:Date.now(),
                name:payload,
                isCompleted:false,
            })
        }
    },
    getters:{
        todoComplete(state){
            return state.todos.filter(data=>data.isCompleted === true)
        },
        todoUnComplete(state){
            return state.todos.filter(data=>data.isCompleted === false)
        }
    }
});
export default store;