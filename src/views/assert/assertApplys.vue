<template>
    <div  class="dashboard-editor-container">
      <!--<el-row :gutter="5">-->
        <!--<el-button type="primary" @click="rentApply">借用申请</el-button>-->
        <!--<el-button type="primary" @click="returnApply">归还申请</el-button>-->
        <!--<el-button type="primary" @click="repApply">维修申请</el-button>-->
      <!--</el-row>-->
      <!--<el-row style="margin-top: 100px">-->
        <!--<el-col :span="12" :offset="6">-->
          <!--<el-card class="box-card" style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);border-radius: 4px" >-->
            <!--<div slot="header" class="clearfix">-->
              <!--<span>资产借用情况</span>-->
              <!--&lt;!&ndash;<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>&ndash;&gt;-->
            <!--</div>-->
            <!--<div>-->
              <!--<el-collapse v-model="activeName" accordion>-->
                <!--<div v-for="(item,index) in textList">-->
                  <!--<el-collapse-item  :name=index>-->
                    <!--<template slot="title">-->
                      <!--<span style="font-size: 16px">{{item.assetname}}</span>-->

                        <!--<span style="margin-left: 50px;font-size: 16px">{{item.operationTime}}</span>日申请-->
                      <!--<i class="header-icon el-icon-info"></i>-->
                    <!--</template>-->
                    <!--<div><span style="color: red;font-size: 16px">{{item.assetname}}</span>，借用时间为：<span style="font-size: 16px;color: red">{{item.operationTime}}日</span>，已借用<span style="font-size: 16px;color: red">{{item.endtime}}</span>天</div>-->
                    <!--<div>申请操作：<span style="font-size: 16px;color: blue">{{item.operation}}</span><span style="margin-left: 50px">数量：</span><span style="color: red;font-size: 16px">{{item.quantity}}</span></div>-->

                  <!--</el-collapse-item>-->
                <!--</div>-->
                <!--&lt;!&ndash;<el-collapse-item title="名称： 手扶椅    到期时间是6月19日，请勿要逾期归还。" name="1">&ndash;&gt;-->
                  <!--&lt;!&ndash;<div><span style="color: red;font-size: 16px">黑色单人圈椅</span>，借用时间为：<span style="font-size: 16px;color: red">2019年4月19日</span>，借用时长为两个月。</div>&ndash;&gt;-->
                  <!--&lt;!&ndash;<div>请于<span style="font-size: 16px;color: red">2019年6月19日</span>之前归还物品，距到期还有<span style="font-size: 16px;color: red">20</span>天</div>&ndash;&gt;-->
                <!--&lt;!&ndash;</el-collapse-item>&ndash;&gt;-->
                <!--&lt;!&ndash;<el-collapse-item title="名称： 地毯 到期时间是6月19日，请勿要逾期归还。" name="2">&ndash;&gt;-->
                  <!--&lt;!&ndash;<div><span style="color: red;font-size: 16px">长绒</span>，借用时间为：<span style="font-size: 16px;color: red">2019年4月19日</span>，借用时长为两个月。</div>&ndash;&gt;-->
                  <!--&lt;!&ndash;<div>请于<span style="font-size: 16px;color: red">2019年6月19日</span>之前归还物品，距到期还有<span style="font-size: 16px;color: red">20</span>天</div>&ndash;&gt;-->
                <!--&lt;!&ndash;</el-collapse-item>&ndash;&gt;-->
                <!--&lt;!&ndash;<el-collapse-item title="名称： 课桌 到期时间是6月19日，请勿要逾期归还。" name="3">&ndash;&gt;-->
                  <!--&lt;!&ndash;<div><span style="color: red;font-size: 16px">手摇升降</span>，借用时间为：<span style="font-size: 16px;color: red">2019年4月19日</span>，借用时长为两个月。</div>&ndash;&gt;-->
                  <!--&lt;!&ndash;<div>请于<span style="font-size: 16px;color: red">2019年6月19日</span>之前归还物品，距到期还有<span style="font-size: 16px;color: red">20</span>天</div>&ndash;&gt;-->
                <!--&lt;!&ndash;</el-collapse-item>&ndash;&gt;-->
                <!--&lt;!&ndash;<el-collapse-item title="名称： 不锈钢衣柜" name="4">&ndash;&gt;-->
                  <!--&lt;!&ndash;<div><span style="color: red;font-size: 16px">手摇升降</span>，借用时间为：<span style="font-size: 16px;color: red">2019年4月19日</span>，借用时长为两个月。</div>&ndash;&gt;-->
                  <!--&lt;!&ndash;<div>请于<span style="font-size: 16px;color: red">2019年6月19日</span>之前归还物品，距到期还有<span style="font-size: 16px;color: red">20</span>天</div>&ndash;&gt;-->
                <!--&lt;!&ndash;</el-collapse-item>&ndash;&gt;-->
              <!--</el-collapse>-->
            <!--</div>-->
          <!--</el-card>-->
        <!--</el-col>-->
      <!--</el-row>-->
      <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <raddar-chart />
          </div>
        </el-col>
        <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;margin-left: 160px">
          <!--<todo-list />-->
          <TransactionTable2></TransactionTable2>
        </el-col>
        <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
          <box-card />
        </el-col>
      </el-row>
      <el-row>
        <el-col><div class="line"></div></el-col>
      </el-row>
      <el-row :gutter="8">
        <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
          <div style="margin-bottom: 20px"><el-tag  type="success" >等待管理员批复</el-tag></div>
          <transaction-table />
        </el-col>
        <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
          <div style="margin-bottom: 20px"><el-tag  type="success" >管理员已批复</el-tag></div>
          <transaction-tables />
        </el-col>
      </el-row>
    </div>
</template>

<script>
  import RaddarChart from '../dashboard/admin/components/RaddarChart'
  import TodoList from '../dashboard/admin/components/TodoList'
  import BoxCard from '../dashboard/admin/components/BoxCard'
  import TransactionTable from '../dashboard/admin/components/TransactionTable'
  import TransactionTables from '../dashboard/admin/components/TransactionTables'
  import TransactionTable2 from '../dashboard/admin/components/TransactionTable2'

    export default {
        name: "assertApplys",
      components: {
        RaddarChart,
        TodoList,
        BoxCard,
        TransactionTable,
        TransactionTables,
        TransactionTable2
      },
      data() {
          return{
            activeName: '',
            token: '',
            textList: [],
            titleText: ''
          }
      },
      mounted() {
        this.token = this.$store.getters.token;
        //this.getData()
      },
      methods:{
        rentApply() {
          this.$router.push('/assertRent')
        },
        returnApply() {
          this.$router.push('/assertReturn')
        },
        repApply() {
          this.$router.push('/assertMaintain')
        },
        getData() {
          var url = 'http://58.119.112.13:11001/find_echo_time';
          this.$axios.post(url,this.$qs.stringify({
            token: this.token
          })).then((res) => {
            this.textList=res.data.list;
            // var s =this.textList[0].assetname;
            // this.titleText=s

          })
        }
      }
    }
</script>

<style scoped>
  .dashboard-editor-container {
    padding: 32px;
    background-color: rgb(240, 242, 245);

  }
  .chart-wrapper {
    /*background: #fff;*/
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
  .line{
    border-bottom: 2px solid grey;
    margin-top: 20px;
    margin-bottom: 40px;
  }
</style>
