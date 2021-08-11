import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import Users from "./views/Users.vue";
import UsersPosts from "./views/UsersPosts.vue";
import UsersProfile from "./views/UsersProfile.vue";
import HeaderHome from "./views/HeaderHome.vue";
import HeaderUsers from "./views/HeaderUsers.vue";

// Vue.use() プラグインを利用する
Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", components: { default: Home, header: HeaderHome } },
    {
      path: "/users/:id",
      components: { default: Users, header: HeaderUsers },
      props: {
        default: true,
        header: false,
      },
      children: [
        { path: "posts", component: UsersPosts },
        { path: "profile", component: UsersProfile, name: "user-id-profile" },
      ],
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
  scrollBehavior(to, from, savedPosition) {

    // transitionが適応されている時のスクロールは非同期にする
    return new Promise(resolve => {
      this.app.$root.$once("triggerScroll",  () => {
        console.log('triggerScroll');
        
        let position = { x: 0, y: 0 };

        if (savedPosition) {
          position = savedPosition;
        }
    
        if (to.hash) {
          position = {
            selector: to.hash,
          };
        }
    
        return resolve(position);
      });
    })


    // 通常は同期
    // if (savedPosition) {
    //   return savedPosition;
    // }

    // if (to.hash) {
    //   return {
    //     selector: to.hash,
    //   };
    // }

    // return { x: 0, y: 0 };


// ------パターン↓

    // hashを指定するパターン
    // return {
    //   selector: '#next-user',
    //   // selectorからの軸を指定できる
    //   offset: {x: 0, y:100}
    // }

    // 軸を指定するパターン
    // return {x: 0, y:100}
  },
});
