<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name:'App',
//   created(){
//   const api = "https://vue-course-api.hexschool.io/api/mason/products";
//     this.$http.get(api).then((response) =>{
//     console.log(response.data);
//   })
// }
}
</script>
<style lang ="scss">
@import "~bootstrap/scss/bootstrap";
@import "./assets/Dashboard";
@import './assets/css/all.css';
</style>
