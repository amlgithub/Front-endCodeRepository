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
      fixedAssetsRate: '',

    }
  },

  mounted() {
    this.getassetNum()
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
    getassetNum() {
      var url = 'http://58.119.112.13:11001/asset_classification_proportion_quantity?information=123'
      this.$axios.get(url).then((res) => {
        this.expendableAssetsRate = res.data.statisticsinfo.expendableAssetsRate
        this.intangibleAssetsRate = res.data.statisticsinfo.intangibleAssetsRate
        this.lowAssetsRate = res.data.statisticsinfo.lowAssetsRate
        this.fixedAssetsRate = res.data.statisticsinfo.fixedAssetsRate
        // console.log(this.data[3].value)

        // this.option.series[0].data[0].value = this.fixedAssetsRate
        // console.log(this.option.series[0].data[0].value)

        this.$nextTick(() => {
          this.initChart()
        })

      })
    },
    initChart() {
      // console.log(this.fixedAssetsRate)
      this.chart = echarts.init(this.$el, 'macarons')
      // this.chart.setOption(this.option);

      this.chart.setOption({
        title: [{
          left: 'center',
          text: '资产总量占比（按资产数量统计）'
        }],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: ['易消耗资产', '无形资产', '低值资产', '固定资产']
        },
        calculable: true,
        series: [
          {
            name: '该类型资产总量',
            type: 'pie',
            roseType: 'radius',
            radius: [15, 95],
            center: ['50%', '45%'],
            data: [
              { value: this.expendableAssetsRate, name: '易消耗资产' },
              { value: this.intangibleAssetsRate, name: '无形资产' },
              { value: this.lowAssetsRate, name: '低值资产' },
              { value: this.fixedAssetsRate, name: '固定资产' },

            ],
            // data: this.data,
            animationEasing: 'cubicInOut',
            animationDuration: 2600
          }
        ]
      })
    }
  }
}
</script>
