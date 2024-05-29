import store from './store.js'
export default {
    template:`
        <div>
        <h1>{{title}} / {{count}}</h1>
        <button @click="addCount">plus</button>
        </div>
    `,
    computed:{
        title(){
            return store.state.title;
        },
        count(){
            return store.state.count
        }
    },
    methods:{
        addCount(){
            store.commit('add',5)
        }
    }
}