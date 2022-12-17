<template>
    <div>
        <div class="mainTop">
            <h2>员工服务</h2>
            <img src="@/assets/images/arrow.png" alt="">
            <p>提供最有价值的人力资源服务和解决方案，持续为客户创造最大价值</p>
            <ul class="clearfix">
                <li v-for="item in category" :key="item.id" @click.prevent="getSortname(item.sortname)">
                    <router-link :to="{name:'StaffServices',query:{sortid:item.id}}" :class="{focus:item.id==sortid}">{{item.sortname}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { category } from '../api/staff_services'
import maintop from '../mixins/maintop'
export default {
  props: ['sortid'],
  mixins: [maintop],
  methods: {
    sort () {
      const params = { sortid: 22 }
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
