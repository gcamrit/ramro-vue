import { createCustomer } from './../models/Customer';
import { ERROR, SUCCESS } from './mutation-types';

export const SUBMIT = 'SUBMIT';

const actions = {
  async [SUBMIT]({ commit, state }) {
    try {
      const customerData = createCustomer({
        // @TODO add example for, if user can have
        // multiple address like shipping and billing address
        address: state.address.rows[0],
        name: state.name.rows[0],
      });
      console.log(customerData); // do a api call here.

      commit(SUCCESS);
    } catch (error) {
      commit(ERROR, error.message);
    }
  },
};
export default actions;
