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
        <div>{{test}}</div>

        <todo-create @create_todo="add"></todo-create>

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
    methods:{
        add(){
            console.log('emit here')
            // this.todos.push({
            //     id:Date.now(),
            //     name:this.input,
            //     isCompleted:false,
            // })
            // this.input= '';
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