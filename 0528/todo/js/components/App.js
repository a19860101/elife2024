import Todos from './Todos.js'
export default {
    template:`
        <todos :title="myTitle" test="vue 2"></todos>
    `,
    components:{
        'todos':Todos
    },
    data(){
        return {
            myTitle:'hello todo 12312312'
        }
    }
}