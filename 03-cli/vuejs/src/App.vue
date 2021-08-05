<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>{{number}}</h2>
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
      number: 10
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