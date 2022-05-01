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
        <v-icon @click.stop="showSideBar" class="d-lg-none px-4 test">{{'mdi-menu'}}</v-icon> 
        <v-navigation-drawer app dark mobile-breakpoint="1264" v-model="drawer" class="sideBar" fixed>
            <v-list-item color="lime lighten-3" class="logo" @click="changeRoute">
                <v-list-item-content>
                    <v-list-item-title class="text-h9">
                        Sparta
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list
                dense
                nav
            >
                <v-list-item
                v-for="item in items"
                :key="item.title"
                :to="item.path"
                
                >
                    <v-list-item-icon>
                        <v-icon color="#7965C0">{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title font-size="30px">{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-icon>{{TotensIcons}}</v-icon>
            <footer absolute dark>
                <img src="@/assets/png-sparta.png" class="logoProject" alt="logo"/>
            </footer>
        </v-navigation-drawer>

        
    </div>
</template>

<script>
import { faChartArea } from '@fortawesome/free-solid-svg-icons'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import { mapGetters } from 'vuex';
import { faCog } from '@fortawesome/free-solid-svg-icons'

export default {
    name: "sideBar",
    components:{
        // FontAwesomeIcon
    },
    data(){
        return{
            selectedSection: 'DashboardCards',
            DashboardIcon: faChartArea,
            TotensIcons: faDesktop,
            ConfIcon: faCog,
            items: [
                { title: 'Dashboard', icon: 'mdi-chart-line', path: '/dashboard'},
                { title: 'About & Study', icon: 'mdi-cog-outline', path: '/about' },
            ],
            main: [
                { title: 'Sparta', path: '/home'},

            ],
            right: null,
            drawer: null,
        }
    },
    computed: {
        ...mapGetters(['getInferences', 'getSelectedInference']),
        hasData: function () {
            if(this.getInferences === null) {
                console.log('entrou')
                return true
            } 
            else return false
        }
    },
    methods:{
        changeRoute() {
            this.$router.push('/home')
        },

        showSideBar() {
            this.drawer = !this.drawer
        },
        checkScreen() {
            console.log(window.screen.width)
            if(window.screen.width < 1250) {
                document.getElementsByClassName('sidebar-container')[0].style.display = 'none'
                document.getElementsByClassName('section')[0].style.display = 'none'
            }
        },
        changeSection(section){
            if(section == 'Dashboard') return this.selectedSection = 'DashboardCards'
        },
        closeMenu(){
           document.documentElement.style.overflow = 'auto';
           document.body.scroll = "yes";
           document.getElementsByClassName('sidebar-container')[0].style.display = 'none'
           document.getElementsByClassName('section')[0].style.display = 'none'
           return
        },
    }
}
</script>

<style lang="scss" scoped>
@import "./_sideBar.scss";
</style>