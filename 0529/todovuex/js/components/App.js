import Todos from './Todos.js'
export default {
    template:`
        <todos :title="myTitle"></todos>
    `,
    components:{
        Todos
    },
    data(){
        return {
            myTitle:'hello todo 12312312'
        }
    }
}