import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import '@/assets/style.css';
import appHeader from '@/components/Shared/AppHeader.vue';
import appBookmarkList from '@/components/Shared/AppBookmarkList/index.vue';
import { appAxios } from './utils/appAxios';
import { store } from './store';

const app = createApp(App)

app.component('appHeader', appHeader)
app.component('appBookmarkList', appBookmarkList)
app.use(store);
app.use(router);
app.config.globalProperties.$appAxios = appAxios;
app.mount('#app')
