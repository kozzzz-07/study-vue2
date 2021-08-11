<template>
  <div>
    <h3>Users</h3>
    <router-link to="/users/1">user1</router-link>
    <router-link to="/users/2">user2</router-link>
    <hr />
    <!-- <h1>User No. {{$route.params.id}}</h1> -->

    <!-- propsでurlの値を取れる -->
    <h1>User No. {{ id }}</h1>
    <router-link :to="`/users/${+id + 1}/profile?lang=ja#next-user`"
      >次のユーザ</router-link
    >
    <!-- tonにオブジェクトを指定できる。nameでrouterに定義したものを利用できる -->
    <router-view></router-view>
    <div style="height: 700px"></div>
    <router-link
      id="next-user"
      :to="{
        name: 'user-id-profile',
        params: { id: +id + 1 },
        query: { lang: 'ja', page: 2 },
        hash: '#next-user'
      }"
      >次のユーザ</router-link
    >
  </div>
</template>

<script>
export default {
  props: ["id"],
  beforeRouteEnter: (to, from, next) => {
    // thisは使えない
    console.log('beforeRouteEnter');
    next(vm => {
      console.log(vm.id);
    })
  },
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate');
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave');
    const isLeave = window.confirm("ページを離れますか？")
    if (isLeave) {
      next();
    } else {
      next(false);
    }
  },

  watch: {
    // $routeをwatchすることで、コンポーネントの切り替わり時の値を取れる
    $route(to, from) {
      console.log(to);
      console.log(from);
    },
  },
};
</script>
