import { helpers } from 'vuelidate/lib/validators';

const email = helpers.regex('alpha', /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/);
const password = helpers.regex('alpha', /^[A-Za-z0-9]{6,20}$/);

export {
  email,
  password,
};
