<template>
  <div class="flex bg-white z-100 items-center" style="box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .1)">
    <div class="container mx-auto px-2">
      <div class="flex items-center md:justify-between py-3">
        <div class="w-1/3 md:w-auto flex items-center text-center
         text-grey-darkest text-xl">
          Ramro &nbsp;<strong class="text-3xl">{</strong> &nbsp;@vue&nbsp;<strong class="text-3xl">}</strong>
        </div>
        <div class="xs:hidden w-1/2 text-center text-white font-normal text-sm">
          <input
            style="outline: none"
            class="transition border border-transparent focus:bg-white focus:border-grey-light placeholder-grey-darkest rounded bg-grey-lighter py-2 px-4 pl-10 block w-full appearance-none leading-normal"
            id="username" type="text" placeholder="Search anything.....">
        </div>

        <div class="w-1/4 md:w-auto md:flex text-right">
          <img
            class="h-10 rounded-full"
            src="https://avatars1.githubusercontent.com/u/3395725?s=460&v=4"
            alt="Amrit G.C">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
};
</script>
<style>
  .transition {
    transition: all .1s ease-in;
  }
</style>