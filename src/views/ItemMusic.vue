<template>
  <ItemMusicTop :playlist="state.playlist"/>
  <ItemMusicList :itemList="state.itemList" :subscribedCount="state.playlist.subscribedCount"/>
</template>
<script>
import { useRoute } from 'vue-router';
import { onMounted,reactive } from 'vue';
import {getMusicItemList,getItemList} from '../request/api/item.js';
import {ItemMusicTop} from'../components/item/ItemMusicTop.vue'
import ItemMusicListVue, {ItemMusicList} from'../components/item/ItemMusicList.vue'
export default{
    setup() {
        const state = reactive({
            playlist: {},//歌单的详情页的数据
            itemList: [],//歌单的歌曲
        });
        onMounted(async () => {
            let id = useRoute().query.id;
            //获取歌单详情页
            let res = await getMusicItemList(id);
            
            //获取歌单数据
            let result = await getItemList(id);
            console.log(result);
            state.playlist = res.data.playlist;
            state.itemList=result.data.songs;
        });
        return { state };
    },
    components: { ItemMusicListVue }
}
</script>