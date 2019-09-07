<template>
  <div id="app">
    <router-view />
    <footer>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style src="./styles.css"></style>
