import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import getVant from './plugins'
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
import { Swipe, SwipeItem } from 'vant';
const app=createApp(App)

getVant(app)
app.use(store)
app.use(router)
app.mount('#app')
app.use(Swipe);
app.use(SwipeItem);
app.use(Vue3Marquee)