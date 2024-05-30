import Create from './Create.js';
import Products from './Products.js';
import Product from './Product.js';
const routes = [
    {
        path:'/',component:Products,
    },
    {
        path:'/create',component:Create
    },
    {
        path:'/product/:id',component:Product
    }
];
const router = new VueRouter({
    routes
}) 
export default router;