<template>
  <div>
    <h2>Users</h2>
    <nav>
      <!-- exactでactive-classは一致した時のみ適用される -->
      <router-link to="/" class="link" active-class="link--active" exact
        >Home</router-link
      >
      <router-link to="/users" class="link" active-class="link--active"
        >Users</router-link
      >
    </nav>
  </div>
</template>

<style scoped>
.link {
  margin-right: 10px;
}

.link--active {
  font-size: 20px;
}
</style>
