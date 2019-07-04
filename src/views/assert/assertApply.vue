<template>
  <div class="app-container">
    <el-row :gutter="5">
      <el-col :span="20">
        <!--<el-select v-model="assetName" filterable class="ii" placeholder="请选择要查找的资产名称" @change="getAssetNum">-->
          <!--<el-option-->
            <!--v-for="item in assetNameList"-->
            <!--:key="item.id"-->
            <!--:label="item.asset_name"-->
            <!--:value="item.asset_name">-->
          <!--</el-option>-->
        <!--</el-select>-->
        <!--<el-select v-model="assetName" filterable class="ii" placeholder="请输入教师名" :filter-method="getAssetNum" clearable-->
                   <!--v-if="rA">-->
          <!--<el-option-->
            <!--v-for="item in assetNameList1"-->
            <!--:key="item[0]"-->
            <!--:label="item[1]"-->
            <!--:value="item[1]">-->
          <!--</el-option>-->
        <!--</el-select>-->
        <!--&lt;!&ndash;<el-button type="primary" icon="el-icon-search" @click="FindAsset" v-on:click="dialogVisible=true">查询</el-button>&ndash;&gt;-->
        <!--<el-button type="primary" icon="el-icon-search" @click="FindAssetbyName" v-if="rA">查询</el-button>-->

        <!--<el-dialog-->
          <!--title="查看未批复请求"-->
          <!--:visible.sync="applySee"-->
          <!--width="71%"-->
          <!--:before-close="handleClose">-->
          <!--<div>-->
            <!--<el-table :data="ApplyList"  style="width: auto"   border stripe >-->
              <!--<el-table-column-->
                <!--label="序号"-->
                <!--width="50"-->
                <!--type="index"-->
              <!--&gt;-->
                <!--<template slot-scope="scope">-->
                  <!--{{(currentPage - 1) * pagesize + scope.$index + 1 }}-->
                <!--</template>-->
              <!--</el-table-column>-->
              <!--<el-table-column property="aid" label="资产代码" ></el-table-column>-->
              <!--<el-table-column property="assetname" label="资产名称" ></el-table-column>-->

              <!--<el-table-column property="operation" label="操作说明" ></el-table-column>-->
              <!--<el-table-column property="operation_time" label="处理时间" ></el-table-column>-->
              <!--<el-table-column property="quantity" label="数量" ></el-table-column>-->
              <!--<el-table-column property="approval_content" label="管理员意见" ></el-table-column>-->

              <!--<el-table-column property="is_effective" label="是否生效" ></el-table-column>-->

              <!--&lt;!&ndash;<el-table-column property="textarea1" label="您的意见" width="150"></el-table-column>&ndash;&gt;-->
              <!--&lt;!&ndash;<el-table-column&ndash;&gt;-->
                <!--&lt;!&ndash;fixed="right"&ndash;&gt;-->
                <!--&lt;!&ndash;label="操作"&ndash;&gt;-->
                <!--&lt;!&ndash;&gt;&ndash;&gt;-->
                <!--&lt;!&ndash;<template slot-scope="scope">&ndash;&gt;-->
                  <!--&lt;!&ndash;<el-button type="primary" size="small"    @click="cancelAssert(scope.row)">撤销申请</el-button>&ndash;&gt;-->
                <!--&lt;!&ndash;</template>&ndash;&gt;-->
                <!--&lt;!&ndash;&lt;!&ndash;<template slot-scope="scope">&ndash;&gt;&ndash;&gt;-->
                <!--&lt;!&ndash;&lt;!&ndash;<el-button v-if="scope.row.edit" type="success" size="small" icon="el-icon-circle-check-outline" @click="applyAssert(scope.row)"></el-button>&ndash;&gt;&ndash;&gt;-->
                <!--&lt;!&ndash;&lt;!&ndash;<el-button v-else type="primary" size="small" icon="el-icon-edit" @click="scope.row.edit=!scope.row.edit">申请资产</el-button>&ndash;&gt;&ndash;&gt;-->
                <!--&lt;!&ndash;&lt;!&ndash;</template>&ndash;&gt;&ndash;&gt;-->
              <!--&lt;!&ndash;</el-table-column>&ndash;&gt;-->
              <!--&lt;!&ndash;<el-table-column&ndash;&gt;-->
                <!--&lt;!&ndash;fixed="right"&ndash;&gt;-->
                <!--&lt;!&ndash;label="操作"&ndash;&gt;-->
                <!--&lt;!&ndash;width="150">&ndash;&gt;-->
                <!--&lt;!&ndash;<template slot-scope="scope">&ndash;&gt;-->
                  <!--&lt;!&ndash;<el-button type="primary" size="small"    @click="ReturnAssert(scope.row)">申请归还</el-button>&ndash;&gt;-->
                <!--&lt;!&ndash;</template>&ndash;&gt;-->
                <!--&lt;!&ndash;&lt;!&ndash;<template slot-scope="scope">&ndash;&gt;&ndash;&gt;-->
                <!--&lt;!&ndash;&lt;!&ndash;<el-button v-if="scope.row.edit" type="success" size="small" icon="el-icon-circle-check-outline" @click="applyAssert(scope.row)"></el-button>&ndash;&gt;&ndash;&gt;-->
                <!--&lt;!&ndash;&lt;!&ndash;<el-button v-else type="primary" size="small" icon="el-icon-edit" @click="scope.row.edit=!scope.row.edit">申请资产</el-button>&ndash;&gt;&ndash;&gt;-->
                <!--&lt;!&ndash;&lt;!&ndash;</template>&ndash;&gt;&ndash;&gt;-->
              <!--&lt;!&ndash;</el-table-column>&ndash;&gt;-->
              <!--&lt;!&ndash;<el-table-column&ndash;&gt;-->
                <!--&lt;!&ndash;fixed="right"&ndash;&gt;-->
                <!--&lt;!&ndash;label="操作"&ndash;&gt;-->
                <!--&lt;!&ndash;width="150">&ndash;&gt;-->
                <!--&lt;!&ndash;<template slot-scope="scope">&ndash;&gt;-->
                  <!--&lt;!&ndash;<el-button type="primary" size="small"    @click="MaintainAssert(scope.row)">申请维修</el-button>&ndash;&gt;-->
                <!--&lt;!&ndash;</template>&ndash;&gt;-->
                <!--&lt;!&ndash;&lt;!&ndash;<template slot-scope="scope">&ndash;&gt;&ndash;&gt;-->
                <!--&lt;!&ndash;&lt;!&ndash;<el-button v-if="scope.row.edit" type="success" size="small" icon="el-icon-circle-check-outline" @click="applyAssert(scope.row)"></el-button>&ndash;&gt;&ndash;&gt;-->
                <!--&lt;!&ndash;&lt;!&ndash;<el-button v-else type="primary" size="small" icon="el-icon-edit" @click="scope.row.edit=!scope.row.edit">申请资产</el-button>&ndash;&gt;&ndash;&gt;-->
                <!--&lt;!&ndash;&lt;!&ndash;</template>&ndash;&gt;&ndash;&gt;-->
              <!--&lt;!&ndash;</el-table-column>&ndash;&gt;-->
            <!--</el-table>-->
          <!--</div>-->
          <!--<span slot="footer" class="dialog-footer">-->
                <!--<el-button @click="applySee = false">取 消</el-button>-->
                <!--&lt;!&ndash;<el-button type="primary" @click="updateAsset()">提交</el-button>&ndash;&gt;-->
          <!--</span>-->
        <!--</el-dialog>-->

        <!--<el-button type="primary" @click="SeeeApply" v-if="RoleShow">查看已批复请求</el-button>-->
        <!--<el-dialog-->
          <!--title="查看已批复请求"-->
          <!--:visible.sync="applyASee"-->
          <!--width="71%"-->
          <!--:before-close="handleClose">-->
          <!--<div>-->
            <!--<el-table :data="ApplyList"  style="width: auto"   border stripe >-->
              <!--<el-table-column-->
                <!--label="序号"-->
                <!--width="50"-->
                <!--type="index"-->
              <!--&gt;-->
                <!--<template slot-scope="scope">-->
                  <!--{{(currentPage - 1) * pagesize + scope.$index + 1 }}-->
                <!--</template>-->
              <!--</el-table-column>-->
              <!--<el-table-column property="aid" label="资产代码" ></el-table-column>-->
              <!--<el-table-column property="assetname" label="资产名称"></el-table-column>-->

              <!--<el-table-column property="operation" label="操作说明"></el-table-column>-->
              <!--<el-table-column property="operation_time" label="处理时间" ></el-table-column>-->
              <!--<el-table-column property="quantity" label="数量"></el-table-column>-->
              <!--<el-table-column property="approval_content" label="管理员意见" ></el-table-column>-->

              <!--<el-table-column property="is_effective" label="是否生效" ></el-table-column>-->

              <!--&lt;!&ndash;<el-table-column property="textarea1" label="您的意见" width="150"></el-table-column>&ndash;&gt;-->
              <!--&lt;!&ndash;<el-table-column&ndash;&gt;-->
                <!--&lt;!&ndash;fixed="right"&ndash;&gt;-->
                <!--&lt;!&ndash;label="操作"&ndash;&gt;-->
                <!--&lt;!&ndash;width="150">&ndash;&gt;-->
                <!--&lt;!&ndash;<template slot-scope="scope">&ndash;&gt;-->
                  <!--&lt;!&ndash;<el-button type="primary" size="small"    @click="cancelAssert(scope.row)">撤销申请</el-button>&ndash;&gt;-->
                <!--&lt;!&ndash;</template>&ndash;&gt;-->
                <!--&lt;!&ndash;&lt;!&ndash;<template slot-scope="scope">&ndash;&gt;&ndash;&gt;-->
                <!--&lt;!&ndash;&lt;!&ndash;<el-button v-if="scope.row.edit" type="success" size="small" icon="el-icon-circle-check-outline" @click="applyAssert(scope.row)"></el-button>&ndash;&gt;&ndash;&gt;-->
                <!--&lt;!&ndash;&lt;!&ndash;<el-button v-else type="primary" size="small" icon="el-icon-edit" @click="scope.row.edit=!scope.row.edit">申请资产</el-button>&ndash;&gt;&ndash;&gt;-->
                <!--&lt;!&ndash;&lt;!&ndash;</template>&ndash;&gt;&ndash;&gt;-->
              <!--&lt;!&ndash;</el-table-column>&ndash;&gt;-->
              <!--<el-table-column-->
                <!--fixed="right"-->
                <!--label="操作"-->
                <!--&gt;-->
                <!--<template slot-scope="scope">-->
                  <!--<el-button type="primary" size="small"    @click="ReturnAssert(scope.row)">申请归还</el-button>-->
                <!--</template>-->
                <!--&lt;!&ndash;<template slot-scope="scope">&ndash;&gt;-->
                <!--&lt;!&ndash;<el-button v-if="scope.row.edit" type="success" size="small" icon="el-icon-circle-check-outline" @click="applyAssert(scope.row)"></el-button>&ndash;&gt;-->
                <!--&lt;!&ndash;<el-button v-else type="primary" size="small" icon="el-icon-edit" @click="scope.row.edit=!scope.row.edit">申请资产</el-button>&ndash;&gt;-->
                <!--&lt;!&ndash;</template>&ndash;&gt;-->
              <!--</el-table-column>-->
              <!--<el-table-column-->
                <!--fixed="right"-->
                <!--label="操作"-->
               <!--&gt;-->
                <!--<template slot-scope="scope">-->
                  <!--<el-button type="primary" size="small"    @click="MaintainAssert(scope.row)">申请维修</el-button>-->
                <!--</template>-->
                <!--&lt;!&ndash;<template slot-scope="scope">&ndash;&gt;-->
                <!--&lt;!&ndash;<el-button v-if="scope.row.edit" type="success" size="small" icon="el-icon-circle-check-outline" @click="applyAssert(scope.row)"></el-button>&ndash;&gt;-->
                <!--&lt;!&ndash;<el-button v-else type="primary" size="small" icon="el-icon-edit" @click="scope.row.edit=!scope.row.edit">申请资产</el-button>&ndash;&gt;-->
                <!--&lt;!&ndash;</template>&ndash;&gt;-->
              <!--</el-table-column>-->
            <!--</el-table>-->
          <!--</div>-->
          <!--<span slot="footer" class="dialog-footer">-->
                <!--<el-button @click="applyASee = false">取 消</el-button>-->
            <!--&lt;!&ndash;<el-button type="primary" @click="updateAsset()">提交</el-button>&ndash;&gt;-->
          <!--</span>-->
        <!--</el-dialog>-->

        <!--<el-button type="primary" @click="disposeApproval" v-if="dA">处置员批复</el-button>-->
        <!--<el-dialog-->
          <!--title="处置员批复"-->
          <!--:visible.sync="dispose"-->
          <!--width="71%"-->
          <!--:before-close="handleClose">-->
          <!--<div>-->
            <!--<el-table :data="disposeList"  style="width: auto"   border stripe  >-->
              <!--<el-table-column-->
                <!--label="序号"-->
                <!--width="50"-->
                <!--type="index"-->
              <!--&gt;-->
                <!--<template slot-scope="scope">-->
                  <!--{{(currentPage - 1) * pagesize + scope.$index + 1 }}-->
                <!--</template>-->
              <!--</el-table-column>-->
              <!--<el-table-column property="aid" label="资产分类代码" ></el-table-column>-->
              <!--<el-table-column property="assetname" label="资产名称" ></el-table-column>-->
              <!--<el-table-column property="operation" label="操作说明" ></el-table-column>-->
              <!--<el-table-column property="quantity" label="数量" ></el-table-column>-->
              <!--<el-table-column property="uid" label="申请人" ></el-table-column>-->

              <!--<el-table-column property="operation_time" label="操作日期" ></el-table-column>-->
              <!--<el-table-column property="approval_content" label="维修员操作说明" ></el-table-column>-->
              <!--<el-table-column property="fix_operation" label="您的意见" width="150" fixed="right">-->
                <!--<template slot-scope="scope">-->

                  <!--<el-input-->
                    <!--type="textarea"-->
                    <!--:rows="2"-->
                    <!--placeholder="请输入内容"-->
                    <!--v-model="scope.row.fix_operation">-->
                  <!--</el-input>-->


                <!--</template>-->
              <!--</el-table-column>-->
              <!--&lt;!&ndash;<el-table-column property="approval_content" label="您的意见" width="150" fixed="right">&ndash;&gt;-->
                <!--&lt;!&ndash;<template slot-scope="scope">&ndash;&gt;-->

                  <!--&lt;!&ndash;<el-input&ndash;&gt;-->
                    <!--&lt;!&ndash;type="textarea"&ndash;&gt;-->
                    <!--&lt;!&ndash;:rows="2"&ndash;&gt;-->
                    <!--&lt;!&ndash;placeholder="请输入内容"&ndash;&gt;-->
                    <!--&lt;!&ndash;v-model="scope.row.approval_content">&ndash;&gt;-->
                  <!--&lt;!&ndash;</el-input>&ndash;&gt;-->


                <!--&lt;!&ndash;</template>&ndash;&gt;-->
              <!--&lt;!&ndash;</el-table-column>&ndash;&gt;-->
              <!--&lt;!&ndash;<el-table-column&ndash;&gt;-->
                <!--&lt;!&ndash;fixed="right"&ndash;&gt;-->
                <!--&lt;!&ndash;label="是否生效"&ndash;&gt;-->
                <!--&lt;!&ndash;width="150">&ndash;&gt;-->
                <!--&lt;!&ndash;<template slot-scope="scope">&ndash;&gt;-->

                  <!--&lt;!&ndash;<el-select v-model="scope.row.value" placeholder="请选择">&ndash;&gt;-->
                    <!--&lt;!&ndash;<el-option&ndash;&gt;-->
                      <!--&lt;!&ndash;v-for="item in option8"&ndash;&gt;-->
                      <!--&lt;!&ndash;:key="item.value"&ndash;&gt;-->
                      <!--&lt;!&ndash;:label="item.label"&ndash;&gt;-->
                      <!--&lt;!&ndash;:value="item.value">&ndash;&gt;-->
                    <!--&lt;!&ndash;</el-option>&ndash;&gt;-->
                  <!--&lt;!&ndash;</el-select>&ndash;&gt;-->
                <!--&lt;!&ndash;</template>&ndash;&gt;-->
              <!--&lt;!&ndash;</el-table-column>&ndash;&gt;-->
              <!--<el-table-column-->
                <!--fixed="right"-->
                <!--label="是否生效"-->
                <!--&gt;-->
                <!--<template slot-scope="scope">-->
                  <!--<el-button type="primary" size="small" @click="disposeApprovalSubmit(scop.row)">是</el-button>-->

                  <!--<el-button type="danger" size="small" @click="NodisposeApprovalSubmit(scope.row)" >否</el-button>-->
                <!--</template>-->
              <!--</el-table-column>-->
            <!--</el-table>-->
          <!--</div>-->
          <!--<span slot="footer" class="dialog-footer">-->
                <!--<el-button @click="dispose = false">取 消</el-button>-->
            <!--&lt;!&ndash;<el-button type="primary" @click="updateAsset()">提交</el-button>&ndash;&gt;-->
          <!--</span>-->
        <!--</el-dialog>-->
        <el-badge :value="ListLengh" class="item">
          <el-button type="primary" @click="requestApproval" v-if="rA">请求批复管理</el-button>
        </el-badge>

        <el-dialog
          title="资产请求批复"
          :visible.sync="requestAppro"
          width="71%"
          :before-close="handleClose">
          <div>
            <el-table :data="SeeList"  style="width: auto"   border stripe >
              <el-table-column
                label="序号"
                width="50"
                type="index"
              >
                <template slot-scope="scope">
                  {{(currentPage - 1) * pagesize + scope.$index + 1 }}
                </template>
              </el-table-column>
              <!--<el-table-column  label="资产代码" >-->
                <!--<template slot-scope="scope">-->
                  <!--<span>{{scope.row.interact.aid}}</span>-->
                <!--</template>-->
              <!--</el-table-column>-->
              <el-table-column  label="资产名称" >
                <template slot-scope="scope">
                  <span>{{scope.row.interact.assetname}}</span>
                </template>
              </el-table-column>
              <el-table-column  label="操作说明" >
                <template slot-scope="scope">
                  <span>{{scope.row.interact.operation}}</span>
                </template>
              </el-table-column>
              <el-table-column  label="数量" >
                <template slot-scope="scope">
                  <span>{{scope.row.interact.quantity}}</span>
                </template>
              </el-table-column>
              <el-table-column  label="申请人" >
                <template slot-scope="scope">
                  <span>{{scope.row.uidName}}</span>
                </template>
              </el-table-column>

              <el-table-column  label="操作时间" >
                <template slot-scope="scope">
                  <span>{{scope.row.interact.operationTime}}</span>
                </template>
              </el-table-column>
              <el-table-column property="approval_content" label="您的意见"  fixed="right">
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
                width="150px"
                >
                <template slot-scope="scope">
                  <el-button type="primary" size="small" @click="disposeApprovalbutton(scope.row)">是</el-button>

                  <el-button type="danger" size="small" @click="NodisposeApprovalbutton(scope.row)" >否</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <span slot="footer" class="dialog-footer">
                <el-button @click="closebef">关闭</el-button>
            <!--<el-button type="primary" @click="updateAsset()">提交</el-button>-->
          </span>
        </el-dialog>
        <!--<el-badge :value="ListLengh2" class="item" :max="99">-->
          <!--<el-button type="primary" @click="returnApproval" v-if="rAl" style="margin-left: 20px" >资产归还批复</el-button>-->
        <!--</el-badge>-->

        <!--<el-button type="primary" @click="FindAll" v-if="FindAll1" style="margin-left: 100px">查看全部</el-button>-->

        <!--<el-dialog-->
          <!--title="资产归还批复"-->
          <!--:visible.sync="returnAppro"-->
          <!--width="71%"-->
          <!--:before-close="handleClose">-->
          <!--<div>-->
            <!--<el-table :data="returnList"  style="width: auto"   border stripe >-->
              <!--<el-table-column-->
                <!--label="序号"-->
                <!--width="50"-->
                <!--type="index"-->
              <!--&gt;-->
                <!--<template slot-scope="scope">-->
                  <!--{{(currentPage - 1) * pagesize + scope.$index + 1 }}-->
                <!--</template>-->
              <!--</el-table-column>-->
              <!--<el-table-column  label="资产代码" >-->
                <!--<template slot-scope="scope">-->
                  <!--<span>{{scope.row.interact.aid}}</span>-->
                <!--</template>-->
              <!--</el-table-column>-->
              <!--<el-table-column  label="资产名称" >-->
                <!--<template slot-scope="scope">-->
                  <!--<span>{{scope.row.interact.assetname}}</span>-->
                <!--</template>-->
              <!--</el-table-column>-->
              <!--<el-table-column  label="操作说明" >-->
                <!--<template slot-scope="scope">-->
                  <!--<span>{{scope.row.interact.operation}}</span>-->
                <!--</template>-->
              <!--</el-table-column>-->
              <!--<el-table-column  label="数量" >-->
                <!--<template slot-scope="scope">-->
                  <!--<span>{{scope.row.interact.quantity}}</span>-->
                <!--</template>-->
              <!--</el-table-column>-->
              <!--<el-table-column  label="申请人" >-->
                <!--<template slot-scope="scope">-->
                  <!--<span>{{scope.row.uidName}}</span>-->
                <!--</template>-->
              <!--</el-table-column>-->

              <!--<el-table-column  label="操作时间" >-->
                <!--<template slot-scope="scope">-->
                  <!--<span>{{scope.row.interact.operationTime}}</span>-->
                <!--</template>-->
              <!--</el-table-column>-->
              <!--<el-table-column property="approval_content" label="您的意见"  fixed="right">-->
                <!--<template slot-scope="scope">-->

                  <!--<el-input-->
                    <!--type="textarea"-->
                    <!--:rows="2"-->
                    <!--placeholder="请输入内容"-->
                    <!--v-model="scope.row.approval_content">-->
                  <!--</el-input>-->


                <!--</template>-->
              <!--</el-table-column>-->
              <!--&lt;!&ndash;<el-table-column&ndash;&gt;-->
                <!--&lt;!&ndash;fixed="right"&ndash;&gt;-->
                <!--&lt;!&ndash;label="是否生效"&ndash;&gt;-->
                <!--&lt;!&ndash;width="150">&ndash;&gt;-->
                <!--&lt;!&ndash;<template slot-scope="scope">&ndash;&gt;-->

                  <!--&lt;!&ndash;<el-select v-model="scope.row.value" placeholder="请选择">&ndash;&gt;-->
                    <!--&lt;!&ndash;<el-option&ndash;&gt;-->
                      <!--&lt;!&ndash;v-for="item in option8"&ndash;&gt;-->
                      <!--&lt;!&ndash;:key="item.value"&ndash;&gt;-->
                      <!--&lt;!&ndash;:label="item.label"&ndash;&gt;-->
                      <!--&lt;!&ndash;:value="item.value">&ndash;&gt;-->
                    <!--&lt;!&ndash;</el-option>&ndash;&gt;-->
                  <!--&lt;!&ndash;</el-select>&ndash;&gt;-->
                <!--&lt;!&ndash;</template>&ndash;&gt;-->
              <!--&lt;!&ndash;</el-table-column>&ndash;&gt;-->
              <!--<el-table-column-->
                <!--fixed="right"-->
                <!--label="是否生效"-->
                <!--width="150px"-->
                <!--&gt;-->
                <!--<template slot-scope="scope">-->
                  <!--<el-button type="primary" size="small" @click="returnApprobutton(scope.row)">是</el-button>-->

                  <!--<el-button type="danger" size="small" @click="NoreturnApprobutton(scope.row)" >否</el-button>-->
                <!--</template>-->
              <!--</el-table-column>-->
            <!--</el-table>-->
          <!--</div>-->
          <!--<span slot="footer" class="dialog-footer">-->
                <!--<el-button @click="returnAppro = false">取 消</el-button>-->
            <!--&lt;!&ndash;<el-button type="primary" @click="updateAsset()">提交</el-button>&ndash;&gt;-->
          <!--</span>-->
        <!--</el-dialog>-->
        <!--<el-button type="primary" @click="maintainApproval" v-if="mA">维修批复</el-button>-->
        <!--<el-dialog-->
          <!--title="维修批复"-->
          <!--:visible.sync="maintainAppro"-->
          <!--width="71%"-->
          <!--:before-close="handleClose">-->
          <!--<div>-->
            <!--<el-table :data="maintainList"  style="width: auto"   border stripe >-->
              <!--<el-table-column-->
                <!--label="序号"-->
                <!--width="50"-->
                <!--type="index"-->
              <!--&gt;-->
                <!--<template slot-scope="scope">-->
                  <!--{{(currentPage - 1) * pagesize + scope.$index + 1 }}-->
                <!--</template>-->
              <!--</el-table-column>-->
              <!--<el-table-column property="aid" label="资产分类代码" width="150"></el-table-column>-->
              <!--&lt;!&ndash;<el-table-column property="asset_name" label="资产名称" width="150"></el-table-column>&ndash;&gt;-->
              <!--<el-table-column property="operation" label="操作说明" width="150"></el-table-column>-->
              <!--<el-table-column property="quantity" label="数量" width="150"></el-table-column>-->
              <!--<el-table-column property="uid" label="维修人" width="150"></el-table-column>-->

              <!--<el-table-column property="operation_time" label="操作时间" width="150"></el-table-column>-->
              <!--&lt;!&ndash;<el-table-column property="approval_content" label="维修员操作说明" width="150"></el-table-column>&ndash;&gt;-->
              <!--<el-table-column property="approval_content" label="您的意见" width="150" fixed="right">-->
              <!--<template slot-scope="scope">-->

              <!--<el-input-->
              <!--type="textarea"-->
              <!--:rows="2"-->
              <!--placeholder="请输入内容"-->
              <!--v-model="scope.row.approval_content">-->
              <!--</el-input>-->


              <!--</template>-->
              <!--</el-table-column>-->
              <!--&lt;!&ndash;<el-table-column property="fix_operation" label="您的意见" width="150" fixed="right">&ndash;&gt;-->
                <!--&lt;!&ndash;<template slot-scope="scope">&ndash;&gt;-->

                  <!--&lt;!&ndash;<el-input&ndash;&gt;-->
                    <!--&lt;!&ndash;type="textarea"&ndash;&gt;-->
                    <!--&lt;!&ndash;:rows="2"&ndash;&gt;-->
                    <!--&lt;!&ndash;placeholder="请输入内容"&ndash;&gt;-->
                    <!--&lt;!&ndash;v-model="scope.row.fix_operation">&ndash;&gt;-->
                  <!--&lt;!&ndash;</el-input>&ndash;&gt;-->


                <!--&lt;!&ndash;</template>&ndash;&gt;-->
              <!--&lt;!&ndash;</el-table-column>&ndash;&gt;-->
              <!--&lt;!&ndash;<el-table-column property="approval_content" label="您的意见" width="150" fixed="right">&ndash;&gt;-->
                <!--&lt;!&ndash;<template slot-scope="scope">&ndash;&gt;-->

                  <!--&lt;!&ndash;<el-input&ndash;&gt;-->
                    <!--&lt;!&ndash;type="textarea"&ndash;&gt;-->
                    <!--&lt;!&ndash;:rows="2"&ndash;&gt;-->
                    <!--&lt;!&ndash;placeholder="请输入内容"&ndash;&gt;-->
                    <!--&lt;!&ndash;v-model="scope.row.approval_content">&ndash;&gt;-->
                  <!--&lt;!&ndash;</el-input>&ndash;&gt;-->


                <!--&lt;!&ndash;</template>&ndash;&gt;-->
              <!--&lt;!&ndash;</el-table-column>&ndash;&gt;-->

              <!--&lt;!&ndash;<el-table-column&ndash;&gt;-->
                <!--&lt;!&ndash;fixed="right"&ndash;&gt;-->
                <!--&lt;!&ndash;label="是否生效"&ndash;&gt;-->
                <!--&lt;!&ndash;width="150">&ndash;&gt;-->
                <!--&lt;!&ndash;<template slot-scope="scope">&ndash;&gt;-->

                  <!--&lt;!&ndash;<el-select v-model="scope.row.value" placeholder="请选择">&ndash;&gt;-->
                    <!--&lt;!&ndash;<el-option&ndash;&gt;-->
                      <!--&lt;!&ndash;v-for="item in option8"&ndash;&gt;-->
                      <!--&lt;!&ndash;:key="item.value"&ndash;&gt;-->
                      <!--&lt;!&ndash;:label="item.label"&ndash;&gt;-->
                      <!--&lt;!&ndash;:value="item.value">&ndash;&gt;-->
                    <!--&lt;!&ndash;</el-option>&ndash;&gt;-->
                  <!--&lt;!&ndash;</el-select>&ndash;&gt;-->
                <!--&lt;!&ndash;</template>&ndash;&gt;-->
              <!--&lt;!&ndash;</el-table-column>&ndash;&gt;-->
              <!--<el-table-column-->
                <!--fixed="right"-->
                <!--label="是否生效"-->
                <!--width="150">-->
                <!--&lt;!&ndash;<template slot-scope="scope">&ndash;&gt;-->
                  <!--&lt;!&ndash;<el-button type="primary" size="small" @click="maintainApprovalbutton(scope.row)">提交</el-button>&ndash;&gt;-->

                  <!--&lt;!&ndash;<el-button type="danger" size="small" @click="disposeApprovalclear(scope.row)" >清空</el-button>&ndash;&gt;-->
                <!--&lt;!&ndash;</template>&ndash;&gt;-->
                <!--<template slot-scope="scope">-->
                  <!--<el-button type="primary" size="small" @click="maintainApprovalbutton(scope.row)">是</el-button>-->

                  <!--<el-button type="danger" size="small" @click="NomaintainApprovalbutton(scope.row)" >否</el-button>-->
                <!--</template>-->
              <!--</el-table-column>-->
            <!--</el-table>-->
          <!--</div>-->
          <!--<span slot="footer" class="dialog-footer">-->
                <!--<el-button @click="maintainAppro = false">取 消</el-button>-->
            <!--&lt;!&ndash;<el-button type="primary" @click="updateAsset()">提交</el-button>&ndash;&gt;-->
          <!--</span>-->
        <!--</el-dialog>-->
        <!--<Maintain v-if="mA"></Maintain>-->

        <!--<div v-if="mA">-->
          <!--<el-row :gutter="24">-->
            <!--<el-col :span="12">-->
              <!--<el-card class="box-card">-->
                <!--<div slot="header" class="clearfix">-->
                  <!--<span>批复通过的资产信息</span>-->
                <!--</div>-->
                <!--<div>-->
                  <!--<el-table :data="List1">-->
                    <!--<el-table-column prop="assetname" label="资产名称">-->
                    <!--</el-table-column>-->
                    <!--<el-table-column prop="operationTime" label="操作时间"></el-table-column>-->
                    <!--<el-table-column label="管理员意见">-->
                      <!--<template slot-scope="scope">-->
                        <!--<el-tag type="success">-->
                          <!--{{scope.row.approvalContent}}-->
                        <!--</el-tag>-->
                      <!--</template>-->
                    <!--</el-table-column>-->
                  <!--</el-table>-->
                <!--</div>-->
              <!--</el-card>-->
            <!--</el-col>-->
            <!--<el-col :span="12">-->
              <!--<el-card class="box-card">-->
                <!--<div slot="header" class="clearfix">-->
                  <!--<span>批复未通过</span>-->
                <!--</div>-->
                <!--<el-table :data="List2">-->
                  <!--<el-table-column prop="assetname" label="资产名称">-->
                  <!--</el-table-column>-->
                  <!--<el-table-column prop="operationTime" label="操作时间"></el-table-column>-->
                  <!--<el-table-column label="管理员意见">-->
                    <!--<template slot-scope="scope">-->
                      <!--<el-tag type="danger">-->
                        <!--{{scope.row.approvalContent}}-->
                      <!--</el-tag>-->
                    <!--</template>-->
                  <!--</el-table-column>-->
                <!--</el-table>-->
              <!--</el-card>-->
            <!--</el-col>-->
          <!--</el-row>-->
        <!--</div>-->
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click="returnHome"  style="margin-left: 100px">返回主页</el-button>
      </el-col>

    </el-row>

    <!--<el-row style="margin-top: 10px" v-if="rA">-->
      <!--<el-col>-->
        <!--<el-table :data="assetNameList.slice((currentPage-1)*pagesize,currentPage*pagesize)"  style="width: auto" id="print"  border @header-click="sortSS" :row-class-name="tableRowClassName" class="tables" :header-cell-style="backgroundbutton"  >-->
          <!--<el-table-column-->
            <!--label="序号"-->
            <!--width="50"-->
            <!--type="index"-->
            <!--fixed="left"-->
          <!--&gt;-->
            <!--<template slot-scope="scope">-->
              <!--{{(currentPage - 1) * pagesize + scope.$index + 1 }}-->
            <!--</template>-->
          <!--</el-table-column>-->
          <!--<el-table-column property="type_num" label="资产分类代码" width="150"  fixed="left">-->
            <!--<template slot="header" slot-scope="scope">-->
              <!--<span>资产分类代码</span>-->
              <!--<i class="ymq-icondown-circle"></i>-->
            <!--</template>-->
          <!--</el-table-column>-->
          <!--<el-table-column property="asset_name" label="资产名称" width="150" fixed="left">-->
            <!--<template slot="header" slot-scope="scope">-->
              <!--<span>资产名称</span>-->
              <!--<i class="ymq-icondown-circle"></i>-->
            <!--</template>-->
          <!--</el-table-column>-->
          <!--<el-table-column label="教师" width="150" v-if="teaShow" fixed="left">-->
            <!--<template slot-scope="scope">-->
            <!--{{assetName}}-->
            <!--</template>-->
          <!--</el-table-column>-->

          <!--<el-table-column property="attribute" label="使用属性" width="150">-->
            <!--<template slot="header" slot-scope="scope">-->
              <!--<span>使用属性</span>-->
              <!--<i class="ymq-icondown-circle"></i>-->
            <!--</template>-->
          <!--</el-table-column>-->
          <!--&lt;!&ndash;<el-table-column property="brand" label="品牌" width="150"></el-table-column>&ndash;&gt;-->
          <!--<el-table-column property="quantity" label="数量" width="150" >-->
            <!--<template slot="header" slot-scope="scope">-->
              <!--<span>数量</span>-->
              <!--<i class="ymq-icondown-circle"></i>-->
            <!--</template>-->
          <!--</el-table-column>-->
          <!--<el-table-column property="application" label="使用方向" width="150">-->
            <!--<template slot="header" slot-scope="scope">-->
              <!--<span>使用方向</span>-->
              <!--<i class="ymq-icondown-circle"></i>-->
            <!--</template>-->
          <!--</el-table-column>-->
          <!--<el-table-column property="in_use" label="使用状态" width="150">-->
            <!--<template slot="header" slot-scope="scope">-->
              <!--<span>使用状态</span>-->
              <!--<i class="ymq-icondown-circle"></i>-->
            <!--</template>-->
          <!--</el-table-column>-->
          <!--<el-table-column property="measurement" label="计量单位" width="150">-->
            <!--<template slot="header" slot-scope="scope">-->
              <!--<span>计量单位</span>-->
              <!--<i class="ymq-icondown-circle"></i>-->
            <!--</template>-->
          <!--</el-table-column>-->
          <!--<el-table-column property="accessing" label="获取方式" width="150">-->
            <!--<template slot="header" slot-scope="scope">-->
              <!--<span>获取方式</span>-->
              <!--<i class="ymq-icondown-circle"></i>-->
            <!--</template>-->
          <!--</el-table-column>-->
          <!--<el-table-column property="assets_type_name" label="资产分类名称" width="150">-->
            <!--<template slot="header" slot-scope="scope">-->
              <!--<span>资产分类名称</span>-->
              <!--<i class="ymq-icondown-circle"></i>-->
            <!--</template>-->
          <!--</el-table-column>-->
          <!--<el-table-column property="asset_status" label="当前状态" width="150">-->
            <!--<template slot="header" slot-scope="scope">-->
              <!--<span>当前状态</span>-->
              <!--<i class="ymq-icondown-circle"></i>-->
            <!--</template>-->
          <!--</el-table-column>-->
          <!--<el-table-column property="type_of_value" label="价值类型" width="150">-->
            <!--<template slot="header" slot-scope="scope">-->
              <!--<span>价值类型</span>-->
              <!--<i class="ymq-icondown-circle"></i>-->
            <!--</template>-->
          <!--</el-table-column>-->
          <!--&lt;!&ndash;<el-table-column property="financial_funds" label="财政经费" width="150"></el-table-column>&ndash;&gt;-->
          <!--&lt;!&ndash;<el-table-column property="non_financial_funds" label="非财政经费" width="150"></el-table-column>&ndash;&gt;-->
          <!--<el-table-column property="net_worth" label="净值" width="150">-->
            <!--<template slot="header" slot-scope="scope">-->
              <!--<span>净值</span>-->
              <!--<i class="ymq-icondown-circle"></i>-->
            <!--</template>-->
          <!--</el-table-column>-->
          <!--<el-table-column property="asset_value" label="价值" width="150">-->
            <!--<template slot="header" slot-scope="scope">-->
              <!--<span>价值</span>-->
              <!--<i class="ymq-icondown-circle"></i>-->
            <!--</template>-->
          <!--</el-table-column>-->
          <!--<el-table-column property="total_depreciation" label="累计折旧" width="150">-->
            <!--<template slot="header" slot-scope="scope">-->
              <!--<span>累计折旧</span>-->
              <!--<i class="ymq-icondown-circle"></i>-->
            <!--</template>-->
          <!--</el-table-column>-->
          <!--<el-table-column property="depreciation" label="折旧" width="150">-->
            <!--<template slot="header" slot-scope="scope">-->
              <!--<span>折旧</span>-->
              <!--<i class="ymq-icondown-circle"></i>-->
            <!--</template>-->
          <!--</el-table-column>-->
          <!--<el-table-column property="accounting_voucher_num" label="会计号" width="150">-->
            <!--<template slot="header" slot-scope="scope">-->
              <!--<span>会计号</span>-->
              <!--<i class="ymq-icondown-circle"></i>-->
            <!--</template>-->
          <!--</el-table-column>-->
          <!--<el-table-column property="brand_source" label="品牌 | 生产厂家" width="150">-->
            <!--<template slot="header" slot-scope="scope">-->
              <!--<span>品牌 | 生产厂家</span>-->
              <!--<i class="ymq-icondown-circle"></i>-->
            <!--</template>-->
          <!--</el-table-column>-->
          <!--&lt;!&ndash;<el-table-column property="compile" label="编制情况" width="150"></el-table-column>&ndash;&gt;-->
          <!--&lt;!&ndash;<el-table-column property="form_of_entry_recording" label="入账形式" width="150"></el-table-column>&ndash;&gt;-->
          <!--&lt;!&ndash;<el-table-column property="xszzc" label="行驶证注册" width="150"></el-table-column>&ndash;&gt;-->
          <!--<el-table-column property="supervise_department" label="监管部门" width="150">-->
            <!--<template slot="header" slot-scope="scope">-->
              <!--<span>监管部门</span>-->
              <!--<i class="ymq-icondown-circle"></i>-->
            <!--</template>-->
          <!--</el-table-column>-->
          <!--<el-table-column property="supervisor" label="监管负责人" width="150">-->
            <!--<template slot="header" slot-scope="scope">-->
              <!--<span>监管负责人</span>-->
              <!--<i class="ymq-icondown-circle"></i>-->
            <!--</template>-->
          <!--</el-table-column>-->
          <!--<el-table-column property="asset_usage" label="设备用途" width="150">-->
            <!--<template slot="header" slot-scope="scope">-->
              <!--<span>设备用途</span>-->
              <!--<i class="ymq-icondown-circle"></i>-->
            <!--</template>-->
          <!--</el-table-column>-->
          <!--&lt;!&ndash;<el-table-column property="material" label="材料" width="150"></el-table-column>&ndash;&gt;-->
          <!--<el-table-column property="specification" label="规格型号" width="150">-->
            <!--<template slot="header" slot-scope="scope">-->
              <!--<span>规格型号</span>-->
              <!--<i class="ymq-icondown-circle"></i>-->
            <!--</template>-->
          <!--</el-table-column>-->
          <!--&lt;!&ndash;<el-table-column property="size" label="大小" width="150"></el-table-column>&ndash;&gt;-->
          <!--<el-table-column property="obtain_date" label="取得日期" width="150">-->
            <!--<template slot="header" slot-scope="scope">-->
              <!--<span>取得日期</span>-->
              <!--<i class="ymq-icondown-circle"></i>-->
            <!--</template>-->
          <!--</el-table-column>-->
          <!--<el-table-column property="transaction_date" label="入账日期" width="150">-->
            <!--<template slot="header" slot-scope="scope">-->
              <!--<span>入账日期</span>-->
              <!--<i class="ymq-icondown-circle"></i>-->
            <!--</template>-->
          <!--</el-table-column>-->
          <!--<el-table-column property="limit_year" label="预使用年限" width="150">-->
            <!--<template slot="header" slot-scope="scope">-->
              <!--<span>预使用年限</span>-->
              <!--<i class="ymq-icondown-circle"></i>-->
            <!--</template>-->
          <!--</el-table-column>-->

        <!--</el-table>-->
      <!--</el-col>-->
    <!--</el-row>-->
    <!--<el-row class="page" v-if="rA">-->
      <!--<el-col>-->
        <!--<el-pagination-->
          <!--@size-change="handleSizeChange"-->
          <!--@current-change="handleCurrentChange"-->
          <!--:current-page="currentPage"-->
          <!--:page-sizes="[10, 20, 50, 100]"-->
          <!--:page-size="pagesize"-->
          <!--layout="total, sizes, prev, pager, next, jumper"-->
          <!--background-->
          <!--:total="assetNameList.length">-->
        <!--</el-pagination>-->
      <!--</el-col>-->
    <!--</el-row>-->

    <!--<div class="line" v-if="rA"></div>-->

    <div v-if="rA" style="margin-top: 30px">
      <el-row :gutter="24">
        <el-col :span="12">
          <el-card class="box-card" >
            <div slot="header" class="clearfix">
              <span>批复通过的资产信息</span>
            </div>
            <div style="height: 400px">
              <el-scrollbar style="height: 100%">
                <div>
                  <el-table :data="List1">
                    <el-table-column type="expand">
                      <template slot-scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                          <el-form-item label="资产名称">
                            <span>{{ props.row.interact.assetname }}</span>
                          </el-form-item>
                          <!--<el-form-item label="资产 ID">-->
                          <!--<span>{{ props.row.interact.aid }}</span>-->
                          <!--</el-form-item>-->
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
                          <el-form-item label="管理员意见">
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
                    <el-table-column  label="资产名称">
                      <template slot-scope="scope">
                        <span>{{scope.row.interact.assetname}}</span>
                      </template>
                    </el-table-column>
                    <el-table-column  label="操作时间">
                      <template slot-scope="scope">
                        <span>{{scope.row.interact.operationTime}}</span>
                      </template>
                    </el-table-column>
                    <el-table-column label="管理员意见">
                      <template slot-scope="scope">
                        <el-tag type="success">
                          {{scope.row.interact.approvalContent}}
                        </el-tag>
                      </template>
                    </el-table-column>
                  </el-table>
                </div>
              </el-scrollbar>
            </div>


          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>批复未通过</span>
            </div>
            <div style="height: 400px;">
              <el-scrollbar style="height: 100%">
                <el-table :data="List2">
                  <el-table-column type="expand">
                    <template slot-scope="props">
                      <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="资产名称">
                          <span>{{ props.row.interact.assetname }}</span>
                        </el-form-item>
                        <!--<el-form-item label="资产 ID">-->
                        <!--<span>{{ props.row.interact.aid }}</span>-->
                        <!--</el-form-item>-->
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
                        <el-form-item label="管理员意见">
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
                  <el-table-column  label="资产名称">
                    <template slot-scope="scope">
                      <span>{{scope.row.interact.assetname}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column  label="操作时间">
                    <template slot-scope="scope">
                      <span>{{scope.row.interact.operationTime}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="管理员意见">
                    <template slot-scope="scope">
                      <el-tag type="danger">
                        {{scope.row.interact.approvalContent}}
                      </el-tag>
                    </template>
                  </el-table-column>
                </el-table>
              </el-scrollbar>
            </div>

          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  // import Maintain from './Maintain'
  export default {
    // filters: {
    //   statusFilter(status) {
    //     const statusMap = {
    //       published: 'success',
    //       draft: 'info',
    //       // deleted: 'danger'
    //     }
    //     return statusMap[status]
    //   },
    //   typeFilter(type) {
    //     return calendarTypeKeyValue[type]
    //   }
    // },
    inject: ['reload'],
    // components: {
    //   Maintain
    // },
    data() {
      return {
        // sfef: true,
        // applyShow: true,
        // cancelShow: false,
        dispose: false,
        requestAppro: false,
        returnAppro: false,
        maintainAppro: false,
        ListLengh: 0,
        ListLengh2: 0,
        List1: [],
        List2: [],
        List3: [],
        List4: [],
        dA: true,
        rA: true,
        rAl: true,
        mA: true,
        FindAll1: false,
        teaShow: false,
        textarea1:'',
        textarea2:'',
        consume_type: '',
        Assertoperation: '借用',
        Form2: {
          aid: '',
          quantity: '',
          consume_type: '1',
          // obtain_date: '',
          // user: '',
          // quantity: '',
          // textarea1: '',

        },
        Form3: {
          aid:'',
          uid:'',
          operation:'',
          value:'',
          approval_content:'',
          fix_operation: '',
          applyTimes: '',
        },
        SeeList: [],
        ApplyList: [
        //   {
        //   type_num: '',
        //   asset_name: '',
        //   Assertoperation: '',
        //   obtain_date: '',
        //   user: '',
        //   quantity: '',
        //   textarea1: '',
        // }
        ],
        returnList:[],
        maintainList: [],
        disposeList: [],
        token: '',
        RoleShow: true,
        applyASee: false,
        user: '',
        role: '',
        dialogApply: false,
        textareText: '',
        fileName: '',
        excelImportShow: false,
        dialogTableVisible: false,
        show: false,
        assetNameList: [],
        assetName: '',
        assetNum: '',
        currentPage: 1,
        pagesize: 10,
        dialogVisible: false,
        dialogSee: false,
        dialogUpdate: false,
        applySee: false,
        assetNameList1: [],
        columnss: '',
        Form1: {
          type_num: '', /* 资产分类代码*/
          asset_name: '', /* 资产名称*/
          measurement: '', /* 计量单位*/
          in_use: '', /* 使用状态*/
          application: '', /* 使用方向（用途）*/
          accessing: '', /* 获取方式*/
          obtain_date: '', /* 取得日期*/
          transaction_date: '', /* 入账日期*/
          // material: '', /* 材质*/
          specification: '', /* 规格型号*/
          // size: '', /* 大小*/
          asset_usage: '', /* 用法*/
          quantity: '', /* 数量*/
          type_of_value: '', /* 价值类型*/
          asset_value: '', /* 价值*/
          // financial_funds: '', /* 经费来源（财政性资金）*/
          // non_financial_funds: '', /* 经费来源（非财政性资金*/
          net_worth: '', /* 净值*/
          accounting_voucher_num: '', /* 会计凭证号*/
          supervise_department: '', /* 监管部门*/
          supervisor: '', /* 监管负责人*/
          limit_year: '', /* 年限*/
          total_depreciation: '', /* 累计折旧*/
          depreciation: '', /* 折旧*/
          asset_status: '', /* 当前状态*/
          assets_code: '', /* 资产编号（办公设备和专用设备专有）*/
          assets_type_name: '', /* 资产分类名称（办公设备和专用设备专有）*/
          // compile: '', /* 编制情况*/
          // xszzc: '', /* 行驶证注册*/
          // form_of_entry_recording: '', /* 入账形式*/
          brand_source: '', /* 生产厂家*/
          attribute: '', /* 使用属性*/

        },
        option1: [{
          value: '01|办公设备',
          label: '01|办公设备'
        }, {
          value: '02|专用设备',
          label: '02|专用设备'
        }],
        option2: [{
          value: '01|在用',
          label: '01|在用'
        }, {
          value: '02|闲置',
          label: '02|闲置'
        }],
        option3: [{
          value: '01|自用',
          label: '01|自用'
        }, {
          value: '02|公用',
          label: '02|公用'
        }, {
          value: '03|其他',
          label: '03|其他'
        }],
        option4: [{
          value: '01|购置',
          label: '01|购置'
        }, {
          value: '02|捐赠',
          label: '02|捐赠'
        }, {
          value: '03|租借',
          label: '03|租借'
        }, {
          value: '04|置换',
          label: '04|置换'
        }],
        option5: [{
          value: '01|活动',
          label: '01|活动'
        }, {
          value: '02|教学',
          label: '02|教学'
        }],
        option6: [{
          value: '01|原值',
          label: '01|原值'
        }, {
          value: '02|折旧',
          label: '02|折旧'
        }],
        option7: [{
          value: '台',
          label: '台'
        }, {
          value: '个',
          label: '个'
        },{
          value: '把',
          label: '把'
        },{
          value: '副',
          label: '副'
        },{
          value: '只',
          label: '只'
        },{
          value: '件',
          label: '件'
        },{
          value: '套',
          label: '套'
        },{
          value: '本',
          label: '本'
        },{
          value: '张',
          label: '张'
        },{
          value: '面',
          label: '面',
        },{
          value: '架',
          label: '架'
        },{
          value: '块',
          label: '块'
        }],
        option8: [{
          value: '是',
          label: '是'
        }, {
          value: '否',
          label: '否'
        }],
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
        value: '',
        // value1: '是'
      }
    },
    // components: {
    //   // Navbar,
    //   // Sidebar,
    //   // AppMain,
    //   // TagsView,
    // },
    // mixins: [ResizeMixin],
    // created() {
    //   this.getParams();
    // },
    computed: {
      sidebar() {
        return this.$store.state.app.sidebar
      },
      device() {
        return this.$store.state.app.device
      },
      classObj() {
        return {
          hideSidebar: !this.sidebar.opened,
          openSidebar: this.sidebar.opened,
          withoutAnimation: this.sidebar.withoutAnimation,
          mobile: this.device === 'mobile'
        }
      },

    },
    mounted() {
      // this.textareText = localStorage.getItem('changeMsg'); //获取localStorage中存的登录页面传来的参数
      // console.log('获取参数=='+this.textareText);
      // var ss = this.$store.getters.name
      // localStorage.setItem("name", ss)
      // console.log("sdfsf=="+ss)
      this.token = this.$store.getters.token
      console.log("fsf=="+this.token)


      // this.role = this.$store.getters.role
      // this.role = localStorage.getItem('role')
      // console.log("角色=="+this.role)
      // if (this.role==='2'){ //普通教师
      //   this.dA=false;
      //   this.rA=false;
      //   this.rAl=false;
      //   this.mA=false;
      // }
      // if (this.role==='1') { //管理员
      //   this.dA=false;
      //   this.mA=false;
      // }
      // if (this.role==='3') {//维修员
      //   this.dA=false;
      //   this.rA=false;
      //   this.rAl=false;
      //   this.RoleShow=false;
      // }
      // if (this.role==='4') {//处置员
      //   this.rA=false;
      //   this.rAl=false;
      //   this.mA=false;
      //   this.RoleShow=false;
      // }
      //
      // var ss = localStorage.getItem('name')
      // console.log("sdfsf=="+ss)
      // this.user = ss;

      this.getList1();
      this.getList2();
      this.getrequestApproval();
      //this.getreturnApproval()
    },
    methods: {
      // getParams:function(){
      //   eventVue.$on("myFun", function (val) {
      //     console.log("新参数===="+val)
      //     this.textareText=val
      //   })
      // },
      getList1() {
        var url = 'http://58.119.112.13:11001/admin_find_agree_approved_request?token=' + this.token
        this.$axios.get(url).then((res) => {
          this.List1 = res.data.searchList
        })
      },
      getList2() {
        var url = 'http://58.119.112.13:11001/admin_find_disagree_approved_request?token=' + this.token
        this.$axios.get(url).then((res) => {
          this.List2 = res.data.searchList
        })
      },
      returnHome() {
        this.$router.push('/assert/assertApplyIndex')
      },
      handleClose(){
        this.reload()

      },
      handleClick(row) {
        this.dialogUpdate = true;
        this.Form1 = row;

        console.log(row);
      },
      sortSS(column){
        console.log(column.property);
        // var attribute = column.property
        var url = 'http://58.119.112.13:11001/attribute_sort';
        this.$axios.get(url,{
          params: {
            attribute: column.property
          }
        }).then((res) => {
          console.log(res);
          this.assetNameList=res.data.assetList;
          this.columnss=column


        })
      },
      tableRowClassName({row, rowIndex}) {
        if (rowIndex % 2 !==0 ) {
          return 'warning-row';
        } else {
          return '';
        }

      },
      backgroundbutton({row, column, rowIndex, columnIndex}){
        if (column===this.columnss){
          return 'background:#DDDFE1'
        }

      },
      /**s申请资产*/
      // applyAssert(row) {
      //   this.dialogApply=true;
      //   this.Form1=row;
      //
      //   // this.user = localStorage.getItem("name")
      //   // row.edit=false
      //   // this.$message({
      //   //   message: '操作成功',
      //   //   type: 'success'
      //   // })
      //
      //
      // },
      applySubmit(row) {
          this.dialogApply=true;
          this.Form1=row;
      },
      /**取消申请*/
      cancelAssert() {

      },
      /**s申请资产*/
      // applyAssert() {
      //
      //   //var url = 'http://58.119.112.13:11001/request_asset'
      //   var url = 'http://58.119.112.13:11001/request_asset'
      //   // this.Form1=row;
      //   this.$axios.post(url, this.$qs.stringify({
      //     token: this.token,
      //     type_num: this.Form1.type_num,
      //     size: this.Form1.quantity,
      //     operation: this.Assertoperation,
      //     consume_type: '1'
      //   })).then((res) =>{
      //     console.log(res)
      //     if (res.data.errno === 0){
      //       // var p = {
      //       //   type_num: this.Form1.type_num,
      //       //   asset_name: this.Form1.asset_name,
      //       //   Assertoperation: this.Assertoperation,
      //       //   obtain_date: this.Form1.obtain_date,
      //       //   quantity: this.Form1.quantity,
      //       //   user: this.user,
      //       //   textarea1: this.textarea1
      //       // }
      //       // this.ApplyList.push(p)
      //       this.$message.success(res.data.errmsg)
      //       this.dialogApply=false;
      //     }
      //     else {
      //       this.$message.error(res.data.errmsg)
      //       this.dialogApply=false;
      //     }
      //
      //     // this.ApplyList.append('type_num',this.Form1.type_num)
      //     // this.ApplyList.append('size',this.Form1.quantity)
      //     // this.ApplyList.append('operation',this.Assertoperation)
      //     // this.Form2.type_num=this.Form1.type_num;
      //     // this.Form2.asset_name = this.Form1.asset_name
      //     // this.Form2.Assertoperation = this.Assertoperation
      //     // this.Form2.obtain_date=this.Form1.obtain_date
      //     // this.Form2.quantity=this.Form1.quantity
      //     // this.Form2.user=this.user
      //     // this.Form2.textarea1=this.textarea1
      //
      //     // this.Form2.type_num=''
      //     // this.Form2.asset_name='';
      //     // this.Assertoperation=''
      //     // this.Form2.obtain_date=''
      //     // this.Form2.quantity=''
      //     // this.user=''
      //     // this.textarea1=''
      //
      //     console.log(this.ApplyList)
      //     this.dialogApply=false;
      //     // console.log(this.assetNameList)
      //
      //   }).catch((erro) => {
      //     this.$message.error("该资产已经申请过了")
      //     this.dialogApply=false;
      //   })
      // },
      /**查看未批复申请列表*/
      SeeApply() {
        this.applySee=true;
        //var url = 'http://58.119.112.13:11001/find_no_approve_request';
        var url = 'http://58.119.112.13:11001/find_no_approve_request';
        this.$axios.post(url,this.$qs.stringify({
          token: this.token
        })).then((res) => {
          console.log(res)
          this.ApplyList=res.data.info
          console.log(this.ApplyList)
        })
      },
      /**管理员审批提交*/
      disposeApprovalbutton(row){
        console.log('sss')
        console.log(row)
        this.Form3=row;
        var url = ''
        if (row.interact.operation === '借用') {
          url = 'http://58.119.112.13:11001/admin_approval_operation'
        } else if (row.interact.operation === '归还') {
          url = 'http://58.119.112.13:11001/admin_approval_return_asset_request'
        }
        //var url = 'http://58.119.112.13:11001/approval_operation';
        // var url = 'http://58.119.112.13:11001/admin_approval_operation';
        this.$axios.post(url, this.$qs.stringify({
          token: this.token,
          aid: row.interact.aid,
          uid: row.interact.uid,
          operation: row.interact.operation,
          approval_content: row.approval_content,
          apply_times: row.interact.applyTimes,
          // is_effective: this.Form3.value
          is_effective: '是',
          quantity: row.interact.quantity,
          originLabel: row.interact.originLabel


        })).then((res) => {

          this.$message.success(res.data.errmsg)
          this.getrequestApproval()
          // this.reload();
        })
      },
      NodisposeApprovalbutton(row) {
        this.Form3=row;
        //var url = 'http://58.119.112.13:11001/approval_operation';
       var url = 'http://58.119.112.13:11001/admin_approval_operation';
        this.$axios.post(url, this.$qs.stringify({
          token: this.token,
          aid: row.interact.aid,
          uid: row.interact.uid,
          operation: row.interact.operation,
          approval_content: row.approval_content,
          apply_times: row.interact.applyTimes,
          // is_effective: this.Form3.value
          is_effective: '否',
          quantity: row.interact.quantity,
          originLabel: row.interact.originLabel


        })).then((res) => {

          this.$message.success(res.data.errmsg)
          this.getrequestApproval()
          // this.reload();
        })
      },
      closebef() {
        this.requestAppro = false
        // this.SeeeApply()
        // this.SeeApply()
        this.reload()
      },
      /**查看已批复申请列表*/
      SeeeApply() {
        this.applyASee=true;
        //var url = 'http://58.119.112.13:11001/find_approved_request';
        var url = 'http://58.119.112.13:11001/find_approved_request';

        this.$axios.post(url,this.$qs.stringify({
          token: this.token
        })).then((res) => {
          console.log(res)
          this.ApplyList=res.data.info
          console.log(this.ApplyList)
        })
      },

      /**归还申请*/
      // ReturnAssert(row) {
      //   this.Form2=row;
      //   //var url = 'http://58.119.112.13:11001/return_asset'
      //   var url = 'http://58.119.112.13:11001/return_asset'
      //
      //   this.$axios.post(url, this.$qs.stringify({
      //     token: this.token,
      //     aid: this.Form2.aid,
      //     size: this.Form2.quantity,
      //     operation: '归还',
      //     consume_type: this.Form2.consume_type
      //   })).then((res) => {
      //     console.log(res)
      //     this.$message.success(res.data.errmsg)
      //   })
      // },
      // /**申请维修*/
      // MaintainAssert(row){
      //   this.Form2=row;
      //   //var url = 'http://58.119.112.13:11001/fix_asset'
      //   var url = 'http://58.119.112.13:11001/fix_asset'
      //   this.$axios.post(url, this.$qs.stringify({
      //     token: this.token,
      //     aid: this.Form2.aid,
      //     size: this.Form2.quantity,
      //     operation: '维修',
      //     consume_type: this.Form2.consume_type
      //   })).then((res) => {
      //     console.log(res)
      //     this.$message.success(res.data.errmsg)
      //   })
      // },

      /**处置员查看批复*/
      // disposeApproval() {
      //   this.dispose=true
      //   var url = 'http://58.119.112.13:11001/find_disposer_approved_request'
      //   //var url = 'http://58.119.112.13:11001/find_disposer_approved_request'
      //   this.$axios.post(url, this.$qs.stringify({
      //     token: this.token
      //   })).then((res) => {
      //     console.log(res)
      //     this.disposeList = res.data.info
      //   })
      //
      // },
      // /** 处置员处理批复*/
      // disposeApprovalSubmit(row){
      //   this.Form3=row;
      //   var url = 'http://58.119.112.13:11001/disposer';
      //   //var url = 'http://58.119.112.13:11001/disposer';
      //   this.$axios.post(url, this.$qs.stringify({
      //     token: this.token,
      //     aid: this.Form3.aid,
      //     uid: this.Form3.uid,
      //     operation: this.Form3.operation,
      //     fix_operation: this.Form3.fix_operation,
      //     approval_content: this.Form3.approval_content,
      //     // is_effective: this.Form3.value
      //     is_effective:'是'
      //   })).then((res) => {
      //     this.$message.success(res.data.errmsg)
      //     this.reload()
      //   })
      //
      // },
      // NodisposeApprovalSubmit(row){
      //   this.Form3=row;
      //   //var url = 'http://58.119.112.13:11001/disposer';
      //   var url = 'http://58.119.112.13:11001/disposer';
      //   this.$axios.post(url, this.$qs.stringify({
      //     token: this.token,
      //     aid: this.Form3.aid,
      //     uid: this.Form3.uid,
      //     operation: this.Form3.operation,
      //     fix_operation: this.Form3.fix_operation,
      //     approval_content: this.Form3.approval_content,
      //     // is_effective: this.Form3.value
      //     is_effective:'否'
      //   })).then((res) => {
      //     this.$message.success(res.data.errmsg)
      //     this.reload()
      //   })
      //
      // },
      /**清空*/
      disposeApprovalclear(row) {
        row.approval_content=''
        row.value=''

      },
      /**管理员查看待批复的请求*/
      requestApproval() {
        this.requestAppro = true;
        //var url = 'http://58.119.112.13:11001/find_be_approved_request'

      },
      getrequestApproval(){
        var url = 'http://58.119.112.13:11001/find_be_approved_request'
        this.$axios.post(url, this.$qs.stringify({
          token: this.token
        })).then((res) => {
          this.SeeList = res.data.info;
          this.ListLengh = this.SeeList.length
        })
      },
      // FindAll() {
      //   let findAllAssetUrl = "http://58.119.112.13:11001/find_all_asset";
      //   this.$axios.post(findAllAssetUrl, this.$qs.stringify({
      //     information: '788888'
      //   })).then((res) => {
      //     // this.$message.success(res.data.errmsg);
      //     console.log(res.data);
      //     this.assetNameList = res.data.info
      //     this.FindAll1=false;
      //     this.teaShow=false;
      //
      //   }).catch((err) => {
      //     this.$message.error('查询失败');
      //
      //   })
      // },
      /**资产归还批复*/
      returnApproval() {
        this.returnAppro = true;
        //var url = 'http://58.119.112.13:11001/find_return_approved_request'


      },
      getreturnApproval() {
        var url = 'http://58.119.112.13:11001/find_return_approved_request'

        this.$axios.post(url, this.$qs.stringify({
          token: this.token
        })).then((res) => {
          console.log(res)
          this.returnList=res.data.info;
          this.ListLengh2 = this.returnList.length
        })
      },
      /**管理员审核归还批复*/
      returnApprobutton(row) {
        this.Form3=row;
        //var url = 'http://58.119.112.13:11001/return_approval'
        var url = 'http://58.119.112.13:11001/admin_approval_return_asset_request'
        this.$axios.post(url, this.$qs.stringify({
          token: this.token,
          aid: row.interact.aid,
          uid: row.interact.uid,
          operation: row.interact.operation,
          apply_times: row.interact.applyTimes,
          approval_content: row.approval_content,
          // is_effective: this.Form3.value
          is_effective: '是'

        })).then((res) => {
          this.$message.success(res.data.errmsg)
          this.reload()
        })
      },
      NoreturnApprobutton(row) {
        this.Form3=row;
        //var url = 'http://58.119.112.13:11001/return_approval'
        var url = 'http://58.119.112.13:11001/admin_approval_return_asset_request'
        this.$axios.post(url, this.$qs.stringify({
          token: this.token,
          aid: row.interact.aid,
          uid: row.interact.uid,
          operation: row.interact.operation,
          apply_times: row.interact.applyTimes,
          approval_content: row.approval_content,
          // is_effective: this.Form3.value
          is_effective: '否'

        })).then((res) => {
          this.$message.success(res.data.errmsg)
          this.reload()
        })
      },
      /**维修员用户查看归还等待批复的请求*/
      // maintainApproval(){
      //   this.maintainAppro = true;
      //   //var url = 'http://58.119.112.13:11001/find_repair_approved_request'
      //   var url = 'http://58.119.112.13:11001/find_repair_approved_request'
      //   this.$axios.post(url, this.$qs.stringify({
      //     token: this.token
      //   })).then((res) => {
      //     console.log(res)
      //     this.maintainList=res.data.info;
      //   })
      // },
      // /**维修员批复*/
      // maintainApprovalbutton(row){
      //   this.Form3=row;
      //   //var url = 'http://58.119.112.13:11001/fix_operation';
      //   var url = 'http://58.119.112.13:11001/repairman_fix_operation_asset';
      //   this.$axios.post(url, this.$qs.stringify({
      //     token: this.token,
      //     aid: this.Form3.aid,
      //     uid: this.Form3.uid,
      //     operation: this.Form3.operation,
      //     apply_times: this.Form3.applyTimes,
      //     approval_content: this.Form3.approval_content,
      //     // is_effective: this.Form3.value
      //     is_effective: '是'
      //   })).then((res) => {
      //     this.$message.success(res.data.errmsg)
      //     this.reload();
      //   })
      //
      // },
      // NomaintainApprovalbutton(row){
      //   this.Form3=row;
      //   //var url = 'http://58.119.112.13:11001/fix_operation';
      //   var url = 'http://58.119.112.13:11001/repairman_fix_operation_asset';
      //   this.$axios.post(url, this.$qs.stringify({
      //     token: this.token,
      //     aid: this.Form3.aid,
      //     uid: this.Form3.uid,
      //     operation: this.Form3.operation,
      //     apply_times: this.Form3.applyTimes,
      //     approval_content: this.Form3.approval_content,
      //     // is_effective: this.Form3.value
      //     is_effective: '否'
      //   })).then((res) => {
      //     this.$message.success(res.data.errmsg)
      //     this.reload();
      //   })
      //
      // },
      //
      //
      // /**调用find_asset_name_item接口通过向后端传入asset_name来得到assetNum*/
      // getAssetNum(ss) {
      //   console.log('efwffwfewfwefwefwef====='+ss)
      //   // var url = 'http://58.119.112.13:11001/find_asset_name_item';
      //   //var url = 'http://58.119.112.13:11001/find_asset_name_item';
      //   var url = 'http://58.119.112.13:11001/find_username';
      //   this.$axios.get(url,{
      //     params: {
      //       name: ss
      //     }
      //     }).then((res) => {
      //       console.log(res)
      //     this.assetNameList1=res.data.usernameList
      //   })
      //   // this.$axios.post(url, this.$qs.stringify({
      //   //   asset_name_item: this.assetName
      //   // })).then((res) => {
      //   //   console.log(res);
      //   //   this.assetNum = res.data.info[0][0];
      //   //   console.log(this.assetNum)
      //   // })
      // },
      // /**录入资产*/
      //
      // /**查询资产*/
      // FindAsset() {
      //   //var url = 'http://58.119.112.13:11001/find_designated_asset';
      //   var url = 'http://58.119.112.13:11001/find_designated_asset';
      //
      //   this.show = true;
      //   this.$axios.post(url, this.$qs.stringify({
      //     type_num: this.assetNum,
      //     asset_name: this.assetName
      //   })).then((res) => {
      //     this.$message.success(res.data.errmsg);
      //     this.Form1= res.data.info
      //   }).catch((err) => {
      //     this.$message.error("查询失败");
      //     this.reload()
      //   })
      // },
      // /**根据人名查询资产*/
      // FindAssetbyName() {
      //   var url = 'http://58.119.112.13:11001/find_asset_by_username';
      //   this.$axios.get(url,{
      //     params: {
      //       name: this.assetName
      //     }
      //   }).then((res) => {
      //     this.assetNameList=res.data.assetList;
      //     this.$message.success(res.data.errmsg);
      //     this.FindAll1=true;
      //     this.teaShow=true;
      //   })
      // },

      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handleClickOutside() {
        this.$store.dispatch('closeSideBar', { withoutAnimation: false })
      },
      handleSizeChange: function (size) {
        this.pagesize = size;
      },
      handleCurrentChange: function(currentPage){
        this.currentPage = currentPage;
      },
      closeAssetList() {
        this.dialogVisible =false;
        this.reload()

      },
      sortSize(obj1, obj2) { //按大小排序
        let val1 = obj1.quantity;
        let val2 = obj2.quantity;
        return val1 - val2
      },
      // getParams:function(){
      //   // 取到路由带过来的参数
      //   var routerParams = this.$route.query.mess;
      //   // 将数据放在当前组件的数据内
      //   console.log("新传来的参数=="+routerParams);
      //   this.textareText = routerParams;
      // },

    },
    // created() {
    //   this.getParams();
    // },
    // watch: {
    //   '$route': 'getParams'
    // },


  }
</script>

<style rel="stylesheet/scss" lang="scss" >
  @import "../../styles/mixin";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
  .ii {
    width: 300px;
  }
  .page{
    margin-top: 20px;
    margin-bottom: 20px;
  }
  /*.input1 {*/
  /*border: 0px;*/
  /*}*/
  .input2{
    width: 200px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }
  .tables .warning-row {
    background: rgba(240,240,240,0.5);
  }

  .tables .success-row {
    background: #f0f9eb;
  }
  .line{
    border-bottom: 2px solid grey;
    margin-top: 20px;
    margin-bottom: 20px;
  }
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
  .el-scrollbar__wrap{
    overflow-x: hidden;
  }
</style>
