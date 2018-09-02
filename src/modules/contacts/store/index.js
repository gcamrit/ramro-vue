import { createHelpers } from 'vuex-map-fields';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import contact from './forms/Contact';
import address from './forms/Address';
import name from './forms/Name';


const state = () => ({
  error: false,
  success: false,
});

const modules = {
  contact,
  name,
  address,
};

// We're exporting customer field mapper
// functions for mapping form fields to Vuex.
// See: https://github.com/maoberlehner/vuex-map-fields#custom-getters-and-mutations
export const { mapFields: mapAddressFields } = createHelpers({
  getterType: 'ClientModule/address/getField',
  mutationType: 'ClientModule/address/updateField',
});

export const { mapMultiRowFields: mapContactMultiRowFields } = createHelpers({
  getterType: 'ClientModule/contact/getField',
  mutationType: 'ClientModule/contact/updateField',
});

export const { mapFields: mapNameFields } = createHelpers({
  getterType: 'ClientModule/name/getField',
  mutationType: 'ClientModule/name/updateField',
});

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
  modules,
};
