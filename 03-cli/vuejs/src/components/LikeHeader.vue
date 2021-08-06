<template>
  <div>
    <!-- 親から何も渡って来なければ、デフォルトが表示される -->
    <slot name="title">デフォルト</slot>
    <slot></slot>
    <slot name="number"></slot>

    <!-- スロットプロパティ 子から親にデータを上げる -->
    <slot name="user" :user="user" text="text"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "hoge"
      }
    }
  },

}
</script>