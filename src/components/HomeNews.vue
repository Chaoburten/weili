<template>
    <div class="newInfo">
        <ul>
            <li v-for="item in news" :key="item.id">
                <router-link :to="{name:'NewsDetail',params:{id:item.id}}">
                    <img :src="item.pic" alt="">
                    <div>
                        <h3>{{item.wl_name}} </h3>
                        <p v-html="item.list_show"></p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import * as home from '../api/home'
export default {
  data () {
    return {
      news: ''
    }
  },
  mounted () {
    this.corporateServices()
  },
  methods: {
    corporateServices () {
      home.list().then((res) => {
        this.news = res.data.news
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
