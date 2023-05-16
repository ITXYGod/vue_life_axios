<template>
    <div>
        <input type="text" placeholder="这是一个输入框" v-if="isShow" ref="myInp">
        <button @click="btn" v-else>点击进行搜索</button>
    </div>
</template>

<script>
export default {
     data() {
        return {
            isShow: false
        }
     },
     methods: {
       async btn() {
            this.isShow = true;
            // this.$refs.myInp.focus();
            // 原因：data变化更新DOM是异步的
            // 输入框还没有挂载到真实DOM上
            // 解决方式1:
            // this.$nextTick(() => {
            //     // 下面代码就可以将input获取焦点事件
            //     this.$refs.myInp.focus();
            // })

            // 解决方式2: await 取代回调函数
            // $nextTick()原地返回Promise对象
            await this.$nextTick();
            this.$refs.myInp.focus();
        }
     }
}
</script>

<style lang="scss" scoped></style>