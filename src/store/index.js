import { createStore } from 'vuex'
import {getMusicLyric} from '@/request/api/item.js'
import { getPhoneLogin } from '@/request/api/home';
export default createStore({
  state: {
    playList:[{
      al: {
        id: 74674741,
        name: "生长",
        pic: 109951163733426030,
        picUrl: "https://p1.music.126.net/8rZiGb8K0zL75NnoVunnGg==/109951163733426036.jpg",
        pic_str: "109951163733426036",
      },
      id: 486999661,
      name: "莫妮卡",
      ar:[{
        name: "柳爽"
      }],
    }],
    playListIndex:0,
    isbtnShow:true,
    detailShow:false,
    lyricList:{

    },
    currentTime:0,
    duration:0,
    isLogin:false,
    isFooterMusic:true,
    user:{},

  },
  getters: {
  },
  mutations: {
    updateIsbtnShow:function(state,value){
      state.isbtnShow=value
    },
    pushPlayList:function(state,value){
      state.playList.push(value);
    }
    ,
    updatePlayList:function(state,value){
    state.playList=value;
    console.log(state.playList);
    },
    updatePlayListIndex:function(state,value){
      state.playListIndex=value;
    },
    updateDetailShow:function(state){
      state.detailShow=!state.detailShow
    },
    updateLyricList:function(state,value){
      state.lyricList=value
    },
    updateCurrentTime:function(state,value){
      //console.log(state.currentTime);
      state.currentTime=value;
    },
    updateDuration:function(state,value){
      state.duration=value;
    },
    updateIsLogin:function(state,value){
      state.isLogin=true;
    },
    updateToken:function(state,value){
      state.token=value;
      localStorage.setItem('token',state.token)
    }
  },
  actions: {
    getLyric:async function(context,value){
      let res =await getMusicLyric(value);
      console.log(res);
      context.commit("updateLyricList",res.data.lrc)
    },
    getLogin:async function(context,value){
      let res=await getPhoneLogin(value);
      //console.log(res);
    },
    updateUser:function(state,value){
      state.user=value;
    }
  },
  modules: {
  },
})
