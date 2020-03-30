import Vue from "vue";
import VueRouter from "vue-router";

import Zuyongyu from "./docs/zuoyongyu.vue";
import Yuanxingduixiang from "./docs/yuanxingduixiang.vue";
import This from "./docs/this.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Zuyongyu
    },
    {
      path: "/_scope",
      component: Zuyongyu
    },
    {
      path: "/_block",
      component: Yuanxingduixiang
    },
    {
      path: "/_let",
      component: This
    }
  ]
});

export default router;
