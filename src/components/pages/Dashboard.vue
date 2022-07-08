<template>
  <div>
      <Navbar/>
      <Alert></Alert>
    <div class="container-fluid">
      <div class="row">
        <Sidebar></Sidebar>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>


<script>
import Navbar from "../Navbar.vue";
import Sidebar from "../Sidebar.vue";
import Alert from "../AlertMassage.vue";
export default {
  components: {
    Navbar,
    Sidebar,
    Alert
  },
};
</script>
