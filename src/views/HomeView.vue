<template>
  <div>
    <TopNav></TopNav>
    <TopSwiper></TopSwiper>
    <IconList></IconList>
    <MusicialList></MusicialList>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/Home/TopNav.vue'
import TopSwiper from '@/components/Home/TopSwiper.vue'
import IconList from '@/components/Home/IconList.vue';
import MusicialList from '@/components/Home/MusicialList.vue';
export default {
  name: 'HomeView',
  components: {
    TopNav:TopNav,
    TopSwiper:TopSwiper,
    IconList:IconList,
    MusicialList:MusicialList
  }
}
</script>
