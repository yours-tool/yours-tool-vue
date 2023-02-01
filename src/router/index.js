import {createRouter,createWebHistory} from "vue-router";
import Home from "@/views/Home";
import Json from "@/views/Json";
import Countdown from "@/views/CountDown";
const routes=[
    {
        path:"/",
        name:"home",
        component:Home,
        children:[
            {path:"/json",name:"json",component:Json},
            {path:"/countdown",name:"countdown",component:Countdown},
        ]
    },

];
const router=createRouter({
    history:createWebHistory(),
    routes

})
export default router;