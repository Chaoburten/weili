export default {
  data () {
    return {
      page: 1,
      size: 5,
      total: 0
    }
  },
  methods: {
    firstPage () {
      this.page = 1
      this.listdata()
    },
    lastPage () {
      this.page = Math.ceil(this.total / this.size)
      this.listdata()
    },
    handleSizeChange (val) {
    //   console.log(`每页 ${val} 条`)
      this.size = val
      this.page = 1
      this.listdata()
    },
    handleCurrentChange (val) {
    //   console.log(`当前页: ${val}`)
      this.page = val
      this.listdata()
    }
  }
}
