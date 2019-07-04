<template>
    <div class="app-container">
      <div>
        <el-badge :value="ListLengh" class="item">
          <el-button type="primary" @click="maintainApproval">维修批复</el-button>
        </el-badge>

        <el-dialog
          title="维修批复"
          :visible.sync="maintainAppro"
          width="71%"
          :before-close="closes"
          >
          <div>
            <el-table :data="maintainList"  style="width: auto"   border stripe >
              <el-table-column
                label="序号"
                width="50"
                type="index"
              >
              </el-table-column>
              <!--<el-table-column property="aid" label="资产分类代码" width="150"></el-table-column>-->
              <el-table-column  label="资产名称" width="150">
                <template slot-scope="scope">
                  <span>{{scope.row.interact.assetname}}</span>
                </template>
              </el-table-column>
              <el-table-column  label="操作说明" width="150">
                <template slot-scope="scope">
                  <span>{{scope.row.interact.operation}}</span>
                </template>
              </el-table-column>
              <el-table-column label="数量" width="150">
                <template slot-scope="scope">
                  <span>{{scope.row.interact.quantity}}</span>
                </template>
              </el-table-column>
              <el-table-column label="申请次数" width="150">
                <template slot-scope="scope">
                  <span>{{scope.row.interact.applyTimes}}</span>
                </template>
              </el-table-column>
              <el-table-column  label="申请人" width="150">
                <template slot-scope="scope">
                  <span>{{scope.row.uidName}}</span>
                </template>
              </el-table-column>

              <el-table-column  label="申请时间" width="150">
                <template slot-scope="scope">
                  <span>{{scope.row.interact.operationTime}}</span>
                </template>
              </el-table-column>
              <!--<el-table-column property="approval_content" label="维修员操作说明" width="150"></el-table-column>-->
              <el-table-column property="approval_content" label="您的意见" width="150" fixed="right">
                <template slot-scope="scope">

                  <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="请输入内容"
                    v-model="scope.row.interact.approvalContent">
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
                <el-button @click="closeList">关闭</el-button>
            <!--<el-button type="primary" @click="updateAsset()">提交</el-button>-->
          </span>
        </el-dialog>
      </div>
      <div style="margin-top: 20px">

        <el-row :gutter="20">
          <el-col :span="12">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>同意维修</span>
                <el-button style="float: right; padding: 3px 0" type="text" @click="ShowMore">查看更多</el-button>
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
                        <el-form-item label="维修员意见">
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
                  <el-table-column label="是否同意维修">
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
                <span>不同意维修</span>
                <el-button style="float: right; padding: 3px 0" type="text" @click="ShowMore">查看更多</el-button>
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
                        <el-form-item label="维修员意见">
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
                  <el-table-column label="是否同意维修">
                    <template slot-scope="scope">
                      <el-tag type="danger">{{scope.row.interact.isEffective}}</el-tag>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-dialog
          title="更多数据"
          :visible.sync="dialogVisible"
          >
          <div>
            <el-table :data="List3">
              <el-table-column label="序号" type="index"></el-table-column>
              <el-table-column label="资产名称">
                <template slot-scope="scope">
                  <span>{{scope.row.interact.assetname}}</span>
                </template>
              </el-table-column>
              <el-table-column label="资产 ID">
                <template slot-scope="scope">
                  <span>{{scope.row.interact.aid}}</span>
                </template>
              </el-table-column>
              <el-table-column label="申请人">
                <template slot-scope="scope">
                  <span>{{scope.row.uidName}}</span>
                </template>
              </el-table-column>
              <el-table-column label="申请次数">
                <template slot-scope="scope">
                  <span>{{scope.row.interact.applyTimes}}</span>
                </template>
              </el-table-column>
              <el-table-column label="操作时间">
                <template slot-scope="scope">
                  <span>{{scope.row.interact.operationTime}}</span>
                </template>
              </el-table-column>
              <el-table-column label="操作说明">
                <template slot-scope="scope">
                  <el-tag type="warning">{{scope.row.interact.operation}}</el-tag>
                </template>
              </el-table-column>
              <el-table-column label="是否同意维修">
                <template slot-scope="scope">
                  <el-tag :type="tagss(scope.row)">{{scope.row.interact.isEffective}}</el-tag>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Maintain",
      inject: ['reload'],
      data() {
          return {
            token: '',
            List1: [],
            List2: [],
            List3: [],
            dialogVisible: false,
            maintainAppro: false,
            maintainList: [],
            currentPage: 1,
            ListLengh: 0,
            pagesize: 10,
            Form3: {
              aid:'',
              uid:'',
              operation:'',
              value:'',
              approval_content:'',
              fix_operation: '',
              applyTimes: '',
            },
            approval_content:'',
        }
      },
      mounted() {
          this.getToken();
          this.getAgreeList();
          this.getDisagreeList();
          this.getApproval();
      },
      methods: {
          getToken() {
            this.token = this.$store.getters.token
          },
          getAgreeList() {
            var url = 'http://58.119.112.13:11001/repairman_find_agree_approved_request?token=' + this.token
            this.$axios.get(url).then((res) => {
              this.List1 = res.data.searchList
            })
          },
          getDisagreeList() {
            var url = 'http://58.119.112.13:11001/repairman_find_disagree_approved_request?token=' + this.token
            this.$axios.get(url).then((res) => {
              this.List2 = res.data.searchList
            })
          },
          ShowMore() {
            this.dialogVisible = true;
            var url = 'http://58.119.112.13:11001/repairman_find_all_approved_request?token=' + this.token;
            this.$axios.get(url).then((res) => {
              this.List3 = res.data.searchList
            })
          },
          tagss(row) {
            if (row.interact.isEffective === '是'){
              return 'success'
            }else if (row.interact.isEffective === '否') {
              return 'danger'
            }
          },
          maintainApproval(){
            this.maintainAppro = true;
            //var url = 'http://58.119.112.13:11001/find_repair_approved_request'

          },
        getApproval() {
          var url = 'http://58.119.112.13:11001/find_repair_approved_request'
          this.$axios.post(url, this.$qs.stringify({
            token: this.token
          })).then((res) => {
            console.log(res)
            this.maintainList=res.data.info;
            this.ListLengh = this.maintainList.length
          })
        },
          /**维修员批复*/
          maintainApprovalbutton(row){
            console.log(row)
            this.Form3=row;
            //var url = 'http://58.119.112.13:11001/fix_operation';
            var url = 'http://58.119.112.13:11001/repairman_fix_operation_asset';
            this.$axios.post(url, this.$qs.stringify({
              token: this.token,
              aid: this.Form3.interact.aid,
              uid: this.Form3.interact.uid,
              operation: this.Form3.interact.operation,
              apply_times: this.Form3.interact.applyTimes,
              approval_content: this.Form3.interact.approvalContent,
              // is_effective: this.Form3.value
              is_effective: '是',
              quantity: this.Form3.interact.quantity,
              originLabel: this.Form3.interact.originLabel
            })).then((res) => {
              this.$message.success(res.data.errmsg)
              this.getApproval()
              // this.reload();
            })

          },
          NomaintainApprovalbutton(row){
            this.Form3=row;
            //var url = 'http://58.119.112.13:11001/fix_operation';
            var url = 'http://58.119.112.13:11001/repairman_fix_operation_asset';
            this.$axios.post(url, this.$qs.stringify({
              token: this.token,
              aid: this.Form3.interact.aid,
              uid: this.Form3.interact.uid,
              operation: this.Form3.interact.operation,
              apply_times: this.Form3.interact.applyTimes,
              approval_content: this.Form3.interact.approvalContent,
              // is_effective: this.Form3.value
              is_effective: '否',
              quantity: this.Form3.interact.quantity,
              originLabel: this.Form3.interact.originLabel
            })).then((res) => {
              this.$message.success(res.data.errmsg)
              this.getApproval()
              // this.reload();
            })

          },
          closes() {
            this.reload()
        },
        closeList() {
          this.maintainAppro = false
          this.reload()
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
</style>
