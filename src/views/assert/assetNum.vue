<template>
    <div class="app-container">
      <div style="margin-right: 10px">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-select v-model="assetName" filterable style="width: 300px" placeholder="请输入教师名" :filter-method="getAssetNum" clearable
            >
              <el-option
                v-for="item in assetNameList1"
                :key="item[0]"
                :label="item[1]"
                :value="item[1]">
              </el-option>
            </el-select>
            <el-button type="primary" icon="el-icon-search" @click="FindAssetbyName" >查询</el-button>
          </el-col>
          <el-col :span="4">
            <el-button type="primary" @click="FindAll" v-if="FindAll1" >查看全部</el-button>
          </el-col>
          <el-col :span="2" :offset="14">
            <el-button type="primary"  @click="returnHome" >返回主页</el-button>
          </el-col>
        </el-row>



      </div>
      <div>
        <el-row style="margin-top: 10px">
          <el-col>
            <el-table :data="assetNameList.slice((currentPage-1)*pagesize,currentPage*pagesize)"  style="width: auto" id="print"  border @header-click="sortSS" :row-class-name="tableRowClassName" class="tables" :header-cell-style="backgroundbutton"  @sort-change="sortSS">
              <el-table-column
                label="序号"
                width="50"
                type="index"
                fixed="left"
              >
                <template slot-scope="scope">
                  {{(currentPage - 1) * pagesize + scope.$index + 1 }}
                </template>
              </el-table-column>
              <el-table-column property="type_num" label="资产分类代码" width="150"  fixed="left" sortable="custom">
                <template slot="header" slot-scope="scope">
                  <span>资产分类代码</span>
                  <!--<i class="ymq-icondown-circle"></i>-->
                </template>
              </el-table-column>
              <el-table-column property="asset_name" label="资产名称" width="150" fixed="left" sortable="custom">
                <template slot="header" slot-scope="scope">
                  <span>资产名称</span>
                  <!--<i class="ymq-icondown-circle"></i>-->
                </template>
              </el-table-column>
              <el-table-column label="教师" width="150" v-if="teaShow" fixed="left" sortable="custom">
                <template slot-scope="scope">
                  {{assetName}}
                </template>
              </el-table-column>

              <el-table-column property="attribute" label="使用属性" width="150" sortable="custom">
                <template slot="header" slot-scope="scope">
                  <span>使用属性</span>
                  <!--<i class="ymq-icondown-circle"></i>-->
                </template>
              </el-table-column>
              <!--<el-table-column property="brand" label="品牌" width="150"></el-table-column>-->
              <el-table-column property="quantity" label="数量" width="150" sortable="custom">
                <template slot="header" slot-scope="scope">
                  <span>数量</span>
                  <!--<i class="ymq-icondown-circle"></i>-->
                </template>
              </el-table-column>
              <el-table-column property="assets_type_name" label="资产分类名称" width="150" sortable="custom">
                <template slot="header" slot-scope="scope">
                  <span>资产分类名称</span>
                  <!--<i class="ymq-icondown-circle"></i>-->
                </template>
              </el-table-column>
              <el-table-column property="net_worth" label="净值" width="150" sortable="custom">
                <template slot="header" slot-scope="scope">
                  <span>净值(元)</span>
                  <!--<i class="ymq-icondown-circle"></i>-->
                </template>
              </el-table-column>
              <el-table-column property="asset_value" label="价值" width="150" sortable="custom">
                <template slot="header" slot-scope="scope">
                  <span>原值(元)</span>
                  <!--<i class="ymq-icondown-circle"></i>-->
                </template>
              </el-table-column>
              <el-table-column property="price" label="单价" width="150" sortable="custom">
                <template slot="header" slot-scope="scope">
                  <span>单价(元)</span>
                  <!--<i class="ymq-icondown-circle"></i>-->
                </template>
              </el-table-column>
              <el-table-column property="accounting_voucher_num" label="会计号" width="150" sortable="custom">
                <template slot="header" slot-scope="scope">
                  <span>会计号</span>
                  <!--<i class="ymq-icondown-circle"></i>-->
                </template>
              </el-table-column>
              <el-table-column property="obtain_date" label="取得日期" width="150" sortable="custom">
                <template slot="header" slot-scope="scope">
                  <span>取得日期</span>
                  <!--<i class="ymq-icondown-circle"></i>-->
                </template>
              </el-table-column>
              <el-table-column property="transaction_date" label="入账日期" width="150" sortable="custom">
                <template slot="header" slot-scope="scope">
                  <span>入账日期</span>
                  <!--<i class="ymq-icondown-circle"></i>-->
                </template>
              </el-table-column>
              <el-table-column property="application" label="使用方向" width="150" sortable="custom">
                <template slot="header" slot-scope="scope">
                  <span>使用方向</span>
                  <!--<i class="ymq-icondown-circle"></i>-->
                </template>
              </el-table-column>
              <el-table-column property="in_use" label="使用状态" width="150" sortable="custom">
                <template slot="header" slot-scope="scope">
                  <span>使用状态</span>
                  <!--<i class="ymq-icondown-circle"></i>-->
                </template>
              </el-table-column>
              <el-table-column property="measurement" label="计量单位" width="150" sortable="custom">
                <template slot="header" slot-scope="scope">
                  <span>计量单位</span>
                  <!--<i class="ymq-icondown-circle"></i>-->
                </template>
              </el-table-column>
              <el-table-column property="accessing" label="获取方式" width="150" sortable="custom">
                <template slot="header" slot-scope="scope">
                  <span>获取方式</span>
                  <!--<i class="ymq-icondown-circle"></i>-->
                </template>
              </el-table-column>

              <el-table-column property="asset_status" label="当前状态" width="150" sortable="custom">
                <template slot="header" slot-scope="scope">
                  <span>当前状态</span>
                  <!--<i class="ymq-icondown-circle"></i>-->
                </template>
              </el-table-column>
              <el-table-column property="type_of_value" label="价值类型" width="150" sortable="custom">
                <template slot="header" slot-scope="scope">
                  <span>价值类型</span>
                  <!--<i class="ymq-icondown-circle"></i>-->
                </template>
              </el-table-column>
              <!--<el-table-column property="financial_funds" label="财政经费" width="150"></el-table-column>-->
              <!--<el-table-column property="non_financial_funds" label="非财政经费" width="150"></el-table-column>-->

              <el-table-column property="total_depreciation" label="累计折旧" width="150" sortable="custom">
                <template slot="header" slot-scope="scope">
                  <span>累计折旧</span>
                  <!--<i class="ymq-icondown-circle"></i>-->
                </template>
              </el-table-column>
              <el-table-column property="depreciation" label="折旧" width="150" sortable="custom">
                <template slot="header" slot-scope="scope">
                  <span>折旧</span>
                  <!--<i class="ymq-icondown-circle"></i>-->
                </template>
              </el-table-column>

              <el-table-column property="brand_source" label="品牌 | 生产厂家" width="150" sortable="custom">
                <template slot="header" slot-scope="scope">
                  <span>品牌 | 生产厂家</span>
                  <!--<i class="ymq-icondown-circle"></i>-->
                </template>
              </el-table-column>

              <!--<el-table-column property="compile" label="编制情况" width="150"></el-table-column>-->
              <!--<el-table-column property="form_of_entry_recording" label="入账形式" width="150"></el-table-column>-->
              <!--<el-table-column property="xszzc" label="行驶证注册" width="150"></el-table-column>-->
              <el-table-column property="department" label="使用部门" width="150" sortable="custom">
                <template slot="header" slot-scope="scope">
                  <span>使用部门</span>
                  <!--<i class="ymq-icondown-circle"></i>-->
                </template>
              </el-table-column>
              <el-table-column property="supervise_department" label="监管部门" width="150" sortable="custom">
                <template slot="header" slot-scope="scope">
                  <span>管理部门</span>
                  <!--<i class="ymq-icondown-circle"></i>-->
                </template>
              </el-table-column>
              <el-table-column property="storage_location" label="存放地点" width="150" sortable="custom">
                <template slot="header" slot-scope="scope">
                  <span>存放地点</span>
                  <!--<i class="ymq-icondown-circle"></i>-->
                </template>
              </el-table-column>
              <el-table-column property="supervisor" label="监管负责人" width="150" sortable="custom">
                <template slot="header" slot-scope="scope">
                  <span>监管负责人</span>
                  <!--<i class="ymq-icondown-circle"></i>-->
                </template>
              </el-table-column>
              <el-table-column property="asset_usage" label="设备用途" width="150" sortable="custom">
                <template slot="header" slot-scope="scope">
                  <span>设备用途</span>
                  <!--<i class="ymq-icondown-circle"></i>-->
                </template>
              </el-table-column>
              <!--<el-table-column property="material" label="材料" width="150"></el-table-column>-->
              <el-table-column property="specification" label="规格型号" width="150" sortable="custom">
                <template slot="header" slot-scope="scope">
                  <span>规格型号</span>
                  <!--<i class="ymq-icondown-circle"></i>-->
                </template>
              </el-table-column>
              <!--<el-table-column property="size" label="大小" width="150"></el-table-column>-->

              <el-table-column property="limit_year" label="预使用年限" width="150" sortable="custom">
                <template slot="header" slot-scope="scope">
                  <span>预使用年限</span>
                  <!--<i class="ymq-icondown-circle"></i>-->
                </template>
              </el-table-column>

            </el-table>
          </el-col>
        </el-row>
        <el-row class="page" >
          <el-col>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[10, 20, 50, 100]"
              :page-size="pagesize"
              layout="total, sizes, prev, pager, next, jumper"
              background
              :total="assetNameList.length">
            </el-pagination>
          </el-col>
        </el-row>
      </div>

    </div>
