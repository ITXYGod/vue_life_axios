<template>
  <div>
     <h1>1. 生命周期</h1>
     <Life v-if="isShow"></Life>
     <button @click="isShow = false">销毁组件</button>
     <hr>
     <h1>2. axios使用</h1>
     <UserAxios></UserAxios>
     <hr>
     <h1>3. 使用vue获取元素</h1>
     <More></More>
     <hr>
     <h1>4. $nextTick使用场景</h1>
     <Tick></Tick>
     <hr>
     <h1>5.组件对象里name属性</h1>
     <ComNameHaHa></ComNameHaHa>
  </div>
</template>

<script>
import Life from './components/Life.vue';
import UserAxios from './components/UserAxios.vue';
import More from './components/More.vue';
import Tick from './components/Tick.vue';
import Com from './components/Com.vue';
export default {
  data() {
     return {
      isShow: true
     }
  },
   components: {
     Life,
     UserAxios,
     More,
     Tick,
     [Com.name]: Com
   }
}
</script>

<style lang="scss" scoped></style>