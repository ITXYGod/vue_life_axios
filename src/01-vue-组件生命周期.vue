<template>
  <div>
     <h1>1. 生命周期</h1>
     <Life v-if="isShow"></Life>
     <button @click="isShow = false">销毁组件</button>
  </div>
</template>

<script>
import Life from './components/Life.vue';
export default {
  data() {
     return {
      isShow: true
     }
  },
   components: {
     Life
   }
}
</script>

<style lang="scss" scoped></style>