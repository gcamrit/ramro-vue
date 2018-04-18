<template>
  <div class="font-sans font-normal text-black leading-normal bg-grey-lightest">
    <TopBar/>
    <div class="container mx-auto mt-6">
      <router-view/>
    </div>
  </div>
</template>
<script>
  import TopBar from './layouts/TopBar';

  export default {
    name: 'VueApp',
    components: {
      TopBar,
    },
  };
</script>