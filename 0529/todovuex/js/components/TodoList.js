import Todo from './Todo.js'
export default {
    components:{
        Todo,
    },
    template: `
    <div>
        <h2 v-if="todos.length">{{title}}</h2>
        <todo v-for="todo in todos" :key="todo.id" :todo="todo"></todo>
    </div>
    `,
    props:{
        todos:Array,
        title:String
    }
}