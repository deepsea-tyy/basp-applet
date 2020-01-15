<template>
    <div>
        <van-row>
            <van-col span="18">
                logo
                <van-search placeholder="请输入搜索关键词" />
            </van-col>
            <van-col span="6">消息</van-col>
        </van-row>
        <van-row>
            <van-search placeholder="请输入搜索关键词" />
        </van-row>
        <van-row>
            <van-row>
                banner
            </van-row>
            <van-row>
                分类
            </van-row>
            <van-row>
                活动
            </van-row>
            <van-row>
                推荐
            </van-row>
            <van-row>
                热卖
            </van-row>
            <van-row>
                其他
            </van-row>
        </van-row>
    </div>
</template>
<script>
import * as apiHome from '@/api/home'

export default {
    components: {},
    data() {
        return {
            banner:[]
        }
    },
    created() {
        this.getBanner()
    },
    methods: {

        async getBanner() {
          let res =  await apiHome.banner({code: "home_banner"})
          this.banner = res.data
        }
    },
}
</script>
<style>
.search {
    display: none;
}

form button {
    padding: 4px 20px;
    font-size: 12px;
}
</style>