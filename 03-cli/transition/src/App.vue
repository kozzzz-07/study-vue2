<template>
  <div class="main">
    <button @click="myAnimation = 'slide'">Slide</button>
    <button @click="myAnimation = 'fade'">Fade</button>
    <p>{{myAnimation}}</p>
    <button @click="show = !show">切り替え</button><br>
    <br><br>

    <!-- transitionをjsで制御する -->
    <!-- :css=falseでcssを利用しないことを明示する（jsのみ） -->
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div class="circle" v-if="show"></div>
    </transition>
    <!-- 
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-canselled="enterCanselled"

      @before-Leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-canselled="leaveCanselled"
    >
      <div class="circle"></div>    
    </transition>
    -->

    <button @click="myComponent = 'ComponentA'">ComponentA</button>
    <button @click="myComponent = 'ComponentB'">ComponentB</button>
    <transition name="fade" mode="out-in">
      <component :is="myComponent"></component>
    </transition>


    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>

    <!-- typeでanimationかtransitionのどっちを優先させるかを選べる -->
    <!-- appearで描画時にトラジションを適応させる -->
    <transition name="slide" type="animation" appear>
      <p v-if="show">bye</p>
    </transition>

    <!-- カスタムトラジション、ないものはv-xxがデフォルトで入る、空で指定すれば入らないようになる -->
    <transition
      name="fade"
      enter-active-class="animate__animated animate__bounce"
      leave-active-class="animate__animated animate__bshake"
    >
      <p v-if="show">hello</p>
    </transition>

    <!-- 動的にnameを切り替える -->
    <transition :name="myAnimation" appear>
      <p v-if="show">bye</p>
    </transition>

    <!-- modeで複数の要素の表示のタイミングを調整できる -->
    <transition name="fade" mode="out-in">
      <!-- 同じ要素だとvueは効率よくレンダリングするために、中身だけを変更する関係でアニメーションが効かなくなる、keyを指定し違う要素とさせると良い -->
      <p v-if="show" key="bye">さようなら</p>
      <p v-else key="hello">こんにちは</p>
    </transition>
  </div>
</template>

<script>
import ComponentA from './components/ComponentA.vue'
import ComponentB from './components/ComponentB.vue'
export default {
  data() {
    return {
      show: true,
      myAnimation: 'slide',
      myComponent: "ComponentA"
    };
  },
  methods: {
    beforeEnter(el) {
      el.style.transform = 'scale(0)';
    },
    enter(el, done) {
      let scale = 0;
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`;
        scale += 0.1;
        if (scale > 1) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    leave(el, done) {
      let scale = 1;
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`;
        scale -= 0.1;
        if (scale < 0) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },

    // beforeEnter(el) {
    //   // 現れる前
    // },
    // enter(el, done) {
    //   // 現れる時
    // },
    // afterEnter(el) {
    //   // 現れた後
    // },
    // enterCanselled(el) {
    //   // 現れるアニメーションがキャンセルされた時
    // },
    // beforeLeave(el) {
    //   // 消える前
    // },
    // leave(el, done) {
    //   // 消える時
    // },
    // afterLeave(el) {
    //   // 消えた後
    // },
    // leaveCanselled(el) {
    //   // 消えるアニメーションがキャンセルされた時
    //   // v-showの時のみ使う
    // },
  },
  components: {
    ComponentA,
    ComponentB
  }
};
</script>

<style scoped>
.circle {
  width: 200px;
  height: 200px;
  margin: auto;
  background-color: deeppink;
  border-radius: 100px;
}


.fade-enter {
  /* 現れる時の最初の状態 */
  opacity: 0;
}
.fade-enter-active {
  /* 現れる時のトラジションの状態 */
  transition: opacity 1s;
}
.fade-enter-to {
  /* 現れる時の最後の状態 */
  opacity: 1;
}
.fade-leave {
  /* 消える時の最後の状態 */
  opacity: 1;
}
.fade-leave-active {
  /* 消える時のトラジションの状態 */
  transition: opacity 1s;
}
.fade-leave-to {
  /* 消える時の最後の状態 */
  opacity: 0;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}
.slide-enter-active {
  /* 現れる時のトラジションの状態 */
  animation: slide-in 0.5s;
  transition: opacity 1s;
}
.slide-leave-active {
  /* 消える時のトラジションの状態 */
  animation: slide-in 0.5s reverse;
  transition: opacity 1s;
}

@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}

.main {
  width: 70%;
  margin: auto;
  padding-top: 5rem;
  text-align: center;
}
</style>
