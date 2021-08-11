<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Go Users</button>
    <p>{{ count }}</p>
    <p>{{ myDoubleCount }}</p>
  </div>
</template>

<script>
// gettersを取得できる
import { mapGetters } from "vuex";

export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
    // doubleCount() {
    //   return this.$store.getters.doubleCount;
    // }
    ...mapGetters(["doubleCount"]),
    // 別名もつけられる
    // ...mapGetters({myDoubleCount: "doubleCount"}),
  },
  methods: {
    toUsers() {
      // this.$router.push('users')
      // this.$router.push({path: 'users'})

      // paramsはnameのみにしか使えない
      this.$router.push({
        name: "user-id-profile",
        params: { id: 1 },
        hash: "#next-user",
      });
    },
  },
};
</script>
