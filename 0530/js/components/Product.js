export default {
    template:`
        <div>
            <h2>{{product}}</h2>
        </div>
    `,
    data(){
        return{
            product:''
        }
    },
    mounted(){
        let url = 'https://api.escuelajs.co/api/v1/products/12';
        fetch(url,{
            headers:{'Content-Type':'application/json'}
        }).then(res=>res.json()).then(data=>{
            this.product = data
        })
    }
}