<template>
    <div class="app-container">
      <div>
        <el-badge :value="ListNum" :max="99" class="item">
          <el-button type="primary" @click="disposeApproval">处置员批复</el-button>
        </el-badge>

        <el-dialog
          title="维修批复"
          :visible.sync="maintainAppro"
          width="71%"
        >
          <div>
            <el-table :data="maintainList"  style="width: auto"   border stripe >
              <el-table-column
                label="序号"
                width="50"
                type="index"
              >
                <template slot-scope="scope">
                  {{(currentPage - 1) * pagesize + scope.$index + 1 }}
                </template>
              </el-table-column>
              <el-table-column property="aid" label="资产分类代码" width="150"></el-table-column>
              <!--<el-table-column property="asset_name" label="资产名称" width="150"></el-table-column>-->
              <el-table-column property="operation" label="操作说明" width="150"></el-table-column>
              <el-table-column property="quantity" label="数量" width="150"></el-table-column>
              <el-table-column property="uid" label="申请人" width="150"></el-table-column>

              <el-table-column property="operation_time" label="操作时间" width="150"></el-table-column>
              <!--<el-table-column property="approval_content" label="维修员操作说明" width="150"></el-table-column>-->
              <el-table-column property="approval_content" label="您的意见" width="150" fixed="right">
                <template slot-scope="scope">

                  <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="请输入内容"
                    v-model="scope.row.approval_content">
                  </el-input>


                </template>
              </el-table-column>

              <el-table-column
                fixed="right"
                label="是否生效"
                width="150">

                <template slot-scope="scope">
                  <el-button type="primary" size="small" @click="maintainApprovalbutton(scope.row)">是</el-button>

                  <el-button type="danger" size="small" @click="NomaintainApprovalbutton(scope.row)" >否</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <span slot="footer" class="dialog-footer">
                <el-button @click="maintainAppro = false">取 消</el-button>
            <!--<el-button type="primary" @click="updateAsset()">提交</el-button>-->
          </span>
        </el-dialog>
      </div>
      <div style="margin-top: 20px">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>已审核通过</span>
              </div>
              <div>
                <el-table :data="List1">
                  <el-table-column type="expand">
                    <template slot-scope="props">
                      <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="资产名称">
                          <span>{{ props.row.interact.assetname }}</span>
                        </el-form-item>
                        <el-form-item label="资产 ID">
                          <span>{{ props.row.interact.aid }}</span>
                        </el-form-item>
                        <el-form-item label="申请人">
                          <span>{{ props.row.uidName }}</span>
                        </el-form-item>
                        <el-form-item label="操作说明">
                          <span>{{ props.row.interact.operation }}</span>
                        </el-form-item>
                        <el-form-item label="操作时间">
                          <span>{{ props.row.interact.operationTime }}</span>
                        </el-form-item>
                        <el-form-item label="申请次数">
                          <span>{{ props.row.interact.applyTimes }}</span>
                        </el-form-item>
                        <el-form-item label="处置员意见">
                          <span>{{ props.row.interact.approvalContent }}</span>
                        </el-form-item>
                        <el-form-item label="描述">
                          <span>{{ props.row.interact.description }}</span>
                        </el-form-item>
                      </el-form>
                    </template>
                  </el-table-column>
                  <el-table-column type="index" label="序号" >
                  </el-table-column>
                  <el-table-column label="资产名称">
                    <template slot-scope="scope">
                      <span>{{scope.row.interact.assetname}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="申请人">
                    <template slot-scope="scope">
                      <span>{{scope.row.uidName}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作时间">
                    <template slot-scope="scope">
                      <span>{{scope.row.interact.operationTime}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="是否同意报废">
                    <template slot-scope="scope">
                      <el-tag type="success">{{scope.row.interact.isEffective}}</el-tag>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-card>

          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>审核未通过</span>
              </div>
              <div>
                <el-table :data="List2">
                  <el-table-column type="expand">
                    <template slot-scope="props">
                      <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="资产名称">
                          <span>{{ props.row.interact.assetname }}</span>
                        </el-form-item>
                        <el-form-item label="资产 ID">
                          <span>{{ props.row.interact.aid }}</span>
                        </el-form-item>
                        <el-form-item label="申请人">
                          <span>{{ props.row.uidName }}</span>
                        </el-form-item>
                        <el-form-item label="操作说明">
                          <span>{{ props.row.interact.operation }}</span>
                        </el-form-item>
                        <el-form-item label="操作时间">
                          <span>{{ props.row.interact.operationTime }}</span>
                        </el-form-item>
                        <el-form-item label="申请次数">
                          <span>{{ props.row.interact.applyTimes }}</span>
                        </el-form-item>
                        <el-form-item label="处置员意见">
                          <span>{{ props.row.interact.approvalContent }}</span>
                        </el-form-item>
                        <el-form-item label="描述">
                          <span>{{ props.row.interact.description }}</span>
                        </el-form-item>
                      </el-form>
                    </template>
                  </el-table-column>
                  <el-table-column type="index" label="序号" >
                  </el-table-column>
                  <el-table-column label="资产名称">
                    <template slot-scope="scope">
                      <span>{{scope.row.interact.assetname}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="申请人">
                    <template slot-scope="scope">
                      <span>{{scope.row.uidName}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作时间">
                    <template slot-scope="scope">
                      <span>{{scope.row.interact.operationTime}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="是否同意报废">
                    <template slot-scope="scope">
                      <el-tag type="danger">{{scope.row.interact.isEffective}}</el-tag>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
    export default {
        name: "disposition",
      data() {
          return {
            token: '',
            List1: [],
            List2: [],
            maintainAppro: false,
            maintainList: [],
            ListNum: 0
          }
      },
      mounted() {
        this.getToken()
        this.getAgreeList()
      },
      methods: {
          getToken() {
            this.token = this.$store.getters.token
          },
          getAgreeList() {
            var url = 'http://58.119.112.13:11001/find_agree_scrapy_request?token=' + this.token
            this.$axios.get(url).then((res) => {
              this.List1 = res.data.searchList
            })

          },
        disposeApproval() {
            this.maintainAppro = true
            this.getApprovalApply()
        },
        getApprovalApply() {
          var url = 'http://58.119.112.13:11001/find_disposer_scrap_asset_request'
          this.$axios.post(url, this.$qs.stringify({
            token: this.token
          })).then((res) =>{
          })
        },
          getDisagreeList() {
            var url = 'http://58.119.112.13:11001/find_disagree_scrapy_request?token=' + this.token
            this.$axios.get(url).then((res) => {
              this.List2 = res.data.searchList
            })
          }
      }
    }
</script>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 100%;
  }
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
</style>
