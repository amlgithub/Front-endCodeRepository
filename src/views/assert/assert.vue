<template>
  <div class="app-container">
    <el-row :gutter="5">
      <el-col>
        <el-input v-model="assetNames" clearable class="ii" placeholder="请输入查找的资产名称" @input="FindAsset2"></el-input>
        <el-button type="primary" icon="el-icon-search" @click="FindAsset2" >查询</el-button>
        <!--<el-select v-model="assetName" filterable class="ii" placeholder="请选择要查找的资产名称" :filter-method="getAssetNum">-->
          <!--<el-option-->
            <!--v-for="item in NameList"-->
            <!--:key="item[0]"-->
            <!--:label="item[1]+'(' + item[0] + ')'"-->
            <!--:value="item[0]">-->
          <!--</el-option>-->
        <!--</el-select>-->
        <!--<el-button type="primary" icon="el-icon-search" @click="FindAsset" v-on:click="dialogVisible=true">查询</el-button>-->
        <!--<el-dialog-->
          <!--title="资产信息"-->
          <!--:visible.sync="dialogVisible"-->
          <!--width="50%"-->
          <!--:before-close="closeList"-->
        <!--&gt;-->
          <!--<el-form :model="Form1" ref="formName">-->
            <!--<el-row>-->
              <!--<el-col>-->
                <!--<el-tag type="info" style="font-size: large">固定信息</el-tag>-->
                <!--<div style="margin-top: 10px">-->
                  <!--<span style="font-weight: bold">自然属性：</span>-->
                <!--</div>-->

              <!--</el-col>-->
            <!--</el-row>-->
            <!--<div style="text-align: center">-->
              <!--<el-row :gutter="20">-->
                <!--<el-col :span="8">-->
                  <!--<el-form-item prop="type_num">-->
                    <!--<span>资产编号：</span>-->
                    <!--&lt;!&ndash;<el-input v-model="Form1.type_num" size="medium" class="input1"></el-input>&ndash;&gt;-->
                    <!--<span>{{ Form1.type_num }}</span>-->
                  <!--</el-form-item>-->

                <!--</el-col>-->
                <!--<el-col :span="8">-->
                  <!--<el-form-item prop="asset_name">-->
                    <!--<span>资产名称：</span>-->
                    <!--<span>{{ Form1.asset_name }}</span>-->
                    <!--&lt;!&ndash;<el-input v-model="Form1.asset_name" size="medium"></el-input>&ndash;&gt;-->
                  <!--</el-form-item>-->

                <!--</el-col>-->
                <!--<el-col :span="8">-->
                  <!--<el-form-item prop="attribute">-->
                    <!--<div class="block">-->
                      <!--<span>使用属性：</span>-->
                      <!--<span>{{ Form1.attribute }}</span>-->
                      <!--&lt;!&ndash;<el-select v-model="Form1.attribute" placeholder="请选择" size="medium">&ndash;&gt;-->
                      <!--&lt;!&ndash;<el-option&ndash;&gt;-->
                      <!--&lt;!&ndash;v-for="item in option1"&ndash;&gt;-->
                      <!--&lt;!&ndash;:key="item.value"&ndash;&gt;-->
                      <!--&lt;!&ndash;:label="item.label"&ndash;&gt;-->
                      <!--&lt;!&ndash;:value="item.value">&ndash;&gt;-->
                      <!--&lt;!&ndash;</el-option>&ndash;&gt;-->

                      <!--&lt;!&ndash;</el-select>&ndash;&gt;-->
                    <!--</div>-->
                  <!--</el-form-item>-->
                <!--</el-col>-->

              <!--</el-row>-->
              <!--<el-row :gutter="20">-->
                <!--<el-col :span="8">-->
                  <!--&lt;!&ndash;<el-form-item>&ndash;&gt;-->
                    <!--&lt;!&ndash;<span>品 牌：</span>&ndash;&gt;-->
                    <!--&lt;!&ndash;<span>{{ Form1.brand }}</span>&ndash;&gt;-->
                    <!--&lt;!&ndash;&lt;!&ndash;<el-input v-model="Form1.brand" size="medium"></el-input>&ndash;&gt;&ndash;&gt;-->
                  <!--&lt;!&ndash;</el-form-item>&ndash;&gt;-->

                <!--</el-col>-->
                <!--<el-col :span="8">-->
                  <!--<el-form-item prop="quantity">-->
                    <!--<div>-->
                      <!--<span>数 量：</span>-->
                      <!--<span>{{ Form1.quantity }}</span>-->
                      <!--&lt;!&ndash;<el-input v-model="Form1.quantity" size="medium"></el-input>&ndash;&gt;-->
                    <!--</div>-->
                  <!--</el-form-item>-->

                <!--</el-col>-->
                <!--<el-col :span="8">-->
                  <!--<el-form-item prop="application">-->
                    <!--<div>-->
                      <!--<span>使用方向：</span>-->
                      <!--<span>{{ Form1.application }}</span>-->
                      <!--&lt;!&ndash;<el-select v-model="Form1.application" placeholder="请选择" size="medium">&ndash;&gt;-->
                      <!--&lt;!&ndash;<el-option&ndash;&gt;-->
                      <!--&lt;!&ndash;v-for="item in option3"&ndash;&gt;-->
                      <!--&lt;!&ndash;:key="item.value"&ndash;&gt;-->
                      <!--&lt;!&ndash;:label="item.label"&ndash;&gt;-->
                      <!--&lt;!&ndash;:value="item.value">&ndash;&gt;-->
                      <!--&lt;!&ndash;</el-option>&ndash;&gt;-->
                      <!--&lt;!&ndash;</el-select>&ndash;&gt;-->
                    <!--</div>-->
                  <!--</el-form-item>-->

                <!--</el-col>-->
                <!--<el-col :span="8">-->
                  <!--<el-form-item prop="asset_status">-->
                    <!--<span>当前状态：</span>-->
                    <!--<span>{{ Form1.asset_status }}</span>-->
                  <!--</el-form-item>-->

                <!--</el-col>-->
              <!--</el-row>-->
              <!--<el-row :gutter="20">-->
                <!--<el-col :span="8">-->
                  <!--<el-form-item prop="in_use">-->
                    <!--<span>使用状态：</span>-->
                    <!--<span>{{ Form1.in_use }}</span>-->
                  <!--</el-form-item>-->

                <!--</el-col>-->
                <!--<el-col :span="8">-->
                  <!--<el-form-item prop="measurement">-->
                    <!--<span>计量单位：</span>-->
                    <!--<span>{{ Form1.measurement }}</span>-->
                  <!--</el-form-item>-->

                <!--</el-col>-->
                <!--<el-col :span="8">-->
                  <!--<el-form-item prop="accessing">-->
                    <!--<div>-->
                      <!--<span>获取方式：</span>-->
                      <!--<span>{{ Form1.accessing }}</span>-->
                    <!--</div>-->
                  <!--</el-form-item>-->
                <!--</el-col>-->
              <!--</el-row>-->
              <!--<el-row :gutter="20">-->
                <!--<el-col :span="8">-->
                  <!--<el-form-item prop="assets_type_name">-->
                    <!--<span class="aa">资产分类名称：</span>-->
                    <!--<span>{{ Form1.assets_type_name }}</span>-->
                  <!--</el-form-item>-->

                <!--</el-col>-->


              <!--</el-row>-->
            <!--</div>-->
            <!--<el-row>-->
              <!--<el-col>-->
                <!--<span style="font-weight: bold; text-align: left">价值属性：</span>-->
              <!--</el-col>-->
            <!--</el-row>-->
            <!--<div style="text-align: center">-->

              <!--<el-row :gutter="20">-->
                <!--<el-col :span="8">-->
                  <!--<el-form-item prop="net_worth">-->
                    <!--<span>净值：</span>-->
                    <!--<span>{{ Form1.net_worth }}</span>-->
                  <!--</el-form-item>-->

                <!--</el-col>-->
                <!--<el-col :span="8">-->
                  <!--<el-form-item prop="asset_value">-->
                    <!--<span>原值：</span>-->
                    <!--<span>{{ Form1.asset_value }}</span>-->
                  <!--</el-form-item>-->

                <!--</el-col>-->
                <!--<el-col :span="8">-->
                  <!--<el-form-item prop="total_depreciation">-->
                    <!--<span>累计折旧：</span>-->
                    <!--<span>{{ Form1.total_depreciation }}</span>-->
                  <!--</el-form-item>-->

                <!--</el-col>-->
              <!--</el-row>-->
              <!--<el-row :gutter="20">-->
                <!--<el-col :span="8">-->
                  <!--<el-form-item prop="depreciation">-->
                    <!--<span>折旧：</span>-->
                    <!--<span>{{ Form1.depreciation }}</span>-->
                  <!--</el-form-item>-->

                <!--</el-col>-->
                <!--<el-col :span="8">-->
                  <!--<el-form-item prop="accounting_voucher_num">-->
                    <!--<span class="aa">会计号：</span>-->
                    <!--<span>{{ Form1.accounting_voucher_num }}</span>-->
                  <!--</el-form-item>-->

                <!--</el-col>-->
                <!--<el-col :span="8">-->
                  <!--<el-form-item prop="type_of_value">-->
                    <!--<span>价值类型：</span>-->
                    <!--<span>{{ Form1.type_of_value }}</span>-->
                  <!--</el-form-item>-->

                <!--</el-col>-->

              <!--</el-row>-->
              <!--<el-row :gutter="20">-->
                <!--<el-col :span="8">-->
                  <!--<el-form-item prop="price">-->
                    <!--<span>单价：</span>-->
                    <!--<span>{{ Form1.price }}</span>-->
                  <!--</el-form-item>-->
                <!--</el-col>-->
              <!--</el-row>-->

            <!--</div>-->
            <!--<el-row>-->
              <!--<el-col>-->
                <!--<el-tag type="warning" style="font-size: large">可变信息</el-tag>-->
              <!--</el-col>-->
            <!--</el-row>-->
            <!--<el-row style="margin-top: 10px">-->
              <!--<el-col>-->
                <!--<span style="font-weight: bold">自然属性：</span>-->
              <!--</el-col>-->
            <!--</el-row>-->
            <!--<div style="text-align: center">-->

              <!--<el-row :gutter="20">-->
                <!--<el-col :span="8">-->
                  <!--<el-form-item prop="brand_source">-->
                    <!--<span>品牌 | 生产厂家：</span>-->
                    <!--<span>{{ Form1.brand_source }}</span>-->
                  <!--</el-form-item>-->

                <!--</el-col>-->
                <!--<el-col :span="8">-->
                  <!--<el-form-item prop="supervise_department">-->
                    <!--<span>监管部门：</span>-->
                    <!--<span>{{ Form1.supervise_department }}</span>-->
                  <!--</el-form-item>-->

                <!--</el-col>-->
                <!--<el-col :span="8">-->
                  <!--<el-form-item prop="supervisor">-->
                    <!--<span>监管负责人：</span>-->
                    <!--<span>{{ Form1.supervisor }}</span>-->
                  <!--</el-form-item>-->

                <!--</el-col>-->
              <!--</el-row>-->
              <!--<el-row :gutter="8">-->
                <!--<el-col :span="8">-->
                  <!--<el-form-item prop="asset_usage">-->
                    <!--<span>设备用途：</span>-->
                    <!--<span>{{ Form1.asset_usage }}</span>-->
                  <!--</el-form-item>-->

                <!--</el-col>-->
                <!--&lt;!&ndash;<el-col :span="8">&ndash;&gt;-->
                  <!--&lt;!&ndash;<el-form-item>&ndash;&gt;-->
                    <!--&lt;!&ndash;<span>材质：</span>&ndash;&gt;-->
                    <!--&lt;!&ndash;<span>{{ Form1.material }}</span>&ndash;&gt;-->

                  <!--&lt;!&ndash;</el-form-item>&ndash;&gt;-->

                <!--&lt;!&ndash;</el-col>&ndash;&gt;-->
                <!--<el-col :span="8">-->
                  <!--<el-form-item prop="specification">-->
                    <!--<span>规格型号：</span>-->
                    <!--<span>{{ Form1.specification }}</span>-->
                  <!--</el-form-item>-->

                <!--</el-col>-->
                <!--<el-col :span="8">-->
                  <!--<el-form-item prop="department">-->
                    <!--<span>使用部门：</span>-->
                    <!--<span>{{ Form1.department }}</span>-->
                  <!--</el-form-item>-->

                <!--</el-col>-->
              <!--</el-row>-->
              <!--<el-row :gutter="20">-->
                <!--<el-col :span="8">-->
                  <!--<el-form-item prop="storage_location">-->
                    <!--<span>存放地点：</span>-->
                    <!--<span>{{ Form1.storage_location }}</span>-->
                  <!--</el-form-item>-->

                <!--</el-col>-->
                <!--<el-col :span="8">-->
                  <!--<el-form-item prop="remark">-->
                    <!--<span>备注：</span>-->
                    <!--<span>{{ Form1.remark }}</span>-->
                  <!--</el-form-item>-->

                <!--</el-col>-->
              <!--</el-row>-->
            <!--</div>-->
            <!--<el-row>-->
              <!--<el-col>-->
                <!--<span style="font-weight: bold">时间属性：</span>-->
              <!--</el-col>-->
            <!--</el-row>-->
            <!--<div style="text-align: center">-->
              <!--<el-row :gutter="20">-->
                <!--<el-col :span="8">-->
                  <!--<el-form-item prop="obtain_date">-->
                    <!--<span>取得日期：</span>-->
                    <!--<span>{{ Form1.obtain_date }}</span>-->
                  <!--</el-form-item>-->

                <!--</el-col>-->
                <!--<el-col :span="8">-->
                  <!--<el-form-item prop="transaction_date">-->
                    <!--<span>入账日期：</span>-->
                    <!--<span>{{ Form1.transaction_date }}</span>-->
                  <!--</el-form-item>-->

                <!--</el-col>-->

                <!--<el-col :span="8">-->
                  <!--<el-form-item prop="limit_year">-->
                    <!--<span>预使用年限：</span>-->
                    <!--<span>{{ Form1.limit_year }}</span>-->
                  <!--</el-form-item>-->

                <!--</el-col>-->
              <!--</el-row>-->
            <!--</div>-->
          <!--</el-form>-->
          <!--<span slot="footer" class="dialog-footer">-->
              <!--<el-button @click="closeAssetList('formName')">关闭</el-button>-->
            <!--</span>-->
        <!--</el-dialog>-->

        <el-button type="primary" icon="el-icon-edit" @click="dialogSee=true">添加</el-button>
        <el-dialog
          title="请输入资产信息"
          :visible.sync="dialogSee"
          width="50%"
        >
          <div>
            <el-form :model="Form1" ref="formName" :rules="rules">
              <el-row :gutter="20">
                <el-col :span="8">
                  <el-form-item prop="type_num">
                    <span>资产编号：</span>
                    <el-input v-model="Form1.type_num" placeholder="请输入内容" shadow="never" class="input2"></el-input>
                  </el-form-item>

                </el-col>
                <el-col :span="8">
                  <el-form-item prop="asset_name">
                    <span>资产名称：</span>
                    <el-input v-model="Form1.asset_name" placeholder="请输入内容" shadow="never" class="input2"></el-input>
                  </el-form-item>

                </el-col>
                <el-col :span="8">
                  <el-form-item prop="attribute">
                    <div>
                      <span class="demonstration aa">使用属性：</span>
                      <el-select v-model="Form1.attribute" placeholder="请选择" shadow="never" class="input2">
                        <el-option
                          v-for="item in option1"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>

                      </el-select>
                    </div>
                  </el-form-item>

                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="8">
                  <el-form-item prop="assets_type_name">
                    <span>资产分类名称：</span>
                    <el-select v-model="Form1.assets_type_name" placeholder="请选择" shadow="never" class="input2">
                      <el-option
                        v-for="item in optionss"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                    <!--<el-input v-model="Form1.assets_type_name" placeholder="请输入内容" shadow="never" class="input2"></el-input>-->
                  </el-form-item>

                </el-col>
                <el-col :span="8">
                  <el-form-item prop="quantity">
                    <div>
                      <span>数量：</span>
                      <el-input v-model="Form1.quantity" placeholder="请输入内容" shadow="never" class="input2"></el-input>
                    </div>
                  </el-form-item>

                </el-col>
                <el-col :span="8">
                  <el-form-item prop="asset_value">
                    <span>原值：</span>
                    <el-input v-model="Form1.asset_value" placeholder="请输入内容" shadow="never" class="input2"></el-input>
                  </el-form-item>

                </el-col>


              </el-row>
              <el-row :gutter="20">
                <el-col :span="8">
                  <el-form-item prop="accounting_voucher_num">
                    <span>会计号：</span>
                    <el-input v-model="Form1.accounting_voucher_num" placeholder="请输入内容" shadow="never" class="input2"></el-input>
                  </el-form-item>

                </el-col>
                <el-col :span="8">
                  <el-form-item prop="obtain_date">
                    <span>取得日期：</span>
                    <el-date-picker
                      v-model="Form1.obtain_date"
                      type="date"
                      placeholder="选择日期"
                      shadow="never"
                      class="input2"
                      format="yyyy 年 MM 月 dd 日"
                      value-format="yyyy-MM-dd">
                    </el-date-picker>
                  </el-form-item>

                </el-col>
                <el-col :span="8">
                  <el-form-item prop="transaction_date">
                    <span>入账日期：</span>
                    <el-date-picker
                      v-model="Form1.transaction_date"
                      type="date"
                      placeholder="选择日期"
                      shadow="never"
                      class="input2"
                      format="yyyy 年 MM 月 dd 日"
                      value-format="yyyy-MM-dd">
                    </el-date-picker>
                  </el-form-item>

                </el-col>



              </el-row>
              <el-row :gutter="20">
                <el-col :span="8">
                  <el-form-item prop="price">
                    <span>单价：</span>
                    <el-input v-model="Form1.price" placeholder="请输入内容" shadow="never" class="input2"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item prop="department">
                    <span>使用部门：</span>
                    <el-input v-model="Form1.department" placeholder="请输入内容" shadow="never" class="input2"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item prop="storage_location">
                    <span>存放地点：</span>
                    <el-input v-model="Form1.storage_location" placeholder="请输入内容" shadow="never" class="input2"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="8">
                  <el-form-item prop="application">
                    <div>
                      <span>使用方向：</span>
                      <el-select v-model="Form1.application" placeholder="请选择" shadow="never" class="input2">
                        <el-option
                          v-for="item in option3"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </div>
                  </el-form-item>

                </el-col>
                <el-col :span="8">
                  <el-form-item prop="asset_status">
                    <span>当前状态：</span>
                    <el-input v-model="Form1.asset_status" placeholder="请输入内容" shadow="never" class="input2"></el-input>
                  </el-form-item>

                </el-col>
                <el-col :span="8">
                  <el-form-item prop="type_of_value">
                    <span>价值类型：</span>
                    <el-select v-model="Form1.type_of_value" placeholder="请选择" shadow="never" class="input2">
                      <el-option
                        v-for="item in option6"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>

                </el-col>
              </el-row>

              <el-row :gutter="20">
                <el-col :span="8">
                  <el-form-item prop="in_use">
                    <span>使用状态：</span>
                    <el-select v-model="Form1.in_use" placeholder="请选择" shadow="never" class="input2">
                      <el-option
                        v-for="item in option2"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>

                </el-col>
                <el-col :span="8">
                  <el-form-item prop="total_depreciation">
                    <span>累计折旧：</span>
                    <el-input v-model="Form1.total_depreciation" placeholder="请输入内容" shadow="never" class="input2"></el-input>
                  </el-form-item>

                </el-col>
                <el-col :span="8">
                  <el-form-item prop="depreciation">
                    <span>折旧：</span>
                    <el-input v-model="Form1.depreciation" placeholder="请输入内容" shadow="never" class="input2"></el-input>
                  </el-form-item>

                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="8">
                  <el-form-item prop="net_worth">
                    <span>净值：</span>
                    <el-input v-model="Form1.net_worth" placeholder="请输入内容" shadow="never" class="input2"></el-input>
                  </el-form-item>

                </el-col>
                <el-col :span="8">
                  <el-form-item prop="brand_source">
                    <span>品牌 | 生产厂家：</span>
                    <el-input v-model="Form1.brand_source" placeholder="请输入内容" shadow="never" class="input2"></el-input>
                  </el-form-item>

                </el-col>
                <el-col :span="8">
                  <el-form-item prop="supervise_department">
                    <span>管理部门：</span>
                    <el-input v-model="Form1.supervise_department" placeholder="请输入内容" shadow="never" class="input2"></el-input>
                  </el-form-item>

                </el-col>

              </el-row>

              <el-row :gutter="20">
                <el-col :span="8">
                  <el-form-item prop="supervisor">
                    <span>监管负责人：</span>
                    <el-input v-model="Form1.supervisor" placeholder="请输入内容" shadow="never" class="input2"></el-input>
                  </el-form-item>

                </el-col>
                <el-col :span="8">
                  <el-form-item prop="asset_usage">
                    <span>设备用途：</span>
                    <el-select v-model="Form1.asset_usage" placeholder="请选择" shadow="never" class="input2">
                      <el-option
                        v-for="item in option5"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>

                </el-col>
                <el-col :span="8">
                  <el-form-item prop="specification">
                    <span>规格型号：</span>
                    <el-input v-model="Form1.specification" placeholder="请输入内容" shadow="never" class="input2"></el-input>
                  </el-form-item>

                </el-col>

              </el-row>

              <el-row :gutter="20">
                <el-col :span="8">
                  <el-form-item prop="measurement">
                    <span>计量单位：</span>
                    <el-select v-model="Form1.measurement" placeholder="请选择" shadow="never" class="input2">
                      <el-option
                        v-for="item in option7"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>

                </el-col>
                <el-col :span="8">
                  <el-form-item prop="accessing">
                    <div>
                      <span>获取方式：</span>
                      <el-select v-model="Form1.accessing" placeholder="请选择" shadow="never" class="input2">
                        <el-option
                          v-for="item in option4"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </div>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item prop="limit_year">
                    <span>预使用年限：</span>
                    <el-input v-model="Form1.limit_year" placeholder="请输入内容" shadow="never" class="input2"></el-input>
                  </el-form-item>

                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col>
                  <el-form-item prop="remark">
                    <span>备注：</span>
                    <el-input v-model="Form1.remark"  type="textarea" placeholder="请输入内容" shadow="never" style="width: 40%;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>

          <span slot="footer" class="dialog-footer">
                <el-button @click="dialogSee = false">取 消</el-button>
                <el-button type="primary" @click="addAsset('formName')">提交</el-button>
              </span>
        </el-dialog>

        <el-button type="primary" @click="PrintSubmit" style="margin-left: 30px">打印</el-button>

        <el-tooltip effect="dark" content="批量导入资产信息" placement="top">
          <el-button type="primary" @click="excelImportShow = true" >上传<i class="el-icon-upload el-icon--right"></i></el-button>

        </el-tooltip>
        <el-dialog title="导入文件" :visible.sync="excelImportShow">
          <div><el-button type="text" @click="downloadText">点击下载</el-button>Excel模板 </div>
          <el-upload
            class="upload-demo"
            drag
            :before-upload="beforeUpload"
            action="http://58.119.112.13:11001/batch_add_asset"
            :on-preview="handlePreview"
            :on-remove="handleRemove">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传xls/xlsx文件</div>
            <!--<i class="el-icon-upload"></i>-->
            <!--<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>-->
            <!--<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
            <!--<el-button slot="trigger" size="small" type="primary">选取文件</el-button>-->

            <!--<div slot="tip" class="el-upload__tip">只能上传excel文件</div>-->

            <div slot="tip" class="el-upload-list__item-name">{{ this.fileName }}</div>

          </el-upload>
          <span slot="footer" class="dialog-footer">
              <el-button @click="excelImportShow = false">取消</el-button>
              <el-button type="primary" @click="submitUpload()">提交</el-button>
            </span>
        </el-dialog>
        <el-input
          placeholder="请输入文件名(默认excel-list)"
          v-model="fileinput"
          clearable
          style="width: 230px;margin-left: 30px"
          prefix-icon="el-icon-document">
        </el-input>
        <el-button type="primary" @click="exportTable()">导出Excel</el-button>
        <!--<el-button type="primary" @click="printContent">打印</el-button>-->

        <el-tooltip class="item" effect="dark" content="请根据弹出框中的内容选择您想要查看的数据" placement="top-start">
          <el-button type="primary" @click="showPart" style="margin-left: 30px">查看部分数据</el-button>

        </el-tooltip>
        <el-button type="primary" @click="showAll" v-if="showAllData">查看全部数据</el-button>
        <el-dialog
          title="请选择您要打印的属性"
          :visible.sync="PrintVisible"
          width="50%"
          >
          <el-alert
            title="由于数据量比较大请耐心等待"
            type="warning">
          </el-alert>
          <div>

            <div style="margin-bottom: 30px;margin-top: 20px;margin-left: 25%"><span style="font-weight: bold;">表名：</span><el-input v-model="tableNames" placeholder="请输入表名" style="width: 50%"></el-input></div>
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChanges">全选</el-checkbox>
            <el-checkbox-group v-model="checkList" @change="handleCheckedCitiesChange">

              <el-row style="margin-top: 20px" :gutter="20">
                <el-col :span="4">
                  <el-tag type="info" style="font-size: 16px;font-weight: bold">基本属性：</el-tag>
                </el-col>
                <el-col :span="20">
                  <div style="margin-top: 5px">
                    <el-checkbox label="type_num">资产编号</el-checkbox>
                    <el-checkbox label="asset_name">资产名称</el-checkbox>
                    <el-checkbox label="attribute">使用属性</el-checkbox>
                    <!--<el-checkbox label="brand">品牌</el-checkbox>-->
                    <el-checkbox label="quantity">数量</el-checkbox>
                  </div>
                </el-col>
              </el-row>
              <div class="si">
              </div>
              <el-row :gutter="20" style="margin-top: 20px">
                <el-col :span="4">
                  <el-tag type="info" style="font-size: 16px;font-weight: bold">使用属性：</el-tag>
                </el-col>
                <el-col :span="20">
                  <div style="margin-top: 5px">
                    <el-checkbox label="application">使用方向</el-checkbox>
                    <el-checkbox label="in_use">使用状态</el-checkbox>
                    <el-checkbox label="measurement">计量单位</el-checkbox>
                    <el-checkbox label="accessing">获取方式</el-checkbox>
                    <el-checkbox label="assets_type_name">资产分类名称</el-checkbox>
                  </div>
                </el-col>
              </el-row>
              <div class="si">
              </div>
              <el-row :gutter="20" style="margin-top: 20px">
                <el-col :span="4">
                  <el-tag type="info" style="font-size: 16px;font-weight: bold">价值属性：</el-tag>
                </el-col>
                <el-col :span="20">
                  <div style="margin-top: 5px">
                    <el-checkbox label="asset_status">当前状态</el-checkbox>
                    <el-checkbox label="type_of_value">价值类型</el-checkbox>
                    <!--<el-checkbox label="financial_funds">财政经费</el-checkbox>-->
                    <el-checkbox label="net_worth">净值</el-checkbox>
                    <el-checkbox label="asset_value">原值</el-checkbox>
                    <el-checkbox label="price">单价</el-checkbox>
                  </div>
                </el-col>
              </el-row>
              <div class="si">
              </div>
              <el-row :gutter="20" style="margin-top: 20px">
                <el-col :span="4">
                  <el-tag type="info" style="font-size: 16px;font-weight: bold">产品属性：</el-tag>
                </el-col>
                <el-col :span="20">
                  <div style="margin-top: 5px">
                    <el-checkbox label="total_depreciation">累计折旧</el-checkbox>
                    <el-checkbox label="depreciation">折旧</el-checkbox>
                    <el-checkbox label="accounting_voucher_num">会计号</el-checkbox>
                    <el-checkbox label="brand_source">品牌 | 生产厂家</el-checkbox>
                    <!--<el-checkbox label="compile">编制情况</el-checkbox>-->
                  </div>
                </el-col>
              </el-row>
              <div class="si">
              </div>
              <el-row :gutter="20" style="margin-top: 20px">
                <el-col :span="4">
                  <el-tag type="info" style="font-size: 16px;font-weight: bold">时间属性：</el-tag>
                </el-col>
                <el-col :span="20">
                  <div style="margin-top: 5px">
                    <!--<el-checkbox label="material">材料</el-checkbox>-->
                    <el-checkbox label="specification">规格型号</el-checkbox>
                    <!--<el-checkbox label="size">大小</el-checkbox>-->
                    <el-checkbox label="obtain_date">取得日期</el-checkbox>
                    <el-checkbox label="transaction_date">入账日期</el-checkbox>
                    <el-checkbox label="limit_year">预使用年限</el-checkbox>
                  </div>
                </el-col>
              </el-row>
              <div class="si">
              </div>
              <el-row :gutter="20" style="margin-top: 20px">
                <el-col :span="4">
                  <el-tag type="info" style="font-size: 16px;font-weight: bold">其他：</el-tag>
                </el-col>
                <el-col :span="20">
                  <div style="margin-top: 5px">
                    <!--<el-checkbox label="form_of_entry_recording">入账形式</el-checkbox>-->
                    <!--<el-checkbox label="xszzc">行驶证注册</el-checkbox>-->
                    <el-checkbox label="department">管理部门</el-checkbox>
                    <el-checkbox label="storage_location">管理部门</el-checkbox>
                    <el-checkbox label="supervise_department">管理部门</el-checkbox>
                    <el-checkbox label="supervisor">监管负责人</el-checkbox>
                    <el-checkbox label="asset_usage">设备用途</el-checkbox>
                  </div>
                </el-col>
              </el-row>



            </el-checkbox-group>
            <div style="margin-top: 40px;margin-left: 20%">
              <div style="font-weight: bold">备注：</div>
              <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="请输入内容"
                v-model="textarea3"
                style="width: 70%;margin-top: 10px">
              </el-input>
            </div>
          </div>
          <el-dialog
            width="50%"
            :visible.sync="innerVisible"
            append-to-body>
            <div id="printText">
              <div>
                <el-table :data="ArrayList" border="true" :header-cell-style="tableHead">
                  <el-table-column :label="tableNames" align="center" >


                    <el-table-column v-for="item in checkList" :key="item" :label="ListPrint[item]" :prop="item">
                    </el-table-column>
                  </el-table-column>


                  <!--<div v-for="(item,index) in checkList" :key="index">-->
                  <!--<el-table-column prop=item label= width="150"></el-table-column>-->
                  <!--</div>-->
                </el-table>

              </div>

              <div style="margin-top: 20px"><span>备注:</span>{{textarea3}}</div>
            </div>
            <span slot="footer" class="dialog-footer">
            <el-button @click="innerVisible = false">取 消</el-button>
            <el-button type="primary" @click="PrintButton2" v-print="'#printText'">打印</el-button>

          </span>

          </el-dialog>
          <span slot="footer" class="dialog-footer">
            <el-button @click="PrintVisible = false">取 消</el-button>
            <el-button type="primary" @click="PrintButton">确 定</el-button>
          </span>
        </el-dialog>
      </el-col>

    </el-row>
    <el-row style="margin-top: 10px">

      <el-col>
        <div v-if="tableShow2">
          <el-table :data="assetNameList.slice((currentPage-1)*pagesize,currentPage*pagesize)"  style="width: auto" stripe id="print"  border    @header-click="sortSS" :row-class-name="tableRowClassName" class="tables" :header-cell-style="backgroundbutton" @sort-change="sortSS"
                    v-loading="loading"
                    element-loading-text="拼命加载中"
                    element-loading-spinner="el-icon-loading"
                    element-loading-background="rgba(0, 0, 0, 0.8)">
            <el-table-column
              label="序号"
              width="80"
              type="index"
              >
              <template slot-scope="scope">
                {{(currentPage - 1) * pagesize + scope.$index + 1 }}
              </template>
            </el-table-column>
            <el-table-column property="type_num" label="资产编号" width="150"  sortable="custom">
              <template slot="header" slot-scope="scope">
                <span>资产编号</span>
                <!--<i class="ymq-icondown-circle"></i>-->
              </template>
            </el-table-column>
            <el-table-column property="asset_name" label="资产名称" width="150" sortable="custom">
              <template slot="header" slot-scope="scope">
                <span>资产名称</span>
                <!--<i class="ymq-icondown-circle"></i>-->
              </template>
            </el-table-column>
            <el-table-column property="attribute" label="使用属性" width="150" sortable="custom">
              <template slot="header" slot-scope="scope">
                <span>使用属性</span>
                <!--<i class="ymq-icondown-circle"></i>-->
              </template>
            </el-table-column>
            <el-table-column property="assets_type_name" label="资产分类名称" width="150" sortable="custom">
              <template slot="header" slot-scope="scope">
                <span>资产分类名称</span>
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
            <el-table-column property="asset_value" label="原值" width="150" sortable="custom">
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
            <el-table-column property="net_worth" label="净值" width="150" sortable="custom">
              <template slot="header" slot-scope="scope">
                <span>净值(元)</span>
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
            <el-table-column property="department" label="使用部门" width="150" sortable="custom">
              <template slot="header" slot-scope="scope">
                <span>使用部门</span>
                <!--<i class="ymq-icondown-circle"></i>-->
              </template>
            </el-table-column>
            <!--<el-table-column property="compile" label="编制情况" width="150"></el-table-column>-->
            <!--<el-table-column property="form_of_entry_recording" label="入账形式" width="150"></el-table-column>-->
            <!--<el-table-column property="xszzc" label="行驶证注册" width="150"></el-table-column>-->
            <el-table-column property="supervise_department" label="管理部门" width="150" sortable="custom">
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
            <el-table-column property="remark" label="备注" width="150" sortable="custom">
              <template slot="header" slot-scope="scope">
                <span>备注</span>
                <!--<i class="ymq-icondown-circle"></i>-->
              </template>
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="150">
              <template slot-scope="scope">
                <el-button type="primary" size="small" @click="handleClick(scope.row)"  >修改</el-button>

                <!--<el-button type="danger" size="small" @click="deleteAsset(scope.row)" >删除</el-button>-->
                <el-button type="danger" size="small" @click="deleteAsset(scope.row)" >删除</el-button>

              </template>
            </el-table-column>
            <el-table-column
              fixed="right"
              label="条形码"
              width="110">
              <template slot-scope="scope">
                <el-button type="success" size="mini" @click="showprints(scope.row)">打印条形码</el-button>
              </template>
            </el-table-column>
          </el-table>

        </div>
        <div v-if="tableShow">
          <el-table :data="assetNameList.slice((currentPage-1)*pagesize,currentPage*pagesize)"  style="width: auto"   border   @header-click="sortSS" :row-class-name="tableRowClassName" class="tables" :header-cell-style="backgroundbutton" @sort-change="sortSS">
            <el-table-column
              label="序号"
              width="50"
              type="index"

            >
              <template slot-scope="scope">
                {{(currentPage - 1) * pagesize + scope.$index + 1 }}
              </template>
            </el-table-column>
            <div v-for="item in checkList2">
              <el-table-column :property="item" :label="ListPrint[item]" sortable="custom">
                <template slot="header" slot-scope="scope">
                  <span>{{ListPrint[item]}}</span>
                  <!--<i class="ymq-icondown-circle"></i>-->
                </template>
              </el-table-column>
            </div>
            <el-table-column
              fixed="right"
              label="操作"
              width="150">
              <template slot-scope="scope">
                <el-button type="primary" size="small" @click="handleClick(scope.row)"  >修改</el-button>

                <!--<el-button type="danger" size="small" @click="deleteAsset(scope.row)" >删除</el-button>-->
                <el-button type="danger" size="small" @click="deleteAsset(scope.row)" >删除</el-button>

              </template>
            </el-table-column>
            <el-table-column
              fixed="right"
              label="条形码"
              width="110">
              <template slot-scope="scope">
                <el-button type="success" size="mini" @click="showprints(scope.row)">打印条形码</el-button>
              </template>
            </el-table-column>
          </el-table>

        </div>
        <el-dialog
          title="打印预览"
          :visible.sync="printSubmitsss"
          width="80%"
          >
          <el-row>
            <el-col :span="10">
              <el-form :model="Form1">
                <div>
                  <div id="ss" style="width: 300px">
                    <el-row>
                      <el-col :span="4">
                        <img src="../../assets/112.jpg" style="width: 40px">
                      </el-col>
                      <el-col :span="20" style="margin-bottom: 1px">
                        <div style="margin-left: 25px;font-size: 20px;margin-top: 10px">北京市中关村中学</div>
                      </el-col>
                    </el-row>
                    <div class="line"></div>
                    <div style="width: 90%;margin: 0 auto">

                      <div style="margin-top: 10px;font-size: 14px" v-if="a3"><span>{{a1+ '： ' + a2}}</span></div>
                      <div><span style="font-size: 14px" v-if="b3">{{b1+ '： '+ b2}}</span></div>
                      <div><span style="font-size: 14px" v-if="c3">{{c1+ '： '+c2}}</span></div>
                      <svg id="barcode">
                      </svg>
                    </div>
                  </div>

                </div>


              </el-form>
            </el-col>
            <el-col :span="14">
              <el-alert
                title="下列属性最多选择三个，最少选择一个"
                style="width: 40%"
                type="warning">
              </el-alert>
              <div>
                <el-checkbox-group v-model="checkList3"
                                   @change="wefwf"
                                   :min="1"
                                   :max="3">
                  <el-row style="margin-top: 20px" :gutter="20">
                    <el-col :span="4">
                      <el-tag type="info" style="font-size: 14px;font-weight: bold">基本属性：</el-tag>
                    </el-col>
                    <el-col :span="20">
                      <div style="margin-top: 5px">
                        <el-checkbox label="type_num">资产编号</el-checkbox>
                        <el-checkbox label="asset_name">资产名称</el-checkbox>
                        <el-checkbox label="attribute">使用属性</el-checkbox>
                        <!--<el-checkbox label="brand">品牌</el-checkbox>-->
                        <el-checkbox label="quantity">数量</el-checkbox>
                      </div>
                    </el-col>
                  </el-row>
                  <div class="si">
                  </div>
                  <el-row :gutter="20" style="margin-top: 20px">
                    <el-col :span="4">
                      <el-tag type="info" style="font-size: 16px;font-weight: bold">使用属性：</el-tag>
                    </el-col>
                    <el-col :span="20">
                      <div style="margin-top: 5px">
                        <el-checkbox label="application">使用方向</el-checkbox>
                        <el-checkbox label="in_use">使用状态</el-checkbox>
                        <el-checkbox label="measurement">计量单位</el-checkbox>
                        <el-checkbox label="accessing">获取方式</el-checkbox>
                        <el-checkbox label="assets_type_name">资产分类名称</el-checkbox>
                      </div>
                    </el-col>
                  </el-row>
                  <div class="si">
                  </div>
                  <el-row :gutter="20" style="margin-top: 20px">
                    <el-col :span="4">
                      <el-tag type="info" style="font-size: 16px;font-weight: bold">价值属性：</el-tag>
                    </el-col>
                    <el-col :span="20">
                      <div style="margin-top: 5px">
                        <el-checkbox label="asset_status">当前状态</el-checkbox>
                        <el-checkbox label="type_of_value">价值类型</el-checkbox>
                        <!--<el-checkbox label="financial_funds">财政经费</el-checkbox>-->
                        <el-checkbox label="net_worth">净值</el-checkbox>
                        <el-checkbox label="asset_value">原值</el-checkbox>
                      </div>
                    </el-col>
                  </el-row>
                  <div class="si">
                  </div>
                  <el-row :gutter="20" style="margin-top: 20px">
                    <el-col :span="4">
                      <el-tag type="info" style="font-size: 16px;font-weight: bold">产品属性：</el-tag>
                    </el-col>
                    <el-col :span="20">
                      <div style="margin-top: 5px">
                        <el-checkbox label="total_depreciation">累计折旧</el-checkbox>
                        <el-checkbox label="depreciation">折旧</el-checkbox>
                        <el-checkbox label="accounting_voucher_num">会计号</el-checkbox>
                        <el-checkbox label="brand_source">品牌 | 生产厂家</el-checkbox>
                        <!--<el-checkbox label="compile">编制情况</el-checkbox>-->
                      </div>
                    </el-col>
                  </el-row>
                  <div class="si">
                  </div>
                  <el-row :gutter="20" style="margin-top: 20px">
                    <el-col :span="4">
                      <el-tag type="info" style="font-size: 16px;font-weight: bold">时间属性：</el-tag>
                    </el-col>
                    <el-col :span="20">
                      <div style="margin-top: 5px">
                        <!--<el-checkbox label="material">材料</el-checkbox>-->
                        <el-checkbox label="specification">规格型号</el-checkbox>
                        <!--<el-checkbox label="size">大小</el-checkbox>-->
                        <el-checkbox label="obtain_date">取得日期</el-checkbox>
                        <el-checkbox label="transaction_date">入账日期</el-checkbox>
                        <el-checkbox label="limit_year">预使用年限</el-checkbox>
                      </div>
                    </el-col>
                  </el-row>
                  <div class="si">
                  </div>
                  <el-row :gutter="20" style="margin-top: 20px">
                    <el-col :span="4">
                      <el-tag type="info" style="font-size: 16px;font-weight: bold">其他：</el-tag>
                    </el-col>
                    <el-col :span="20">
                      <div style="margin-top: 5px">
                        <!--<el-checkbox label="form_of_entry_recording">入账形式</el-checkbox>-->
                        <!--<el-checkbox label="xszzc">行驶证注册</el-checkbox>-->
                        <el-checkbox label="supervise_department">监管部门</el-checkbox>
                        <el-checkbox label="supervisor">监管负责人</el-checkbox>
                        <el-checkbox label="asset_usage">设备用途</el-checkbox>
                      </div>
                    </el-col>
                  </el-row>
                </el-checkbox-group>
              </div>
            </el-col>
          </el-row>

          <span slot="footer" class="dialog-footer">
                      <el-button @click="printSubmitsss = false">取 消</el-button>
                    <el-button @click="printSubmitsss=false" v-print="'#ss'">打印</el-button>
              </span>

        </el-dialog>
        <!--<div>{{this.textareText}}</div>-->
        <el-dialog
          title="修改资产信息"
          :visible.sync="dialogUpdate"
          width="50%"
          :before-close="handleClose">
          <div>
            <el-form :model="Form1">
              <el-row :gutter="20">
                <el-col :span="8">
                  <el-form-item>
                    <span>资产编号：</span>
                    <el-input v-model="Form1.type_num" placeholder="请输入内容" shadow="never" class="input2"></el-input>
                  </el-form-item>

                </el-col>
                <el-col :span="8">
                  <el-form-item>
                    <span>资产名称：</span>
                    <el-input v-model="Form1.asset_name" placeholder="请输入内容" shadow="never" class="input2"></el-input>
                  </el-form-item>

                </el-col>
                <el-col :span="8">
                  <el-form-item>
                    <div>
                      <span class="demonstration aa">使用属性：</span>
                      <el-select v-model="Form1.attribute" placeholder="请选择" shadow="never" class="input2">
                        <el-option
                          v-for="item in option1"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>

                      </el-select>
                    </div>
                  </el-form-item>

                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="8">
                  <!--<el-form-item>-->
                    <!--<span>品牌：</span>-->
                    <!--<el-input v-model="Form1.brand" placeholder="请输入内容" shadow="never" class="input2"></el-input>-->
                  <!--</el-form-item>-->

                </el-col>
                <el-col :span="8">
                  <el-form-item>
                    <div>
                      <span>数量：</span>
                      <el-input v-model="Form1.quantity" placeholder="请输入内容" shadow="never" class="input2" />
                    </div>
                  </el-form-item>

                </el-col>
                <el-col :span="8">
                  <el-form-item>
                    <div>
                      <span>使用方向：</span>
                      <el-select v-model="Form1.application" placeholder="请选择" shadow="never" class="input2">
                        <el-option
                          v-for="item in option3"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </div>
                  </el-form-item>

                </el-col>
                <el-col :span="8">
                  <el-form-item>
                    <span>净值：</span>
                    <el-input v-model="Form1.net_worth" placeholder="请输入内容" shadow="never" class="input2"></el-input>
                  </el-form-item>

                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="8">
                  <el-form-item>
                    <span>使用状态：</span>
                    <el-select v-model="Form1.in_use" placeholder="请选择" shadow="never" class="input2">
                      <el-option
                        v-for="item in option2"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>

                </el-col>
                <el-col :span="8">
                  <el-form-item>
                    <span>计量单位：</span>
                    <el-select v-model="Form1.measurement"
                               placeholder="请选择"
                               shadow="never"
                               class="input2">
                      <el-option
                        v-for="item in option7"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>

                </el-col>
                <el-col :span="8">
                  <el-form-item>
                    <div>
                      <span>获取方式：</span>
                      <el-select v-model="Form1.accessing" placeholder="请选择" shadow="never" class="input2">
                        <el-option
                          v-for="item in option4"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </div>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="8">
                  <el-form-item>
                    <span>资产分类名称：</span>
                    <!--<el-input v-model="Form1.assets_type_name" placeholder="请输入内容" shadow="never" class="input2"></el-input>-->
                    <el-select v-model="Form1.assets_type_name" placeholder="请选择" shadow="never" class="input2">
                      <el-option
                        v-for="item in optionss"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>

                </el-col>
                <el-col :span="8">
                  <el-form-item>
                    <span>当前状态：</span>
                    <el-input v-model="Form1.asset_status" placeholder="请输入内容" shadow="never" class="input2"></el-input>
                  </el-form-item>

                </el-col>
                <el-col :span="8">
                  <el-form-item>
                    <span>价值类型：</span>
                    <el-select v-model="Form1.type_of_value" placeholder="请选择" shadow="never" class="input2">
                      <el-option
                        v-for="item in option6"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>

                </el-col>
              </el-row>

              <el-row :gutter="20">
                <el-col :span="8">
                  <el-form-item>
                    <span>原值：</span>
                    <el-input v-model="Form1.asset_value" placeholder="请输入内容" shadow="never" class="input2"></el-input>
                  </el-form-item>

                </el-col>
                <el-col :span="8">
                  <el-form-item>
                    <span>累计折旧：</span>
                    <el-input v-model="Form1.total_depreciation" placeholder="请输入内容" shadow="never" class="input2"></el-input>
                  </el-form-item>

                </el-col>
                <el-col :span="8">
                  <el-form-item>
                    <span>折旧：</span>
                    <el-input v-model="Form1.depreciation" placeholder="请输入内容" shadow="never" class="input2"></el-input>
                  </el-form-item>

                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="8">
                  <el-form-item>
                    <span>单价：</span>
                    <el-input v-model="Form1.price" placeholder="请输入内容" shadow="never" class="input2"></el-input>
                  </el-form-item>

                </el-col>
                <el-col :span="8">
                  <el-form-item>
                    <span>使用部门：</span>
                    <el-input v-model="Form1.department" placeholder="请输入内容" shadow="never" class="input2"></el-input>
                  </el-form-item>

                </el-col>
                <el-col :span="8">
                  <el-form-item>
                    <span>会计号：</span>
                    <el-input v-model="Form1.accounting_voucher_num" placeholder="请输入内容" shadow="never" class="input2"></el-input>
                  </el-form-item>

                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="8">
                  <el-form-item>
                    <span>存放地点：</span>
                    <el-input v-model="Form1.storage_location" placeholder="请输入内容" shadow="never" class="input2"></el-input>
                  </el-form-item>

                </el-col>
                <el-col :span="8">
                  <el-form-item>
                    <span>品牌 | 生产厂家：</span>
                    <el-input v-model="Form1.brand_source" placeholder="请输入内容" shadow="never" class="input2"></el-input>
                  </el-form-item>

                </el-col>
                <el-col :span="8">
                  <el-form-item>
                    <span>管理部门：</span>
                    <el-input v-model="Form1.supervise_department" placeholder="请输入内容" shadow="never" class="input2"></el-input>
                  </el-form-item>

                </el-col>

              </el-row>

              <el-row :gutter="20">
                <el-col :span="8">
                  <el-form-item>
                    <span>监管负责人：</span>
                    <el-input v-model="Form1.supervisor" placeholder="请输入内容" shadow="never" class="input2"></el-input>
                  </el-form-item>

                </el-col>
                <el-col :span="8">
                  <el-form-item>
                    <span>设备用途：</span>
                    <el-select v-model="Form1.asset_usage" placeholder="请选择" shadow="never" class="input2">
                      <el-option
                        v-for="item in option5"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>

                </el-col>
                <el-col :span="8">
                  <el-form-item>
                    <span>规格型号：</span>
                    <el-input v-model="Form1.specification" placeholder="请输入内容" shadow="never" class="input2"></el-input>
                  </el-form-item>

                </el-col>
              </el-row>

              <el-row :gutter="20">
                <el-col :span="8">
                  <el-form-item>
                    <span>取得日期：</span>
                    <el-date-picker
                      v-model="Form1.obtain_date"
                      type="date"
                      placeholder="选择日期"
                      shadow="never"
                      class="input2">
                    </el-date-picker>
                  </el-form-item>

                </el-col>
                <el-col :span="8">
                  <el-form-item>
                    <span>入账日期：</span>
                    <el-date-picker
                      v-model="Form1.transaction_date"
                      type="date"
                      placeholder="选择日期"
                      shadow="never"
                      class="input2">
                    </el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item>
                    <span>预使用年限：</span>
                    <el-input v-model="Form1.limit_year" placeholder="请输入内容" shadow="never" class="input2"></el-input>
                  </el-form-item>

                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col>
                  <el-form-item>
                    <span>备注：</span>
                    <el-input v-model="Form1.remark" type="textarea" placeholder="请输入内容" shadow="never" class="input2"></el-input>
                  </el-form-item>

                </el-col>
              </el-row>
            </el-form>
          </div>
          <!--<el-dialog-->
            <!--width="30%"-->
            <!--title="是否确认修改"-->
            <!--:visible.sync="updatetwo"-->
            <!--append-to-body>-->
           <!--<span slot="footer" class="dialog-footer">-->
                <!--<el-button @click="updatetwo = false">取 消</el-button>-->
                <!--<el-button type="primary" @click="updateAsset()">确定</el-button>-->
              <!--</span>-->
          <!--</el-dialog>-->

          <span slot="footer" class="dialog-footer">
                <el-button @click="dialogUpdate = false">取 消</el-button>
                <el-button type="primary" @click="updateAsset()">提交</el-button>
              </span>
        </el-dialog>
        <el-dialog
          title="提示"
          :visible.sync="deleteVisible"
          width="30%"
          :before-close="handleClose">
          <span>是否需要删除本条资产信息</span>
          <span slot="footer" class="dialog-footer">
                  <el-button @click="deleteVisible = false">取 消</el-button>
                  <el-button type="primary" @click="deleteAsset">确 定</el-button>
                </span>
        </el-dialog>
        <el-dialog
          title="请选择您要查看的属性"
          :visible.sync="dataVisible"
          width="50%"
          :before-close="handleClose">
          <div>
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            <el-checkbox-group v-model="checkList2" @change="handleCheckedCitiesChange">
              <el-row style="margin-top: 20px" :gutter="20">
                <el-col :span="4">
                  <el-tag type="info" style="font-size: 16px;font-weight: bold">基本属性：</el-tag>
                </el-col>
                <el-col :span="20">
                  <div style="margin-top: 5px">
                    <el-checkbox label="type_num">资产编号</el-checkbox>
                    <el-checkbox label="asset_name">资产名称</el-checkbox>
                    <el-checkbox label="attribute">使用属性</el-checkbox>
                    <!--<el-checkbox label="brand">品牌</el-checkbox>-->
                    <el-checkbox label="quantity">数量</el-checkbox>
                  </div>
                </el-col>
              </el-row>
              <div class="si">
              </div>
              <el-row :gutter="20" style="margin-top: 20px">
                <el-col :span="4">
                  <el-tag type="info" style="font-size: 16px;font-weight: bold">使用属性：</el-tag>
                </el-col>
                <el-col :span="20">
                  <div style="margin-top: 5px">
                    <el-checkbox label="application">使用方向</el-checkbox>
                    <el-checkbox label="in_use">使用状态</el-checkbox>
                    <el-checkbox label="measurement">计量单位</el-checkbox>
                    <el-checkbox label="accessing">获取方式</el-checkbox>
                    <el-checkbox label="assets_type_name">资产分类名称</el-checkbox>

                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="20" style="margin-top: 20px">
                <el-col :span="20" :offset="4">
                  <div style="margin-top: 5px;">
                    <el-checkbox label="asset_status">当前状态</el-checkbox>
                    <!--<el-checkbox label="material">材料</el-checkbox>-->
                    <el-checkbox label="specification">规格型号</el-checkbox>
                    <!--<el-checkbox label="size">大小</el-checkbox>-->
                  </div>

                </el-col>
              </el-row>
              <div class="si">
              </div>
              <el-row :gutter="20" style="margin-top: 20px">
                <el-col :span="4">
                  <el-tag type="info" style="font-size: 16px;font-weight: bold">价值属性：</el-tag>
                </el-col>
                <el-col :span="20">
                  <div style="margin-top: 5px">

                    <el-checkbox label="type_of_value">价值类型</el-checkbox>
                    <!--<el-checkbox label="financial_funds">财政经费</el-checkbox>-->
                    <el-checkbox label="net_worth">净值</el-checkbox>
                    <el-checkbox label="asset_value">原值</el-checkbox>
                    <el-checkbox label="price">单价</el-checkbox>
                  </div>
                </el-col>
              </el-row>
              <div class="si">
              </div>
              <el-row :gutter="20" style="margin-top: 20px">
                <el-col :span="4">
                  <el-tag type="info" style="font-size: 16px;font-weight: bold">产品属性：</el-tag>
                </el-col>
                <el-col :span="20">
                  <div style="margin-top: 5px">
                    <el-checkbox label="total_depreciation">累计折旧</el-checkbox>
                    <el-checkbox label="depreciation">折旧</el-checkbox>
                    <el-checkbox label="accounting_voucher_num">会计号</el-checkbox>
                    <el-checkbox label="brand_source">品牌 | 生产厂家</el-checkbox>
                    <!--<el-checkbox label="compile">编制情况</el-checkbox>-->
                  </div>
                </el-col>
              </el-row>
              <div class="si">
              </div>
              <el-row :gutter="20" style="margin-top: 20px">
                <el-col :span="4">
                  <el-tag type="info" style="font-size: 16px;font-weight: bold">时间属性：</el-tag>
                </el-col>
                <el-col :span="20">
                  <div style="margin-top: 5px">

                    <el-checkbox label="obtain_date">取得日期</el-checkbox>
                    <el-checkbox label="transaction_date">入账日期</el-checkbox>
                    <el-checkbox label="limit_year">预使用年限</el-checkbox>
                  </div>
                </el-col>
              </el-row>
              <div class="si">
              </div>
              <el-row :gutter="20" style="margin-top: 20px">
                <el-col :span="4">
                  <el-tag type="info" style="font-size: 16px;font-weight: bold">其他：</el-tag>
                </el-col>
                <el-col :span="20">
                  <div style="margin-top: 5px">
                    <!--<el-checkbox label="form_of_entry_recording">入账形式</el-checkbox>-->
                    <!--<el-checkbox label="xszzc">行驶证注册</el-checkbox>-->
                    <el-checkbox label="department">使用管部门</el-checkbox>
                    <el-checkbox label="storage_location">存放地点</el-checkbox>
                    <el-checkbox label="supervise_department">监管部门</el-checkbox>
                    <el-checkbox label="supervisor">监管负责人</el-checkbox>
                    <el-checkbox label="asset_usage">设备用途</el-checkbox>
                    <el-checkbox label="remark">备注</el-checkbox>
                  </div>
                </el-col>
              </el-row>





            </el-checkbox-group>
          </div>



          <span slot="footer" class="dialog-footer">
            <el-button @click="dataVisible = false">取 消</el-button>
            <el-button type="primary" @click="showTableButton">确 定</el-button>
          </span>
        </el-dialog>

      </el-col>
    </el-row>
    <el-row class="page">
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
      <!--<el-col :span="4">-->
        <!--<el-button type="primary" @click="PrintSubmits">打印条形码</el-button>-->
        <!--&lt;!&ndash;<el-dialog&ndash;&gt;-->
          <!--&lt;!&ndash;title="请选择"&ndash;&gt;-->
          <!--&lt;!&ndash;:visible.sync="printSubmitss"&ndash;&gt;-->
          <!--&lt;!&ndash;width="80%"&ndash;&gt;-->
          <!--&lt;!&ndash;:before-close="handleClose"&ndash;&gt;-->
          <!--&lt;!&ndash;append-to-body>&ndash;&gt;-->
          <!--&lt;!&ndash;<div style="width: 80%;margin-left: 50px">&ndash;&gt;-->
            <!--&lt;!&ndash;<el-table :data="assetNameList"&ndash;&gt;-->
                      <!--&lt;!&ndash;ref="multipleTable"&ndash;&gt;-->
                      <!--&lt;!&ndash;@selection-change="handleSelectionChange">&ndash;&gt;-->
              <!--&lt;!&ndash;&lt;!&ndash;<el-table-column&ndash;&gt;&ndash;&gt;-->
                <!--&lt;!&ndash;&lt;!&ndash;type="selection"&ndash;&gt;&ndash;&gt;-->
                <!--&lt;!&ndash;&lt;!&ndash;width="55">&ndash;&gt;&ndash;&gt;-->
              <!--&lt;!&ndash;&lt;!&ndash;</el-table-column>&ndash;&gt;&ndash;&gt;-->
              <!--&lt;!&ndash;<el-table-column&ndash;&gt;-->
                <!--&lt;!&ndash;type="index"&ndash;&gt;-->
                <!--&lt;!&ndash;label="序号"&ndash;&gt;-->
                <!--&lt;!&ndash;width="50">&ndash;&gt;-->
              <!--&lt;!&ndash;</el-table-column>&ndash;&gt;-->
              <!--&lt;!&ndash;<el-table-column&ndash;&gt;-->
                <!--&lt;!&ndash;label="资产分类代码">&ndash;&gt;-->
                <!--&lt;!&ndash;<template slot-scope="scope">{{ scope.row.type_num }}</template>&ndash;&gt;-->
              <!--&lt;!&ndash;</el-table-column>&ndash;&gt;-->
              <!--&lt;!&ndash;<el-table-column&ndash;&gt;-->
                <!--&lt;!&ndash;label="资产名称">&ndash;&gt;-->
                <!--&lt;!&ndash;<template slot-scope="scope">{{ scope.row.asset_name }}</template>&ndash;&gt;-->
              <!--&lt;!&ndash;</el-table-column>&ndash;&gt;-->
              <!--&lt;!&ndash;<el-table-column&ndash;&gt;-->
                <!--&lt;!&ndash;label="监管部门">&ndash;&gt;-->
                <!--&lt;!&ndash;<template slot-scope="scope">{{ scope.row.supervise_department }}</template>&ndash;&gt;-->
              <!--&lt;!&ndash;</el-table-column>&ndash;&gt;-->
              <!--&lt;!&ndash;<el-table-column&ndash;&gt;-->
                <!--&lt;!&ndash;label="所在校区">&ndash;&gt;-->
                <!--&lt;!&ndash;<template slot-scope="scope">{{ '中关村校区' }}</template>&ndash;&gt;-->
              <!--&lt;!&ndash;</el-table-column>&ndash;&gt;-->
              <!--&lt;!&ndash;<el-table-column label="操作">&ndash;&gt;-->
                <!--&lt;!&ndash;<template slot-scope="scope">&ndash;&gt;-->
                  <!--&lt;!&ndash;<el-button type="success" size="mini" @click="showprints(scope.row)">打印条形码</el-button>&ndash;&gt;-->


                <!--&lt;!&ndash;</template>&ndash;&gt;-->
              <!--&lt;!&ndash;</el-table-column>&ndash;&gt;-->
            <!--&lt;!&ndash;</el-table>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;<el-dialog&ndash;&gt;-->
            <!--&lt;!&ndash;title="打印预览"&ndash;&gt;-->
            <!--&lt;!&ndash;:visible.sync="printSubmitsss"&ndash;&gt;-->
            <!--&lt;!&ndash;width="30%">&ndash;&gt;-->
            <!--&lt;!&ndash;<el-form :model="Form1">&ndash;&gt;-->
              <!--&lt;!&ndash;<div id="ss" style="width: 300px">&ndash;&gt;-->
                <!--&lt;!&ndash;<el-row>&ndash;&gt;-->
                  <!--&lt;!&ndash;<el-col :span="4">&ndash;&gt;-->
                    <!--&lt;!&ndash;<img src="../../assets/112.jpg" style="width: 40px">&ndash;&gt;-->
                  <!--&lt;!&ndash;</el-col>&ndash;&gt;-->
                  <!--&lt;!&ndash;<el-col :span="20">&ndash;&gt;-->
                    <!--&lt;!&ndash;<div style="margin-left: 25px;font-size: 20px;margin-bottom: 10px">北京市中关村中学</div>&ndash;&gt;-->
                  <!--&lt;!&ndash;</el-col>&ndash;&gt;-->
                <!--&lt;!&ndash;</el-row>&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="line"></div>&ndash;&gt;-->
                <!--&lt;!&ndash;<div style="width: 90%;margin: 0 auto">&ndash;&gt;-->

                  <!--&lt;!&ndash;<div style="margin-top: 10px;font-size: 14px"><span>资产名称： {{Form1.asset_name}}</span></div>&ndash;&gt;-->
                  <!--&lt;!&ndash;<div><span style="font-size: 14px">存放地点： {{Form1.supervise_department}}</span></div>&ndash;&gt;-->
                  <!--&lt;!&ndash;<div><span style="font-size: 14px">所在校区： 中关村</span></div>&ndash;&gt;-->
                  <!--&lt;!&ndash;<svg id="barcode" ></svg>&ndash;&gt;-->
                <!--&lt;!&ndash;</div>&ndash;&gt;-->
              <!--&lt;!&ndash;</div>&ndash;&gt;-->

            <!--&lt;!&ndash;</el-form>&ndash;&gt;-->
              <!--&lt;!&ndash;<span slot="footer" class="dialog-footer">&ndash;&gt;-->
                      <!--&lt;!&ndash;<el-button @click="printSubmitsss = false">取 消</el-button>&ndash;&gt;-->
                    <!--&lt;!&ndash;<el-button v-print="'#ss'">打印</el-button>&ndash;&gt;-->
              <!--&lt;!&ndash;</span>&ndash;&gt;-->

          <!--&lt;!&ndash;</el-dialog>&ndash;&gt;-->

          <!--&lt;!&ndash;<span slot="footer" class="dialog-footer">&ndash;&gt;-->
            <!--&lt;!&ndash;<el-button @click="printSubmitss = false">取 消</el-button>&ndash;&gt;-->
            <!--&lt;!&ndash;&lt;!&ndash;<el-button type="primary" @click="printSubmitss = false">打印二维码</el-button>&ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;</span>&ndash;&gt;-->
        <!--&lt;!&ndash;</el-dialog>&ndash;&gt;-->
        <!--&lt;!&ndash;<el-button type="primary" @click="PrintButton3" v-print="'#ff'">打印</el-button>&ndash;&gt;-->
      <!--</el-col>-->
    </el-row>
    <!--<div v-if="printcode" style="width: 300px" id="ff">-->
      <!--<el-row>-->
        <!--<el-col :span="4">-->
          <!--<img src="../../assets/112.jpg" style="width: 40px">-->
        <!--</el-col>-->
        <!--<el-col :span="20">-->
          <!--<div style="margin-left: 25px;font-size: 20px;margin-bottom: 10px">北京市中关村中学</div>-->
        <!--</el-col>-->
      <!--</el-row>-->




      <!--<div class="line"></div>-->
      <!--<div style="width: 90%;margin: 0 auto">-->

        <!--<div style="margin-top: 10px;font-size: 14px"><span>资产名称： 无线代表单元</span></div>-->
        <!--<div><span style="font-size: 14px">存放地点： 初中楼</span></div>-->
        <!--<div><span style="font-size: 14px">所在校区： 中关村</span></div>-->
        <!--<svg id="barcode" ></svg>-->
      <!--</div>-->

    <!--</div>-->


  </div>
