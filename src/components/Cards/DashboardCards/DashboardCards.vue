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
    <v-main>
        <div id="chart">
            <apexchart type="scatter" height="350" width="70%" align="center" :options="chartOptions" :series="series"></apexchart>
        </div>
    </v-main>
    
</template>

<script>
import Vue from 'vue'
import VueApexCharts from 'vue-apexcharts'
import { api } from '@/services/index';
import { faChartArea } from '@fortawesome/free-solid-svg-icons'

Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

export default {
    name: "DashboardCards",
    data () {
    return {
        loading: false,
        show: false,
        expand: false,
        DashboardIcon: faChartArea,
        chartOptions: {
            
            chart: {
                type: 'scatter',
                zoom: {
                    enabled: true,
                    type: 'xy'
                }
            },
            title: {
                text: "Data Disposition",
                rotate: -90,
                offsetX: 60,
                offsetY: 0,
                style: {
                    color: undefined,
                    aling: 'center',
                    fontSize: '22px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-title',
                },
            },
            xaxis: {
                tickAmount: 10,
                decimalsInFloat: 2,
                aling: 'center',
                fontSize: '18px',
                labels: {
                    formatter: function(val) {
                    return parseFloat(val).toFixed(1)
                    }
                },
                title: {
                    text: "Principal Component 1",
                    rotate: -90,
                    offsetX: 0,
                    offsetY: 0,
                    style: {
                        color: undefined,
                        fontSize: '16px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 600,
                        cssClass: 'apexcharts-yaxis-title',
                    },
                },
            },
            yaxis: {
                tickAmount: 7,
                decimalsInFloat: 2,

                title: {
                    text: "Principal Component 2",
                    rotate: -90,
                    offsetX: 0,
                    offsetY: 0,
                    style: {
                        color: undefined,
                        fontSize: '16px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 600,
                        cssClass: 'apexcharts-yaxis-title',
                    },
                },
            }
        },
        labels: ["PC1", "PC2"],
        legend: {
            position: 'bottom',
        },
        series: [
        ],
        width: 0,
    }
  },
  created() {
    document.documentElement.style.overflow = 'visible';
    window.scrollTo(0, 0);
    this.getPca()
  },
  beforeMount() {
      this.setWidthGraphic()
  },
  methods: {
    getPca() {
        api
        .get('/dashboard')
        .then((response)=>{
            
            this.series = [{
                name: "Data disposition",
                data: response.data,
              },
            ]

        })
        .catch((error)=>{
            console.log(error.response)
            this.$vToastify.error('Não foi possível obter os dados!');
        })
    },
    setWidthGraphic(){
        let windowWidth = window.innerWidth;
        if (windowWidth >= 1900) return 1600
        if (windowWidth >= 600) return 1200
        else if(windowWidth <= 600) return 330
    },
    setHeightGraphic(){
        let windowWidth = window.innerWidth;
        if (windowWidth >= 1900) return 500
        if (windowWidth >= 600) return 300
        else if(windowWidth <= 600) return 250
    }
  }
}
</script>

<style lang='scss' scoped>
</style>