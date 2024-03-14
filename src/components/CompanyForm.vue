<template>
  <div class="mt-5 container">
    <v-card elevation="2" class="pb-5">
      <div class="d-flex" style="background: ">
        <div class="pa-4">
          <v-icon color="#347AAA" size="50">mdi-office-building</v-icon>
        </div>
        <div class="pa-4">
          <h3 style="color: #347aaa">Company Details</h3>
          <p>
            Adding your company’s details is a mandatory step in registering
            your company
          </p>
        </div>
      </div>
      <v-divider class="pb-10"></v-divider>
      <v-form ref="company_form" class="mt-5" lazy-validation>
        <v-row no-gutters class="text-md-right">
          <v-col cols="12" md="5">
            <v-row no-gutters>
              <v-col cols="12" md="6" class="pt-3 pl-5"
                >Registered Company Name <sup class="red--text">*</sup>
              </v-col>
              <v-col cols="12" md="6" class="px-5 pb-3">
                <v-text-field
                  v-model="form.company_name"
                  placeholder="Company Name"
                  :rules="[$rules.REQUIRED_FIELD('')]"
                  class="mt-1"
                  dense
                  maxlength="80"
                  outlined
                  single-line
                  messages="Company Name as Registered on Official Documents"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="12" md="6" class="pt-3 pl-5">Website URL </v-col>
              <v-col cols="12" md="6" class="px-5 pb-3">
                <v-text-field
                  v-model="form.website_url"
                  placeholder="For E.g www.PNG.com"
                  :rules="[$rules.REQUIRED_FIELD('')]"
                  class="mt-1"
                  dense
                  outlined
                  single-line
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="12" md="6" class="pt-3 pl-5"
                >Your Name<sup class="red--text">*</sup>
              </v-col>
              <v-col cols="12" md="6" class="px-5 pb-3">
                <v-text-field
                  v-model="form.name"
                  placeholder="Enter Your Name"
                  :rules="[$rules.REQUIRED_FIELD('')]"
                  class="mt-1"
                  dense
                  outlined
                  single-line
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="12" md="6" class="pt-3 pl-5"
                >Your Email ID <sup class="red--text">*</sup>
              </v-col>
              <v-col cols="12" md="6" class="px-5 pb-3">
                <v-text-field
                  v-model="form.email"
                  placeholder="Enter Your Email ID"
                  class="mt-1"
                  :rules="$rules.EMAIL"
                  dense
                  outlined
                  single-line
                  messages="The above Email ID will be treated as company’s admin ID
and will be used for registration process"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="12" md="6" class="pt-3 pl-5"
                >Your Mobile No. <sup class="red--text">*</sup>
              </v-col>
              <v-col cols="12" md="6" class="px-5 pb-3">
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
                  messages="The above mobile no. will be treated as company’s admin
no. and will be used for registration process"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="12" md="6" class="pt-3 pl-5">Billing Address </v-col>
              <v-col cols="12" md="6" class="px-5 pb-3">
                <v-textarea
                  v-model="form.billing_address"
                  placeholder="Enter the Company Billing Address"
                  class="mt-1"
                  dense
                  outlined
                  single-line
                  messages="Will be used for all offline communications and billing purposes"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="7">
            <v-row no-gutters>
              <v-col cols="12" md="5" class="pt-3 pl-5"
                >PAN No. <sup class="red--text">*</sup>
              </v-col>
              <v-col cols="12" md="4" class="px-5 pb-3">
                <v-text-field
                  v-model="form.pan"
                  placeholder="Enter Company PAN no"
                  class="mt-1"
                  dense
                  :rules="[$rules.REQUIRED_FIELD('')]"
                  maxlength="16"
                  outlined
                  single-line
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="2" class="pl-2">
                <upload-file />
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="12" md="5" class="pt-3 pl-5">TAN No. </v-col>
              <v-col cols="12" md="4" class="px-5 pb-3">
                <v-text-field
                  v-model="form.tan"
                  placeholder="Enter Company TAN no"
                  class="mt-1"
                  dense
                  maxlength="20"
                  outlined
                  single-line
                  messages="TAN : Tax Deduction Account Number
