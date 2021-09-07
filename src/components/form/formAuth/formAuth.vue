<template lang="pug">
  form(
    id="formAuth"
    class="form form-auth"
    @submit.prevent="submit"
  )
    .form-row
      .form-col
        .input-container(:class="{ 'error': $v.login.$error }")
          input(
            class="input-field"
            id="formAuthLogin"
            placeholder="E-mail"
            v-model.trim="login"
            @input="setLogin($event.target.value)"
          )
          .error(v-if="!$v.login.required&&$v.login.$error") Field is required
          .error(v-if="!$v.login.email&&$v.login.$error") Use format some@mail.com

    .form-row
      .form-col
        .input-container(:class="{ 'error': $v.password.$error }")
          input(
            class="input-field"
            id="formAuthPassword"
            placeholder="Password"
            v-model.trim="password"
            @input="setPassword($event.target.value)"
          )
          .error(v-if="!$v.password.required&&$v.password.$error") Field is required
          .error(v-if="!$v.password.password&&$v.password.$error") Use letters and numbers
    .form-row
      .form-col
        button(
          class="button button-form"
          type="submit"
        ) Enter
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import { email, password } from '@/helpers/regex';

export default {
  name: 'FormAuth',
  data() {
    return {
      login: '',
      password: '',
    };
  },
  validations: {
    login: {
      required,
      email,
    },
    password: {
      required,
      password,
    },
  },
  methods: {
    setLogin(value) {
      this.login = value;
      this.$v.login.$touch();
    },
    setPassword(value) {
      this.password = value;
      this.$v.password.$touch();
    },
    submit() {
      console.log('submit!');
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR';
        console.log('Error!');
      }
    },
  },
};
</script>

<style lang="scss">
.form {
  width: 100%;
}
.form-row {
  &:nth-child(n + 2) {
    margin-top: 1.5rem;
  }
}
.input-container {
  width: 100%;
  &.error {
    .input-field {
      border: 1px solid red;
    }
  }
  .error {
    margin-top: 0.25rem;
    font-size: 0.875rem;
    color: red;
  }
}
.input-field {
  width: 100%;
  height: 2.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border: 1px solid grey;
  border-radius: 0.3125rem;
  font-size: 1rem;
  font-weight: 500;
  color: black;
}
.button-form {
  width: 100%;
  height: 2.5rem;
  border: 2px solid red;
  border-radius: 0.3125rem;
  background-color: red;
  font-size: 1rem;
  font-weight: 700;
  color: white;
  transition: 0.3s;
  text-transform: uppercase;
  &:hover {
    background-color: white;
    color: red;
  }
}
</style>
