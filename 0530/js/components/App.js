import Products from "./Products.js";
export default {
    components:{
        Products
    },
    template:`
        <div>
            <products></products>
        </div>
    `,
    data(){
        return {
            // products:[]
        }
    },
    // mounted(){
    //     let url = 'https://api.escuelajs.co/api/v1/products';
    //     fetch(url).then(res=>res.json()).then(data=>{
    //         this.products = data;
    //     })
    // }
}