<template>
  <div class="IconList">
    <div class="IconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tuijian"></use>
      </svg>
      <span>每日推荐</span>
    </div>
    <div class="IconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zhibo"></use>
      </svg>
      <span>私人fm</span>
    </div>
    <div class="IconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gedan"></use>
      </svg>
      <span>推荐歌单</span>
    </div>
    <div class="IconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-paihangbang"></use>
      </svg>
      <span>排行榜</span>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .IconList{
    width:100%;
    height:2rem;
    margin-top: 10px;
    display: flex;
    justify-content:space-around;
    align-items:center;
    .IconItem{
      width: 25%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon{
        width: 1rem;
        height: 1rem;
      }
    }
  }


</style>