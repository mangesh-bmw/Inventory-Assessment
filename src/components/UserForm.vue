<template>
  <div class="mt-5 container">
    <v-card elevation="2" class="pb-5">
      <div class="d-flex" style="background: ">
        <div class="pa-4">
          <v-icon color="#347AAA" size="50">mdi-account-multiple-plus</v-icon>
        </div>
        <div class="pa-4">
          <h3 style="color: #347aaa">Add Users</h3>
          <p>
            Define Users as Buyers, Sellers, Billers & Viewers to manage your
            company account on this website
          </p>
        </div>
      </div>
      <v-divider class="pb-10"></v-divider>
      <div
        style="min-height: 400px; align-items: center; justify-content: center"
        class="d-flex"
        v-if="user_list.length < 1"
      >
        <div class="">
          <h4 style="text-align: center; font-weight: 400">
            No Users Added yet
          </h4>
          <p class="caption">Start by Adding your first User</p>
          <v-btn
            outlined
            color="primary"
            @click="dialog = !dialog"
            style="font-weight:100px; font-size-12px"
            >+ Add New User
          </v-btn>
        </div>
      </div>
      <div v-else class="text-center">
        <div class="">
          <div class="pr-5 text-right pb-5">
            <v-btn outlined color="primary" @click="dialog = !dialog"
              >+ Add New User
            </v-btn>
          </div>

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
          <v-btn
            outlined
            color="#347aaa"
            class="px-8 mr-4 mt-5"
            @click="$emit('nextStep', 1)"
            >Back</v-btn
          >
          <v-btn color="#347aaa" class="pr-1 white--text mt-5" @click="$emit('nextStep', 3)">
            <span class="px-4" >Next</span>
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </div>
    </v-card>
    <!--  -->
    <v-dialog v-model="dialog" width="1000">
      <v-card class="pr-5">
        <v-card-title class="text-h5"> Add User </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-form ref="address_form" class="mt-5" lazy-validation>
            <v-row no-gutters>
              <v-col cols="12" md="2" class="text-right pt-3 pr-5"
                >Name<sup class="red--text">*</sup>
              </v-col>
              <v-col cols="12" md="4" class="pb-3">
                <v-text-field
                  v-model="form.name"
                  placeholder="Enter Your Name"
                  class="mt-1"
                  dense
                  :rules="[$rules.REQUIRED_FIELD('')]"
                  outlined
                  single-line
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="2" class="text-right pt-3 pr-5"
                >Mobile No. <sup class="red--text">*</sup>
              </v-col>
              <v-col cols="12" md="4" class="pb-3">
                <v-text-field
                  v-model="form.mobile"
                  placeholder="Enter Your Mobile No."
                  class="mt-1"
                  dense
                  :rules="$rules.MOBILE"
                  maxlength="10"
                  outlined
                  single-line
                  @keydown="restrictChar($event)"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="2" class="text-right pt-3 pr-5"
                >Designation <sup class="red--text">*</sup>
              </v-col>
              <v-col cols="12" md="4" class="pb-3">
                <v-text-field
                  v-model="form.designation"
                  placeholder="Enter the User Designation"
                  class="mt-1"
                  dense
                  :rules="[$rules.REQUIRED_FIELD('')]"
                  maxlength="80"
                  outlined
                  single-line
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="2" class="text-right pt-3 pr-5"
                >Email ID <sup class="red--text">*</sup>
              </v-col>
              <v-col cols="12" md="4" class="pb-3">
                <v-text-field
                  v-model="form.email"
                  placeholder="Enter Your Email ID"
                  class="mt-1"
                  dense
                  maxlength="80"
                  outlined
                  :rules="$rules.EMAIL"
                  single-line
                ></v-text-field>
              </v-col>
              <v-col md="2" cols="12" class="text-right pr-5">
                Profile <sup class="red--text">*</sup>
                <p style="font-size: 10px">
                  (You may select one or more roles for the same user on the
                  platform)
                </p>
              </v-col>
              <v-col md="10" cols="12">
                <div class="d-flex">
                  <v-checkbox
                    v-model="form.profile"
                    label="Seller"
                    value="Seller"
                    class="pr-5"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="form.profile"
                    label="Buyer"
                    value="Buyer"
                    class="pr-5"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="form.profile"
                    label="Billing"
                    value="Billing"
                    class="pr-5"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="form.profile"
                    label="Viewer"
                    value="Viewer"
                    class="pr-5"
                  > </v-checkbox>
                </div>
              </v-col>
            </v-row>
            <div class="text-center my-5">
              <v-btn
                outlined
                color="#347aaa"
                class="px-8 mr-4"
                @click="saveDetails"
                >Save User</v-btn
              >

              <p class="pt-3 caption">
                You can view the above user’s details after saving the changes
              </p>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    dialog: false,
    userdata: [],
    form: {
      designation: "",
      email: "",
      mobile: null,
      name: "",
      profile: [],
    },
  }),
  created() {},
  computed: mapGetters({
    user_list: "getUserList",
  }),
  methods: {
    /* get address */
    saveDetails() {
      if (this.$refs.address_form.validate()) {
        this.userdata = this.user_list;
        //  do something
        let obj = {
          designation: this.form.designation,
          email: this.form.email,
          mobile: this.form.mobile,
          name: this.form.name,
          profile: this.form.profile,
        };
        this.userdata.push(obj);
        this.$store.dispatch("setUserList", this.userdata);

        this.dialog = false;
        this.$refs.address_form.reset();
      }
    },
    restrictChar(event) {
      let digitPeriodRegExp = new RegExp("\\d|\\.");
      if (
        event.ctrlKey || // (A)
        event.altKey || // (A)
        typeof event.key !== "string" || // (B)
        event.key.length !== 1
      ) {
        // (C)
        return;
      }
      if (!digitPeriodRegExp.test(event.key)) {
        event.preventDefault();
      }
    },
  },
};
</script>
<style scoped>
.v-btn {
  font-weight: 200px;
}
</style>
