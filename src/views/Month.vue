<template>
  <div class="container">
      <month-card
      :data='data'
      ></month-card>
  </div>
</template>

<script>
import { getMonthData } from '@/services/request.js'
import { getCurrentMonth } from '@/libs/utils.js'
import { onMounted, reactive, toRefs, watch } from 'vue'
import MonthCard from '@/components/MonthPage/MonthCard.vue'
import { useStore } from 'vuex'
export default {
    name: 'MonthPage',
    components:{
      MonthCard
    },
    setup (props) {
      const state = reactive({
        data: []
      })

      const store = useStore()

      const currentMonth = getCurrentMonth()
      onMounted(() => {
        getMonthData(currentMonth)
        .then(res => {
          state.data = res.result.data.holiday_array
        })
      })

      watch (() => {
          return store.state.searchdate
      }, (searchdate) => {
          getMonthData(searchdate)
        .then(res => {
            state.data = res.result.data.holiday_array
          })
      })

      return {
        ...toRefs(state)
      }
    }
}

</script>

<style lang='scss' scoped>

</style>