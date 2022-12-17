<template>
    <div class="newInfo">
        <ul>
            <li v-for="item in industry" :key="item.id">
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
      industry: ''
    }
  },
  mounted () {
    this.corporateServices()
  },
  methods: {
    corporateServices () {
      home.list().then((res) => {
        console.log(res.data.industry)
        this.industry = res.data.industry
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
