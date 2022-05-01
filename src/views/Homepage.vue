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
    <fileInput/>
    <layout/>
  </div>
</template>

<script>
import layout from "./Layout.vue"
import fileInput from "../components/FileInput/FileInput.vue"

export default {
  name: 'homepage',
  components:{
    layout,
    fileInput
  },
}

</script>

<style lang='scss' scoped>

</style>