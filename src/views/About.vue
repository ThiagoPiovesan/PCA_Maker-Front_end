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
    <layout/>
    <about/>
  </div>
</template>

<script>
import layout from "./Layout.vue"
import about from "../components/About/About.vue"
import axios from 'axios';

export default {
  name: 'About',
  components:{
    layout,
    about
  },
  data () {
    return {
      message: ""
    }
  },
  methods: {
    getResponse() {
      const path = 'http://localhost:5000/about';
      axios.get(path)
        .then((res) => {
          this.message = res.data;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
  },
  created() {
    this.getResponse();
  },
}

</script>

<style lang='scss' scoped>

</style>