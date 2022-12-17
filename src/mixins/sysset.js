import { list } from '../api/sysset'
export default {
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.syssetList()
  },
  methods: {
    syssetList () {
      list().then((res) => {
        // console.log(res)
        this.list = res.data.data
      })
    }
  }
}
