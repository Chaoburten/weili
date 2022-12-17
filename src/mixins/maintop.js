export default {
  data () {
    return {
      category: []
    }
  },
  mounted () {
    this.sort()
  },
  methods: {
    getSortname (e) {
      document.title = e + ' - ' + '南昌为力人力资源服务有限公司'
    }
  }
}
