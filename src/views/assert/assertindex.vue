<template>
    <div class="dashboard-editor-container">
      <!--<div style="margin-left: 20px;margin-right: 40px">-->
        <!--<div style="margin-top: 20px"><i class="ymq-iconapartment"></i> 统计指标</div>-->
        <!--<div class="line"></div>-->
        <!--<div style="margin-top: 20px;margin-left: 20px;margin-right: 20px">-->
          <!--<el-row :gutter="40">-->
            <!--<el-col :span="6">-->
              <!--<div @click="routers">-->
                <!--<el-card class="box-card" style="background-color: #598FBD" shadow="always" >-->
                  <!--<div >-->
                    <!--<el-row>-->
                      <!--<el-col :span="8">-->
                        <!--<i class="ymq-iconwindows" style="font-size: 65px"></i>-->
                      <!--</el-col>-->
                      <!--<el-col :span="16">-->
                        <!--<div style="margin-bottom: 5px"><span style="font-size: 34px;color: white;margin-left: 60px;">{{this.assetsnum}}</span></div>-->
                        <!--<div ><span style="font-size: 14px;color: white;margin-left: 40px">{{'可用资产数量'}}</span></div>-->
                      <!--</el-col>-->
                    <!--</el-row>-->

                  <!--</div>-->
                  <!--<div style="margin-top: 10px">-->
                    <!--<span style="padding: 0;float: left">查看更多</span>-->
                    <!--<span style="padding: 0;float: right"><i class="ymq-iconright-circle"></i> </span>-->
                  <!--</div>-->

                <!--</el-card>-->
              <!--</div>-->

            <!--</el-col>-->
            <!--<el-col :span="6">-->
              <!--<el-card class="box-card" style="background-color: #E44E50" shadow="always">-->
                <!--<div >-->
                  <!--<el-row>-->
                    <!--<el-col :span="8">-->
                      <!--<i class="ymq-icondeploymentunit" style="font-size: 65px"></i>-->
                    <!--</el-col>-->
                    <!--<el-col :span="16">-->
                      <!--<div style="margin-bottom: 5px"><span style="font-size: 34px;color: white;margin-left: 40px;">{{this.assertTotalworth}}</span></div>-->
                      <!--<div ><span style="font-size: 14px;color: white;margin-left: 10px">{{'资产原值合计（万元）'}}</span></div>-->
                    <!--</el-col>-->
                  <!--</el-row>-->

                <!--</div>-->
                <!--<div style="margin-top: 10px">-->
                  <!--<span style="padding: 0;float: left">查看更多</span>-->
                  <!--<span style="padding: 0;float: right"><i class="ymq-iconright-circle"></i> </span>-->
                <!--</div>-->

              <!--</el-card>-->
            <!--</el-col>-->
            <!--<el-col :span="6">-->
              <!--<el-card class="box-card" style="background-color: #41ACA4" shadow="always">-->
                <!--<div >-->
                  <!--<el-row>-->
                    <!--<el-col :span="8">-->
                      <!--<i class="ymq-iconstock" style="font-size: 65px"></i>-->
                    <!--</el-col>-->
                    <!--<el-col :span="16">-->
                      <!--<div style="margin-bottom: 5px"><span style="font-size: 34px;color: white;margin-left: 40px;">{{this.assertworth}}</span></div>-->
                      <!--<div ><span style="font-size: 14px;color: white;margin-left: 10px">{{'资产净值总额（万元）'}}</span></div>-->
                    <!--</el-col>-->
                  <!--</el-row>-->

                <!--</div>-->
                <!--<div style="margin-top: 10px">-->
                  <!--<span style="padding: 0;float: left">查看更多</span>-->
                  <!--<span style="padding: 0;float: right"><i class="ymq-iconright-circle"></i> </span>-->
                <!--</div>-->

              <!--</el-card>-->
            <!--</el-col>-->
            <!--<el-col :span="6">-->
              <!--<el-card class="box-card" style="background-color: #8775A9" shadow="always">-->
                <!--<div >-->
                  <!--<el-row>-->
                    <!--<el-col :span="8">-->
                      <!--<i class="ymq-iconfile-copy" style="font-size: 65px"></i>-->
                    <!--</el-col>-->
                    <!--<el-col :span="16">-->
                      <!--<div style="margin-bottom: 5px"><span style="font-size: 34px;color: white;margin-left: 40px;">{{'8'}}</span></div>-->
                      <!--<div ><span style="font-size: 14px;color: white;margin-left: 40px">{{'待办任务数'}}</span></div>-->
                    <!--</el-col>-->
                  <!--</el-row>-->

                <!--</div>-->
                <!--<div style="margin-top: 10px">-->
                  <!--<span style="padding: 0;float: left">查看更多</span>-->
                  <!--<span style="padding: 0;float: right"><i class="ymq-iconright-circle"></i> </span>-->
                <!--</div>-->

              <!--</el-card>-->
            <!--</el-col>-->
          <!--</el-row>-->
        <!--</div>-->
        <!--<div style="margin-top: 20px"><i class="ymq-iconbarchart"></i> 资产分类占比</div>-->
        <!--<div class="line"></div>-->
      <!--</div>-->
      <panl-card @handleSetLineChartData="handleSetLineChartData"></panl-card>
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
    import panlCard from '../dashboard/admin/components/PanelGroup'
    import LineChart from '../dashboard/admin/components/LineChart'
    import RaddarChart from '../dashboard/admin/components/RaddarChart'
    import PieChart from '../dashboard/admin/components/PieChart'
    import PieCharts from '../dashboard/admin/components/PieCharts'
    import BarChart from '../dashboard/admin/components/BarChart'
    const lineChartData = {
      newVisitis: {
        // expectedData: [560, 301, 459, 397, 389, 333, 432],
        actualData: []
        // actualData: this.actualData
      },
      messages: {
        expectedData: [2, 5, 8, 4,16, 7, 9],
        actualData: [3, 5, 14, 6, 4, 10, 4]
      },
      purchases: {
        // expectedData: [120000, 90000, 100000, 138000, 142000, 130000, 130000],
        // actualData: [80000, 100000, 121000, 104000, 105000, 90000, 150991]
        actualData: []
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
          panlCard,
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
            lineChartData: lineChartData.newVisitis,
            // lineChartData: this.actualData,
            year: 5,
            // actualData: [],
            // lineChartData: {
            //   newVisitis: {
            //     // expectedData: [560, 301, 459, 397, 389, 333, 432],
            //     // actualData: [403, 340, 215, 306, 162, 498, 565]
            //     actualData: []
            //   },
            //   messages: {
            //     expectedData: [2, 5, 8, 4,16, 7, 9],
            //     actualData: [3, 5, 14, 6, 4, 10, 4]
            //   },
            //   purchases: {
            //     expectedData: [120000, 90000, 100000, 138000, 142000, 130000, 130000],
            //     actualData: [80000, 100000, 121000, 104000, 105000, 90000, 150991]
            //   },
            //   shoppings: {
            //     expectedData: [200000, 192000, 120000, 144000, 160000, 130000, 140000],
            //     actualData: [180000, 160000, 151000, 106000, 145000, 150000, 150911]
            //   }
            // }
          }
      },
      // created() {
      //   this.getassetNum()
      // },
      // beforeMount() {
      //   this.getassetNum()
      // },
      mounted() {
          this.getassetNum()
          this.getassetMoney()
      },
      methods: {
        handleSetLineChartData(type) {
          this.lineChartData = lineChartData[type]
          // this.lineChartData = this.actualData
        },
        getassetNum() {
          var a = []
          var url ='http://58.119.112.13:11001/time_attribute_display_assets_quantity?year=' + this.year
          this.$axios.get(url).then((res) => {
            a.push(res.data.staticinfo.oneQuantity)
            a.push(res.data.staticinfo.twoQuantity)
            a.push(res.data.staticinfo.threeQuantity)
            a.push(res.data.staticinfo.fourQuantity)
            a.push(res.data.staticinfo.fiveQuantity)
            lineChartData.newVisitis.actualData = a
          })
        },
        getassetMoney() {
          var a = []
          var url ='http://58.119.112.13:11001/display_assets_original_value?year=' + this.year
          this.$axios.get(url).then((res) => {
            a.push(res.data.staticinfo.oneQuantity)
            a.push(res.data.staticinfo.twoQuantity)
            a.push(res.data.staticinfo.threeQuantity)
            a.push(res.data.staticinfo.fourQuantity)
            a.push(res.data.staticinfo.fiveQuantity)
            lineChartData.purchases.actualData = a
          })
        },

        routers() {
            console.log('dsfsdf')
            this.$router.push('/assert/assert')
        }
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
