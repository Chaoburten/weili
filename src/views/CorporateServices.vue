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
            </div>
            <div class="service_list">
                <ul>
                    <li>
                        <a href="">
                            <img src="@/assets/images/outsource.jpg" alt="">
                            <p>服务外包</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="@/assets/images/dispatch.jpg" alt="">
                            <p>劳务派谴</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="@/assets/images/flexibleEmployment.jpg" alt="">
                            <p>灵活用工</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="@/assets/images/agency.jpg" alt="">
                            <p>人事代理</p>
                        </a>
                    </li>
                    <li>
                        <a href=""><img src="@/assets/images/training.jpg" alt="">
                            <p>人才培训</p>
                        </a>
                    </li>
                    <li>
                        <a href=""><img src="@/assets/images/rectuit.jpg" alt="">
                            <p>人才招聘</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- news content end -->
    </div>
</template>

<script>
import $ from 'jquery'
import { category } from '../api/corporate_services'
export default {
  data () {
    return {
      category: []
    }
  },
  methods: {
    sort () {
      category().then((res) => {
        console.log(res)
        this.category = res.data.data
      })
    }
  }
}
$(function () {
  $('.service_list>ul>li').hover(function () {
    $(this).find('p').stop().fadeIn(1000)
  }, function () {
    $(this).find('p').fadeOut(500)
  })
})
</script>

<style scoped>
.ql-align-center{
  text-align: center;
}
</style>
