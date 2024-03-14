<template>
  <div class="mt-5 container">
    <v-card elevation="2" class="pb-5">
      <div class="d-flex" style="background: ">
        <div class="pa-4">
          <v-icon color="#347AAA" size="50">mdi-send</v-icon>
        </div>
        <div class="pa-4">
          <h3 style="color: #347aaa">Submit Form</h3>
          <p>Preview and submit</p>
        </div>
      </div>
      <v-divider class="pb-10"></v-divider>
      <div
        style="min-height: 400px; align-items: center; justify-content: center"
        class="d-flex"
      >
        <div class="text-center">
          <div>
            <h3>Company Data</h3>
            <p>{{ company_data }}</p>
          </div>
          <div>
            <h3>User Data</h3>
            <template>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Name</th>
                      <th class="text-left">Mobile</th>
                      <th class="text-left">Email</th>
                      <th class="text-left">Designation</th>
                      <th class="text-left">Profile</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in user_list" :key="item.name" class="text-left">
                      <td>{{ item.name }}</td>
                      <td>{{ item.mobile }}</td>
                      <td>{{ item.email }}</td>
                      <td>{{ item.designation }}</td>
                      <td>{{ item.profile.join(" | ") }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </template>
          </div>
          <v-btn
            outlined
            color="primary"
            @click="$emit('nextStep', 2)"
            style="font-weight:100px; font-size-12px"
            >Back
          </v-btn>

          <v-btn
            class="ml-5"
            outlined
            color="primary"
            style="font-weight:100px; font-size-12px"
            >Submit
          </v-btn>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({}),
  created() {},
  computed: mapGetters({
    user_list: "getUserList",
    company_data: "getCompanydata",
  }),
  methods: {
    /* get address */
    saveDetails() {},
  },
};
</script>
<style scoped>
.v-btn {
  font-weight: 200px;
}
</style>
