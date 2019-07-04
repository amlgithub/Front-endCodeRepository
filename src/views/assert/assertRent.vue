<template>

    <div class="app-container" >

      <div style="margin-top: 20px">
        <el-row :gutter="5">
          <el-col :span="12">
            <!--<el-select v-model="assetName" filterable class="ii" placeholder="请选择要查找的资产名称" :filter-method="getAssetNum" v-if="step1">-->
              <!--<el-option-->
                <!--v-for="item in NameList"-->
                <!--:key="item[0]"-->
                <!--:label="item[1]"-->
                <!--:value="item[0]">-->
              <!--</el-option>-->
            <!--</el-select>-->
            <!--<el-button type="primary" icon="el-icon-search" @click="FindAsset">查询</el-button>-->
            <el-input v-model="assetNames" clearable class="ii" placeholder="请输入查找的资产名称" @input="FindAsset2"></el-input>
            <el-button type="primary" icon="el-icon-search" @click="FindAsset2" >查询</el-button>
          </el-col>
          <el-col :span="12">
            <el-button type="primary"  @click="returnHome" style="margin-left: 80%">返回主页</el-button>
          </el-col>
        </el-row>
        <div v-if="tableShow">
          <el-row >
            <el-col>
              <el-table :data="assetNameLists.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe style="width: 80%;margin: 20px auto">
                <el-table-column
                  label="序号"
                  width="80"
                  type="index"
                >
                  <template slot-scope="scope">
                    {{(currentPage - 1) * pagesize + scope.$index + 1 }}
                  </template>
                </el-table-column>
                <el-table-column prop="type_num" label="资产分类代码">
                </el-table-column>
                <el-table-column prop="asset_name" label="资产名称"></el-table-column>
                <el-table-column prop="assets_type_name" label="资产分类名称"></el-table-column>
                <el-table-column prop="attribute" label="使用属性"></el-table-column>
                <el-table-column prop="quantity" label="现有库存"></el-table-column>
                <el-table-column prop="specification" label="描述"></el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">

                    <el-button type="primary" size="small"    @click="applySubmit(scope.row)" :disabled="scope.row.quantity==='0'">借用</el-button>

                  </template>
                </el-table-column>

              </el-table>

            </el-col>


          </el-row>
          <el-row >
            <el-col :span="12" :offset="3">
              <el-pagination class="page"
                             @size-change="handleSizeChange"
                             @current-change="handleCurrentChange"
                             :current-page="currentPage"
                             :page-sizes="[10, 20, 50, 100]"
                             :page-size="pagesize"
                             layout="total, sizes, prev, pager, next, jumper"
                             background
                             :total="assetNameLists.length">
              </el-pagination>
            </el-col>

          </el-row>
          <el-dialog
            :visible.sync="dialogApply"
            width="50%">
            <div>
              <el-card class="box-card" style="width: 100%;margin: 20px auto" shadow="hover">
                <div slot="header" class="clearfix">
                  <span>请填写下列表单</span>
                </div>
                <el-form ref="Form1" :model="Form1"  :rules="rules" label-width="120px" style="margin-left: 25%">
                  <el-form-item label="资产分类代码：" style="margin-top: 20px" prop="type_num">
                    <span>{{Form1.type_num}}</span>
                  </el-form-item>
                  <el-form-item label="资产名称：" prop="asset_name">
                    <span>{{Form1.asset_name}}</span>
                  </el-form-item>
                  <el-form-item label="资产操作说明：" >
                    <!--<el-input v-model="Assertoperation" placeholder="请输入内容" shadow="never" class="input2" ></el-input>-->
                    {{Assertoperation}}

                  </el-form-item>
                  <el-form-item label="申请人：">
                    <span>{{this.user}}</span>
                  </el-form-item>
                  <el-form-item label="借用数量：" prop="quantity">
                    <el-input v-model="Form1.quantity" placeholder="请输入内容" shadow="never" class="input2"></el-input>

                  </el-form-item>
                  <!--<el-form-item label="使用部门：" prop="quantity">-->
                  <!--<el-input v-model.number="Form1.department" placeholder="请输入内容" shadow="never" class="input2"></el-input>-->

                  <!--</el-form-item>-->
                  <el-form-item label="资产消耗类型：" prop="consume_type">
                    {{Form1.assets_type_name}}
                    <!--<el-select v-model="Form1.consume_type" placeholder="请选择申请方式"-->
                               <!--shadow="never"-->
                               <!--class="input2">-->
                      <!--<el-option-->
                        <!--v-for="item in option9"-->
                        <!--:key="item.value"-->
                        <!--:label="item.label"-->
                        <!--:value="item.value"-->
                      <!--&gt;-->
                      <!--</el-option>-->
                    <!--</el-select>-->
                  </el-form-item>
                  <!--<el-form-item label="借用时间：" prop="time">-->
                    <!--<div class="block">-->
                      <!--<el-date-picker-->
                        <!--v-model="value1"-->
                        <!--type="date"-->
                        <!--placeholder="选择日期">-->
                      <!--</el-date-picker>-->
                    <!--</div>-->
                  <!--</el-form-item>-->
                  <el-form-item label="借用理由：" prop="reason">
                    <el-input
                      type="textarea"
                      placeholder="请输入内容"
                      v-model="Form1.reason"
                    >
                    </el-input>
                  </el-form-item>
                </el-form>
              </el-card>


            </div>
            <span slot="footer" class="dialog-footer">
            <el-button @click="dialogApply = false">取 消</el-button>
             <el-button type="primary" @click="applyAssert('Form1')">提交</el-button>
          </span>
          </el-dialog>
        </div>

      </div>
      <div>
        <!--<div class="line"></div>-->


        <div style="margin-top: 30px">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-card class="box-card" >
                <div slot="header" class="clearfix">
                  <span>待管理员审核</span>
                </div>
                <div>
                  <el-table :data="ApplyList" stripe="true" height="500">

                    <!--<el-table-column property="aid" label="资产代码" ></el-table-column>-->
                    <el-table-column property="assetname" label="资产名称"></el-table-column>

                    <el-table-column property="operation" label="操作说明" ></el-table-column>
                    <el-table-column property="operationTime" label="借用时间" ></el-table-column>
                    <el-table-column property="quantity" label="已借用数量"></el-table-column>
                    <el-table-column  label="管理员意见">
                      <template slot-scope="scope">

                          {{ '待管理员批复' }}

                      </template>
                    </el-table-column>


                  </el-table>
                </div>

              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>管理员已审核</span>
                </div>
                <div>
                  <el-table :data="ApplyList1" stripe="true" height="500">
                    <!--<el-table-column property="aid" label="资产代码" ></el-table-column>-->
                    <el-table-column property="assetname" label="资产名称"></el-table-column>
                    <!--<el-table-column property="asset_name" label="资产名称" width="150"></el-table-column>-->

                    <el-table-column property="operation" label="操作说明" ></el-table-column>
                    <el-table-column property="operationTime" label="处理时间" ></el-table-column>
                    <el-table-column property="quantity" label="已借用数量"></el-table-column>
                    <el-table-column prop="approvalContent" label="管理员意见" >

                    </el-table-column>

                    <el-table-column property="isEffective" label="是否生效" ></el-table-column>

                  </el-table>
                </div>

              </el-card>
            </el-col>
          </el-row>


        </div>

      </div>



    </div>
