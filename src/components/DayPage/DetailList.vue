<template>
  <div class="detail-List">
    <div class="detail-items">
      <div class="title">当前日期</div>
      <div class="describ">{{ data.date }}</div>
    </div>
    <div class="detail-items">
      <div class="title">今年属相</div>
      <div class="describ">{{ data.animalsYear }}</div>
    </div>
    <div class="detail-items">
      <div class="title">农历年份</div>
      <div class="describ">{{ data.lunarYear }}</div>
    </div>
    <div class="detail-items">
      <div class="title">事宜事件</div>
      <div class="describ">{{ data.suit }}</div>
    </div>
    <div class="detail-items">
      <div class="title">避免事件</div>
      <div class="describ">{{ data.avoid }}</div>
    </div>
  </div>
</template>

<script>

export default {
    name:'DetailList',
    props:{
        data:Object
    }
   
}
</script>

<style lang='scss' scoped>
.detail-List{
  padding: .15rem;
  box-sizing: border-box;
  font-size: .15rem;
  .detail-items{
    height: .4rem;
    box-sizing: border-box;
    padding: .1rem .15rem;
    border: 1px solid #ddd;
    border-radius: .13rem;
    margin-bottom: .17rem;
    display: flex;

    .title{
      color: red;
      white-space:nowrap;
    }

    .describ{
      padding-left: .2rem;
      white-space:nowrap;
      overflow: hidden;
      text-overflow:ellipsis;
    }
  }
}
</style>