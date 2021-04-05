<template>
  <div class="container">
      <card :data = 'data'/>
      <detail-list :data = 'data'
      />
  </div>
</template>

<script>
import { getDayData } from '@/services/request.js'
import { getCurrentDate } from '@/libs/utils'
import { onMounted, reactive, toRefs, watch,  } from 'vue'

import Card from '@/components/DayPage/Card.vue'
import DetailList from '@/components/DayPage/DetailList.vue'
import { useStore } from 'vuex'
export default {
    name: 'DayPage',
    components:{
      Card,
      DetailList
    },
    setup () {
      const currentDate = getCurrentDate()
      const state = reactive({
        data: '' 
      })
      const store = useStore()
      onMounted(() => {
        getDayData(currentDate)
        .then(res => {
            state.data = res.result.data
          })
      })
      watch (() => {
          return store.state.searchdate
      }, (searchdate) => {
          getDayData(searchdate)
        .then(res => {

            state.data = res.result.data
          })
      })

      return {
        ...toRefs(state),
      }
    }
 
}
</script>

<style lang='scss' scoped>
</style>