<template>
  <RamroContainer>
    <div class="mb-8">
    <section class="flex content-center align-center">
      <div class="content-start text-2xl flex-1 font-normal">Contacts (112)</div>
      <div class="content-end">
        <router-link :to="{ name: 'contact.add' }" tag="div">
          <RamroButton variant="primary">New Contact</RamroButton>
        </router-link>
      </div>
    </section>
    <section class="h-full w-full mt-6 overflow-auto scrolling-touch shadow bg-white">
      <table class="w-full">
        <thead>
        <tr class="border-b">
          <th class="p-4 text-left">ID</th>
          <th class="p-4 text-left">Name</th>
          <th class="p-4 text-left">Assignee</th>
          <th class="p-4 text-left">Added By</th>
          <th class="p-4 text-left">Office</th>
          <th class="p-4 text-left">Applications</th>
          <th class="p-4 text-left">Added On</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(contact, index) in new Array(20)"
            :key="index"
            class="hover:bg-primary-lightest shadow-sm border-b border-grey-light">
          <td class="p-2">#{{ index + 1 }}</td>
          <td class="p-2">
            <div class="flex flex-col">
              <span class="text-primary-dark">Amrit G.C</span>
              <span class="text-sm">music.demand01@gmail.com</span>
            </div>
          </td>
          <td class="p-2">
            <div class="flex flex-col">
              <span class="text-primary-dark">Amit Ranjitkar</span>
              <span class="text-sm">amit@introcept.co</span>
            </div>
          </td>
          <td class="p-2">Rudra G.C</td>
          <td class="p-2">Sydney Office</td>
          <td class="p-2">5</td>
          <td class="p-2">2018-04-21</td>
        </tr>
        </tbody>
      </table>
    </section>
  </div>
    <router-view/>
  </RamroContainer>
</template>
<script>
import Button from '../../../components/Button/Button.vue';
import RamroContainer from '../../../components/Container';

export default {
  name: 'ContactList',
  components: {
    RamroButton: Button,
    RamroContainer,
  },
  created() {},
};
</script>
