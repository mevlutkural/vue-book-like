<template>
    <app-header></app-header>
  <div class="flex flex-row">
    <sidebar />
    <app-bookmark-list />
    <button @click="alert($store.getters._getCurrentUser)">naber</button>
  </div>
</template>
<script>
import HomeSidebar from '@/components/Shared/Home/HomeSidebar.vue';

export default {
    components : {
        sidebar : HomeSidebar
    },
    methods : {
      alert(e) {
        console.log(e)
      }
    }
}
</script>
