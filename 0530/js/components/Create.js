import BackBtn from './BackBtn.js'

export default {
    components:{BackBtn},

    template:`
        <div>
            <form @submit.prevent="store()">
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
                <input type="submit" value="新增商品">
                <back-btn></back-btn>
            </form>
        </div>
    `,
    data(){
        return {
            title:'',
            price:'',
            description:''
        }
    },
    methods:{
        store(){
            let url = 'https://api.escuelajs.co/api/v1/products/';
            fetch(url,{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    "title": this.title,
                    "price": this.price,
                    "description": this.description,
                    "categoryId": 1,
                    "images": ["https://placeimg.com/640/480/any"]
                })
            }).then(res=>res.json()).then(data=>{
                console.log(data);
            })
        }
    }
}