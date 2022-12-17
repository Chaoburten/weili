<template>
    <div>
        <!-- news content start -->
    <div class="main">
        <div>
            <news-main-top :sortid="sortid"></news-main-top>
            <div class="serviceContent">
                <div class="service_top">
                    <h2 v-text="detail.wl_name"></h2>
                    <p>
                        <span>作者：为力小编</span>
                        <span>|</span>
                        <span>发布时间：{{detail.time | formattime}}</span>
                        <span>|</span>
                        <span>{{detail.views}}次浏览</span>
                    </p>
                </div>
                <div class="service_bottom newsContent">
                    <p v-html="detail.content"></p>
                </div>
                <ul class="newsNext">
                    <li v-if="pre_id">上一篇：
                        <router-link :to="{name:'NewsDetail',params:{id:pre_id}}">{{pre}}</router-link>
                    </li>
                    <li v-else>上一篇：<span>{{pre}}</span></li>
                    <li v-if="next_id">下一篇：
                        <router-link :to="{name:'NewsDetail',params:{id:next_id}}">{{next}}</router-link>
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
import { read } from '../api/news'
import newsMainTop from '../components/NewsMainTop'
import time from '../mixins/formattime'
export default {
  mixins: [time],
  components: { newsMainTop },
  data () {
    return {
      detail: [],
      pre: '',
      pre_id: '',
      next: '',
      next_id: '',
      sortid: ''
    }
  },
  watch: {
    $route: {
      handler: function () {
        this.id = this.$route.params ? this.$route.params.id : ''
        this.newsDetail()
      },
      immediate: true
    }
  },
  methods: {
    newsDetail () {
      // var that = this
      console.log(this.$route.params)
      var id = this.$route.params.id
      var params = { id: id }
      read(params).then((res) => {
        // console.log(res)
        this.detail = res.data.data
        // // 方法一  需要强制刷新，但控制台会报错：Avoided redundant navigation to current location
        // that.$route.meta.title = res.data.data.wl_name
        // that.$router.replace({
        //   query: {
        //     id: id
        //   }
        // })
        // 方法二  设置浏览器标题
        document.title = res.data.data.wl_name + ' - ' + '南昌为力人力资源服务有限公司'
        this.pre = res.data.pre
        this.pre_id = res.data.pre_id
        this.next = res.data.next
        this.next_id = res.data.next_id
        this.sortid = res.data.sortid
      })
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
