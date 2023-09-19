<script setup lang="ts">
import AppStorage,{appStoreKey} from '@/services/app-storage';
import { inject } from 'vue'
const foo = inject(appStoreKey) as AppStorage;
</script>

<template>
    <span>dashboard page</span>
    <button >{{ foo.name }}</button>
</template>