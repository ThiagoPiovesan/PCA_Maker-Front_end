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

export default {
  name: 'About',
  components:{
    layout,
    about
  }
}

</script>

<style lang='scss' scoped>

</style>