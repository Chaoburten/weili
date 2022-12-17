<template>
  <div class="home">
    <!-- banner start -->
    <div class="banner">
        <ul>
            <li :style="'background-image: url('+pic+');'"></li>
            <li :style="'background-image: url('+pic1+');'"></li>
            <li :style="'background-image: url('+pic2+');'"></li>
            <!-- <li style="background-image: url('../assets/images/banner_2.jpg');"></li>
            <li style="background-image: url('../assets/images/banner_3.jpg');"></li> -->
        </ul>
        <span class="pre"></span>
        <span class="next"></span>
        <div class="dot">
            <li class="active"></li>
            <li></li>
            <li></li>
        </div>
    </div>
    <!-- banner end -->
    <!--news start  -->
    <div class="news ">
        <div class="clearfix">
            <div class="newTab">
                <ul>
                    <li>
                        <a href="" class="active">公司新闻</a>
                    </li>
                    <li>
                        <a href="">行业快讯</a>
                    </li>
                    <span class="more">
                        <a href="">更多>></a>
                    </span>
                </ul>
                <div class="newInfo">
                    <ul style="display: block;">
                        <li v-for="item in news" :key="item.id">
                            <router-link :to="{name:'NewsDetail',params:{id:item.id}}">
                                <img :src="item.pic" alt="">
                                <div>
                                    <h3>{{item.wl_name}} </h3>
                                    <p v-html="item.content"></p>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                    <ul>
                        <li v-for="item in industry" :key="item.id">
                            <router-link :to="{name:'NewsDetail',params:{id:item.id}}">
                                <img :src="item.pic" alt="">
                                <div>
                                    <h3>{{item.wl_name}} </h3>
                                    <p v-html="item.content"></p>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="newPolicy">
                <ul>
                    <li>
                        <a href="" @click.prevent>政策法规</a>
                    </li>
                    <span class="more">
                        <router-link to="/news?sortid=10">更多>></router-link>
                    </span>
                </ul>
                <div class="policy">
                    <ul>
                        <li v-for="item in policy" :key="item.id">
                            <router-link :to="{name:'NewsDetail',params:{id:item.id}}">· {{item.wl_name}}</router-link>
                        </li>
                    </ul>

                </div>
            </div>
            <div class="service">
                <ul>
                    <li>
                        <i class="icon"><i class="icon icon1 conCom"></i></i>
                        <a href="">社保查询</a>
                    </li>
                    <li>
                        <i class="icon"><i class="icon icon2 conCom"></i></i>
                        <a href="">公积金查询</a>
                    </li>
                    <li>
                        <i class="icon"><i class="icon icon3 conCom"></i></i>
                        <a href="">成绩查询</a>
                    </li>
                    <li>
                        <i class="icon"><i class="icon icon4 conCom"></i></i>
                        <a href="">学历提升</a>
                    </li>
                    <li>
                        <i class="icon"><i class="icon icon5 conCom"></i></i>
                        <a href="">招生简章</a>
                    </li>
                    <li>
                        <i class="icon"><i class="icon icon6 conCom"></i></i>
                        <a href="">网上报名</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- news end -->
    <!-- recruitment start -->
    <div class="recruitment">
        <div>
            <div class="recruitment_top">
                <h2>招聘求职</h2>
                <p>江西为力人力资源服务有限公司为企业提供最好、最专业的服务外包、招聘猎头、员工福利和 人事服务等相关人力资源解决方案</p>
            </div>
            <div class="clearfix">
                <div class="recruitment_info">
                    <ul class="clearfix">
                        <li>招聘信息</li>
                        <span class="more">
                            <router-link to="/recruitment_info">更多>></router-link>
                        </span>
                    </ul>
                    <div>
                        <img src="@/assets/images/recruitInfo.jpg" alt="">
                        <ul>
                            <li v-for="item in recruitment_info" :key="item.id">
                                <router-link :to="{name:'RecruitmentInfoDetail',params:{id:item.id}}">
                                    <h6>{{item.wl_name}}</h6>
                                    <p>{{item.job}}</p>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="recruitment_info seekJob">
                    <ul>
                        <li>在线求职</li>
                    </ul>
                    <div>
                        <el-form :model="ruleForm" :rules="rules" :hide-required-asterisk="true" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="姓名:" prop="username">
                                <el-input v-model="ruleForm.username"></el-input>
                            </el-form-item>
                            <el-form-item label="性别:" prop="sex">
                                <el-radio-group v-model="ruleForm.sex">
                                <el-radio label="男"></el-radio>
                                <el-radio label="女"></el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="手机号码:" prop="phone">
                                <el-input v-model="ruleForm.phone"></el-input>
                            </el-form-item>
                            <el-form-item label="意向工作:" prop="content">
                                <el-input v-model="ruleForm.content"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitForm('ruleForm')">提 交</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- recruitment end -->
    <!-- coreService start -->
    <div class="coreService">
        <div>
            <div class="recruitment_top">
                <h2>核心服务</h2>
                <p>江西为力人力资源服务有限公司为企业提供最好、最专业的服务外包、招聘猎头、员工福利和 人事服务等相关人力资源解决方案</p>
            </div>
            <div class="clearfix">
                <div class="core" v-for="item in entservice" :key="item.id">
                    <router-link :to="{path:'/corporate_services_detail',query:{sortid:item.sortid}}">
                        <img :src="item.pic" alt="">
                        <h3>{{item.sortname}}</h3>
                        <p v-html="item.content"></p>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <!-- coreService end -->
  </div>
