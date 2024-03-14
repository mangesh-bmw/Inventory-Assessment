<template>
  <div>
    <div class="company-details">
      Setup your company’s inventory management/ buying system in 3 steps
    </div>
    <div
      class="d-flex stepper-wrapper ml-4 mr-4"
      style="height: 100px margin-left:13px"
    >
      <v-avatar
        color="#347AAA"
        size="60"
        style="cursor: pointer"
        @click="$emit('nextStep', 1)"
      >
        <v-icon color="#fff" size="40">mdi-office-building</v-icon>
      </v-avatar>
      <br />
      <div class="divider-line" :class="step > 1 ? 'active-line' : ''"></div>
      <v-avatar
        :color="step > 1 ? '#347AAA' : 'grey'"
        size="60"
        style="cursor: pointer"
        @click="$emit('nextStep', 2)"
      >
        <v-icon color="#fff" size="40">mdi-account-multiple-plus</v-icon>
      </v-avatar>
      <div class="divider-line" :class="step > 2 ? 'active-line' : ''"></div>
      <v-avatar
        :color="step > 2 ? '#347AAA' : 'grey'"
        size="60"
        style="cursor: pointer"
        @click="$emit('nextStep', 3)"
      >
        <v-icon color="#fff" size="35">mdi-send</v-icon>
      </v-avatar>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.company-details {
  text-align: center;
  color: #347aaa;
  margin-top: 33px;
  font-size: larger;
}
.stepper-wrapper {
  height: 100px;
  align-items: center;
  justify-content: center;
}
.divider-line {
  height: 4px;
  width: 150px;
  background: grey;
  border-radius: 4px;
  margin: 0px 10px;
}
.active-line {
  background: #347aaa;
}

.stepper-title {
  display: flex;
}
</style>

<script>
export default {
  props: ["step"],
  data: () => ({
    //
  }),
};
</script>
