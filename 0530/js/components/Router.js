import Create from './Create.js';
import Products from './Products.js';
const routes = [
    {
        path:'/',component:Products,
    },
    {
        path:'/create',component:Create
    },
    {
        
    }
];
const router = new VueRouter({
    routes
}) 
export default router;