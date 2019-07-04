<template>
  <el-card class="box-card-component" style="margin-left:8px;">
    <div slot="header" class="box-card-header">
      <img src="../../../../assets/123444555.jpg">
    </div>
    <div style="position:relative;">
      <!--<pan-thumb image="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=7874c568acaf2eddc0fc41bbec796a8c/9825bc315c6034a850a203efcb1349540923761f.jpg" class="panThumb" />-->
      <pan-thumb  class="panThumb" />
      <mallki class-name="mallki-text" text="功能模块入口" />
      <div style="padding-top:35px;" class="progress-item">
        <el-button type="primary" round @click="rentApply">借用资产</el-button>
      </div>
      <div class="progress-item">
        <el-button type="warning" round @click="returnApply">归还资产</el-button>
      </div>
      <div class="progress-item">
        <el-button type="success" round @click="repApply">维修申请</el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
import { mapGetters } from 'vuex'
import PanThumb from '@/components/PanThumb'
import Mallki from '@/components/TextHoverEffect/Mallki'

export default {
  components: { PanThumb, Mallki },

  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        pending: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      statisticsData: {
        article_count: 1024,
        pageviews_count: 1024,
        images: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=7874c568acaf2eddc0fc41bbec796a8c/9825bc315c6034a850a203efcb1349540923761f.jpg'
      }
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles'
    ])
  },
  methods: {
    rentApply() {
      this.$router.push('/assertRent')
    },
    returnApply() {
      this.$router.push('/assertReturn')
    },
    repApply() {
      this.$router.push('/assertMaintain')
    },

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" >
.box-card-component{
  .el-card__header {
    padding: 0px!important;
  }
}
</style>
<style rel="stylesheet/scss" lang="scss" scoped>
.box-card-component {
  .box-card-header {
    position: relative;
    height: 220px;
    img {
      width: 100%;
      height: 100%;
      transition: all 0.2s linear;
      &:hover {
        transform: scale(1.1, 1.1);
        filter: contrast(130%);
      }
    }
  }
  .mallki-text {
    position: absolute;
    top: 0px;
    right: 0px;
    font-size: 20px;
    font-weight: bold;
  }
  .panThumb {
    z-index: 100;
    height: 70px!important;
    width: 70px!important;
    position: absolute!important;
    top: -45px;
    left: 0px;
    border: 5px solid #ffffff;
    background-color: #fff;
    margin: auto;
    box-shadow: none!important;
    /deep/ .pan-info {
      box-shadow: none!important;
    }
  }
  .progress-item {
    margin-bottom: 10px;
    font-size: 14px;
  }
  @media only screen and (max-width: 1510px){
    .mallki-text{
      display: none;
    }
  }
}
</style>
