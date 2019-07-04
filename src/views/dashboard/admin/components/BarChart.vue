<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import { debounce } from '@/utils'

const animationDuration = 6000

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
      year: 5,
      List: []
    }
  },
  mounted() {
    // this.initChart()
    this.getassetMoney()
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
    getassetMoney() {
      // var a = []
      var url ='http://58.119.112.13:11001/display_assets_original_value?year=' + this.year
      this.$axios.get(url).then((res) => {
        this.List.push(res.data.staticinfo.oneQuantity)
        this.List.push(res.data.staticinfo.twoQuantity)
        this.List.push(res.data.staticinfo.threeQuantity)
        this.List.push(res.data.staticinfo.fourQuantity)
        this.List.push(res.data.staticinfo.fiveQuantity)
        this.initChart()

      })
    },
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
        title: [{
          left: 'center',
          text: '资产价值统计'
        }],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: 10,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['2014年', '2015年', '2016年', '2017年', '2018年'],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          }
        }],
        series: [{
          name: '资产原值总额',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: this.List,
          animationDuration
        }, {
          name: '资产净值总额',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          // data: [80000, 100000, 121000, 104000, 105000, 90000, 150991],
          data: [],
          animationDuration
        },
        //   {
        //   name: 'pageC',
        //   type: 'bar',
        //   stack: 'vistors',
        //   barWidth: '60%',
        //   data: [30, 52, 200, 334, 390, 330, 220],
        //   animationDuration
        // }
        ]
      })
    }
  }
}
</script>
