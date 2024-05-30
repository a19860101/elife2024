export default {
    template:`
        <div>
            <h1>Products</h1>
            <div v-for="p in products" :key="p.id">
                {{p.title}}
                <form @submit.prevent="destroy(p.id)">
                    <input type="submit" value="刪除">
                </form>
            </div>
        </div>
    `,
    data(){
        return {
            products:[]
        }
    },
    // props:{
    //     products:Array
    // },
    methods:{
        destroy(id){
            let url = `https://api.escuelajs.co/api/v1/products/${id}`;
            fetch(url,{
                method:'DELETE',
            }).then(res=>res.json()).then(data=>{
                console.log(data)
                this.products = this.products.filter(p=>p.id != id);
            })
        }
    },
    mounted(){
        let url = 'https://api.escuelajs.co/api/v1/products';
        fetch(url).then(res=>res.json()).then(data=>{
            this.products = data;
        })
    }

}