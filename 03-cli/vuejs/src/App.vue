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
        <h2>{{number}}</h2>
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
        <p>{{slotProps}}</p>
        <p>{{slotProps.user.name}}</p>
      </template>
    </LikeHeader>

    <!-- <LikeNumber :totalNumber="number" v-on:my-click="number = $event"></LikeNumber> -->
    <LikeNumber :totalNumber="number" v-on:my-click="incrementNumber"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
  </div>

</template>

<script>
import LikeHeader from './components/LikeHeader.vue';

export default {
  data() {
    return {
      number: 10,
      title: "title"
    }
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    }
  },
  components: {
    LikeHeader
  }
}
</script>

<style scoped>
div {
  border: 1px solid blue;
}
</style>