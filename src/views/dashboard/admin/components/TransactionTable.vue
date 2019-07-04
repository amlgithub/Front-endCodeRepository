<template>
  <el-table :data="list" style="width: 100%;padding-top: 15px;" height="500">
    <el-table-column label="资产名称" min-width="100">
      <template slot-scope="scope">
        {{ scope.row.assetname}}
      </template>
    </el-table-column>
    <el-table-column label="借用次数" width="100" align="center">
      <template slot-scope="scope">
        {{ scope.row.applyTimes }}
      </template>
    </el-table-column>
    <el-table-column label="操作时间" width="150" align="center">
      <template slot-scope="scope">
        {{ scope.row.operationTime }}
      </template>
    </el-table-column>
    <el-table-column label="管理员是否同意" width="190" align="center">
      <template slot-scope="scope">
        <el-tag type="warning">
          {{ '等待管理员批复' }}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { fetchList } from '@/api/transaction'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        pending: 'danger'
      }
      return statusMap[status]
    },
    orderNoFilter(str) {
      return str.substring(0, 30)
    }
  },
  data() {
    return {
      list: '',
      token: ''
    }
  },
  created() {
    // this.fetchData()
  },
  mounted() {
    this.token = this.$store.getters.token
    this.getShowApply()
  },
  methods: {
    // fetchData() {
    //   fetchList().then(response => {
    //     this.list = response.data.items.slice(0, 8)
    //   })
    // }
    getShowApply() {
      var url = 'http://58.119.112.13:11001/find_no_approve_request';
      this.$axios.post(url, this.$qs.stringify({
        token: this.token
      })).then((res) => {
        this.list = res.data.info
      })
    }
  }
}
</script>
