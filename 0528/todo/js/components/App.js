export default {
    template:`
    <div>
        <div>
            <h2 v-if="todoUnComplete.length">未完成</h2>
            <div v-for="todo in todoUnComplete" :key="todo.id">
                {{todo.name}} <input type="checkbox" v-model="todo.isCompleted">
            </div>
        </div>
        <div>
            <h2 v-if="todoComplete.length">已完成</h2>
            <div v-for="todo in todoComplete" :key="todo.id">
                {{todo.name}} <input type="checkbox" v-model="todo.isCompleted">
            </div>
        </div>
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
    }
}