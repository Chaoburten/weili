<template>
    <div>
            <!-- banner start -->
    <div class="comBanner newsBanner"></div>
    <!-- banner end -->

    <!-- news content start -->
    <div class="main">
        <div>
            <recruitment-main-top :topath="topath"></recruitment-main-top>
            <!-- 招聘信息1 -->
            <div class="recruitmentInfo">
                <table class="recruitmentTable">
                    <tr>
                        <td width="152px" height="44px">职位名称</td>
                        <td width="350px" style="color:blue">{{list.job}}</td>
                        <td width="152px">招聘企业</td>
                        <td width="350px">{{list.wl_name}}</td>
                    </tr>
                    <tr>
                        <td>工作地点</td>
                        <td>{{list.address}}</td>
                        <td>招聘人数</td>
                        <td>{{list.num}}</td>
                    </tr>
                    <tr>
                        <td>更新日期</td>
                        <td>{{list.time | formattime}}</td>
                        <td>薪资</td>
                        <td>{{list.salary}}</td>
                    </tr>
                    <tr>
                        <td>岗位职责</td>
                        <td colspan="3">
                            <ul class="responsibility" v-html="list.responsibility"></ul>
                        </td>
                    </tr>
                    <tr>
                        <td>职位要求</td>
                        <td colspan="3">
                            <ul class="responsibility" v-html="list.requirements"></ul>
                        </td>
                    </tr>
                    <tr>
                        <td>福利待遇</td>
                        <td colspan="3">
                            <ul class="responsibility">{{list.welfare}}</ul>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <!-- news content end -->
    </div>
</template>

<script>
import RecruitmentMainTop from '../components/RecruitmentMainTop.vue'
import { read } from '../api/recruitment_info'
import time from '../mixins/formattime'
export default {
  mixins: [time],
  components: { RecruitmentMainTop },
  data () {
    return {
      list: [],
      topath: ''
    }
  },
  mounted () {
    // console.log(this.$route.path.split('/')[1])
    this.topath = '/' + this.$route.path.split('/')[1]
    this.detail()
  },
  methods: {
    detail () {
      var id = this.$route.params.id
      var params = { id: id }
      read(params).then((res) => {
        console.log(res)
        this.list = res.data.data
      })
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
