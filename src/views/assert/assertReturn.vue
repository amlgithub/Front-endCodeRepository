<template>
  <div class="app-container">

    <div>
      <el-card class="box-card" >
        <div slot="header" class="clearfix">
          <span>已审核通过的资产</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click="ReturnHome">返回主页</el-button>
        </div>
        <div>
          <el-table :data="ApplyList"     border stripe >
            <el-table-column property="aid" label="资产代码"></el-table-column>
            <el-table-column property="assetname" label="资产名称"></el-table-column>

            <el-table-column property="description" label="操作说明" ></el-table-column>
            <el-table-column property="operationTime" label="操作时间" ></el-table-column>
            <el-table-column property="quantity" label="数量" ></el-table-column>
            <el-table-column property="approvalContent" label="管理员意见" ></el-table-column>

            <el-table-column property="isEffective" label="是否生效"></el-table-column>

            <el-table-column
              fixed="right"
              label="操作"
            >
              <template slot-scope="scope">
                <el-button type="primary" size="small"    @click="Maintain(scope.row)">申请归还</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>

      </el-card>

    </div>


    <el-dialog
      title="归还申请"
      :visible.sync="dialogApply"
      width="50%"
      :before-close="handleClose"
      center="true">
      <div>
        <el-form  :model="Form2" ref="Form2" :rules="rules" label-width="120px" style="margin-left: 25%">
          <el-form-item label="资产代码：" style="margin-top: 20px">
            <span>{{Form2.aid}}</span>
          </el-form-item>
          <el-form-item label="资产名称：">
            <span>{{Form2.assetname}}</span>
          </el-form-item>
          <el-form-item label="操作说明：">
            <span>归还</span>
          </el-form-item>
          <el-form-item label="申请人：">
            <span>{{this.user}}</span>
          </el-form-item>
          <el-form-item label="数量：" prop="quantity">
            <el-input v-model="Form2.quantity" placeholder="请输入内容" shadow="never" class="input2"></el-input>

          </el-form-item>
          <!--<el-form-item label="使用部门：">-->
            <!--<el-input v-model="Form2.department" placeholder="请输入内容" shadow="never" class="input2"></el-input>-->

          <!--</el-form-item>-->
          <!--<el-form-item label="管理部门：">-->
            <!--<el-input v-model="Form2.superviseDepartment" placeholder="请输入内容" shadow="never" class="input2"></el-input>-->

          <!--</el-form-item>-->
          <!--<el-form-item label="资产消耗类型：">-->
            <!--{{Form2.assets_type_name}}-->
            <!--&lt;!&ndash;<el-select v-model="consume_type" placeholder="请选择申请方式"&ndash;&gt;-->
                       <!--&lt;!&ndash;shadow="never"&ndash;&gt;-->
                       <!--&lt;!&ndash;class="input2">&ndash;&gt;-->
              <!--&lt;!&ndash;<el-option&ndash;&gt;-->
                <!--&lt;!&ndash;v-for="item in option9"&ndash;&gt;-->
                <!--&lt;!&ndash;:key="item.value"&ndash;&gt;-->
                <!--&lt;!&ndash;:label="item.label"&ndash;&gt;-->
                <!--&lt;!&ndash;:value="item.value"&ndash;&gt;-->
              <!--&lt;!&ndash;&gt;&ndash;&gt;-->
              <!--&lt;!&ndash;</el-option>&ndash;&gt;-->
            <!--&lt;!&ndash;</el-select>&ndash;&gt;-->
          <!--</el-form-item>-->
        </el-form>

      </div>
      <span slot="footer" class="dialog-footer">
                <el-button @click="dialogApply = false">取 消</el-button>
                <el-button type="primary" @click="ReturnAssert">提交</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
    export default {
        name: "assertReturn",
      inject: ['reload'],
      data() {
        return {
          ApplyList:[],
          token: '',
          dialogApply: false,
          user: '',
          Form2: {
            aid: '',
            quantity: '',
            consume_type: '1',
            assetname: '',
            superviseDepartment: '',
            department: ''
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
            label: '普通资产'
          }, {
            value: '2',
            label: '低值资产'
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
          var url = 'http://58.119.112.13:11001/common_find_all_approved_request?token=' + this.token;
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
          this.dialogApply=true;
          this.Form2=row
          console.log(row)

        },

        ReturnAssert(){

          var url = 'http://58.119.112.13:11001/common_return_asset_request'
          //var url = 'http://58.119.112.13:11001/return_asset'
          this.$axios.post(url, this.$qs.stringify({
            token: this.token,
            aid: this.Form2.aid,
            size: this.Form2.quantity,
            operation: '归还',
            consume_type: this.Form2.consumeType,
            department: this.Form2.department,
            superviseDepartment: this.Form2.superviseDepartment,
            originLabel: this.Form2.applyTimes
          })).then((res) => {
            console.log(res)
            this.$message.success(res.data.errmsg)
            this.reload();
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