</template>

<script>
import $ from 'jquery'
import * as recruiment_info from '../api/recruitment_info'
import seekerForm from '../mixins/seekerform'
import * as home from '../api/home'
export default {
  mixins: [seekerForm],
  data () {
    return {
      pic: require('../assets/images/banner_1.jpg'),
      pic1: require('../assets/images/banner_2.jpg'),
      pic2: require('../assets/images/banner_3.jpg'),
      recruitment_info: '',
      entservice: '',
      policy: '',
      news: '',
      industry: ''
    }
  },
  mounted () {
    this.recruitmentInfo()
    this.corporateServices()
  },
  methods: {
    recruitmentInfo () {
      const params = { size: 6 }
      recruiment_info.list(params).then((res) => {
        console.log(res)
        this.recruitment_info = res.data.data
      })
    },
    corporateServices () {
      home.list().then((res) => {
        console.log(res)
        this.entservice = res.data.entservice
        this.policy = res.data.policy
        this.news = res.data.news
        this.industry = res.data.industry
      })
    }
  }
}

$(function () {
  // banner start
  var index = 0
  var len = $('.banner>ul>li').length
  // 前一页
  $('.pre').on('click', function () {
    index--
    if (index < 0) {
      index = len - 1
    }
    // 点击的这一张显示，其余的隐藏
    $('.banner>ul>li').eq(index).fadeIn().siblings().fadeOut()
    $('.dot>li').eq(index).addClass('active').siblings().removeClass('active')
  })
  // 后一页
  $('.next').on('click', function () {
    index++
    if (index > len - 1) {
      index = 0
    }
    $('.banner>ul>li').eq(index).fadeIn().siblings().fadeOut()
    $('.dot>li').eq(index).addClass('active').siblings().removeClass('active')
  })

  function auto () {
    $('.next').click()
  }
  // // 计时
  setInterval(auto, 3000)
  // banner end

  // news tab start
  $(document).on('mouseenter', '.newTab>ul>li', function () {
    const index = $(this).index()
    $(this).children('a').addClass('active')
    $(this).siblings().children('a').removeClass('active')
    $('.newInfo>ul').eq(index).show().siblings().hide()
  })
  // news tab end
})
</script>
<style scoped>
.el-form-item {
    margin-bottom: 8px;
}
::v-deep .el-form-item__content {
    margin-left: 80px !important;

}
.el-button--primary {
    width: 139px;
    font-size: 16px;
    background-color: #008BD3;
    border-color: #008BD3;
}
.el-input {
    width: 322px;
}
::v-deep .el-form-item__label{
width: 80px !important;
}
::v-deep .el-radio__input .el-radio__inner {
    display: inline-block;
    width: 20px;
    height: 20px;
}
</style>
