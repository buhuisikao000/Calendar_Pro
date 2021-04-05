<template>
  <div id="app">
    <my-header>{{ state.headerTitle }}</my-header>
    <search-input
    :placeholder="state.placeholder"
    :maxlength='state.maxlength'
    ></search-input>
    <router-view/>

    <tab/>
  </div> 
</template>

<script>
import MyHeader from '@/components/Header'
import Tab from '@/components/Tab'
import SearchInput from '@/components/Searchinput'

import { useStore } from 'vuex'
import { computed, watch } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name:'app',
  components:{
    MyHeader,
    Tab,
    SearchInput
  },
  setup () {
    const store = useStore(),
          router = useRouter()
    
    router.push('/')

    watch (() => {
      return router.currentRoute.value.name
    }, (value) => {
      store.commit('setHeaderTitle', value)
      store.commit('setPlaceHolder', value)
      store.commit('setMaxLength', value)
    })



    return {
      state:computed(() => store.state)
  
    }
    
    
  }
}
</script>
