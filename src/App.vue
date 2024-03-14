<template>
  <v-app>
    <nav-bar />
    <v-main>
      <stepper-view :step="step" @nextStep="updateStep" />
      <company-form  @nextStep="updateStep" v-if="step == 1" />
      <user-form  @nextStep="updateStep" v-if="step == 2" />
      <submit-form  @nextStep="updateStep" v-if="step == 3" />
    </v-main>
    <app-footer />
  </v-app>
</template>
<style>
@import url(./assets/css/index.scss);
</style>

<script>
import NavBar from "./components/NavBar.vue";
import AppFooter from "./components/AppFooter.vue";
import CompanyForm from "./components/CompanyForm.vue";
import UserForm from "./components/UserForm.vue";
import SubmitForm from "./components/SubmitForm.vue";
import StepperView from "./components/StepperView.vue";

export default {
  name: "App",

  components: {
    NavBar,
    AppFooter,
    CompanyForm,
    UserForm,
    SubmitForm,
    StepperView,
  },

  data: () => ({
    //
    step: 1,
  }),
  methods: {
    updateStep(step) {
      this.step = step;
    },
  },
};
</script>
