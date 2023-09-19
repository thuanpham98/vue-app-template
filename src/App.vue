<script setup lang="ts">
import { Ref } from 'vue';
import AppStorage from './services/app-storage';
import { appProps } from './main';
import {mappingType} from "./ultils/mappingType";
import { icExample } from "@/services/assets";

mappingType<Ref<AppStorage>>(appProps["AppStorage"]).value.name = import.meta.env.VITE_HOST;

</script>

<template>
  <img :src=icExample />
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
