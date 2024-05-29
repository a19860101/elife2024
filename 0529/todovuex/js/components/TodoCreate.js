import store from './store.js'
export default {
    template: `
        <form @submit.prevent="add()" >
            <input type="text" v-model="input">
            <input type="submit" value="新增項目">
        </form>
    `,
    data(){
        return {
            input:''
        }
    },
    methods:{
        add(){
            store.commit('add',this.input);
            this.input='';
        }
    }

}