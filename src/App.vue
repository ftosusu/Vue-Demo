<template>
<div id="app">
  <!-- <AddressVue class="address"></AddressVue> -->
  <router-view class="home"></router-view>
  <!-- <FooterVue class="footer"></FooterVue> -->
    </div>
</template>

<script>
// import AddressVue from './components/Address.vue'
// import FooterVue from './components/Footer.vue'
export default {
  name:'app',
  components:{
    // AddressVue,
    // FooterVue
  }
}
</script>

<style>
#app{
font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#app .home{
  position: relative;
  /* margin-top: 2rem; */
  /* height: 100rem; */
}
#app .footer{
  position: fixed;
  bottom: 0;
  z-index: 10;
}

</style>
