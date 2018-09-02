<template>
  <RamroContainer>
    <div class="grid-row">
    <div class="content-start text-2xl w-full">Welcome to Ramro Vue</div>
    <div class="grid-column">
      <div class="widget shadow p-6 bg-white">
        <div class="text-4xl">3044</div>
        <div class="fill-current">Contacts</div>
      </div>
      <div class="widget shadow p-6 bg-white">
        <div class="text-4xl">3044</div>
        <div class="fill-current">Contacts</div>
      </div>
      <div class="widget shadow p-6 bg-white">
        <div class="text-4xl">3044</div>
        <div class="fill-current">Contacts</div>
      </div>
      <div class="widget shadow p-6 bg-white">
        <div class="text-4xl">3044</div>
        <div class="fill-current">Contacts</div>
      </div>
    </div>
  </div>
  </RamroContainer>
</template>

<script>
import RamroContainer from '../../../components/Container';

export default {
  name: 'Dashboard',
  components: { RamroContainer },
};
</script>

<style scoped>
  .grid-column {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    grid-gap: 1rem;
  }

  .grid-row {
    display: grid;
    grid-gap: 1.2rem;
  }
</style>
