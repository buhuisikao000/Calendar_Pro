<template>
  <div class="tab">
      <div 
      class="tab-item" 
      v-for='(item,index) in tabData'
      :key='index'
      >
          <tab-icon
          :iconText='item.iconText'
          :path='item.path'
          >{{ item.tabText }}</tab-icon>
      </div>
  </div>
</template>

<script>

import tabData from '@/data/tab.js'
import TabIcon from './TabIcon.vue'
import { reactive, toRefs } from 'vue'
export default {
    name:'Tab',
    components: { TabIcon },  
    setup () {
        const state = reactive({
            tabData
        })

        return {
            ...toRefs(state)
        }
    }
}
</script>

<style lang='scss' scoped>
.tab{
    display: flex;
    width: 100%;
    height:.44rem;
    background-color: #fff;
    border: 1px solid #ddd;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    .tab-item{
        font-size: .18rem;
        display: flex;
        justify-content: center;
        align-items: center ;
        flex: 1;
        height: 100%;
    }
}
</style>