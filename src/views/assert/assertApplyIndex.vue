<template>
  <div class="dashboard-editor-container">

    <panl-cards @handleSetLineChartData="handleSetLineChartData"></panl-cards>
    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData" />
    </el-row>
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-charts></pie-charts>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <bar-chart />
        </div>
      </el-col>
    </el-row>



  </div>
</template>

<script>
  import Icons from "../svg-icons/index";
  import panlCards from '../dashboard/admin/components/PanelGroups'
  import LineChart from '../dashboard/admin/components/LineCharts'
  import RaddarChart from '../dashboard/admin/components/RaddarChart'
  import PieChart from '../dashboard/admin/components/PieChart1'
  import PieCharts from '../dashboard/admin/components/PieChart2'
  import BarChart from '../dashboard/admin/components/BarCharts'
  const lineChartData = {
    newVisitis: {
        expectedData: [560, 301, 459, 397, 389, 333, 432],
        actualData: [403, 340, 215, 306, 162, 498, 565]
      // expectedData: [],
      // actualData: []
    },
    messages: {
      expectedData: [2, 5, 8, 4,16, 7, 9],
      actualData: [3, 5, 14, 6, 4, 10, 4]
    },
    purchases: {
      expectedData: [120000, 90000, 100000, 138000, 142000, 130000, 130000],
      actualData: [80000, 100000, 121000, 104000, 105000, 90000, 150991]
    },
    shoppings: {
      expectedData: [200000, 192000, 120000, 144000, 160000, 130000, 140000],
      actualData: [180000, 160000, 151000, 106000, 145000, 150000, 150911]
    }
  }
  export default {
    name: "index",
    components: {
      Icons,
      panlCards,
      LineChart,
      RaddarChart,
      PieChart,

      BarChart,
      PieCharts
    },
    data() {
      return {
        assetsnum: '',
        assertworth: '',
        assertTotalworth: '',
        lineChartData: lineChartData.newVisitis
      }
    },
    mounted() {
       //this.getAssetNum()
      //this.getLastAssetNum()
    },
    methods: {
      handleSetLineChartData(type) {
        // this.lineChartData = lineChartData[type]
        this.$router.push(type)
        console.log(type)
      },

      routers() {
        console.log('dsfsdf')
        this.$router.push('/assert/assert')
      },
      getAssetNum() {
        var a = []
        var url = 'http://58.119.112.13:11001/current_year_asset_approval?information=5'
        this.$axios.get(url).then((res) =>{
          a.push(res.data.staticinfo.assetBorrow.oneBorrow)
          a.push(res.data.staticinfo.assetBorrow.twoBorrow)
          a.push(res.data.staticinfo.assetBorrow.threeBorrow)
          a.push(res.data.staticinfo.assetBorrow.fourBorrow)
          a.push(res.data.staticinfo.assetBorrow.fiveBorrow)
          a.push(res.data.staticinfo.assetBorrow.sixBorrow)
          a.push(res.data.staticinfo.assetBorrow.sevenBorrow)
          a.push(res.data.staticinfo.assetBorrow.eightBorrow)
          a.push(res.data.staticinfo.assetBorrow.nineBorrow)
          a.push(res.data.staticinfo.assetBorrow.tenBorrow)
          a.push(res.data.staticinfo.assetBorrow.elevenBorrow)
          a.push(res.data.staticinfo.assetBorrow.twelveBorrow)
          lineChartData.newVisitis.actualData = a
        })
      },
      getLastAssetNum() {
        var a = []
        var url = 'http://58.119.112.13:11001/last_year_asset_approval?information=5'
        this.$axios.get(url).then((res) =>{
          a.push(res.data.staticinfo.assetBorrow.oneBorrow)
          a.push(res.data.staticinfo.assetBorrow.twoBorrow)
          a.push(res.data.staticinfo.assetBorrow.threeBorrow)
          a.push(res.data.staticinfo.assetBorrow.fourBorrow)
          a.push(res.data.staticinfo.assetBorrow.fiveBorrow)
          a.push(res.data.staticinfo.assetBorrow.sixBorrow)
          a.push(res.data.staticinfo.assetBorrow.sevenBorrow)
          a.push(res.data.staticinfo.assetBorrow.eightBorrow)
          a.push(res.data.staticinfo.assetBorrow.nineBorrow)
          a.push(res.data.staticinfo.assetBorrow.tenBorrow)
          a.push(res.data.staticinfo.assetBorrow.elevenBorrow)
          a.push(res.data.staticinfo.assetBorrow.twelveBorrow)
          lineChartData.newVisitis.expectedData = a
        })
      },
      // getRoleAndName(){
      //   this.name=localStorage.getItem('name');
      //   console.log(this.name)
      //   var role = localStorage.getItem('role');
      //   console.log(role)
      //   if (role ==='1') {
      //     this.role='管理员'
      //   }
      //   if (role === '2') {
      //     this.role='教师'
      //   }
      //   if (role === '3') {
      //     this.role='维修员'
      //   }
      //   if (role === '4'){
      //     this.role='处置员'
      //   }
      // },
      // getthisDate(){
      //   var date = new Date();
      //   var year = date.getFullYear()
      //   var month = date.getMonth()+1;
      //   var day = date.getDate();
      //   var d = date.getDay();
      //   var da = '';
      //   if (d === 0) {
      //     da='星期天'
      //   }
      //   if (d === 1) {
      //     da='星期一'
      //   }
      //   if (d === 2){
      //     da='星期二'
      //   }
      //   if (d===3){
      //     da='星期三'
      //   }
      //   if (d===4) {
      //     da='星期四'
      //   }
      //   if (d===5){
      //     da='星期五'
      //   }
      //   if (d===6){
      //     da='星期六'
      //   }
      //   this.date=year+'年'+month+'月'+day+'日'+' '+da;
      //   console.log(year);
      //   // this.date = date;
      // },
      // getList() {
      //   var role = localStorage.getItem('role')
      //   if (role==='1'){
      //
      //     this.todoList=this.List1
      //   }
      //   if (role==='2'){
      //
      //     this.todoList=this.List2
      //   }
      //   if (role==='3'){
      //
      //     this.todoList=this.List3
      //   }
      //   if (role==='4'){
      //
      //     this.todoList=this.List4
      //   }
      // }
    }
  }
</script>

<style>
  .mgb20 {
    margin-bottom: 40px;
  }
  .user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
  }
  .user-avator {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
  .user-info-cont {
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
  }

  .user-info-name{
    font-family: "Arial Black";
    font-size: 28px;
    color: black;
  }
  .user-info-list {
    margin-left: 200px;
    font-size: 14px;
    color: #999;
    line-height: 25px;
  }
  .el-card{
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
  .todo-item {
    font-size: 14px;
  }
  .todo-item-del {
    text-decoration: line-through;
    color: #999;
  }
  .line{
    border-bottom: 2px solid grey;
    margin-top: 10px;
  }
  .dashboard-editor-container {
    padding: 32px;
    background-color: rgb(240, 242, 245);

  }
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }


</style>
