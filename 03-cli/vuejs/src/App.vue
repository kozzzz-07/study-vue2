<template>
  <div>
    <LikeHeader>
      <!-- 名前付きslot -->
      <!-- #で省略できる -->
      <!-- <template v-slot:[title]> -->
      <template #title>
        <h1>トータルのいいね数</h1>
      </template>
      <!-- <template v-slot:number> -->
      <template #number>
        <h2>{{ number }}</h2>
      </template>
      <!-- デフォルトslot -->
      <p>こんにちは</p>
      <!-- 暗黙的に下記のようになる -->
      <!--
      <template v-slot:default>
        <p>こんにちは</p>
      </template>
      -->
      <template v-slot:user="slotProps">
        <p>{{ slotProps }}</p>
        <p>{{ slotProps.user.name }}</p>
      </template>
    </LikeHeader>

    <!-- <LikeNumber :totalNumber="number" v-on:my-click="number = $event"></LikeNumber> -->
    <LikeNumber
      :totalNumber="number"
      v-on:my-click="incrementNumber"
    ></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>

    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <!-- 動的コンポーネント、切り替えるたびに削除と作成が行われる -->
    <component :is="currentComponent"></component>
    <!-- コンポーネントの状態を保持する -->
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>

    <div>
      <h2>イベントのフォーム</h2>
      <label for="title">タイトル</label>
      <input type="text" id="title" v-model.lazy="eventData.title" />
      <p>{{eventData.title}}</p>
    </div>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";

export default {
  data() {
    return {
      number: 10,
      title: "title",
      currentComponent: "Home",
      eventData: {
        title: "title",
      },
    };
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    },
  },
  components: {
    LikeHeader,
    About,
    Home,
  },
};
</script>

<style scoped>
div {
  border: 1px solid blue;
}
</style>