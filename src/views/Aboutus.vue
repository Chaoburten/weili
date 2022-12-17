<template>
  <div class="about">

    <!-- banner start -->
    <div class="aboutusBanner comBanner"></div>
    <!-- banner end -->

    <!-- aboutUs content start -->
    <div class="main">
        <div>
            <div class="mainTop">
                <h2>关于我们</h2>
                <img src="@/assets/images/arrow.png" alt="">
                <p>坚持开源，不断创新</p>
                <ul class="clearfix">
                    <li v-for="item in category" :key="item.id">
                        <router-link :to="{name:'Aboutus',query:{sortid:item.id}}">{{item.sortname}}</router-link>
                    </li>
                </ul>
            </div>

            <template>
              <div v-for="item in aboutus" :key="item.id">
                <div class="companyProfile clearfix" v-if="sortid==4">
                  <img :src="item.pic" alt="">
                  <div>
                      <h2><span>{{sortname}}</span></h2>
                      <p v-html="item.content"></p>
                  </div>
                </div>

                <div class="companyCulture" v-if="sortid==5">
                    <h2 class="comtitle">{{sortname}}<span></span></h2>
                    <div>
                        <div v-html="item.content"></div>
                        <img :src="item.pic" alt="">
                    </div>
                </div>

              </div>

            </template>
            <div class="companyHonor" v-if="sortid==6">
              <h2 class="comtitle">{{sortname}}<span></span></h2>
              <div>
                  <div class="honorList">
                      <ul class="clearfix">
                          <li v-for="item in aboutus" :key="item.id"><img :src="item.pic" alt=""></li>
                      </ul>
                  </div>
                  <div class="lr">
                      <span class="l"><img src="@/assets/images/l_arrow.jpg" alt=""></span>
                      <span class="r"><img src="@/assets/images/r_arrow.jpg" alt=""></span>
                  </div>
              </div>
            </div>
        </div>
    </div>
    <!-- aboutUs content end -->
  </div>
</template>
<script>
import $ from 'jquery'
import { category, list } from '../api/aboutus'
var len = 0
export default {
  data () {
    return {
      aboutus: [],
      category: [],
      sortid: '',
      sortname: ''
    }
  },
  watch: {
    aboutus () {
      this.arrlen = this.aboutus.length
      len = this.aboutus.length
    },
    // $route () {
    //   // query  ?sortid=XXX访问的数据  this.$route.query.sortid得到sortid的值
    //   console.log(this.$route.query)
    //   this.sortid = this.$route.query ? this.$route.query.sortid : ''
    //   this.listdata() // 对路由变化作出响应  刷新列表
    // }
    // 侦听路由的变化
    $route: {
      handler: function () {
        this.sortid = this.$route.query ? this.$route.query.sortid : ''
        this.listdata()
      },
      // 立即执行  该回调将会在侦听开始之后被立即调用
      immediate: true
    }
  },
  mounted () {
    this.sort()
  },
  methods: {
    listdata () {
      const params = { sortid: this.sortid }
      list(params).then((res) => {
        console.log(res)
        this.aboutus = res.data.data
        this.sortname = res.data.sortname
      })
    },
    sort () {
      const params = { sortid: 3 }
      category(params).then((res) => {
        console.log(res)
        this.category = res.data.data
      })
    }
  }
}
$(function () {
  // banner start
  var index = 0
  $(document).on('mouseenter', '.honorList>ul>li', function () {
    $(this).css({
      transform: 'scale(1.1)',
      transition: 'all 1s'
    })
  })
  $(document).on('mouseleave', '.honorList>ul>li', function () {
    $(this).css('transform', 'scale(1)')
  })

  // 后一页
  // $('.r').on('click', function () {
  $(document).on('click', '.r', function () {
    index++
    console.log(len)
    var pos = $('.honorList>ul>li').eq(index).position()
    // console.log("后一页" + index);
    // console.log(pos.left);
    $('.honorList>ul').css({
      left: -(pos.left),
      transition: 'all .5s'
    })
    if (index >= len - 2) {
      $('.honorList>ul').css({
        left: 0,
        transition: 'all .5s'
      })
      index = 0
    }
  })
  // 前一页
  $('.l').on('click', function () {
    index--
    if (index < 0) {
      index = len - 3
    }
    var pos = $('.honorList>ul>li').eq(index).position()
    // console.log("前一页" + index);
    // console.log(pos.left);
    $('.honorList>ul').css({
      left: -pos.left,
      transition: 'all .5s'
    })
  })

  function auto () {
    $('.r').click()
  }
  // 计时
  setInterval(auto, 3000)
  // banner end
})
</script>
<style scoped>
a.router-link-exact-active{
    color: #fff;
    background-color: #008bd3;
}
</style>