</template>

<script>
    export default {
        name: "assertRent",
      inject: ['reload'],
      data() {
          return {
            assetName: '',
            assetNum: '',
            assetNames: '',
            currentPage: 1,
            pagesize: 10,
            user: '',
            assetNameList: [],
            assetNameLists: [],
            assertList: [],
            NameList: [],
            dialogApply: false,
            tableShow: false,
            textss: '',
            active: 0,
            Form1: {
              type_num: '', /* 资产分类代码*/
              asset_name: '', /* 资产名称*/
              measurement: '', /* 计量单位*/
              in_use: '', /* 使用状态*/
              application: '', /* 使用方向（用途）*/
              accessing: '', /* 获取方式*/
              obtain_date: '', /* 取得日期*/
              transaction_date: '', /* 入账日期*/
              brand: '', /* 品牌*/
              material: '', /* 材质*/
              specification: '', /* 规格型号*/
              size: '', /* 大小*/
              asset_usage: '', /* 用法*/
              quantity: '', /* 数量*/
              type_of_value: '', /* 价值类型*/
              asset_value: '', /* 价值*/
              financial_funds: '', /* 经费来源（财政性资金）*/
              non_financial_funds: '', /* 经费来源（非财政性资金*/
              net_worth: '', /* 净值*/
              accounting_voucher_num: '', /* 会计凭证号*/
              department: '', /* 使用部门*/
              superviseDepartment: '', /* 管理部门*/
              supervisor: '', /* 监管负责人*/
              limit_year: '', /* 年限*/
              total_depreciation: '', /* 累计折旧*/
              depreciation: '', /* 折旧*/
              asset_status: '', /* 当前状态*/
              assets_code: '', /* 资产编号（办公设备和专用设备专有）*/
              assets_type_name: '', /* 资产分类名称（办公设备和专用设备专有）*/
              compile: '', /* 编制情况*/
              xszzc: '', /* 行驶证注册*/
              form_of_entry_recording: '', /* 入账形式*/
              brand_source: '', /* 生产厂家*/
              attribute: '', /* 使用属性*/
              consume_type: '',
              reason: ''

            },
            rules:{
              quantity: [
                { required: true, message: '不能为空'},
              ],
              consume_type: [
                { required: true, message: '请选择资产消耗类型', trigger: 'change' }
              ],
              // time: [
              //   { type: 'date',required: true, message: '请选择借用时间', trigger: 'change' }
              // ]
              reason: [
                { required: true, message: '不能为空'},
              ]
            },
            token: '',
            ApplyList: [],
            ApplyList1: [],
            applyASee: false,
            applySee: false,
            step1: true,
            step2:false,
            step3:false,
            option9: [{
              value: '0',
              label: '易消耗资产'
            }, {
              value: '1',
              label: '普通（固定）资产'
            }, {
              value: '2',
              label: '低值资产'
            }, {
              value: '3',
              label: '无形资产'
            }],
            value: '',
            value1:'',
            consume_type: '',
            Assertoperation: '借用',
          }
      },
      mounted() {
        this.token = this.$store.getters.token;
        this.user=localStorage.getItem('name')
        // this.getAlldata();
        this.SeeApply();
        this.SeeeApply();

      },
      methods: {
        // prestep(){
        //   this.active--;
        //   if (this.active === 1) {
        //     this.step2 = true;
        //     this.step1 = false;
        //     this.dialogApply=false;
        //     this.tableShow=false;
        //     this.applyASee=false;
        //     this.step3=false;
        //   } else if (this.active===0){
        //     this.step2=false;
        //     this.step1=true;
        //     this.applySee=false;
        //     this.tableShow=true
        //   } else {
        //     this.step2 = false;
        //     this.step3 = true;
        //     this.applySee=false;
        //   }
        // },
        // next() {
        //   this.active++;
        //   if (this.active === 1) {
        //     this.step2 = true;
        //     this.step1 = false;
        //     this.dialogApply=false;
        //     this.tableShow=false;
        //     this.applyASee=false;
        //   } else if (this.active===0){
        //     this.step2=false;
        //     this.step1=true;
        //     this.applySee=false;
        //   } else {
        //     this.step2 = false;
        //     this.step3 = true;
        //     this.applySee=false;
        //   }
        // },
        // worked() {
        //   setTimeout(() =>{
        //     this.$router.push('/assert/assertApplys')
        //   },750)
        // },
        //得到所有数据
        // getAlldata() {
        //   this.token = this.$store.getters.token;
        //   let findAllAssetUrl = "http://58.119.112.13:11001/find_all_asset";
        //   //let findAllAssetUrl = "http://58.119.112.13:11001/find_all_asset";
        //   this.$axios.post(findAllAssetUrl, this.$qs.stringify({
        //     information: '788888'
        //   })).then((res) => {
        //     // this.$message.success(res.data.errmsg);
        //     console.log(res.data);
        //     this.assetNameList = res.data.info
        //     this.assetkey=Object.keys(res.data.info[0]).slice(1);
        //     console.log('efwff=='+this.assetkey)
        //     this.user=localStorage.getItem('name')
        //
        //   }).catch((err) => {
        //     this.$message.error('查询失败');
        //   })
        // },
        // /**调用find_asset_name_item接口通过向后端传入asset_name来得到assetNum*/
        // getAssetNum(s) {
        //   var url = 'http://58.119.112.13:11001/find_asset_name_item';
        //   //var url = 'http://58.119.112.13:11001/find_asset_name_item';
        //   this.$axios.post(url, this.$qs.stringify({
        //     asset_name_item: s
        //   })).then((res) => {
        //     // console.log(res);
        //     this.NameList = res.data.info
        //     // console.log(this.assetNum)
        //   })
        // },
        handleSizeChange: function (size) {
          this.pagesize = size;
        },
        handleCurrentChange: function(currentPage){
          this.currentPage = currentPage;
        },
        /**查询资产*/
        // FindAsset() {
        //   this.assertList=[];
        //   var url = 'http://58.119.112.13:11001/find_asset';
        //   //var url = 'http://58.119.112.13:11001/find_designated_asset';
        //   this.show = true;
        //   this.$axios.post(url, this.$qs.stringify({
        //     type_num: this.assetName
        //   })).then((res) => {
        //     this.$message.success(res.data.errmsg);
        //     this.assertList.push(res.data.info);
        //     this.tableShow=true;
        //     console.log(this.assertList)
        //   }).catch((err) => {
        //     this.$message.error("查询失败");
        //     // this.reload()
        //   })
        // },
        FindAsset2() {
          var url = 'http://58.119.112.13:11001/find_asset_name_item?asset_name_item=' + this.assetNames
          this.$axios.get(url).then((res) => {
            this.assetNameLists = res.data.assetList
            this.tableShow = true
          })
        },
        applySubmit(row) {
          this.dialogApply=true;
          this.Form1=row;
        },

        /**s申请资产*/
        applyAssert(formName) {

          var url = 'http://58.119.112.13:11001/teacher_request_asset';
          //var url = 'http://58.119.112.13:11001/request_asset'
          // this.Form1=row;
          if (this.Form1.assets_type_name === '无形资产') {
            this.Form1.consume_type = '3'
          } else if (this.Form1.assets_type_name === '低值资产') {
            this.Form1.consume_type = '2'
          }else if (this.Form1.assets_type_name === '易消耗资产') {
            this.Form1.consume_type = '0'
          }else {
            this.Form1.consume_type = '1'
          }
          this.$refs[formName].validate((valid)=> {
            if (valid){
              this.$axios.post(url, this.$qs.stringify({
                token: this.token,
                type_num: this.Form1.type_num,
                size: this.Form1.quantity,
                operation: this.Assertoperation,
                consume_type: this.Form1.consume_type,
                description: this.Form1.reason,
                department: this.Form1.department,
                superviseDepartment: this.Form1.superviseDepartment
              })).then((res) =>{
                console.log(res);
                if (res.data.errno === 0){
                  // var p = {
                  //   type_num: this.Form1.type_num,
                  //   asset_name: this.Form1.asset_name,
                  //   Assertoperation: this.Assertoperation,
                  //   obtain_date: this.Form1.obtain_date,
                  //   quantity: this.Form1.quantity,
                  //   user: this.user,
                  //   textarea1: this.textarea1
                  // }
                  // this.ApplyList.push(p)
                  this.$message.success(res.data.errmsg);
                  // this.dialogApply=false;
                  this.FindAsset2()
                  this.SeeApply();
                  this.SeeeApply();
                  // this.reload();
                  this.dialogApply=false;
                  this.$refs[formName].resetFields();
                }
                else {
                  this.$message.error('借用失败！借用数量超出现有库存！')
                  this.dialogApply=false;
                  this.FindAsset2()
                }

                // this.ApplyList.append('type_num',this.Form1.type_num)
                // this.ApplyList.append('size',this.Form1.quantity)
                // this.ApplyList.append('operation',this.Assertoperation)
                // this.Form2.type_num=this.Form1.type_num;
                // this.Form2.asset_name = this.Form1.asset_name
                // this.Form2.Assertoperation = this.Assertoperation
                // this.Form2.obtain_date=this.Form1.obtain_date
                // this.Form2.quantity=this.Form1.quantity
                // this.Form2.user=this.user
                // this.Form2.textarea1=this.textarea1

                // this.Form2.type_num=''
                // this.Form2.asset_name='';
                // this.Assertoperation=''
                // this.Form2.obtain_date=''
                // this.Form2.quantity=''
                // this.user=''
                // this.textarea1=''

                console.log(this.ApplyList);
                this.dialogApply=false;
                // console.log(this.assetNameList)

              }).catch((erro) => {
                this.$message.error("该资产已经申请过了")
                this.dialogApply=false;
              })
            }
          })

        },
        returnHome() {
          this.$router.push('/assert/assertApplys')
        },

        /**查看未批复申请列表*/
        SeeApply() {
          // this.ApplyList=[];

          var url = 'http://58.119.112.13:11001/find_no_approve_request';
          //var url = 'http://58.119.112.13:11001/find_no_approve_request';
          this.$axios.post(url,this.$qs.stringify({
            token: this.token
          })).then((res) => {
            console.log(res);
            this.ApplyList=res.data.info;
            console.log(this.ApplyList)
          })
        },
        /**查看已批复申请列表*/
        SeeeApply() {

          //var url = 'http://58.119.112.13:11001/find_approved_request';
          var url = 'http://58.119.112.13:11001/common_find_all_approved_request?token=' + this.token;

          this.$axios.get(url).then((res) => {
            console.log(res)
            this.ApplyList1=res.data.interactList
            console.log(this.ApplyList)
          })
        },
        handleClose(){
          this.reload()

        },
      }
    }
</script>

<style scoped>
  .ii {
    width: 300px;
  }
  .input2{
    width: 200px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }
  .line{
    margin-top: 0;
    border-bottom: 1px solid gainsboro;
  }
  .page{
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