</template>

<script>
    export default {
        name: "assetNum",
        data() {
          return {
            assetName: '',
            assetNameList1: [],
            assetNameList: [],
            currentPage: 1,
            pagesize: 10,
            columnss: '',
            num: 0,
            FindAll1: false,
            teaShow: false,
          }
        },
      mounted() {
        this.getAllData()
      },
      methods: {
          getAllData() {
            let findAllAssetUrl = "http://58.119.112.13:11001/find_all_asset";
            this.$axios.post(findAllAssetUrl, this.$qs.stringify({
              information: '788888'
            })).then((res) => {
              // this.$message.success(res.data.errmsg);
              console.log(res.data);
              this.assetNameList = res.data.info

            }).catch((err) => {
              this.$message.error('查询失败');

            })
          },
          /**调用find_asset_name_item接口通过向后端传入asset_name来得到assetNum*/
        getAssetNum(ss) {
      console.log('efwffwfewfwefwefwef====='+ss)
      // var url = 'http://58.119.112.13:11001/find_asset_name_item';
      //var url = 'http://58.119.112.13:11001/find_asset_name_item';
      var url = 'http://58.119.112.13:11001/find_username';
      this.$axios.get(url,{
        params: {
          name: ss
        }
      }).then((res) => {
        console.log(res)
        this.assetNameList1=res.data.usernameList
      })

    },
        /**根据人名查询资产*/
        FindAssetbyName() {
          var url = 'http://58.119.112.13:11001/find_asset_by_username';
          this.$axios.get(url,{
            params: {
              name: this.assetName
            }
          }).then((res) => {
            this.assetNameList=res.data.assetList;
            this.$message.success(res.data.errmsg);
            this.FindAll1=true;
            this.teaShow=true;
          })
        },
        FindAll() {
          let findAllAssetUrl = "http://58.119.112.13:11001/find_all_asset";
          this.$axios.post(findAllAssetUrl, this.$qs.stringify({
            information: '788888'
          })).then((res) => {
            // this.$message.success(res.data.errmsg);
            console.log(res.data);
            this.assetNameList = res.data.info
            this.FindAll1=false;
            this.teaShow=false;

          }).catch((err) => {
            this.$message.error('查询失败');

          })
        },
        sortSS(column){
          console.log(column.property);
          // var attribute = column.property
          var url = 'http://58.119.112.13:11001/attribute_sort';
          this.$axios.get(url,{
            params: {
              // attribute: column.property,
              attribute: column.prop,
              sortStatus: this.num
            }
          }).then((res) => {
            console.log(res);
            this.assetNameList=res.data.assetList;
            this.columnss=column

            if (this.num === 0) {
              this.num =1
            } else if (this.num === 1) {
              this.num = 0
            }
          })
        },
        handleSizeChange: function (size) {
          this.pagesize = size;
        },
        handleCurrentChange: function(currentPage){
          this.currentPage = currentPage;
        },
        backgroundbutton({row, column, rowIndex, columnIndex}){
          if (column===this.columnss){
            return 'background:#DDDFE1'
          }

        },
        returnHome() {
          this.$router.push('/assert/assertApplyIndex')
        }
      }
    }
</script>

<style scoped>
  .page{
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
