<template>
  <div class="app-container">
    <div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>已审核通过的资产</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click="ReturnHome">返回主页</el-button>
        </div>
        <div>
          <el-table :data="ApplyList"     border stripe >
            <el-table-column
              label="序号"
              width="80"
              type="index"
            >
            </el-table-column>
            <!--<el-table-column property="aid" label="资产代码"></el-table-column>-->
            <el-table-column property="assetname" label="资产名称"></el-table-column>

            <el-table-column property="operation" label="操作说明" ></el-table-column>
            <el-table-column property="operationTime" label="处理时间" ></el-table-column>
            <el-table-column property="quantity" label="已借用数量" ></el-table-column>
            <el-table-column property="approvalContent" label="管理员意见" ></el-table-column>

            <el-table-column property="isEffective" label="是否生效"></el-table-column>

            <el-table-column
              fixed="right"
              label="操作"
              >
              <template slot-scope="scope">
                <el-button type="primary" size="small"    @click="Maintain(scope.row)">申请维修</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>

      </el-card>

    </div>


    <el-dialog
      title="维修申请"
      :visible.sync="dialogApply"
      width="50%"
      :before-close="handleClose"
       center="true">
      <div>
        <el-form  :model="Form2" label-width="120px" style="margin-left: 25%">
          <!--<el-form-item label="资产代码：" style="margin-top: 20px">
            <span>{{Form2.aid}}</span>
          </el-form-item>-->
          <el-form-item label="资产名称：">
            <span>{{Form2.assetname}}</span>
          </el-form-item>
          <el-form-item label="操作说明：">
          <span>维修</span>
          </el-form-item>
          <el-form-item label="申请人：">
            <span>{{this.user}}</span>
          </el-form-item>
          <el-form-item label="维修数量：">
            <el-input v-model="Form2.quantity" placeholder="请输入内容" shadow="never" class="input2"></el-input>

          </el-form-item>
          <el-form-item label="资产消耗类型：">
            <el-select v-model="consume_type" placeholder="请选择申请方式"
                       shadow="never"
                       class="input2">
              <el-option
                v-for="item in option9"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <!--<el-form-item label="维修时间：" prop="time">-->
            <!--<div class="block">-->
              <!--<el-date-picker-->
                <!--v-model="value1"-->
                <!--type="date"-->
                <!--placeholder="选择日期"-->
               <!--class="input2">-->
              <!--</el-date-picker>-->
            <!--</div>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="使用部门:" prop="position">-->
            <!--<el-input-->
              <!--v-model="Form2.department"-->
              <!--clearable-->
              <!--class="input2">-->
            <!--</el-input>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="管理部门:" prop="position">-->
            <!--<el-input-->
              <!--v-model="Form2.superviseDepartment"-->
              <!--clearable-->
              <!--class="input2">-->
            <!--</el-input>-->
          <!--</el-form-item>-->
          <el-form-item label="维修原因" prop="reason">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="Form2.description"
              style="width: 300px">
            </el-input>
          </el-form-item>
        </el-form>

      </div>
      <span slot="footer" class="dialog-footer">
                <el-button @click="dialogApply = false">取 消</el-button>
                <el-button type="primary" @click="MaintainAssert">提交</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
    export default {
        name: "assertReport",
      inject: ['reload'],
      data() {
          return {
            ApplyList:[],
            token: '',
            dialogApply: false,
            inputPosition: '',
            reasonTextarea: '',
            user: '',
            Form2: {
              id: '',
              aid: '',
              quantity: '',
              consume_type: '1',
              assetname: '',
              operation: '',
              description: '',
              department: '',
              superviseDepartment: ''
              // obtain_date: '',
              // user: '',
              // quantity: '',
              // textarea1: '',

            },
            option9: [{
              value: '0',
              label: '消耗材料'
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
            consume_type:'',
            value1: '',

          }
      },
      mounted() {
        this.token = this.$store.getters.token;
        this.user =localStorage.getItem('name');
        this.SeeeApply()
      },
      methods: {
        SeeeApply() {
          var url = 'http://58.119.112.13:11001/common_find_can_repair?token=' +this.token;
          //var url = 'http://58.119.112.13:11001/find_approved_request';

          this.$axios.get(url).then((res) => {
            console.log(res);
            this.ApplyList=res.data.interactList;
            console.log(this.ApplyList)
          })
        },
        handleClose(){
           this.reload()

        },
        Maintain(row){
          console.log(row)
          this.dialogApply=true;
          this.Form2=row

        },
        /**申请维修*/
        MaintainAssert(){

          var url = 'http://58.119.112.13:11001/teacher_fix_asset_request'
          //var url = 'http://58.119.112.13:11001/fix_asset'
          this.$axios.post(url, this.$qs.stringify({
            token: this.token,
            aid: this.Form2.aid,
            size: this.Form2.quantity,
            operation: '维修',
            consume_type: this.Form2.consumeType,
            description: this.Form2.description,
            department: this.Form2.department,
            superviseDepartment: this.Form2.superviseDepartment,
            originLabel: this.Form2.applyTimes
          })).then((res) => {
            console.log(res)
            this.$message.success(res.data.errmsg)
            // this.reload();
            this.dialogApply = false
            this.SeeeApply()
          })
        },
        ReturnHome() {
          this.$router.push('/assert/assertApplys')
        }
      }
    }
</script>

<style scoped>
  .input2{
    width: 200px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }
</style>
