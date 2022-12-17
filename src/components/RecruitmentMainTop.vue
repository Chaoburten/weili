<template>
    <div>
        <div class="mainTop">
                <h2>求职招聘</h2>
                <img src="@/assets/images/arrow.png" alt="">
                <p>提供最有价值的人力资源服务和解决方案，持续为客户创造最大价值</p>
                <ul class="clearfix">
                    <li>
                        <router-link to="/recruitment_info" :class="{focus:topath=='/recruitment_info'}">招聘信息</router-link>
                    </li>
                    <li>
                        <router-link to="/jobseeker">在线求职</router-link>
                    </li>
                    <li v-for="item in category" :key="item.id" @click.prevent="getSortname(item.sortname)">
                      <router-link :to="{path:'/recruitment',query:{sortid:item.id}}" :class="{focus:item.id==cid}">{{item.sortname}}</router-link>
                    </li>
                </ul>
            </div>
    </div>
</template>

<script>
import { category } from '../api/recruitment'
import maintop from '../mixins/maintop'
export default {
  props: ['cid', 'topath'],
  mixins: [maintop],
  data () {
    return {
      sortid: ''
    }
  },
  methods: {
    sort () {
      const params = { sortid: 29 }
      category(params).then((res) => {
        console.log(res)
        this.category = res.data.data
      })
    }
  }
}
</script>

<style scoped>
a.router-link-exact-active {
    color: #fff;
    background-color: #008bd3;
}
</style>
