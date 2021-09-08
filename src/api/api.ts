const axios = require('axios');

const apiLogin = (apiSuccess: any, apiError: any) => {
  axios.post('/api/login', {
    login: 'Fred',
    password: '12345',
  })
    .then((response: any) => {
      apiSuccess();
    })
    .catch((error: any) => {
      apiError();
    });
};

const apiReg = () => {
  console.log('registration');
};

export {
  apiLogin,
  apiReg,
};
