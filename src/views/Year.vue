<template>
  <div class="container">
      <year-card :data='data'></year-card>
  </div>
</template>

<script>
import { getYearData } from '@/services/request.js'
import { getCurrentYear } from '@/libs/utils.js'
import { reactive, toRefs, onMounted, watch } from 'vue'
import YearCard from '@/components/YearPage/YearCard.vue'
import { useStore } from 'vuex'

export default {
    name: 'YearPage',
    components: {
      YearCard
    },
    setup () {
      const currentYear = getCurrentYear()
      const store = useStore()
      const state = reactive({
        data: ''
      })

      onMounted(() => {
        getYearData(currentYear)
        .then(res => {
          state.data = res.result.data.holiday_list
        })
      })

      watch (() => {
          return store.state.searchdate
      }, (searchdate) => {
          getYearData(searchdate)
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