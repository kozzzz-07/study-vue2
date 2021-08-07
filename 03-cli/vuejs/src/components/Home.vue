<template>
  <div>
    <!-- カスタムディレクティブ:引数.修飾子=属性値 -->
    <p v-border:dotted.round.shadow="{ width: '5px', color: 'red' }">Home</p>
    <p v-localBorder:dotted.round.shadow="{ width: '1px', color: 'blue' }">
      Hoge
    </p>
    <h2>{{ title | upperCase }}</h2>
    <h2>{{ title | lowerCase }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Welcome to Tokyo",
    };
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    },
  },
  directives: {
    localBorder(el, binding) {
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
    },
  },
};
</script>
