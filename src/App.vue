<template>
  <div class="font-sans font-normal text-black leading-normal">
    <TopBar/>
    <NavBar/>
    <div class="mt-6">
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view/>
      </transition>
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
<style>
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.2s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>
