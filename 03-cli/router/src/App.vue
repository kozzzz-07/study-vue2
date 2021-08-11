<template>
  <div style="width: 700px; margin: auto; padding-top: 30px;">
    <router-view name="header"></router-view>
    <!-- まだDOMがない時に指定するbefor-enter -->
    <transition name="fade" mode="out-in" @befor-enter="beforeEnter">
      <router-view></router-view>    
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    beforeEnter() {
      // $root main.jsのVueインスタンスを指す
      this.$root.$emit("triggerScroll");
    }
  },
}
</script>

<style scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>