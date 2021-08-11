import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 全てのページ遷移前に特定の処理をする
router.beforeEach((to, from, next) => {
  if (to.path === "/users/10/profile") {
    next('/')
  }
  next();
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
