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
<v-container>
  <v-app-bar app absolute dense dark>
    <v-spacer class="d-lg-none"></v-spacer>
    <v-subheader font-size="30px">Sparta Project - PCA Maker</v-subheader>
    <v-spacer/>
    <v-btn
        text
        color="#EF5350"
        small
        large
        >
        Sair
    </v-btn>
  </v-app-bar>
</v-container>

</template>

<script>
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default {
    name: "navBar",
    components: {
        // FontAwesomeIcon
    },
    data(){
        return {
            returnIcon: faBars,
        }
    },
    methods:{
        error(){
            this.$vToastify.error('Em desenvolvimento...');
        },
        showSidebar(){
           document.documentElement.style.overflow = 'hidden';
           document.body.scroll = "no";
           document.getElementsByClassName('sidebar-container')[0].style.display = 'block'
           document.getElementsByClassName('section')[0].style.display = 'block'
           return
        }
    }
}
</script>

<style lang="scss" scoped>
// @import './_navBar.scss'
</style>