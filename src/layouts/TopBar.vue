<template>
  <div class="flex bg-white z-100 items-center">
    <div class="container mx-auto">
      <div class="flex items-center md:justify-between py-2">
        <div class="w-1/3 md:w-auto flex items-center text-center
         text-blue-darkest text-xl">
          Ramro &nbsp;<strong class="text-3xl">{</strong>
          &nbsp;<span class="text-green-dark">@vue</span>&nbsp;
          <strong class="text-3xl">}</strong>
        </div>
        <div class="xs:hidden w-1/2 text-center text-white font-normal text-sm">
          <input
            style="outline: none"
            class="transition border border-transparent focus:bg-white focus:border-grey-light placeholder-grey-darkest rounded bg-grey-lighter py-2 px-4 pl-10 block w-full appearance-none leading-normal"
            id="username" type="text" placeholder="Search anything.....">
        </div>
        <div class="w-1/4 md:w-auto flex text-right items-center">
          <img
            class="h-10 rounded-full mr-4"
            src="https://avatars1.githubusercontent.com/u/3395725?s=460&v=4"
            alt="Amrit G.C">
          <p>Amrit G.C</p>
          &nbsp;
          <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/>
            <path d="M0-.75h24v24H0z" fill="none"/>
          </svg>
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