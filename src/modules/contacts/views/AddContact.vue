<template>
<div class="fixed pin z-50 overflow-auto flex" style="background-color: rgba(0, 0, 0, 0.6)">
  <div class="fixed shadow-lg max-w-md md:relative pin-b pin-x align-top m-auto bg-white md:rounded w-full md:h-auto md:shadow">
    <h2 class="font-normal ml-6 mt-4">Add Contact Form</h2>
    <section class="rounded shadow bg-white h-full p-6 mt-3">
      <div class="-mx-3 md:flex mb-6">
        <RamroInput v-model="firstName" class="mb-6 md:mb-0" label="First Name" name="first_name"/>
        <RamroInput :has-error="true" v-model="lastName" label="Last Name"  name="last_name"/>
      </div>
      <div class="-mx-3 md:flex mb-6">
        <RamroInput class="b-6 md:mb-0" label="Email" type="email" name="email"/>
        <RamroInput label="Phone" name="phone"/>
      </div>
      <div class="-mx-3 md:flex mb-2">
        <RamroInput v-model="city" class="mb-6 md:mb-0" label="City" name="city"/>
        <div class="md:w-1/2 px-3">
          <label class="block tracking-wide text-grey-darker text-sm font-bold mb-2">
            State
          </label>
          <div class="relative">
            <select class="focus:outline-none transition block focus:bg-grey-lightest focus:border-primary-light appearance-none w-full bg-white focus:bg-grey-lightest border border-grey-light text-grey-darker py-3 px-3 rounded">
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
            <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
              <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>
        <RamroInput v-model="zip" label="Zip" name="zip_code" type="number"/>
      </div>
      <div class="mt-8 flex">
          <RamroButton type="button" class="mr-3 content-end" @click="cancel">Cancel</RamroButton>
          <RamroButton variant="primary" @click="submit">Save</RamroButton>
      </div>
    </section>
  </div>
</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import RamroInput from '../../../components/Input/Input.vue';
import RamroButton from '../../../components/Button/Button.vue';
import { ADD_ROW } from '../store/mutation-types';
import {
  mapAddressFields,
  mapContactMultiRowFields,
  mapNameFields,
} from '../store';

const SUBMIT = 'SUBMIT';
const {
  mapActions: mapCustomerActions,
  mapState: mapCustomerState,
} = createNamespacedHelpers('ClientModule');
const {
  mapMutations: mapContactMutations,
} = createNamespacedHelpers('ClientModule/contact');

export default {
  name: 'AddContact',
  components: {
    RamroInput,
    RamroButton,
  },
  computed: {
    ...mapCustomerState(['error', 'success']),
    ...mapNameFields(['rows[0].firstName', 'rows[0].lastName']),
    ...mapContactMultiRowFields({ contacts: 'rows' }),
    ...mapAddressFields(['rows[0].zip', 'rows[0].city', 'rows[0].street']),
  },
  methods: {
    ...mapContactMutations({
      addContact: ADD_ROW,
    }),
    ...mapCustomerActions({
      submit: SUBMIT,
    }),
    cancel() {
      this.$router.push({ name: 'contact.list' });
    },
  },
};
</script>
