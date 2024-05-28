export default {
    template:`
        <div>
            {{todo.name}} <input type="checkbox" v-model="todo.isCompleted">
        </div>
    `,
    props:{
        todo:Object
    }
}