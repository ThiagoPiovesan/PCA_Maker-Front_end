<!--
#======================================================#
# + Projet: Principal Component Analysis automation    #
# + Date:   04/2022                                    #
# + Description: Return PCA and infos by and CSV or    #
# XLSX that was given by user                          #
# + Author: Thiago Piovesan                            #
#======================================================#
# Libs importation:
-->
<template>
  <div class="main">  
    <v-file-input
      v-model="files"
      color="deep-purple accent-4"
      counter
      label="Upload your file here!"
      placeholder="Select your files"
      prepend-icon="mdi-paperclip"
      outlined
      :show-size="1000"
    >
      <template v-slot:selection="{ index, text }">
        <v-chip
          v-if="index < 2"
          color="deep-purple accent-4"
          dark
          label
          small
        >
          {{ text }}
        </v-chip>

        <span
          v-else-if="index === 2"
          class="text-overline grey--text text--darken-3 mx-2"
        >
          +{{ files.length - 2 }} File(s)
        </span>
      </template>
    </v-file-input>

    <v-btn
      :loading="loading3"
      :disabled="loading3"
      color="deep-purple"
      class="ma-2 white--text"
      @click=submitFile()
    >
      Upload
      <v-icon
        right
        dark
      >
        mdi-cloud-upload
      </v-icon>
    </v-btn>

  </div>
    
</template>

<script>
import axios from 'axios';

export default {
  name: 'savefile',
  data () {
    return {
      loader: null,
      loading3: false,
      files: null,
    }
  },
  watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
  },
  methods: {
    /**
     * Uploads file to server.
     * @param {Event} event The form change event with the file to be uploaded.
     */
    handleFileUpload(event) {
      this.files = event.target.files[0];
    },
    /**
     * Uploads the file to the server.
     */
    submitFile() {
      if (this.files == null) {
        return;
      }

      console.log("Submitting file for upload...");
      let formData = new FormData();
      formData.append('file', this.files);

      axios.post('http://localhost:5000/save_file', formData, {
        headers: { 
          'Content-Type': 'multipart/form-data' 
        },
        timeout: 5000
      })
        .then(response => {
          console.log("File upload successful!");
          console.log(response);
          this.$router.push('/dashboard');
          
        }).catch(error => {
          console.log("File upload failed.");
          console.error(error);
        });
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './_fileInput.scss';

  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>