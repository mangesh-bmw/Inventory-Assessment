<style scoped>
.upload_form {
  color: #347aaa;
  text-align: center;
  font-size: 13px;
  border: 1px solid #347aaa;
  box-sizing: border-box;
  box-shadow: 0px 5px 10px rgba(162, 158, 158, 0.2);
  border-radius: 30px;
  cursor: pointer;
  margin-top: 9px;
}

div.file-listing {
  margin: auto;
  padding: 10px;
}

div.remove-container a {
  color: red;
  cursor: pointer;
}

.pre-image {
  height: 40px;
}
.clear-btn {
  position: relative;
  top: -35px;
  right: -40px;
}
</style>
<template>
  <div>
    <div v-if="!file">
      <label class="cursor-pointer">
        <input
          type="file"
          ref="files"
          @change="browseFile($event)"
          accept=".pdf"
          hidden
        />
        <div class="upload_form text-center py-1 px-3">Upload</div>
      </label>
    </div>

    <div class="" v-else>
      <v-btn
        fab
        width="10px"
        height="10px"
        color="#FFF"
        @click="removeFile()"
        class="v-align-top clear-btn"
        style="margin-left: -10px; margin-top: -5px"
      >
        <v-icon class="clear-icon" size="10" color="error">
          mdi-window-close</v-icon
        >
      </v-btn>
      <img src="../../assets/images/pdf-icon.png" alt="img" class="pre-image"  />
      <p><small class="text-decoration-underline" style="font-size: 8px;"> {{file.name}}</small></p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      file: null,
      preview_url: "",
    };
  },

  mounted() {},
  methods: {
    /* upload Csv*/
    browseFile(e) {
      const self = this;
      self.csv_loading = true;

      //   if (
      //     !this.$keys.ACCEPTED_IMAGE_FORMATE.includes(e.target.files[0]["type"])
      //   ) {
      //     self.$store.dispatch("snackbar/setSnackbar", {
      //       flag: true,
      //       text: self.$messages.INVALID_FILE,
      //       color: "error",
      //     });
      //     return false;
      //   }
      //   if (e.target.files[0].size > 1024 * 1024 * this.$keys.MAX_FILE_SIZE) {
      //     self.$store.dispatch("snackbar/setSnackbar", {
      //       flag: true,
      //       text: self.$messages.MAX_FILE_SIZE_ERROR + this.$keys.MAX_FILE_SIZE,
      //       color: this.$keys.ERROR,
      //     });
      //     return false;
      //   }
      // this.file.retailer_file=e.target.files[0]
      this.updateImage(e.target.files[0]);
      this.preview_url = URL.createObjectURL(e.target.files[0]);
    },

    removeFile() {
      this.updateImage(null);
    },
    updateImage(file) {
      this.file = file;
      console.log(file);
      this.$emit("update-image", file, this.type);
    },
  },
};
</script>
