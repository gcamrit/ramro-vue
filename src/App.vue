<template>
  <div class="font-sans font-normal text-black leading-normal bg-grey-lighter h-screen">
    <TopBar/>
    <NavBar/>
    <div class="container mx-auto mt-6">
      <router-view/>
    </div>
  </div>
</template>
<script>
import TopBar from './layouts/TopBar.vue';
import NavBar from './layouts/NavBar.vue';

export default {
  name: 'RamroVue',
  components: {
    TopBar,
    NavBar,
  },
};
</script>
