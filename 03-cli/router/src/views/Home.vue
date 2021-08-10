<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Go Users</button>
  </div>
</template>

<script>
export default {
  methods: {
    toUsers() {
      // this.$router.push('users')
      // this.$router.push({path: 'users'})

      // paramsはnameのみにしか使えない
      this.$router.push({ name: "user-id-profile", params: { id: 1 } });
    },
  },
};
</script>
