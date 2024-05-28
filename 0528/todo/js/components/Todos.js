import TodoList from './TodoList.js'
export default {
    components:{
        TodoList
    },
    template:`
    <div>
        <h1>{{title}}</h1>
        <div>{{test}}</div>

        <todo-list :todos="todoUnComplete" title="未完成"></todo-list>
        <todo-list :todos="todoComplete" title="已完成"></todo-list>
        
    </div>
    `,
    data(){
        return {
            input:'',
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
        }
    },
    computed:{
        todoComplete(){
            return this.todos.filter(data=>data.isCompleted === true)
        },
        todoUnComplete(){
            return this.todos.filter(data=>data.isCompleted === false)
        }
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