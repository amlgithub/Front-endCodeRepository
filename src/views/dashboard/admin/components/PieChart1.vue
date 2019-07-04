<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
  import echarts from 'echarts'
  require('echarts/theme/macarons') // echarts theme
  import { debounce } from '@/utils'

  export default {
    props: {
      className: {
        type: String,
        default: 'chart'
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '350px'
      }
    },
    data() {
      return {
        chart: null,
        expendableAssetsRate: '',
        intangibleAssetsRate: '',
        lowAssetsRate: '',
        fixedAssetsRate: ''
      }
    },
    mounted() {
      this.getBorrow()
      // this.initChart()
      this.__resizeHandler = debounce(() => {
        if (this.chart) {
          this.chart.resize()
        }
      }, 100)
      window.addEventListener('resize', this.__resizeHandler)
    },
    beforeDestroy() {
      if (!this.chart) {
        return
      }
      window.removeEventListener('resize', this.__resizeHandler)
      this.chart.dispose()
      this.chart = null
    },
    methods: {
      getBorrow() {
        var url = 'http://58.119.112.13:11001/repair_classification_proportion_number'
        this.$axios.get(url).then((res) => {
          this.expendableAssetsRate = res.data.statisticsinfo.expendableAssetsRate
          this.intangibleAssetsRate = res.data.statisticsinfo.intangibleAssetsRate
          this.lowAssetsRate = res.data.statisticsinfo.lowAssetsRate
          this.fixedAssetsRate = res.data.statisticsinfo.fixedAssetsRate
          this.initChart()
        })
      },
      initChart() {
        this.chart = echarts.init(this.$el, 'macarons')

        this.chart.setOption({
          title: [{
            left: 'center',
            text: '资产维修情况占比'
          }],
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            left: 'center',
            bottom: '10',
            data: ['固定资产','易消耗资产', '无形资产', '低值资产', ]
          },
          calculable: true,
          series: [
            {
              name: '该类型资产维修总数',
              type: 'pie',
              roseType: 'radius',
              radius: [15, 95],
              center: ['50%', '50%'],
              data: [
                { value: this.fixedAssetsRate, name: '固定资产' },
                { value: this.expendableAssetsRate, name: '易消耗资产' },
                { value: this.intangibleAssetsRate, name: '无形资产' },
                { value: this.lowAssetsRate, name: '低值资产' }


              ],
              animationEasing: 'cubicInOut',
              animationDuration: 2600
            }
          ]
        })
      }
    }
  }
</script>
