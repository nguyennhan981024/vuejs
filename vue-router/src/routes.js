import Vue from 'vue';
import VueRouter from "vue-router";
import User from "@/components/user";
import profile from "@/components/profile";

Vue.use(VueRouter);

const router = new VueRouter({
  mode : 'history',
  routes : [
    {path: '/user',component : User},
    {path : '/profile/:id',component: profile}
  ]
})
export default router;
