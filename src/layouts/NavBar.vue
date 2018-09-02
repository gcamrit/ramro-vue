<template>
  <div class="flex bg-white z-100 items-center border-grey-dark"
        style="transition-duration: 3s;
    -webkit-transition-property: position, left, right, top, z-index;
    -moz-transition-property: position, left, right, top, z-index;
    -o-transition-property: position, left, right, top, z-index;
    transition-property: position, left, right, top, z-index;
    box-shadow: 1px 0px 20px rgba(0, 0, 0, 0.08);"
  >
    <div class="container mx-auto">
      <div class="flex items-center">
        <router-link tag="div" to="/dashboard" class="flex mr-8 text-grey-darkest opacity-75">
          <a class="no-underline text-current flex items-center py-4">
            <svg class="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
            </svg>
            Dashboard
          </a>
        </router-link>
        <router-link tag="div" to="/contacts" class="flex mr-8 text-grey-darkest opacity-75">
          <a class="no-underline text-current flex items-center py-4"
             href="#">
            <svg class="h-6 w-6 fill-current mr-2" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
            Contacts
          </a>
        </router-link>
        <router-link tag="div" to="/teams" class="flex mr-8 text-grey-darkest opacity-75">
          <a class="no-underline text-current flex items-center py-4"
             href="#">
            <svg class="h-6 w-6 fill-current mr-2" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"/>
            </svg>
            Teams
          </a>
        </router-link>
        <router-link tag="div" to="/reports" class="flex mr-8 text-grey-darkest opacity-75">
          <a class="no-underline text-current flex items-center py-4"
             href="#">
            <svg class="h-6 w-6 fill-current mr-2" height="48" width="48" viewBox="0 0 24 24">
              <defs>
                <path id="a" d="M0 0h24v24H0V0z"/>
              </defs>
              <clipPath id="b">
                <use xlink:href="#a" overflow="visible"/>
              </clipPath>
              <path clip-path="url(#b)" d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"/>
            </svg>
            Reports
          </a>
        </router-link>
        <router-link tag="div" to="/settings" class="flex mr-8 text-grey-darkest opacity-75">
          <a class="no-underline text-current flex items-center py-4"
             href="#">
            <svg class="h-6 w-6 fill-current mr-2" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
            </svg>
            Settings
          </a>
        </router-link>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'NavBar',
};
</script>
