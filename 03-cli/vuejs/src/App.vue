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
      <!-- formをコンポーネント化 -->
      <EventTitle v-model="eventData.title"></EventTitle>
      <!-- 
        デフォルトでは、
        <EventTitle :value="eventData.title" @input="eventData.title = $event"></EventTitle>
        で処理されることを意識する
      -->

      <label for="maxNumber">最大人数</label>
      <input
        type="number"
        id="maxNumber"
        v-model.number="eventData.maxNumber"
      />
      <p>{{ typeof eventData.maxNumber }}</p>

      <label for="host">主催者</label>
      <input type="text" id="host" v-model.trim="eventData.host" />
      <pre>{{ eventData.host }}</pre>

      <label for="detail">イベントの内容</label>
      <textarea id="detail" cols="30" rows="10" v-model="eventData.detail" />
      <pre>{{ eventData.detail }}</pre>

      <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate" />
      <label for="isPrivate">非公開</label>
      <p>{{ eventData.isPrivate }}</p>

      <p>参加条件</p>
      <input type="checkbox" id="10" value="10代" v-model="eventData.target" />
      <label for="10">10代</label>
      <input type="checkbox" id="20" value="20代" v-model="eventData.target" />
      <label for="20">20代</label>
      <input type="checkbox" id="30" value="30代" v-model="eventData.target" />
      <label for="30">30代</label>
      <p>{{ eventData.target }}</p>

      <p>参加費</p>
      <input type="radio" id="free" value="無料" v-model="eventData.price" />
      <label for="free">無料</label>
      <input type="radio" id="paid" value="有料" v-model="eventData.price" />
      <label for="paid">有料</label>
      <p>{{ eventData.price }}</p>

      <p>開催場所</p>
      <select v-model="eventData.location">
        <option v-for="location in locations" :key="location">
          {{ location }}
        </option>
      </select>
      <p>{{ eventData.location }}</p>

      <label for="title">タイトル</label>
      <!-- v-modelと同じ意味 https://jp.vuejs.org/v2/guide/forms.html#%E5%9F%BA%E6%9C%AC%E7%9A%84%E3%81%AA%E4%BD%BF%E3%81%84%E6%96%B9 -->
      <input
        type="text"
        id="title"
        :value="eventData.title"
        @input="eventData.title = $event.target.value"
      />
      <pre>{{ eventData.title }}</pre>
    </div>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";
import EventTitle from "./components/EventTitle.vue";

export default {
  data() {
    return {
      number: 10,
      title: "title",
      currentComponent: "Home",
      locations: ["東京", "大阪", "名古屋"],
      eventData: {
        title: "title",
        maxNumber: 0,
        host: "",
        detail: "",
        isPrivate: false,
        target: [],
        price: "無料",
        location: "東京",
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
    EventTitle,
  },
};
</script>

<style scoped>
div {
  border: 1px solid blue;
}
</style>