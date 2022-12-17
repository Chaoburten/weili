<template>
    <div>
        <!-- banner start -->
    <div class="comBanner newsBanner"></div>
    <!-- banner end -->

    <!-- news content start -->
    <div class="main">
        <div>
            <div class="mainTop">
                <h2>企业服务</h2>
                <img src="@/assets/images/arrow.png" alt="">
                <p>提供最有价值的人力资源服务和解决方案，持续为客户创造最大价值</p>
                <ul class="clearfix">
                    <li v-for="item in category" :key="item.id" @click.prevent="getSortname(item.sortname)">
                        <router-link :to="{name:'CorporateServicesDetail',query:{sortid:item.id}}">{{item.sortname}}</router-link>
                    </li>
                </ul>
            </div>
            <div class="serviceContent">
                <div class="service_top">
                    <h2>{{sortname}}</h2>
                    <p>
                        <span>作者：为力小编</span>
                        <span>|</span>
                        <span>发布时间：{{list.time | formattime}}</span>
                        <span>|</span>
                        <span>{{list.views}}次浏览</span>
                    </p>
                </div>
                <div class="service_bottom" v-html="list.content"></div>
            </div>
        </div>
    </div>
    <!-- news content end -->
    </div>
</template>

<script>
import { category, list } from '../api/corporate_services'
import time from '../mixins/formattime'
export default {
  mixins: [time],
  data () {
    return {
      category: [],
      list: [],
      sortid: '',
      sortname: ''
    }
  },
  watch: {
    $route: {
      handler: function () {
        this.sortid = this.$route.query ? this.$route.query.sortid : ''
        this.listdata()
      },
      immediate: true
    }
  },
  mounted () {
    this.sort()
  },
  methods: {
    getSortname (e) {
      document.title = e + ' - ' + '南昌为力人力资源服务有限公司'
    },
    sort () {
      const params = { sortid: 14 }
      category(params).then((res) => {
        console.log(res)
        this.category = res.data.data
      })
    },
    listdata () {
      const params = { sortid: this.sortid }
      list(params).then((res) => {
        console.log(res)
        this.list = res.data.data
        this.sortname = res.data.sortname
      })
    }
  }
}
</script>

<style scoped>
a.router-link-exact-active{
    color: #fff;
    background-color: #008bd3;
}
.service_bottom>p.ql-align-center{
    text-align: center;
}
</style>
