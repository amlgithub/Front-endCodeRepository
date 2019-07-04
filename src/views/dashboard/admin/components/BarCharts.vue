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
        List: []
      }
    },
    mounted() {
      this.getAllQuantity()
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
      getAllQuantity() {
        var url = 'http://58.119.112.13:11001/time_attribute_display_assets_quantity?year=5'
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
            text: '近五年资产总量统计'
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
            // data: [180000, 160000, 151000, 106000, 145000, 150000, 150911],
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