</template>

<script>
// import { getToken } from '@/utils/auth'
import JsBarcode from 'jsbarcode'
export default {
  inject: ['reload'],
  data() {
    return {
      ST:'',
      RequestText:'',
      checkList:['type_num','asset_name','quantity','attribute','obtain_date','transaction_date'],
      tableNames:'',
      checkList2:['type_num','asset_name','quantity','attribute','obtain_date','transaction_date'],
      checkAll: false,
      tableShow: false,
      tableShow2: true,
      a3: true,
      b3: true,
      c3: true,
      loading: true,
      isIndeterminate: true,
      printSubmitss: false,
      printSubmitsss: false,
      ArrayList:[],
      textarea3:'',
      textareText: '',
      dataVisible: false,
      fileName: '',
      excelImportShow: false,
      deleteVisible: false,
      dialogTableVisible: false,
      updatetwo: false,
      innerVisible: false,
      checkList3: ['asset_name','attribute','obtain_date'],
      show: false,
      printcode: false,
      assetNameList: [],
      assetkey:[],
      assetName: '',
      assetNum: '',
      currentPage: 1,
      pagesize: 10,
      dialogVisible: false,
      fileinput: '',
      dialogSee: false,
      dialogUpdate: false,
      PrintVisible: false,
      showAllData: false,
      a1:'',
      b1: '',
      c1: '',
      a2: '',
      b2: '',
      c2: '',
      rows:'',
      num: 0,
      assetNames: '',
      ListPrint: {
        type_num: '资产编号', /* 资产分类代码*/
        asset_name: '资产名称', /* 资产名称*/
        measurement: '计量单位', /* 计量单位*/
        in_use: '使用状态', /* 使用状态*/
        application: '使用方向', /* 使用方向（用途）*/
        accessing: '获取方式', /* 获取方式*/
        obtain_date: '取得日期', /* 取得日期*/
        transaction_date: '入账日期', /* 入账日期*/
        // brand: '品牌', /* 品牌*/
        // material: '材质', /* 材质*/
        specification: '规格型号', /* 规格型号*/
        // size: '大小', /* 大小*/
        asset_usage: '用法', /* 用法*/
        quantity: '数量', /* 数量*/
        type_of_value: '价值类型', /* 价值类型*/
        asset_value: '原值', /* 价值*/
        price: '单价', /* 单价*/

        // financial_funds: '财政性资金', /* 经费来源（财政性资金）*/
        // non_financial_funds: '非财政性资金', /* 经费来源（非财政性资金*/
        net_worth: '净值', /* 净值*/
        accounting_voucher_num: '会计凭证号', /* 会计凭证号*/
        department: '使用部门',
        storage_location: '存放地点',
        supervise_department: '管理部门', /* 监管部门*/
        supervisor: '监管负责人', /* 监管负责人*/
        limit_year: '预使用年限', /* 年限*/
        total_depreciation: '累计折旧', /* 累计折旧*/
        depreciation: '折旧', /* 折旧*/
        asset_status: '当前状态', /* 当前状态*/
        // assets_code: '资产编号', /* 资产编号（办公设备和专用设备专有）*/
        assets_type_name: '资产分类名称', /* 资产分类名称（办公设备和专用设备专有）*/
        // compile: '编制情况', /* 编制情况*/
        // xszzc: '行驶证注册', /* 行驶证注册*/
        // form_of_entry_recording: '入账形式', /* 入账形式*/
        brand_source: '品牌 | 生产厂家', /* 生产厂家*/
        attribute: '使用属性', /* 使用属性*/
        remark: '备注',
      },
      data3: '',
      Form1: {
        type_num: '', /* 资产编号*/
        asset_name: '', /* 资产名称*/
        measurement: '', /* 计量单位*/
        in_use: '', /* 使用状态*/
        application: '', /* 使用方向（用途）*/
        accessing: '', /* 获取方式*/
        obtain_date: '', /* 取得日期*/
        transaction_date: '', /* 入账日期*/
        // brand: '', /* 品牌*/
        // material: '', /* 材质*/
        specification: '', /* 规格型号*/
        // size: '', /* 大小*/
        asset_usage: '', /* 用法*/
        quantity: '', /* 数量*/
        type_of_value: '', /* 价值类型*/
        asset_value: '', /* 原值*/
        price: '', /* 单价*/
        // financial_funds: '', /* 经费来源（财政性资金）*/
        // non_financial_funds: '', /* 经费来源（非财政性资金*/
        net_worth: '', /* 净值*/
        accounting_voucher_num: '', /* 会计凭证号*/
        department: '', /* 使用部门*/
        storage_location: '', /* 存放地点*/
        supervise_department: '', /* 监管部门*/
        supervisor: '', /* 监管负责人*/
        limit_year: '', /* 年限*/
        total_depreciation: '', /* 累计折旧*/
        depreciation: '', /* 折旧*/
        asset_status: '', /* 当前状态*/
        // assets_code: '', /* 资产编号（办公设备和专用设备专有）*/
        assets_type_name: '', /* 资产分类名称（办公设备和专用设备专有）*/
        // compile: '', /* 编制情况*/
        // xszzc: '', /* 行驶证注册*/
        // form_of_entry_recording: '', /* 入账形式*/
        brand_source: '', /* 生产厂家*/
        attribute: '', /* 使用属性*/
        remark: '', /* 备注*/

      },
      DataInfo: [{
        type_num: '10001', /* 资产编号*/
        asset_name: '桌椅', /* 资产名称*/
        measurement: '', /* 计量单位*/
        in_use: '', /* 使用状态*/
        application: '', /* 使用方向（用途）*/
        accessing: '', /* 获取方式*/
        obtain_date: '2000/01/01', /* 取得日期*/
        transaction_date: '2000/12/31', /* 入账日期*/
        // brand: '未涉及', /* 品牌*/
        // material: '红木', /* 材质*/
        specification: '', /* 规格型号*/
        // size: '未涉及', /* 大小*/
        asset_usage: '', /* 用法*/
        quantity: '10', /* 数量*/
        type_of_value: '', /* 价值类型*/
        asset_value: '1000', /* 原值*/
        price: '100', /* 单价*/
        // financial_funds: '7495(元)', /* 经费来源（财政性资金）*/
        // non_financial_funds: '0', /* 经费来源（非财政性资金*/
        net_worth: '900', /* 净值*/
        accounting_voucher_num: '记－0001', /* 会计凭证号*/
        department: '', /* 使用部门*/
        storage_location: '', /* 存放地点*/
        supervise_department: '高中楼212教师研讨室', /* 监管部门*/
        supervisor: '', /* 监管负责人*/
        limit_year: '', /* 年限*/
        total_depreciation: '', /* 累计折旧*/
        depreciation: '', /* 折旧*/
        asset_status: '', /* 当前状态*/
        // assets_code: '', /* 资产编号（办公设备和专用设备专有）*/
        assets_type_name: '', /* 资产分类名称（办公设备和专用设备专有）*/
        // compile: '未涉及', /* 编制情况*/
        // xszzc: '未涉及', /* 行驶证注册*/
        // form_of_entry_recording: '未涉及', /* 入账形式*/
        brand_source: '', /* 生产厂家*/
        attribute: '家具', /* 使用属性*/
        remark: '' /* 备注*/
      }],
      rules:{
        type_num: [
          { required: true, message: '请输入资产编号', trigger: 'blur' },
        ],
        asset_name: [
          { required: true, message: '请输入资产名称', trigger: 'blur' },
        ],
        assets_type_name: [
          { required: true, message: '请选择资产分类名称', trigger: 'change' },
        ],
        obtain_date: [
          { required: true, message: '请选择资取得日期', trigger: 'change' },
        ],
        quantity: [
          { required: true, message: '请输入数量', trigger: 'blur' },
        ],
        asset_value: [
          { required: true, message: '请输入原值', trigger: 'blur' },
        ],
        transaction_date: [
          { required: true, message: '请选择入账日期', trigger: 'change' },
        ],
        price: [{ required: true, message: '请输入单价', trigger: 'blur' },]

      },
      option1: [{
        value: '烹饪电器',
        label: '烹饪电器'
      }, {
        value: '容器消毒机械',
        label: '容器消毒机械'
      }, {
        value: '台式机',
        label: '台式机'
      }, {
        value: '土地使用权',
        label: '土地使用权'
      }, {
        value: '其他非专利技术',
        label: '其他非专利技术'
      }, {
        value: '其他被服装具',
        label: '其他被服装具'
      }, {
        value: '室内装具',
        label: '室内装具'
      }, {
        value: '室外装具',
        label: '室外装具'
      }, {
        value: '其他家具用具',
        label: '其他家具用具'
      }, {
        value: '其他厨卫用具',
        label: '其他厨卫用具'
      }, {
        value: '水池',
        label: '水池'
      }, {
        value: '厨房操作台',
        label: '厨房操作台'
      }, {
        value: '架类',
        label: '架类'
      }, {
        value: '其他柜',
        label: '其他柜'
      }, {
        value: '保险柜',
        label: '保险柜'
      }, {
        value: '文件柜',
        label: '文件柜'
      }, {
        value: '沙发类',
        label: '沙发类'
      }, {
        value: '椅凳类',
        label: '椅凳类'
      }, {
        value: '台、桌类',
        label: '台、桌类'
      }, {
        value: '床类',
        label: '床类'
      }, {
        value: '其他体育设备',
        label: '其他体育设备'
      }, {
        value: '健身设备',
        label: '健身设备'
      }, {
        value: '体育运动辅助设备',
        label: '体育运动辅助设备'
      }, {
        value: '举重设备',
        label: '举重设备'
      }, {
        value: '体操设备',
        label: '体操设备'
      }, {
        value: '其他球类设备',
        label: '其他球类设备'
      }, {
        value: '台球设备',
        label: '台球设备'
      }, {
        value: '羽毛球设备',
        label: '羽毛球设备'
      }, {
        value: '排球设备',
        label: '排球设备'
      }, {
        value: '篮球设备',
        label: '篮球设备'
      }, {
        value: '田赛设备',
        label: '田赛设备'
      }, {
        value: '布景',
        label: '布景'
      }, {
        value: '活动舞台',
        label: '活动舞台'
      }, {
        value: '其他演出服装',
        label: '其他演出服装'
      }, {
        value: '戏剧服装',
        label: '戏剧服装'
      }, {
        value: '其他乐器',
        label: '其他乐器'
      }, {
        value: '乐器辅助用品及配件',
        label: '乐器辅助用品及配件'
      }, {
        value: '键盘乐器',
        label: '键盘乐器'
      }, {
        value: '打击乐器',
        label: '打击乐器'
      }, {
        value: '吹管、吹奏乐器',
        label: '吹管、吹奏乐器'
      }, {
        value: '弓弦乐器',
        label: '弓弦乐器'
      }, {
        value: '其他专用仪器仪表',
        label: '其他专用仪器仪表'
      }, {
        value: '生理仪器',
        label: '生理仪器'
      }, {
        value: '心理仪器',
        label: '心理仪器'
      }, {
        value: '其他教学专用仪器',
        label: '其他教学专用仪器'
      }, {
        value: '教学用技术基础课仪器',
        label: '教学用技术基础课仪器'
      }, {
        value: '电教仪器',
        label: '电教仪器'
      }, {
        value: '教学用地理仪器',
        label: '教学用地理仪器'
      }, {
        value: '数学用化学分析及化工仪器',
        label: '数学用化学分析及化工仪器'
      }, {
        value: '教学用心理学仪器',
        label: '教学用心理学仪器'
      }, {
        value: '教学用机电实验仪器',
        label: '教学用机电实验仪器'
      }, {
        value: '教学用航空、航天、航海实验仪器',
        label: '教学用航空、航天、航海实验仪器'
      }, {
        value: '教学用天文气象实验仪器',
        label: '教学用天文气象实验仪器'
      }, {
        value: '教学用空气动力学实验仪器',
        label: '教学用空气动力学实验仪器'
      }, {
        value: '教学用电子学实验仪器',
        label: '教学用电子学实验仪器'
      }, {
        value: '教学用光学仪器',
        label: '教学用光学仪器'
      }, {
        value: '教学用力学仪器',
        label: '教学用力学仪器'
      }, {
        value: '演示计量仪器',
        label: '演示计量仪器'
      }, {
        value: '其他安全、检查、监视、报警设备',
        label: '其他安全、检查、监视、报警设备'
      }, {
        value: '报警设备',
        label: '报警设备'
      }, {
        value: '其他消防设备',
        label: '其他消防设备'
      }, {
        value: '消防侦检设备',
        label: '消防侦检设备'
      }, {
        value: '消防灭火设备',
        label: '消防灭火设备'
      }, {
        value: '隔音设备',
        label: '隔音设备'
      }, {
        value: '消音设备',
        label: '消音设备'
      }, {
        value: '其他固体废弃物处理设备',
        label: '其他固体废弃物处理设备'
      }, {
        value: '其他医疗设备',
        label: '其他医疗设备'
      }, {
        value: '其他防疫、防护卫生装备及器具',
        label: '其他防疫、防护卫生装备及器具'
      }, {
        value: '医疗箱类',
        label: '医疗箱类'
      }, {
        value: '医用低温设备',
        label: '医用低温设备'
      }, {
        value: '其他消毒灭菌设备及器具',
        label: '其他消毒灭菌设备及器具'
      }, {
        value: '气体灭菌设备及器具',
        label: '气体灭菌设备及器具'
      }, {
        value: '压力蒸汽灭菌设备',
        label: '压力蒸汽灭菌设备'
      }, {
        value: '医用制气、供气、吸气装置',
        label: '医用制气、供气、吸气装置'
      }, {
        value: '医用推车及器具',
        label: '医用推车及器具'
      }, {
        value: '通用手术台床',
        label: '通用手术台床'
      }, {
        value: '运动生理参数测定装置',
        label: '运动生理参数测定装置'
      }, {
        value: '电子体温测定装置',
        label: '电子体温测定装置'
      }, {
        value: '普通诊察器械',
        label: '普通诊察器械'
      }, {
        value: '有线电测量仪',
        label: '有线电测量仪'
      }, {
        value: '电子示波器',
        label: '电子示波器'
      }, {
        value: '电子和通信测量发生器',
        label: '电子和通信测量发生器'
      }, {
        value: '其他钟表及定时仪器',
        label: '其他钟表及定时仪器'
      }, {
        value: '定时器',
        label: '定时器'
      }, {
        value: '表',
        label: '表'
      }, {
        value: '生物、医学样品制备设备',
        label: '生物、医学样品制备设备'
      }, {
        value: '分析天平及专用天平',
        label: '分析天平及专用天平'
      }, {
        value: '测力仪器',
        label: '测力仪器'
      }, {
        value: '环境监测仪器及综合分析装置',
        label: '环境监测仪器及综合分析装置'
      }, {
        value: '红外仪器',
        label: '红外仪器'
      }, {
        value: '显微镜',
        label: '显微镜'
      }, {
        value: '其他播出设备',
        label: '其他播出设备'
      }, {
        value: '闭路播放设备',
        label: '闭路播放设备'
      }, {
        value: '其他音频设备',
        label: '其他音频设备'
      }, {
        value: '音箱',
        label: '音箱'
      }, {
        value: '扩音设备',
        label: '扩音设备'
      }, {
        value: '录音外围设备',
        label: '录音外围设备'
      }, {
        value: '话筒设备',
        label: '话筒设备'
      }, {
        value: '音频功率放大器设备（功放设备）',
        label: '音频功率放大器设备（功放设备）'
      }, {
        value: '录放音机',
        label: '录放音机'
      }, {
        value: '其他视频设备',
        label: '其他视频设备'
      }, {
        value: '其它视频监控设备',
        label: '其它视频监控设备'
      }, {
        value: '摄像头',
        label: '摄像头'
      }, {
        value: '视频设备',
        label: '视频设备'
      }, {
        value: '激光视盘机',
        label: '激光视盘机'
      }, {
        value: '平板显示设备',
        label: '平板显示设备'
      }, {
        value: '摄录一体机',
        label: '摄录一体机'
      }, {
        value: '摄像机',
        label: '摄像机'
      }, {
        value: '录像机',
        label: '录像机'
      }, {
        value: '其他电视设备',
        label: '其他电视设备'
      }, {
        value: '普通电视设备（电视机）',
        label: '普通电视设备（电视机）'
      }, {
        value: '其他视频节目制作和播控设备',
        label: '其他视频节目制作和播控设备'
      }, {
        value: '视频信息处理设备',
        label: '视频信息处理设备'
      }, {
        value: '专业摄像机和信号源设备',
        label: '专业摄像机和信号源设备'
      }, {
        value: '录像编辑设备',
        label: '录像编辑设备'
      }, {
        value: '其他音频节目制作和播控设备',
        label: '其他音频节目制作和播控设备'
      }, {
        value: '声处理设备',
        label: '声处理设备'
      }, {
        value: '调音台',
        label: '调音台'
      }, {
        value: '数字音频广播发射机',
        label: '数字音频广播发射机'
      }, {
        value: '其他通信设备',
        label: '其他通信设备'
      }, {
        value: '数据调制、解调设备',
        label: '数据调制、解调设备'
      }, {
        value: '传真通信设备',
        label: '传真通信设备'
      }, {
        value: '其他视频会议系统设备',
        label: '其他视频会议系统设备'
      }, {
        value: '音视频矩阵',
        label: '音视频矩阵'
      }, {
        value: '电话交换设备',
        label: '电话交换设备'
      }, {
        value: '其他无线电通信设备',
        label: '其他无线电通信设备'
      }, {
        value: '移动通信（网）设备',
        label: '移动通信（网）设备'
      }, {
        value: '通用无线电通信设备',
        label: '通用无线电通信设备'
      }, {
        value: '其他电气设备',
        label: '其他电气设备'
      }, {
        value: '其他电气机械设备',
        label: '其他电气机械设备'
      }, {
        value: '电动工具',
        label: '电动工具'
      }, {
        value: '其他灯具',
        label: '其他灯具'
      }, {
        value: '场地用灯',
        label: '场地用灯'
      }, {
        value: '热水器',
        label: '热水器'
      }, {
        value: '饮水器',
        label: '饮水器'
      }, {
        value: '烹调电器',
        label: '烹调电器'
      }, {
        value: '清洁卫生电器',
        label: '清洁卫生电器'
      }, {
        value: '其他空气调节电器',
        label: '其他空气调节电器'
      }, {
        value: '排烟系统',
        label: '排烟系统'
      }, {
        value: '空气净化设备',
        label: '空气净化设备'
      }, {
        value: '空调',
        label: '空调'
      }, {
        value: '其他空气调节电器',
        label: '其他空气调节电器'
      }, {
        value: '制冷电器',
        label: '制冷电器'
      }, {
        value: '配电箱',
        label: '配电箱'
      }, {
        value: '控制设备',
        label: '控制设备'
      }, {
        value: '其他电源设备',
        label: '其他电源设备'
      }, {
        value: '充电机',
        label: '充电机'
      }, {
        value: '不间断电源（UPS）',
        label: '不间断电源（UPS）'
      }, {
        value: '其他电机',
        label: '其他电机'
      }, {
        value: '冷库制冷设备',
        label: '冷库制冷设备'
      }, {
        value: '其他泵',
        label: '其他泵'
      }, {
        value: '其他输送设备',
        label: '其他输送设备'
      }, {
        value: '电梯',
        label: '电梯'
      }, {
        value: '金属焊接设备',
        label: '金属焊接设备'
      }, {
        value: '民用锅炉',
        label: '民用锅炉'
      }, {
        value: '三轮车',
        label: '三轮车'
      }, {
        value: '大中型客车',
        label: '大中型客车'
      }, {
        value: '小型客车',
        label: '小型客车'
      }, {
        value: '排气量1.8L以上轿车',
        label: '排气量1.8L以上轿车'
      }, {
        value: '载货汽车（含自卸汽车）',
        label: '载货汽车（含自卸汽车）'
      }, {
        value: '其他办公设备',
        label: '其他办公设备'
      }, {
        value: '会计机械',
        label: '会计机械'
      }, {
        value: '碎纸机',
        label: '碎纸机'
      }, {
        value: '速印机',
        label: '速印机'
      }, {
        value: '刻录机',
        label: '刻录机'
      }, {
        value: 'LED显示屏',
        label: 'LED显示屏'
      }, {
        value: '电子白板',
        label: '电子白板'
      }, {
        value: '其他照相机械及器材',
        label: '其他照相机械及器材'
      }, {
        value: '相机镜头',
        label: '相机镜头'
      }, {
        value: '单反套机',
        label: '单反套机'
      }, {
        value: '普通相机',
        label: '普通相机'
      }, {
        value: '其它一体机',
        label: '其它一体机'
      }, {
        value: '投影幕',
        label: '投影幕'
      }, {
        value: '固定式',
        label: '固定式'
      }, {
        value: '复印机',
        label: '复印机'
      }, {
        value: '其他计算机设备及软件',
        label: '其他计算机设备及软件'
      }, {
        value: '其他计算机设备及软件',
        label: '其他计算机设备及软件'
      }, {
        value: '应用软件',
        label: '应用软件'
      }, {
        value: '支撑软件',
        label: '支撑软件'
      }, {
        value: '基础软件',
        label: '基础软件'
      }, {
        value: '其他机房辅助设备',
        label: '其他机房辅助设备'
      }, {
        value: '机柜',
        label: '机柜'
      }, {
        value: '其他输入输出设备',
        label: '其他输入输出设备'
      }, {
        value: '刷卡机',
        label: '刷卡机'
      }, {
        value: '扫描仪',
        label: '扫描仪'
      }, {
        value: '其他存储设备',
        label: '其他存储设备'
      }, {
        value: '移动存储设备',
        label: '移动存储设备'
      }, {
        value: '网络存储设备',
        label: '网络存储设备'
      }, {
        value: '磁带库',
        label: '磁带库'
      }, {
        value: '磁盘阵列',
        label: '磁盘阵列'
      }, {
        value: '其他终端设备',
        label: '其他终端设备'
      }, {
        value: '终端机',
        label: '终端机'
      }, {
        value: '触摸式终端设备',
        label: '触摸式终端设备'
      }, {
        value: '其他安全设备',
        label: '其他安全设备'
      }, {
        value: '计算机终端安全设备',
        label: '计算机终端安全设备'
      }, {
        value: '入侵检测设备',
        label: '入侵检测设备'
      }, {
        value: '防火墙',
        label: '防火墙'
      }, {
        value: '其他网络设备',
        label: '其他网络设备'
      }, {
        value: '终端接入设备',
        label: '终端接入设备'
      }, {
        value: '光端机',
        label: '光端机'
      }, {
        value: '交换机',
        label: '交换机'
      }, {
        value: '便携式计算机',
        label: '便携式计算机'
      }, {
        value: '台式机',
        label: '台式机'
      }, {
        value: 'PC服务器',
        label: 'PC服务器'
      }, {
        value: '门',
        label: '门'
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
      optionss:[
        {
          value: '固定资产',
          label: '固定资产'
        },
        {
          value: '无形资产',
          label: '无形资产'
        },
        {
          value: '易消耗资产',
          label: '易消耗资产'
        },
        {
          value: '低值资产',
          label: '低值资产'
        },
      ],
      value: '',
      multipleSelection: [],
      columnss: '',
      NameList: []
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
    // let findAllAssetUrl = "http://58.119.112.13:11001/find_all_asset";
    // //let findAllAssetUrl = "http://58.119.112.13:11001/find_all_asset";
    // this.$axios.post(findAllAssetUrl, this.$qs.stringify({
    //   information: '788888'
    // })).then((res) => {
    //   // this.$message.success(res.data.errmsg);
    //   console.log(res.data);
    //   this.assetNameList = res.data.info
    //
    // }).catch((err) => {
    //   this.$message.error('查询失败');
    // })
    this.getAlldata()
  },
  methods: {
    // getParams:function(){
    //   eventVue.$on("myFun", function (val) {
    //     console.log("新参数===="+val)
    //     this.textareText=val
    //   })
    // },
    //得到所有数据
    getAlldata() {

      // let findAllAssetUrl = "http://58.119.112.13:11001/find_all_asset";
      let findAllAssetUrl = "http://58.119.112.13:11001/find_all_assets";
      //let findAllAssetUrl = "http://58.119.112.13:11001/find_all_asset";
      this.$axios.get(findAllAssetUrl).then((res) => {
        // this.$message.success(res.data.errmsg);
        console.log(res.data);
        this.assetNameList = res.data.assetList
        this.assetkey=Object.keys(res.data.assetList[0]).slice(1);
        console.log('efwff=='+this.assetkey)
        this.loading=false

      }).catch((err) => {
        this.$message.error('查询失败');
      })
    },
    /**查看部分类型*/
    showPart() {
      this.dataVisible=true

    },

    showTableButton() {
      this.tableShow=true;
      this.dataVisible=false;
      this.tableShow2=false;
      this.showAllData=true;
    },
    showAll() {
      this.tableShow=false;
      this.tableShow2=true;
      this.showAllData=false;
    },
    handleCheckAllChange(val) {
      this.checkList2 = val ? this.assetkey : [];
      this.isIndeterminate = false;
    },
    handleCheckAllChanges(val) {
      this.checkList = val ? this.assetkey : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.assetkey.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.assetkey.length;
    },
    handleClose(){
      // this.reload()

    },
    handleClick(row) {
      this.dialogUpdate = true;
      this.Form1 = row;

      console.log(row);
    },
    /**修改资产*/
    updateAsset() {
      this.$confirm('此操作将会修改本条资产信息，是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var url ='http://58.119.112.13:11001/change_asset';
        //var url ='http://58.119.112.13:11001/change_asset';
        this.$axios.post(url, this.$qs.stringify({
          type_num: this.Form1.type_num, /* 资产编号*/
          asset_name: this.Form1.asset_name, /* 资产名称*/
          measurement: this.Form1.measurement, /* 计量单位*/
          in_use: this.Form1.in_use, /* 使用状态*/
          application: this.Form1.application, /* 使用方向（用途）*/
          accessing: this.Form1.accessing, /* 获取方式*/
          obtain_date: this.Form1.obtain_date, /* 取得日期*/
          transaction_date: this.Form1.transaction_date, /* 入账日期*/
          // brand: this.Form1.brand, /* 品牌*/
          // material: this.Form1.material, /* 材质*/
          specification: this.Form1.specification, /* 规格型号*/
          // size: this.Form1.size, /* 大小*/
          asset_usage: this.Form1.asset_usage, /* 用法*/
          quantity: this.Form1.quantity, /* 数量*/
          type_of_value: this.Form1.type_of_value, /* 价值类型*/
          asset_value:this.Form1.asset_value, /* 原值*/
          // financial_funds: this.Form1.financial_funds, /* 经费来源（财政性资金）*/
          // non_financial_funds: this.Form1.non_financial_funds, /* 经费来源（非财政性资金*/
          net_worth: this.Form1.net_worth, /* 净值*/
          accounting_voucher_num: this.Form1.accounting_voucher_num, /* 会计凭证号*/
          supervise_department: this.Form1.supervise_department, /* 监管部门*/
          supervisor: this.Form1.supervisor, /* 监管负责人*/
          limit_year: this.Form1.limit_year, /* 年限*/
          total_depreciation: this.Form1.total_depreciation, /* 累计折旧*/
          depreciation: this.Form1.depreciation, /* 折旧*/
          asset_status: this.Form1.asset_status, /* 当前状态*/
          // assets_code: this.Form1.assets_code, /* 资产编号（办公设备和专用设备专有）*/
          assets_type_name: this.Form1.assets_type_name, /* 资产分类名称（办公设备和专用设备专有）*/
          // compile: this.Form1.compile, /* 编制情况*/
          // xszzc: this.Form1.xszzc, /* 行驶证注册*/
          // form_of_entry_recording: this.Form1.form_of_entry_recording, /* 入账形式*/
          brand_source: this.Form1.brand_source, /* 生产厂家*/
          attribute: this.Form1.attribute, /* 使用属性*/
          price: this.Form1.price, /* 单价*/
          department: this.Form1.department, /* 使用部门*/
          storage_location: this.Form1.storage_location, /* 存放地点*/
          remark: this.Form1.remark, /* 备注*/


        })).then((res) => {
          this.$message.success(res.data.errmsg);
          this.getAlldata()
          this.dialogUpdate = false

        }).catch((err) => {
          this.$message.error("修改失败")
        });
        // this.reload()
      })

    },
    // deleteSee(row){
    //   this.deleteVisible=true;
    //   this.rows=row
    //
    //
    // },
    /**删除资产*/
    deleteAsset(row) {
      this.$confirm('此操作将永久删除该条资产信息, 是否继续?', '提示',{
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {

        var url = 'http://58.119.112.13:11001/delete_asset';
        //var url = 'http://58.119.112.13:11001/delete_asset';
        this.$axios.post(url, this.$qs.stringify({
            type_num: row.type_num
          }
        )).then((res) => {
          this.loading=true
          this.$message.success(res.data.errmsg);
          this.getAlldata()
        })
          .catch((err) => {
            this.$message.error("删除失败");
          });
        // this.reload()
      })


    },
    /**调用find_asset_name_item接口通过向后端传入asset_name来得到assetNum*/
    getAssetNum(s) {
      console.log(s)
       var url = 'http://58.119.112.13:11001/find_asset_name_item';
      //var url = 'http://58.119.112.13:11001/find_asset_name_item';
      this.$axios.post(url, this.$qs.stringify({
        asset_name_item: s
      })).then((res) => {
        console.log(res);
        // this.assetNum = res.data.info[0][0];
        this.NameList = res.data.info
        // console.log(this.assetNum)
      })
    },
    /**录入资产*/
    addAsset(formName) {
      var url = 'http://58.119.112.13:11001/add_asset';
      //var url = 'http://58.119.112.13:11001/add_asset';
      this.$refs[formName].validate((valid) => {
        if (valid){
          this.$axios.post(url,this.$qs.stringify(this.Form1))
            .then((res) => {
              this.loading=true
              this.$message.success(res.data.errmsg);
              // this.reload()
              this.getAlldata()
              this.dialogSee=false
              this.$refs[formName].resetFields()
            }).catch((err) => {
            this.$message.error("提交失败")
          })
        }
        else {
          return false
        }
      })

    },
    /**查询资产*/
    FindAsset() {
      // var url = 'http://58.119.112.13:11001/find_designated_asset';
      var url = 'http://58.119.112.13:11001/find_asset';
      //var url = 'http://58.119.112.13:11001/find_designated_asset';
      this.show = true;
      this.$axios.post(url, this.$qs.stringify({
        // type_num: this.assetNum,
        // asset_name: this.assetName
        type_num: this.assetName
      })).then((res) => {
        this.$message.success(res.data.errmsg);
        this.Form1= res.data.info
      }).catch((err) => {
        this.$message.error("查询失败");
        // this.reload()
      })
    },
    FindAsset2() {
      var url = 'http://58.119.112.13:11001/find_asset_name_item?asset_name_item=' + this.assetNames
      this.$axios.get(url).then((res) => {
        this.assetNameList = res.data.assetList
      })
    },

    beforeUpload(file){

      console.log(file,'文件');

      this.files = file;

      const extension = file.name.split('.')[1] === 'xls'

      const extension2 = file.name.split('.')[1] === 'xlsx'

      // const isLt2M = file.size / 1024 / 1024 < 5(校验上传文件的大小)

      if (!extension && !extension2) {

        this.$message.warning('上传文档只能是 xls、xlsx格式!')

        return

      }

      console.log(file.name);

      this.fileName = file.name;

      return false // 返回false不会自动上传

    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file,'文件');

      // this.files = file;
      //
      // const extension = file.name.split('.')[1] === 'xls'
      //
      // const extension2 = file.name.split('.')[1] === 'xlsx'
      //
      // // const isLt2M = file.size / 1024 / 1024 < 5(校验上传文件的大小)
      //
      // if (!extension && !extension2) {
      //
      //   this.$message.warning('上传文档只能是 xls、xlsx格式!')
      //
      //   return
      //
      // }
      //
      // console.log(file.name);
      //
      // this.fileName = file.name;
      //
      // return false // 返回false不会自动上传

    },
    /**导出Excel表*/
    exportTable(){
      let findAllAssetUrl = "http://58.119.112.13:11001/find_all_asset";
      //let findAllAssetUrl = "http://58.119.112.13:11001/find_all_asset";
      this.$axios.post(findAllAssetUrl, this.$qs.stringify({
        information: 'wefwfe'
      })).then((res) => {
        if (this.fileinput===''){
          this.fileinput='excel-list'
        }
        const { export_json_to_excel } = require('../../vendor/Export2Excel');
        var tHeader = ['id', '资产编号', '资产名称','计量单位','使用状态','使用方向','获取方式','取得日期','入账日期','规格型号','用法','数量','价值类型','原值','单价',
          '净值','会计凭证号','使用部门','存放地点','管理部门','监管负责人','预使用年限','累计折旧','折旧','当前状态','资产分类名称','品牌 | 生产厂家','使用属性','备注'];// excel的表头标题
        var filterVal = ['id', 'type_num', 'asset_name','measurement','in_use','application','accessing','obtain_date','transaction_date','specification','asset_usage','quantity','type_of_value','asset_value','net_worth','price',
          'accounting_voucher_num','department','storage_location','supervise_department','supervisor','limit_year','total_depreciation','asset_status','assets_type_name','brand_source','attribute','remark'] // 需要导出对应自己列表中的每项数据
        var list = res.data.info; // 列表数据
        var data = this.formatJson(filterVal, list);
        export_json_to_excel(tHeader, data, this.fileinput)

      })



    },
    downloadText() {
      const { export_json_to_excel } = require('../../vendor/Export2Excel');
      var tHeader = [ '资产编号', '资产名称','使用属性','原值','取得日期','入账日期','会计凭证号','单价','数量','使用部门','管理部门','资产分类名称','存放地点','净值','预使用年限','计量单位','使用状态','使用方向','获取方式','规格型号','用法','价值类型',
        '监管负责人','累计折旧','折旧','当前状态','品牌 | 生产厂家','备注'];// excel的表头标题
      var filterVal = ['type_num', 'asset_name','attribute','asset_value','obtain_date','transaction_date','accounting_voucher_num','price','quantity','department','supervise_department','assets_type_name', 'storage_location','net_worth','limit_year','measurement','in_use','application','accessing','specification','asset_usage','type_of_value',
       'supervisor','total_depreciation','asset_status','brand_source','remark'] // 需要导出对应自己列表中的每项数据
      var list = this.DataInfo; // 列表数据
      var data = this.formatJson(filterVal, list);
      export_json_to_excel(tHeader, data, '资产批量上传Excel模板')
    },
    /**导入Excel*/
    submitUpload() {
      var url_key ='http://58.119.112.13:11001/batch_add_asset';
      //var url_key ='http://58.119.112.13:11001/batch_add_asset';
      if(this.fileName === ""){

        this.$message.warning('请选择要上传的文件！');

        return false

      }

      let fileFormData = new FormData();

      fileFormData.append('file', this.files);//filename是键，file是值，就是要传的文件，test.zip是要传的文件名

      // importBdDeptdoc(fileFormData).then((res) => {
      //
      //   this.addLoading = false;
      //
      //   this.$message({
      //
      //     message: '导入成功',
      //
      //     type: 'success'
      //
      //   });
      //
      //   this.getUsers();//重新请求一次页面数据
      //
      // })
      this.$axios.post(url_key, fileFormData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((res) => {
        // this.addLoading = false;
        this.$message({
          message: res.data.errmsg,
          type: 'success'
        });
        this.reload()

      })



    },
    // 在整个列表的数据中过滤导出自己需要的数据
    formatJson (filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    },
    /**打印*/
    // printContent(){
    //
    //   let wpt = document.getElementById('print');
    //   let newContent = wpt.innerHTML;
    //   let oldContent = document.body.innerHTML;
    //
    //   document.body.innerHTML = newContent;
    //   window.print(); //打印方法
    //   window.localtion.reload();
    //   document.body.innerHTML = oldContent;
    //   // this.$print(this.$refs.print) // 使用
    // },
      /**打印条形码*/
    PrintSubmits() {
      // this.printcode=true;
      this.printSubmitss=true;
      // this.$nextTick(() => {
      //   JsBarcode('#barcode','2121212121212',{
      //     lineColor: "#0aa",
      //     height: 40,
      //   })
      // });

    },
    showprints(row){
      this.printSubmitsss=true;
      this.Form1=row;
      // console.log(row)
      // console.log('wetret====='+this.checkList3[0])
      this.data3=row;
      var a = this.checkList3[0];
      var b = this.checkList3[1];
      var c = this.checkList3[2];
      this.a1=this.ListPrint[a];
      this.b1=this.ListPrint[b];
      this.c1 =this.ListPrint[c];
      this.a2=this.data3[a];
      this.b2=this.data3[b];
      this.c2=this.data3[c];

      this.$nextTick(() => {
        JsBarcode('#barcode',row.type_num,{
          format: "CODE128",
          lineColor: "#0aa",
          height:40
        })
      });

    },
      /**打印*/
    PrintSubmit() {
      this.PrintVisible=true;
    },
    PrintButton() {
      var ss='';
      var url = 'http://58.119.112.13:11001/find_all_asset_with_conditions';
      //var url = 'http://58.119.112.13:11001/find_all_asset_with_conditions';
      // this.PrintVisible=false;

      for (var i=0;i<this.checkList.length;i++){
        // console.log('打印：'+this.checkList[i])
        ss=ss+this.checkList[i]+' '
      }
      this.RequestText=ss;

      this.$axios.post(url,this.$qs.stringify({
        information: this.RequestText
      })).then((res) =>{
        console.log(res)
        this.ArrayList=res.data.info;
        this.innerVisible= true
      })
      // let wpt = document.getElementById('printText');
      //   let newContent = wpt.innerHTML;
      //   let oldContent = document.body.innerHTML;
      //
      //   document.body.innerHTML = newContent;
      //   window.print(); //打印方法
      //   window.localtion.reload();
      //   document.body.innerHTML = oldContent;


    },
     PrintButton2() {
    //   let wpt = document.getElementById('printText');
    //     let newContent = wpt.innerHTML;
    //     let oldContent = document.body.innerHTML;
    //
    //     document.body.innerHTML = newContent;
    //     window.print(); //打印方法
    //     window.localtion.reload();
    //     document.body.innerHTML = oldContent;
        this.PrintVisible=false;
        this.innerVisible= false

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
    closeAssetList(formName) {
      this.dialogVisible =false;
      // this.reload()
      this.assetName = ''
      this.$refs[formName].resetFields()

    },
    closeList() {
      this.reload()
      // this.$refs[formName].resetFields()
    },
    // sortSize(obj1, obj2) { //按大小排序
    //   let val1 = obj1.quantity;
    //   let val2 = obj2.quantity;
    //   return val1 - val2
    // },

    tableHead({ row, column, rowIndex, columnIndex }) {
      if (rowIndex===0){
        return 'font-size:20px'
      }

    },
    backgroundbutton({row, column, rowIndex, columnIndex}){
      if (column===this.columnss){
        return 'background: #DDDFE1'
      }

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
    wefwf() {
      console.log(this.checkList3);
      var a = this.checkList3[0];
      var b = this.checkList3[1];
      var c = this.checkList3[2];
      if (this.checkList3.length===2){
        this.a1=this.ListPrint[a];
        this.b1=this.ListPrint[b];
        this.a2=this.data3[a];
        this.b2=this.data3[b];
        this.c3=false;
        this.a3=true;
        this.b3=true;
      } else if (this.checkList3.length===1){
        this.a1=this.ListPrint[a];
        this.a2=this.data3[a];
        this.b3=false;
        this.c3=false;
        this.a3=true
      } else {
        this.a1=this.ListPrint[a];
        this.b1=this.ListPrint[b];
        this.c1 =this.ListPrint[c];
        this.a2=this.data3[a];
        this.b2=this.data3[b];
        this.c2=this.data3[c];
        this.a3=true;
        this.b3=true;
        this.c3=true;
      }


    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(this.multipleSelection)
    },
    // tableRowClassName({row, rowIndex}) {
    //   if (rowIndex % 2 !==0 ) {
    //     return 'warning-row';
    //   } else {
    //     return '';
    //   }
    //
    // }
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
    width: 200px;
  }
  .page{
    margin-top: 20px;
    margin-bottom: 20px;
  }
  /*.input1 {*/
  /*border: 0px;*/
  /*}*/
  .input2{
    width: 100%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }
  .si{
    margin-top: 10px;
    border-bottom: 1px solid gainsboro;

  }
  @page {
    size: auto A4 landscape;
    margin: 5mm; /* this affects the margin in the printer settings */
  }
  /*.printText {*/
    /*background: #fff;*/
    /*box-sizing: border-box;*/
    /*padding: 2rem 3rem 4rem;*/
  /*}*/
  .tables .warning-row {
    background: rgba(240,240,240,0.5);
  }

  .tables .success-row {
    background: #f0f9eb;
  }
  .line{
    margin-top: 0;
    border-bottom: 2px solid black;
  }



</style>

