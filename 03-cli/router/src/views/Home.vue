<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Go Users</button>
    <p>{{ count }}</p>
    <!-- <p>{{ myDoubleCount }}</p> -->

    <!-- vuexでv-modelを使う -->
    <!-- パターン1 v-modelを使わない -->
    <input type="text" :value="message" @input="updateMessage">
    <p>{{message}}</p>
    <!-- パターン2 setterを使う -->
    <input type="text" v-model="message2">

  </div>
</template>

<script>
// gettersを取得できる
import { mapGetters } from "vuex";

export default {
  computed: {
    message() {
      return this.$store.getters.message;
    },
    message2: {
      get() {
        return this.$store.getters.message2;
      },
      set(value) {
        this.$store.dispatch("updateMessage2", value);
      }
    },
    count() {
      return this.$store.state.count;
    },
    // doubleCount() {
    //   return this.$store.getters.doubleCount;
    // }
    ...mapGetters("count", ["doubleCount"]),
    // 別名もつけられる
    // ...mapGetters({myDoubleCount: "doubleCount"}),
  },
  methods: {
    updateMessage(e) {
      this.$store.dispatch("updateMessage", e.target.value);
    },
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
