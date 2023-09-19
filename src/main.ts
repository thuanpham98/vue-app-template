import {createApp, ref } from 'vue';
import './style.css';
import appRouter from './router';
import AppVue from './App.vue';
import AppStorage, { appStoreKey } from './services/app-storage';

const count = ref<AppStorage>(new AppStorage({name:"123"}));

const app = createApp(AppVue,);
app.config.errorHandler=(err,instance,info)=>{
    console.error(err);
    console.debug(instance);
    console.debug(info);
};
app.use(appRouter);
app.provide(appStoreKey, count);

app.config.globalProperties["AppStorage"] = count;
export const appProps = app.config.globalProperties;

app.mount("#app");