of the compan"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="2" class="pl-2">
                <upload-file />
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="12" md="5" class="pt-3 pl-5"
                >CIN No. <sup class="red--text">*</sup>
              </v-col>
              <v-col cols="12" md="4" class="px-5 pb-3">
                <v-text-field
                  v-model="form.cin"
                  placeholder="Enter Company CIN no"
                  class="mt-1"
                  dense
                  maxlength="20"
                  outlined
                  :rules="[$rules.REQUIRED_FIELD('')]"
                  single-line
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="2" class="pl-2">
                <upload-file />
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="12" md="5" class="pt-3 pl-5"
                >GST No. <sup class="red--text">*</sup>
              </v-col>
              <v-col cols="12" md="4" class="px-5 pb-3">
                <v-text-field
                  v-model="form.gst"
                  placeholder="Enter the Company GST No."
                  class="mt-1"
                  dense
                  maxlength="20"
                  :rules="[$rules.REQUIRED_FIELD('')]"
                  outlined
                  single-line
                  messages="Company Name as Registered on Official Documents"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="2" class="pl-2">
                <upload-file />
              </v-col>
            </v-row>

            <v-row no-gutters>
              <v-col cols="12" md="5" class="pt-3 pl-5"
                >Cancelled Cheque
                <p>
                  <small style="font-size: 10px"
                    >( Only PDF file format is allowed )</small
                  >
                </p>
              </v-col>
              <v-col cols="12" md="2" class="pl-5 pt-3 pl-5">
                <upload-file />
              </v-col>
            </v-row>

            <v-row no-gutters>
              <v-col cols="12" md="5" class="pt-3 pl-5"
                >Company Registration Certificate <sup class="red--text">*</sup>
                <p>
                  <small style="font-size: 10px"
                    >( Only PDF file format is allowed )</small
                  >
                </p>
              </v-col>
              <v-col cols="12" md="2" class="pl-5 pt-3 pl-5">
                <upload-file />
              </v-col>
            </v-row>

            <v-row no-gutters>
              <v-col cols="12" md="5" class="pt-3 pl-5"
                >Management Authorization<sup class="red--text">*</sup>
                <p class="mb-0">
                  <small style="font-size: 10px"
                    >( Only PDF file format is allowed )</small
                  >
                </p>
                <small class="text-decoration-underline"
                  >Download Sample
                  <v-icon size="15px">mdi-download</v-icon></small
                >
              </v-col>
              <v-col cols="12" md="2" class="pl-5 pt-3 pl-5">
                <upload-file />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <div class="text-center my-5">
          <v-btn color="#347aaa" class="pr-1 white--text" @click="saveDetails">
            <span class="px-4">Next</span>
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
          <br />
          <p class="pt-3 pl-5 caption">
            Check the entered information before proceeding in the next part of
            the form
          </p>
        </div>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import UploadFile from "./shared/UploadFile.vue";
import { mapGetters } from "vuex";
export default {
  components: { UploadFile },
  comments: { UploadFile },
  data: () => ({
    form: {
      company_name: "",
      email: "",
      mobile: "",
      website_url: "",
      name: "",
      billing_address: "",
      pan: "",
      tan: "",
      cin: "",
      gst: "",
    },
  }),
  computed: mapGetters({
    company_data: "getCompanydata",
  }),
  created() {
    if (this.company_data) this.form = this.company_data;
  },
  methods: {
    /* get address */
    saveDetails() {
      if (this.$refs.company_form.validate()) {
        let obj = {
          company_name: this.form.company_name,
          email: this.form.email,
          mobile: this.form.mobile,
          website_url: this.form.website_url,
          name: this.form.name,
          billing_address: this.form.billing_address,
          pan: this.form.pan,
          tan: this.form.tan,
          cin: this.form.cin,
          gst: this.form.gst,
        };
        this.$store.dispatch("setCompanyData", obj);
        this.$emit("nextStep", 2);
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
.v-text-field {
  font: menu;
}

.field .v-input__control {
  border: green !important;
}
</style>
