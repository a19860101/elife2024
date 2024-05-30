import Products from "./Products.js";
import Create from "./Create.js";
export default {
    components:{
        Products,Create
    },
    template:`
        <div>
            <nav>
                <a href="#" @click="panel='products'">商品列表</a>
                <a href="#" @click="panel='create'">新增商品</a>
            </nav>
            <components :is="panel"></components>
            <h2>test</h2>
        </div>
    `,
    data(){
        return {
            // products:[],
            panel:'products'
        }
    },
    // mounted(){
    //     let url = 'https://api.escuelajs.co/api/v1/products';
    //     fetch(url).then(res=>res.json()).then(data=>{
    //         this.products = data;
    //     })
    // }
}