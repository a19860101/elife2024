// import Create from './Create.js';
import Products from './Products.js';
// import Product from './Product.js';
const routes = [
    {
        path:'/',component:Products
    },
    {
        path:'/create',component:()=>import('./Create.js')
    },
    {
        path:'/product/:id',name:'product',component:()=>import('./Product.js')
    }
];
const router = new VueRouter({
    routes
}) 
export default router;