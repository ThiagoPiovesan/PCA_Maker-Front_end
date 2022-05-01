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
    <layout/>
    <dashboard/>
  </div>
</template>

<script>
import layout from "./Layout.vue"
import dashboard from "../components/Cards/DashboardCards/DashboardCards.vue"

export default {
  name: 'Dashboard',
  components:{
    layout,
    dashboard
  }
}
</script>

<style lang='scss' scoped>

</style>