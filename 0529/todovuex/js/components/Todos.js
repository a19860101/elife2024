import store from './store.js'
import TodoList from './TodoList.js'
import TodoCreate from './TodoCreate.js'
export default {
    components:{
        TodoList,
        TodoCreate
    },
    template:`
    <div>
        <h1>{{title}}</h1>
        <todo-create></todo-create>
        <todo-list :todos="todoUnComplete" title="未完成"></todo-list>
        <todo-list :todos="todoComplete" title="已完成"></todo-list>
        
    </div>
    `,
    data(){
        return {
            input:'',
            
        }
    },
    methods:{
        add(payload){
            console.log(payload)
            this.todos.push({
                id:Date.now(),
                name:payload,
                isCompleted:false,
            })
            // this.input= '';
        }
    },
    computed:{
        todos(){
            return store.state.todos;  
        },
        todoUnComplete(){
            return store.getters.todoUnComplete
        },
        todoComplete(){
            return store.getters.todoComplete
        },
        
    },
    props:['title','test']
    // props:{
    //     title:String,
    //     test:{
    //         type: Object,
    //         default: '999',
    //     }
    // }
}