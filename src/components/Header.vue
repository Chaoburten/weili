<template>
    <div>
        <!-- top start -->
    <div class="top">
        <div>
            <div class="logo">
                <img :src="list.pic" alt="">
            </div>
            <div class="top_right">
                <div class="search clearfix">
                    <p>全国热线：<a href="">{{list.phone}}</a></p>
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
                        <el-form-item prop="keyword">
                            <el-input v-model="ruleForm.keyword" placeholder="请输入搜索关键词"></el-input>
                            <router-link :to="{path:'/news',query:{keyword:ruleForm.keyword}}" class="sub">
                                <img src="@/assets/images/sou.png" alt="">
                            </router-link>
                        </el-form-item>
                    </el-form>
                </div>
                <ul class="nav">
                    <li @click="focus('')">
                        <router-link to="/" :class="{active:topath==''}">网站首页</router-link>
                    </li>
                    <!-- <li>
                        <router-link to="/aboutus?sortid=4">关于我们</router-link>
                        <ul>
                            <li>
                                <router-link to="/aboutus?sortid=4">公司简介</router-link>
                            </li>
                            <li>
                                <router-link to="/aboutus?sortid=5">企业文化</router-link>
                            </li>
                            <li>
                                <router-link to="/aboutus?sortid=6">荣誉资质</router-link>
                            </li>
                        </ul>
                    </li> -->
                    <li @click="focus('/aboutus_1')">
                        <router-link to="/aboutus_1" :class="{active:['/aboutus_1','/company_culture','/company_honor'].includes(topath)}">关于我们</router-link>
                        <ul>
                            <li>
                                <router-link to="/aboutus_1">公司简介</router-link>
                            </li>
                            <li>
                                <router-link to="/company_culture">企业文化</router-link>
                            </li>
                            <li>
                                <router-link to="/company_honor">荣誉资质</router-link>
                            </li>
                        </ul>
                    </li>
                    <li @click="focus('/news')">
                        <router-link to="/news" :class="{active:topath=='/news'}">新闻资讯</router-link>
                        <ul>
                            <li v-for="item in news" :key="item.id" @click.prevent="getSortname(item.sortname)">
                                <router-link :to="{path:'/news',query:{sortid:item.id}}">{{item.sortname}}</router-link>
                            </li>
                        </ul>
                    </li>
                    <li @click="focus('/corporate_services_detail')">
                        <router-link to="/corporate_services_detail?sortid=15" :class="{active:topath=='/corporate_services_detail'}">企业服务</router-link>
                        <ul>
                            <li v-for="item in entservice" :key="item.id" @click.prevent="getSortname(item.sortname)">
                                <router-link :to="{path:'/corporate_services_detail',query:{sortid:item.id}}">{{item.sortname}}</router-link>
                            </li>
                        </ul>
                    </li>
                    <li @click="focus('/staff_services')">
                        <router-link to="/staff_services" :class="{active:topath=='/staff_services'}">员工服务</router-link>
                        <ul>
                            <li v-for="item in job" :key="item.id" @click.prevent="getSortname(item.sortname)">
                                <router-link :to="{path:'/staff_services',query:{sortid:item.id}}">{{item.sortname}}</router-link>
                            </li>
                        </ul>
                    </li>
                    <li @click="focus('/recruitment_info')">
                        <router-link to="/recruitment_info" :class="{active:['/recruitment_info','/jobseeker','/recruitment'].includes(topath)}">求职招聘</router-link>
                    </li>
                    <li @click="focus('/contactus')">
                        <router-link to="/contactus" :class="{active:['/contactus','/message'].includes(topath)}">联系我们</router-link>
                        <ul>
                            <li>
                                <router-link to="/contactus">联系我们</router-link>
                            </li>
                            <li>
                                <router-link to="/message">在线留言</router-link>
                            </li>
                        </ul>
                    </li>
                    <li @click="focus('/download_center')">
                        <router-link to="/download_center" :class="{active:topath=='/download_center'}">下载中心</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- top end -->
    </div>
</template>

<script>
import sysset from '../mixins/sysset'
import { category } from '../api/news'
import page from '../mixins/page'
export default {
  mixins: [sysset, page],
  data () {
    return {
      ruleForm: {},
      news: [],
      entservice: [],
      job: [],
      rules: {},
      topath: ''
    }
  },
  mounted () {
    this.newsList()
    this.entserviceList()
    this.jobList()
  },
  watch: {
    $route: {
      handler: function () {
        // 通过对比路由是否一致来添加导航栏样式
        this.topath = '/' + this.$route.path.split('/')[1]
      }
    }
  },
  methods: {
    focus (i) {
      this.topath = i
    },
    getSortname (e) {
      document.title = e + ' - ' + '南昌为力人力资源服务有限公司'
    },
    newsList () {
      const params = { sortid: 7 }
      category(params).then((res) => {
        // console.log(res)
        this.news = res.data.data
      })
    },
    entserviceList () {
      const params = { sortid: 14 }
      category(params).then((res) => {
        // console.log(res)
        this.entservice = res.data.data
      })
    },
    jobList () {
      const params = { sortid: 22 }
      category(params).then((res) => {
        // console.log(res)
        this.job = res.data.data
      })
    }
  }
}
</script>

<style scoped>
/* a.router-link-exact-active:not(.sub){
    color: #fff;
    background-color: #008bd3;
} */
::v-deep .el-form-item__content {
    line-height: 34px !important;
}
</style>
