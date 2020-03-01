<template>
    <div class="detailMain">
        <van-tabs v-model="active">
            <van-tab title="点餐">
                <detail-recommend></detail-recommend>
                <detail-foodmenu></detail-foodmenu>
            </van-tab>
            <van-tab title="评价">
                评价页面
            </van-tab>
            <van-tab title="商家">
                商家详情页面
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import detailRecommend from "./detailRecommend";
    import detailFoodmenu from "./detailFoodmenu";

    export default {
        name: "detailMain",
        data() {
            return {
                active: 0
            }
        },
        components: {
            detailRecommend,
            detailFoodmenu
        }
    }
</script>

<style scoped lang="scss">
    .detailMain {
        margin-top: 11px;
        ::v-deep .van-tabs {
            position: static;
            .van-tabs__wrap {
                position: sticky;
                top: 0;
                height: 40px;
                font-size: 50px;
                z-index: 5;
                .van-tabs__nav {
                    .van-tab {
                        line-height: 40px;
                        font-size: 15px;
                        color: #666;
                    }
                    .van-tab--active {
                        font-weight: bold;
                        color: #333;
                    }
                    .van-tabs__line {
                        width: 30px !important;
                        background-color: #2395ff;
                    }
                }
            }
        }
    }
</style>