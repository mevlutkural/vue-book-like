<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="p-2 grid grid-cols-8 gap-4">
        <list-item v-for="i in 10" :key="i"></list-item>
    </div>
  </div>
</template>
<script>
import ListItem from './ListItem.vue';

export default {
    components: {
        ListItem
    }
}
</script>
