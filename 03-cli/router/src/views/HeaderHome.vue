<template>
  <div>
    <h2>Home</h2>
    <nav>
      <!-- exactでactive-classは一致した時のみ適用される -->
      <router-link to="/" class="link" active-class="link--active" exact
        >Home</router-link
      >
      <router-link to="/users" class="link" active-class="link--active"
        >Users</router-link
      >
    </nav>

    <!-- mapActions、mapMutationsではcommitの第二引数を関数の引数として渡して同じ意味になる -->
    <button @click="increment(2)">+1</button>
    <button @click="decrement(2)">-1</button>

    <!-- <button @click="increment">+1</button>
    <button @click="decrement">-1</button> -->
  </div>
</template>

<script>
// import {mapMutations} from 'vuex'
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["increment", "decrement"])
    // increment() {
    //   // dispatchでactionsを発火
    //   this.$store.dispatch("increment", 2);
    // },
    // decrement() {
    //   // dispatchでactionsを発火
    //   this.$store.dispatch("decrement", 2);
    // },

    // ...mapMutations(["increment", "decrement"]),
    // increment() {
    //   // commitでmutationsを発火
    //   this.$store.commit("increment", 2);
    // },
    // decrement() {
    //   this.$store.commit("decrement", 2);
    // }
  },
};
</script>

<style scoped>
.link {
  margin-right: 10px;
}

.link--active {
  font-size: 20px;
}
</style>
