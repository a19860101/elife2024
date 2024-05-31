export default {
     template:`
        <div>
            {{title}}
            <form @submit.prevent="update(product.id)">
                <div>
                    <label>Title</label>
                    <input type="text" v-model="title">
                </div>
                <div>
                    <label>Price</label>
                    <input type="text" v-model="price">
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" v-model="description">
                </div>
                <input type="submit" value="更新">
                <back-btn></back-btn>
            </form>
        </div>
    `,
    data(){
        return{
            product:'',
            title:'',
            price:'',
            description:''
        }
    },
    methods:{
        update(id){
            let url = 'https://api.escuelajs.co/api/v1/products/'+id;
            fetch(url,{
                method:'PUT',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    title: this.title,
                    price: this.price,
                    description: this.description
                })
            }).then(res=>res.json()).then(data=>{
                console.log(this.$router);
                this.$router.push('/')
            })

        }
    },
    mounted(){
        console.log('test')
        let url = 'https://api.escuelajs.co/api/v1/products/'+this.$route.params.id;
        fetch(url,{
            headers:{'Content-Type':'application/json'}
        }).then(res=>res.json()).then(data=>{
            this.product = data;
            this.title = data.title;
            this.description = data.description;
            this.price = data.price;
            console.log(data)
        })
    }
}