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
  <div>
        <h3> {{message}} </h3>
    <layout/>
  </div>
</template>

<script>
import layout from "./Layout.vue"
import axios from 'axios';

export default {
  name: 'homepage',
  components:{
    layout,
  },
  data () {
    return {
      message: "mensagem"
    }
  },
  methods: {
    getResponse() {
      const path = 'http://localhost:5000/about';
      axios.get(path)
        .then((res) => {
          this.message = res.data.message;
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