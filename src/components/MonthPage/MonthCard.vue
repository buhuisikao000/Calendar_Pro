<template>
  <div class="card-warpper"
  v-for="(item,index) in data"
  :key='index'
  >
      <div class="card">
            <h1 class="text lunar">
              {{ item.name }}
             
            </h1>
            <h2 class="text date">
              {{ item.festival }}
           
            </h2>
            <div class="dcs">
                {{ item.desc }}
              
            </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'MonthCard', 
    props: {
        data:Array
    },
}
</script>

<style lang='scss' scoped>
.card-warpper {
    padding: .15rem;
    box-sizing: border-box;
    height: 2.8rem;
    .card {
        background: url('~@/assets/img-bg.jpg') no-repeat center/cover;
        height: 100%;
        border-radius: .15rem;
        overflow: hidden;
        border: 1px solid #ddd;
        color: #fff;
        position: relative;

        .text {
            text-align: center;
            margin:  .3rem 0;
            text-shadow: .02rem .05rem .05rem #666;

            &.lunar {
                color: #f75555;
                font-size:  .5rem;
                font-weight: bold;
            }

            &.date {
                font-size: .2rem;
            }
        }

        .dcs{
            width: 100%;
            height: .7rem;
            background: rgba($color: #000000, $alpha: .5);
            position: absolute;
            bottom: 0;
            font-size: .14rem;
            line-height: .14rem;
            box-sizing: border-box;
            padding: .1rem;
        }
    }
}
</style>