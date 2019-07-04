<template>
    <div>
      <div style="height: 435px">
        <el-scrollbar style="height: 100%">
          <el-table :data="List" stripe>
            <el-table-column label="名下资产申请记录">
              <template slot-scope="scope">
                <span>{{scope.row.assetname}}</span>
                <!--<span style="margin-left: 80px">{{scope.row.operationTime}}</span>-->
              </template>
            </el-table-column>
            <el-table-column>
              <template slot-scope="scope">
                <span>{{scope.row.operationTime}}</span>
              </template>
            </el-table-column>
          </el-table>
        </el-scrollbar>
      </div>

    </div>
</template>

<script>
    export default {
        name: "TransactionTable2",
      data() {
          return {
            name: '',
            List: []
          }
      },
      mounted() {
        this.name = localStorage.getItem('name')
        console.log(this.name)
        this.getData()

      },
      methods: {
          getData() {
            var url ='http://58.119.112.13:11001/find_asset_by_username?name=' + this.name
            this.$axios.get(url).then((res) => {
              this.List = res.data.assetList
            })

          }
      }
    }
</script>

<style>
  .el-scrollbar__wrap{
    overflow-x: hidden;
  }
</style>
