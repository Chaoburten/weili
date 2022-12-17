<template>
  <div class="about">

    <!-- banner start -->
    <div class="aboutusBanner comBanner"></div>
    <!-- banner end -->

    <!-- aboutUs content start -->
    <div class="main">
        <div>
            <aboutus-main-top></aboutus-main-top>

            <div class="companyProfile clearfix" v-for="item in aboutus" :key="item.id">
              <img :src="item.pic" alt="">
              <div>
                  <h2><span>{{sortname}}</span></h2>
                  <p v-html="item.content"></p>
              </div>
            </div>

        </div>
    </div>
    <!-- aboutUs content end -->
  </div>
</template>
<script>
import { list } from '../api/aboutus_1'
import aboutus from '../mixins/aboutus'
export default {
  mixins: [aboutus],
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

</script>
