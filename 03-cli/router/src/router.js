import Vue from "vue";
import Router from "vue-router";

// 遅延読み込み
// webpackChunkNameを指定すると、1.jsとかではなく名前をつけられる
// webpackChunkNameで同じ名前を指定すると、ファイルをまとめられる(chunk)
const Home = () => import(/* webpackChunkName: "Home" */ "./views/Home.vue");
const Users = () => import(/* webpackChunkName: "Users" */ "./views/Users.vue");
const UsersPosts = () => import(/* webpackChunkName: "Users" */ "./views/UsersPosts.vue");
const UsersProfile = () => import(/* webpackChunkName: "Users" */ "./views/UsersProfile.vue");
const HeaderHome = () => import("./views/HeaderHome.vue");
const HeaderUsers = () => import("./views/HeaderUsers.vue");

// import Home from "./views/Home.vue";
// import Users from "./views/Users.vue";
// import UsersPosts from "./views/UsersPosts.vue";
// import UsersProfile from "./views/UsersProfile.vue";
// import HeaderHome from "./views/HeaderHome.vue";
// import HeaderUsers from "./views/HeaderUsers.vue";

// Vue.use() プラグインを利用する
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      components: { default: Home, header: HeaderHome },
      // 特定のページに遷移前に処理をする
      beforeEnter(to, from, next) {
        next();
      },
    },
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
    return new Promise((resolve) => {
      this.app.$root.$once("triggerScroll", () => {
        console.log("triggerScroll");

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
    });

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
