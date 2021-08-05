<template>
  <div>
    <p>いいね({{halfNumber}})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
  export default {
    // 配列指定
    // props:["totalNumber"],
    // object指定
    props: {
      // バリデーション
      // totalNumber: Number
      totalNumber: {
        type: Number,
        reqiuerd: true
      },
    },
    computed: {
      halfNumber() {
        return this.totalNumber / 2;
      }
    },
    methods: {
      increment() {
        this.totalNumber += 1;
      }
    },
  }
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>