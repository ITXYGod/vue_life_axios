<template>
    <div>
        <p>学习生命周期 - 看控制台的打印</p>
        <span id="myp">挂载阶段</span>
        <ul id="myUl">
            <li v-for="(item, index) in arr" :key="index">{{ item }}</li>
        </ul>
        <button @click="arr.push(66)">点击末尾加值</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'hello, vue',
            arr: [5, 8, 2, 1],
            timer: null
        }
    },
    // 第一阶段： 初始化实例对象，而不是页面
    /**
     * A: 初始化之前钩子函数所要做的一些事情：
     *   1.new Vue() – Vue实例化(组件也是一个小的Vue实例)
         2.Init Events & Lifecycle – 初始化事件和生命周期函数 Lifecycle ： 生命周期的意思
         3.beforeCreate – 生命周期钩子函数被执行 在第四步之前进行执行生命周期钩子函数
        场景： 很少使用这钩子函数
     */
    beforeCreate() {
        console.log('beforeCreate--执行');
        console.log(this.msg); // 那么执行生命周期狗子函数的时候，是拿不到data 和 methods的任何值的
    },
    /**
     * B: 初始化之后钩子函数所要做的一些事情：
     *    4.Init injections&reactivity – Vue内部添加data和methods等
          5.created – 生命周期钩子函数被执行, 实例创建
          6.接下来是编译模板阶段 –开始分析
          7.Has el option? – 是否有el选项 – 检查要挂到哪里
          	没有. 调用$mount()方法
        	有, 继续检查template选项
          场景： 网络请求(越早发起请求越早的拿到后台的数据), 注册全局事件
          注意： 目前阶段：还获取不到真实的DOM
     */
    created() {
        console.log('created--执行了');
        console.log(this.msg);
        this.timer = setInterval(() => {
            console.log('哈哈哈');
        }, 1000);
    },

    // 第二阶段： 挂在阶段，也就是页面显示阶段
    /**
     * A: 挂载阶段之前钩子函数索要做的事情：
         1.template选项检查
            有 - 编译template返回render渲染函数
            无 – 编译el选项对应标签作为template(要渲染的模板)
            2.虚拟DOM挂载成真实DOM之前
            3.beforeMount – 生命周期钩子函数被执行
        场景： 预处理data, 不会触发 updated钩子函数
     */
    beforeMount() {
        console.log('beforeMount -- 执行了');
        console.log(document.getElementById('myp')); //null 值为空，挂载阶段之前是拿不到真实DOM元素的
        this.msg = '重新赋值';
    },
    /**
     * B: 挂载阶段之后钩子函数所要做的事情：
         *  4.Create … – 把虚拟DOM和渲染的数据一并挂到真实DOM上
            5.真实DOM挂载完毕
            6.mounted – 生命周期钩子函数被执行
         场景：拿到挂载后真实DOM  
     */
    mounted() {
        console.log('mounted -- 执行了');
        console.log(document.getElementById('myp'));// 挂载阶段之后能拿到真实DOM元素
    },

    // 第三阶段： 更新阶段：就是更新数据交互
    /**
     * C: 更新阶段之前钩子函数所要做的事情
             1.当data里数据改变, 更新DOM之前
             2.beforeUpdate – 生命周期钩子函数被执行
        注意： 只有在data数据改变，该钩子函数才会执行
     */
    beforeUpdate() {
        console.log('beforeUpdate -- 执行了');
        console.log(document.querySelectorAll('#myUl>li')[4]); // undefined: 拿不到更新数据的值
    },
    /**
     * D: 更新阶段之后钩子函数所要做的事情
            3.Virtual DOM…… – 虚拟DOM重新渲染, 打补丁到真实DOM  Virtual ：虚拟的意思  patch: 打补丁
            4.updated – 生命周期钩子函数被执行
            5.当有data数据改变 – 重复这个循环
        注意： 只有在data数据改变，该钩子函数才会执行
        场景： 获取更新后的真实DOM
     */
    updated() {
        console.log('updated -- 执行了');
        console.log(document.querySelectorAll('#myUl>li')[4]);
    },

    //第四阶段： 销毁阶段
    /**
     * E：销毁阶段之前钩子函数所要做的事情：
     *      1.当$destroy()被调用 – 比如组件DOM被移除(例v-if)
            2.beforeDestroy – 生命周期钩子函数被执行
        触发条件： 使用 v-if='false' 销毁vue实例 
        场景： 移除全局的事件，移除当前组件的计时器，定时器，eventBus移除事件$off方法
     */
    beforeDestroy() {
        console.log('beforeDestroy -- 执行了');
        clearInterval(this.timer);
    },
    /**
     * F: 销毁阶段之后钩子函数所要做的事情：
            3.拆卸数据监视器、子组件和事件侦听器
            4.实例销毁后, 最后触发一个钩子函数
            5.destroyed – 生命周期钩子函数被执行
     */
    destroyed() {
        console.log('destroyed -- 执行了');
    }

}
</script>

<style lang="scss" scoped></style>