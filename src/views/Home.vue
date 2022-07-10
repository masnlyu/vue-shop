<template>
  <div class="home">
    <!-- header --> 
  <Header></Header>
    <!-- header -->
  <router-view></router-view>
    <!-- footer -->
  <Footer></Footer>
      </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/views/Header'
import Footer from '@/views/Footer'
export default {
  name: 'Home',
  components: {
  Header,
  Footer,

  }
}
</script>
