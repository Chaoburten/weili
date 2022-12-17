<template>
  <div class="home">
    <!-- banner start -->
    <div class="banner" >
        <!-- Swiper -->
        <div class="swiper-container">
            <ul class="swiper-wrapper">
                <li class="swiper-slide" :style="'background-image: url('+pic+');'"></li>
                <li class="swiper-slide" :style="'background-image: url('+pic1+');'"></li>
                <li class="swiper-slide" :style="'background-image: url('+pic2+');'"></li>
            </ul>
            <!-- 分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
    <!-- banner end -->
    <!--news start  -->
    <div class="news ">
        <div class="clearfix">
            <div class="newTab">
                <ul>
                    <li>
                        <a href="" :class="{active:index==0}" @click.prevent @mouseover="show('News','/news?sortid=8',0)">公司动态</a>
                    </li>
                    <li>
                        <a href="" :class="{active:index==1}" @click.prevent @mouseover="show('Industry','/news?sortid=9',1)">行业快讯</a>
                    </li>
                    <span class="more">
                        <router-link :to="toPath">更多>></router-link>
                    </span>
                </ul>
                <keep-alive>
                    <component :is="name"></component>
                </keep-alive>
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
import * as recruiment_info from '../api/recruitment_info'
import seekerForm from '../mixins/seekerform'
import * as home from '../api/home'
import HomeNews from '../components/HomeNews.vue'
import HomeIndustry from '../components/HomeIndustry.vue'
import Swiper from 'swiper'
export default {
  components: { HomeNews, HomeIndustry },
  mixins: [seekerForm],
  data () {
    return {
      name: 'HomeNews',
      toPath: '/news?sortid=8',
      index: 0, // 默认选中第一个
      pic: require('../assets/images/banner_1.jpg'),
      pic1: require('../assets/images/banner_2.jpg'),
      pic2: require('../assets/images/banner_3.jpg'),
      recruitment_info: '',
      entservice: '',
      policy: ''
    }
  },
  mounted () {
    this.recruitmentInfo()
    this.corporateServices()
    new Swiper('.swiper-container', {
      // 切换效果
      effect: 'fade',
      fade: {
        crossFade: true // 过渡时，原slide透明度为1->0（淡出），过渡中的slide透明度从0->1（淡入）,其他slide透明度0
      },
      loop: true,
      //   分页器
      pagination: '.swiper-pagination',
      //   滑动速度，即slider自动滑动开始到结束的时间（单位ms），也是触摸滑动时释放至贴合的时间。
      speed: 1000,
      //   自动切换的时间间隔（单位ms），不设定该参数slide不会自动切换。
      autoplay: 1500
    })
  },
  methods: {
    show (name, toPath, index) {
      this.name = 'Home' + name
      this.toPath = toPath
      this.index = index
    },
    recruitmentInfo () {
      const params = { size: 6 }
      recruiment_info.list(params).then((res) => {
        this.recruitment_info = res.data.data
      })
    },
    corporateServices () {
      home.list().then((res) => {
        this.entservice = res.data.entservice
        this.policy = res.data.policy
      })
    }
  }
}
</script>
<style scoped>
.swiper-container{
  height: 500px;
  width: 100%;
}
.swiper-wrapper .swiper-slide{
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center top;
}
.swiper-pagination >>> .swiper-pagination-bullet{
    width: 15px;
    height: 15px;
    background-color: #d9d9d9;
    opacity: 0.6;
    border-radius: 15px;
    margin: 8px;
}
.swiper-pagination >>> .swiper-pagination-bullet-active{
    background-color: #000;
    opacity: 0.6;
}
.el-form-item {
    margin-bottom: 20px;
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
