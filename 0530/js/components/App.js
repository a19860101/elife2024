// import Products from "./Products.js";
// import Create from "./Create.js";
// import Router from './Router.js';
export default {
    // router:Router,
    // components:{
    //     Products,Create
    // },
    template:`
        <div>
            <nav>
                <a href="#" @click="panel='products'">商品列表</a>
                <a href="#" @click="panel='create'">新增商品</a>
                <router-link to='/'>商品列表</router-link>
                <router-link to='/create'>新增商品</router-link>
            </nav>
            <router-view></router-view>
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