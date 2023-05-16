<template>
    <div>
        <p>1. 获取原生DOM元素</p>
        <h1 id="h" ref="myH">我是一个孤独可怜又能吃的h1</h1>
        <hr>
        <p>2. 获取组件对象-可调用组件内的一切</p>
        <Demo ref="de"></Demo>
        <hr>
        <p>3. vue更新DOM是异步的</p>
        <p ref="myp">{{ count }}</p>
        <button @click="btn">点击count+1，马上提取p标签内容</button>
    </div>
</template>

<script>
import Demo from './Child/Demo.vue';
export default {
     mounted() {
        console.log(document.getElementById('h'));
        console.log(this.$refs.myH);
         this.$refs.de.fn();
     },
     components: {
        Demo
     },
     data() {
        return {
            count: 0
        }
     },
     methods: {
        btn() {
            // 原因：vue监测数据更新，开启一个DOM更新队列（它是一个异步任务）
            this.count++;
            // 所以这里拿到的值是0，如何解决这个问题呢？？？
            // console.log(this.$refs.myp.innerHTML);
            // 解决方案：使用 this.$nextTick()方法进行解决
            // DOM更新完成之后挨个触发 this.$nextTick()里的函数体
            this.$nextTick(() => {
                console.log(this.$refs.myp.innerHTML);
            })
        }
     }
}
</script>

<style lang="scss" scoped></style>