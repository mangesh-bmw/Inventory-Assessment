export default {
  MOBILE: [
    (v) => !!v || "Invalid Mobile Number",
    (v) => {
      if (v == null) return "Invalid Mobile Number";
      if (v.match(/^\d{10}$/)) return true;
      return "Invalid Mobile Number";
    },
  ],

  EMAIL: [
    (v) => !!v || "Invalid Email",
    (v) => /.+@.+\..+/.test(v) || "Invalid Email",
  ],

  REQUIRED_FIELD(field_name) {
    return (v) => {
      if (!v) return field_name + " can not be Empty";
      return true;
    };
  },
};
