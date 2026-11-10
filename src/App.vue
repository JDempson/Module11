<template>
  <nav>
    <router-link to="/about">About</router-link> |
    <router-link to="/quotes">Random Quotes</router-link> |
    <router-link to="/contact">Contact</router-link>
  </nav>
  
  <div style="margin: 10px 0;">
    <button @click="$router.back()">Go Back</button>
  </div>

  <hr />
  
  <router-view />
</template>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 20px;
}
nav {
  padding: 20px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
  text-decoration: none;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>