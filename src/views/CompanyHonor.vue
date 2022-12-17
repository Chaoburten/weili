<template>
  <div class="about">

    <!-- banner start -->
    <div class="aboutusBanner comBanner"></div>
    <!-- banner end -->

    <!-- aboutUs content start -->
    <div class="main">
        <div>
            <aboutus-main-top></aboutus-main-top>

            <div class="companyHonor">
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
import { list } from '../api/company_honor'
import aboutus from '../mixins/aboutus'
var len = 0
export default {
  mixins: [aboutus],
  watch: {
    aboutus () {
      len = this.aboutus.length
    }
  },
  methods: {
    listdata () {
      list().then((res) => {
        console.log(res)
        this.aboutus = res.data.data
        this.sortname = res.data.sortname
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
