import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false

Vue.component('LikeNumber', LikeNumber)

Vue.directive('border', function(el, binding) {
  el.style.border = "solid black 2px";
  el.style.borderWidth = binding.value.width;
  el.style.borderColor = binding.value.color;
  // 引数
  el.style.borderStyle = binding.arg;

  // 修飾子
  if (binding.modifiers.round) {
    el.style.borderRadius = "0.5rem";
  }
  if (binding.modifiers.shadow) {
    el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.5)";
  }
})

// Vue.directive('example', {
//   bind(el, binding, vnode) {
//     // ディレクティブが初めて対象の要素に紐づいた時
//   },
//   inserted(el, binding, vnode) {
//     // 親Nodeに挿入された時
//   },
//   update(el, binding, vnode, oldVnode) {
//     // コンポーネントが更新されるたび。子コンポーネントが更新される前
//   },
//   componentUpdated(el, binding, vnode, oldVnode) {
//     // コンポーネントが更新されるたび。子コンポーネントが更新された後
//   },
//   unbind(el, binding, vnode) {
//     // ディレクティブが紐づいたコンポーネントから取り除かれた時
//   }
// });

Vue.filter("upperCase", function(value) {
  return value.toUpperCase();
})

new Vue({
  render: h => h(App),
}).$mount('#app')
