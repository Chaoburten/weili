import AboutusMainTop from '../components/AboutusMainTop.vue'
export default {
  components: { AboutusMainTop },
  data () {
    return {
      aboutus: [],
      sortname: ''
    }
  },
  mounted () {
    this.listdata()
  }
}
