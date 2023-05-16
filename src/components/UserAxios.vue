<template>
    <div>
        <p>1. 获取所有图书信息</p>
        <button @click="getAllFn">点击-查看控制台</button>

        <hr>
        <p>2. 查询某本书籍信息</p>
        <input type="text" placeholder="请输入查询的书名" v-model="bookName">
        <button @click="fingBooksFun">查询</button>

        <hr>
        <p>3. 新增图书信息</p>
        <input type="text" placeholder="请输入书名" v-model="bookObj.bookname">
        <input type="text" placeholder="请输入作者" v-model="bookObj.author">
        <input type="text" placeholder="请输入出版社" v-model="bookObj.publisher">
        <button @click="addBookFun">点击新增图书</button>
    </div>
</template>

<script>
//下载： axios包
import axios from 'axios';
// 全局配置
axios.defaults.baseURL = "http://123.57.109.30:3006";
export default {
    data() {
        return {
            bookName: "",
            bookObj: {
                bookname: '',
                author: '',
                publisher: ''
            }
        }
    },
    methods: {
        // axios默认发给后台请求体数据格式是：json字符粗格式
        getAllFn() {
            // 发起axios请求
            axios({
                method: "GET",
                url: '/api/getbooks',
            }).then(res => {
                console.log(res)
            })
        },
        fingBooksFun() {
            axios({
                method: 'GET',
                url: '/api/getbooks',
                // 动态参数 ?id
                params: {
                    bookname: this.bookName
                }
            }).then(res => {
                console.log(res);
            })
        },
        addBookFun() {
            axios({
                method: 'POST',
                url: "/api/addbook",
                // data配置项，是把参数自动装入到请求体中的
                data: {
                    appkey: '7250d3eb-18e1-41bc-8bb2-11483665535a',
                    ...this.bookObj
                }
            }).then(res => {
                console.log(res);
            })
        }
    }
}
</script>

<style lang="scss" scoped></style>