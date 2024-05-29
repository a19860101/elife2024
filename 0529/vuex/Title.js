import store from './store.js'
export default {
    template:`
        <h1>{{title}} / {{count}}</h1>
    `,
    computed:{
        title(){
            return store.state.title;
        },
        count(){
            return store.state.count
        }
    }
}