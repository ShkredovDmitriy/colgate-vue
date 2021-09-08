<template lang="pug">
  form(
    id="formAuth"
    class="form form-auth"
    @submit.prevent="submit"
  )
    .form-row
      .form-col
        InputText(
          :name="login"
          placeholder="Email"
          :onInput='setLogin'
          :error="{ 'error': $v.login.$error }"
        )
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
          .error(v-if="!$v.password.required&&$v.password.$error") {{messages.required}}
          .error(v-if="!$v.password.password&&$v.password.$error") {{messages.password}}
    .form-row
      .form-col
        ButtonForm Enter
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import InputText from '@/elements/input/input-text/input-text.vue';
import { apiLogin } from '@/api/api';
import { email, password } from '@/helpers/regex';
import { messages, errors } from '@/config/messages';
import ButtonForm from '@/elements/button/buttonForm/buttonForm.vue';
import { modalAuthHide, modalInfoShow } from '@/components/modal/modal/config';

export default {
  name: 'FormAuth',
  data() {
    return {
      login: '',
      password: '',
      messages,
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
    apiSuccess() {
      console.log('api success');
    },
    apiError() {
      modalAuthHide(this);
      modalInfoShow(this, errors.network.title, errors.network.message);
      console.log('api error');
    },
    setLogin(event) {
      this.login = event.target.value;
      this.$v.login.$touch();
    },
    setPassword(value) {
      this.password = value;
      this.$v.password.$touch();
    },
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR';
      } else {
        apiLogin(this.apiSuccess, this.apiError);
      }
    },
  },
  components: {
    InputText,
    ButtonForm,
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
</style>
