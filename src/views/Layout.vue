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
    <navBar/>
    <sideBar/>
  </div>
</template>

<script>
import navBar from "../components/NavBar/NavBar.vue"
import sideBar from "../components/SideBar/SideBar.vue"

export default {
  name: 'AdminDashboard',
  components:{
    navBar,
    sideBar
  }
}
</script>

<style lang='scss' scoped>

</style>