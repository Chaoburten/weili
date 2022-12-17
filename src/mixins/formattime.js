import time from '../utils/formattime'
const formattime = {
  filters: {
    yearAndMonth (v) {
      return time.formatimestamp('Y-m', v)
    },
    day (v) {
      return time.formatimestamp('d', v)
    },
    formattime (v) {
      return time.formatimestamp('Y-m-d', v)
    },
    time (v) {
      return time.formatimestamp('Y-m-d H:i:s', v)
    }
  }
}
export default formattime
