<template>
    <div>
            <!-- banner start -->
    <div class="comBanner newsBanner"></div>
    <!-- banner end -->

    <!-- news content start -->
    <div class="main">
        <div>
            <staff-services-main-top :sortid="sortid"></staff-services-main-top>
            <div class="serviceContent">
                <div class="service_top">
                    <h2>{{list.wl_name}}</h2>
                    <p>
                        <span>作者：为力小编</span>
                        <span>|</span>
                        <span>发布时间：{{list.time | time}}</span>
                        <span>|</span>
                        <span>{{list.views}}次浏览</span>
                    </p>
                </div>
                <div class="service_bottom newsContent">
                    <p v-html="list.content"></p>
                </div>
                <ul class="newsNext">
                    <li v-if="pre_id">上一篇：
                        <router-link :to="{name:'StaffServicesDetail',params:{id:pre_id}}">{{pre}}</router-link>
                    </li>
                    <li v-else>上一篇：<span>{{pre}}</span></li>
                    <li v-if="next_id">下一篇：
                        <router-link :to="{name:'StaffServicesDetail',params:{id:next_id}}">{{next}}</router-link>
                    </li>
                    <li v-else>下一篇：<span>{{next}}</span></li>
                </ul>
            </div>
        </div>
    </div>
    <!-- news content end -->
    </div>
</template>

<script>
import { read } from '../api/staff_services'
import StaffServicesMainTop from '../components/StaffServicesMainTop.vue'
import time from '../mixins/formattime'
export default {
  components: { StaffServicesMainTop },
  mixins: [time],
  data () {
    return {
      category: [],
      list: [],
      sortid: '',
      pre_id: '',
      pre: '',
      next_id: '',
      next: '',
      id: ''
    }
  },
  watch: {
    $route: {
      handler: function () {
        this.id = this.$route.params ? this.$route.params.id : ''
        this.listdata()
      }
      // immediate: true
    }
  },
  mounted () {
    this.listdata()
  },
  methods: {
    listdata () {
      var id = this.$route.params.id
      const params = { id: id }
      read(params).then((res) => {
        console.log(res)
        this.list = res.data.data
        document.title = res.data.data.wl_name + ' - ' + '南昌人力资源服务有限公司'
        this.pre_id = res.data.pre_id
        this.pre = res.data.pre
        this.next_id = res.data.next_id
        this.next = res.data.next
        this.sortid = res.data.sortid
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
