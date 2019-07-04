<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
        <div class="card-panel-icon-wrapper icon-people">
          <svg-icon icon-class="peoples" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">资产可用总量</div>
          <count-to :start-val="0" :end-val="assetsnum" :duration="2600" class="card-panel-num" />
        </div>
      </div>
    </el-col>

    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('purchases')">
        <div class="card-panel-icon-wrapper icon-money">
          <svg-icon icon-class="money" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">资产原值总额（万元）</div>
          <count-to :start-val="0" :end-val="assertTotalworth" :duration="3200" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('shoppings')">
        <div class="card-panel-icon-wrapper icon-shopping">
          <svg-icon icon-class="shopping" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">资产净值总额（万元）</div>
          <count-to :start-val="0" :end-val="assertworth" :duration="3600" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <el-popover
        placement="bottom"
        width="400">
        <div>
          <el-table :data="List">
            <el-table-column label="资产名称" prop="assetname">
            </el-table-column>
            <el-table-column label="申请人" prop="uid"></el-table-column>
            <el-table-column label="申请时间" prop="operationTime"></el-table-column>
            <el-table-column label="申请方式" prop="operation"></el-table-column>
          </el-table>
        </div>
        <div class="card-panel" @click="handleSetLineChartData('messages')" slot="reference">
          <div class="card-panel-icon-wrapper icon-message">
            <svg-icon icon-class="message" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">待办事项数</div>
            <count-to :start-val="0" :end-val="0" :duration="3000" class="card-panel-num" />
          </div>
        </div>
      </el-popover>



    </el-col>
  </el-row>
</template>

<script>
import CountTo from 'vue-count-to'

export default {
  data() {
    return {
      assetsnum: '',
      assertTotalworth: '',
      assertworth: '',
      token: '',
      List: []
    }
  },
  components: {
    CountTo
  },
  beforeMount() {

  },
  mounted() {
    this.getAssertNum()
    this.getAssertTotalWorth()
    this.getAssertMoney()
    this.token = this.$store.getters.token
    this.getRequest()

  },
  methods: {
    handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type)
    },
    getAssertNum() {
      var url = 'http://58.119.112.13:11001/find_avail_asset_quantity?information=dvsv'
      this.$axios.get(url).then((res) => {
        this.assetsnum = res.data.assetList[0]
      })
    },
    getAssertTotalWorth () {
      var url = 'http://58.119.112.13:11001/find_all_total_original_value?information=vdsvv'
      this.$axios.get(url).then((res) => {
        this.assertTotalworth = res.data.originalValue
      })
    },
    getAssertMoney() {
      var url = 'http://58.119.112.13:11001/find_all_total_net_worth?information=dvsv'
      this.$axios.get(url).then((res) => {
        this.assertworth = res.data.originalValue
        console.log(this.assertworth)
      })
    },
    getRequest() {
      var url ='http://58.119.112.13:11001/find_be_approved_request'
      this.$axios.post(url, this.$qs.stringify({
        token: this.token
      })).then((res) => {
        this.List = res.data.info
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.panel-group {
  margin-top: 18px;
  .card-panel-col{
    margin-bottom: 32px;
  }
  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }
      .icon-people {
         background: #40c9c6;
      }
      .icon-message {
        background: #36a3f7;
      }
      .icon-money {
        background: #f4516c;
      }
      .icon-shopping {
        background: #34bfa3
      }
    }
    .icon-people {
      color: #40c9c6;
    }
    .icon-message {
      color: #36a3f7;
    }
    .icon-money {
      color: #f4516c;
    }
    .icon-shopping {
      color: #34bfa3
    }
    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }
    .card-panel-icon {
      float: left;
      font-size: 48px;
    }
    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;
      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }
      .card-panel-num {
        font-size: 20px;

      }
    }
  }
}
</style>
