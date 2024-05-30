export default {
    template:`
        <div>
            <h1>Products</h1>
            <div>
                {{products}}
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
    mounted(){
        let url = 'https://api.escuelajs.co/api/v1/products';
        fetch(url).then(res=>res.json()).then(data=>{
            this.products = data;
        })
    }

}