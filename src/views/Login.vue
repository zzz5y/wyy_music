<template>
  <div class="bbox">
    <div class="top">
      <button class="but" @click="login">登录</button>
    </div>
    <div class="mid">
      <div class="left">
        <img
          src="
          https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9643571155/525c/faac/2dc6/fe695c03c7c358ddaa4651736b26a55f.png"
          alt=""
        />
      </div>
      <div class="right">
        <div class="rightt">扫码登陆</div>
        <img :src="qrimgs" alt="" style="width: 200px; height: 200px" />
        <div class="rightb">
          使用&nbsp;<a
            href="https://music.163.com/#/download"
            style="color: skyblue"
            >网易云app</a
          >
          扫码登录
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import {
  qrCodeLoginKey,
  qrCodeLoginImg,
  qrCodeLoginCheck,
} from '@/request/api/login.js'
import router from 'vue'
import { useStore } from 'vuex'
import { onMounted } from 'vue'
const store = useStore()

export default {
  setup() {
    const unikey = ref('')
    const qrurl = ref('')
    const qrimgs = ref('')
    const qrCheckData = ref({})
    const isLogin = ref(false)

    onMounted(async () => {
      await initQrimgs() // 初始化二维码
    })

    const login = async () => {
      let nowtime = Date.now()
      let key = (await qrCodeLoginKey(nowtime)).data.data.unikey
      unikey.value = key

      let sginImgURL = (await qrCodeLoginImg(key)).data.data.qrimg
      qrimgs.value = sginImgURL

      let check = setInterval(async () => {
        let nowtime2 = new Date().getTime()
        let res = await qrCodeLoginCheck(key, nowtime2).then()
        console.log(res.data.message, '---')

        if (res.data.code === 800) {
          alert(res.data.message)
          clearInterval(check)
        }
        if (res.data.code === 803) {
          console.log(res)
          localStorage.setItem('cookies', res.data.cookie)
          alert(res.data.message)
          clearInterval(check)
        }
      }, 3000)
    }

    const initQrimgs = async () => {
      let nowtime = Date.now()
      let key = (await qrCodeLoginKey(nowtime)).data.data.unikey
      unikey.value = key
      let sginImgURL = (await qrCodeLoginImg(key, nowtime)).data.data.qrimg
      qrimgs.value = sginImgURL
    }
    return {
      unikey,
      qrurl,
      qrimgs,
      qrCheckData,
      isLogin,
      login,
    }
  },
}
</script>

<style lang="scss" scoped>
.bbox {
  margin: auto;
  position: relative;
  width: 375px;
  height: 667px;
  background-color: #fff;
  border: #333 solid 1px;
}
.top {
  flex: 1;
  width: 375px;
  height: 50px;
  background-color: rgb(49, 35, 35);
  color: white;
}
.topp {
  font-weight: bold;
  margin-left: 18px;
  margin-right: 18px;
  padding-top: 16px;
  display: flex;
  justify-content: space-between;
}
.mid {
  flex: 1;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
}
.left img {
  width: 125px;
  height: 220px;
  margin-left: 20px;
}
.right {
  margin-left: 20px;
  display: flex;
  align-content: space-between;
  flex-direction: column;
}
.rightt {
  margin-left: 5px;
  font-size: 18px;
  font-weight: 500;
  color: #333;
  // width: 200px;
  // height: 24px;
  color: rgba(0, 0, 0, 0.4);
}
.rightb {
  margin-left: 15px;
}
.but {
  position: absolute;
  bottom: 0;
  margin-left: 10px;
}
.mid {
  margin-left: 50px;
}
</style>
