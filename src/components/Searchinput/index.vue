<template>
  <div class="search-wrap">
      <input 
      class="inputbox"
      type="text"
      :placeholder="placeholder"
      :maxlength='maxlength'
      v-model="inputValue"
      >
      <button class="button"
      @click='searchData(inputValue)'
      >></button>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { updateDate } from '@/libs/utils.js'
import { useStore } from 'vuex'
export default {
    name:'SearchInput',
    props:{
        placeholder:String,
        maxlength:Number
    },
    setup () {
        let state = reactive({
            inputValue: ''
        })
   
        const store = useStore()
        const searchData = (searchData) => {
            searchData=updateDate(searchData)
            store.commit('setSearchDate',searchData) 
            state.inputValue=''
        }
        
        return {
            ...toRefs(state),
            searchData,
        }
    }
}
</script>

<style lang='scss' scoped>
.search-wrap{
    position: fixed;
    top: .45rem;
    left: 0;
    z-index: 1;
    width: 100%;
    height: .38rem;
    padding: .05rem .1rem;
    border: 1px solid #ddd;
    box-sizing: border-box;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    .inputbox{
        width: 100%;
        height: 100%;
        font-size: .14rem;
        border: 1px solid #ddd;
        text-indent: .1rem;
        border-radius: .03rem;

        &.focus{
            border-color: #ed4040;
            box-shadow: 0 0 .02rem #ed4040;
            transition: all .3s;
        }
    }
    .button{
        outline: none;
        border: none;
        height: 80%;
        background-color: transparent;
        position: absolute;
        right: .1rem;
        color: #ccc;
    }
}

</style>