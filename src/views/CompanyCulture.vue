<template>
  <div class="about">

    <!-- banner start -->
    <div class="aboutusBanner comBanner"></div>
    <!-- banner end -->

    <!-- aboutUs content start -->
    <div class="main">
        <div>
            <aboutus-main-top></aboutus-main-top>

            <div class="companyCulture" v-for="item in aboutus" :key="item.id">
                <h2 class="comtitle">{{sortname}}<span></span></h2>
                <div>
                    <div v-html="item.content"></div>
                    <img :src="item.pic" alt="">
                </div>
            </div>

        </div>
    </div>
    <!-- aboutUs content end -->
  </div>
</template>
<script>
import { list } from '../api/company_culture'
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
