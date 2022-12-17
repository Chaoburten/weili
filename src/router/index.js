import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // 首页
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '南昌为力人力资源服务有限公司',
      content: {
        keywords: '服务外包，代招聘，招聘流程外包（HR）外包',
        description: '主营人力资源服务外包，代招聘，招聘流程外包（HR外包）'
      }
    }
  },
  // 关于我们
  {
    path: '/aboutus',
    name: 'Aboutus',
    component: () => import('../views/Aboutus.vue'), // 懒加载方式
    meta: { title: '关于我们' }
  },
  {
    path: '/aboutus_1',
    name: 'Aboutus_1',
    component: () => import('../views/Aboutus_1.vue'),
    meta: { title: '关于我们' }
  },
  {
    path: '/company_culture',
    name: 'CompanyCulture',
    component: () => import('../views/CompanyCulture.vue'),
    meta: { title: '企业文化' }
  },
  {
    path: '/company_honor',
    name: 'CompanyHonor',
    component: () => import('../views/CompanyHonor.vue'),
    meta: { title: '荣誉资质' }
  },
  // 新闻资讯
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/News.vue'),
    meta: { title: '新闻资讯' }
  },
  {
    path: '/news/:id',
    name: 'NewsDetail',
    component: () => import('../views/NewsDetail.vue'),
    meta: { title: '' }
  },
  // 企业服务
  {
    path: '/corporate_services',
    name: 'CorporateServices',
    component: () => import('../views/CorporateServices.vue'),
    meta: { title: '企业服务' }
  },
  {
    path: '/corporate_services_detail',
    name: 'CorporateServicesDetail',
    component: () => import('../views/CorporateServicesDetail.vue'),
    meta: { title: '企业服务' }
  },
  // 员工服务
  {
    path: '/staff_services',
    name: 'StaffServices',
    component: () => import('../views/StaffServices.vue'),
    meta: { title: '员工服务' }
  },
  {
    path: '/staff_services/:id',
    name: 'StaffServicesDetail',
    component: () => import('../views/StaffServicesDetail.vue'),
    meta: { title: '员工服务' }
  },
  // 求职招聘
  {
    path: '/recruitment_info',
    name: 'RecruitmentInfo',
    component: () => import('../views/RecruitmentInfo.vue'),
    meta: { title: '招聘信息' }
  },
  {
    path: '/recruitment_info/:id',
    name: 'RecruitmentInfoDetail',
    component: () => import('../views/RecruitmentInfoDetail.vue'),
    meta: { title: '招聘信息' }
  },
  {
    path: '/jobseeker',
    name: 'JobSeeker',
    component: () => import('../views/JobSeeker.vue'),
    meta: { title: '在线求职' }
  },
  {
    path: '/recruitment',
    name: 'Recruitment',
    component: () => import('../views/Recruitment.vue'),
    meta: { title: '求职招聘' }
  },
  {
    path: '/recruitment/:id',
    name: 'RecruitmentDetail',
    component: () => import('../views/RecruitmentDetail.vue'),
    meta: { title: '' }
  },
  {
    path: '/contactus',
    name: 'Contactus',
    component: () => import('../views/Contactus.vue'),
    meta: { title: '联系我们' }
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('../views/Message.vue'),
    meta: { title: '在线留言' }
  },
  {
    path: '/download_center',
    name: 'DownloadCenter',
    component: () => import('../views/DownloadCenter.vue'),
    meta: { title: '下载中心' }
  }

]

const router = new VueRouter({
  routes
})

export default router
