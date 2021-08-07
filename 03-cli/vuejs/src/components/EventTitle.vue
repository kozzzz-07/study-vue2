<template>
  <div>
    <label for="title">タイトル</label>
    <input
      type="text"
      id="title"
      :value="title"
      @input="$emit('input', $event.target.value)"
    />
    <pre>{{ title }}</pre>
  </div>
</template>

<script>
export default {
  // デフォルトは、prop:value event:input https://jp.vuejs.org/v2/api/#model
  model: {
    prop: "title",
    event: "input",
  },
  props: ["title"],
};
</script>
