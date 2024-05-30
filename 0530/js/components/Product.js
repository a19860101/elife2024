export default {
    template:`
        <div>
        {{$route.params.id}}
        {{product}}
        </div>
    `,
    data(){
        return{
            product:''
        }
    },
    updated(){
        let url = 'https://api.escuelajs.co/api/v1/products/'+this.$route.params.id;
        fetch(url,{
            headers:{'Content-Type':'application/json'}
        }).then(res=>res.json()).then(data=>{
            this.product = data
            console.log(data)
        })
    }
}