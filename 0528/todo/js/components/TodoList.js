export default {
    template: `
    <div>
        <h2 v-if="todos.length">{{title}}</h2>
        <div v-for="todo in todos" :key="todo.id">
            {{todo.name}} <input type="checkbox" v-model="todo.isCompleted">
        </div>
    </div>
    `,
    props:{
        todos:Array,
        title:String
    }
}