<template>
    <div class="detail-recommend">
        <p class="recommend-tit">商家推荐</p>
        <div class="recommend-wrap" ref="rec_wrap">
            <ul class="wrap-con">
                <li v-for="(food,index) in recommended" :key="index" @click="food.pop_isShow=true">
                    <img :src="food.foodImg">
                    <div class="food-card">
                        <h4>{{food.foodName}}</h4>
                        <p class="food-detail">
                            <span>月售{{food.sale}}</span>
                            <span>好评率{{food.praise}}%</span>
                        </p>
                        <div class="food-price">
                            <span>
                                <span class="small">¥</span>{{food.price}}
                            </span>
                            <van-icon name="add" class="add-food"/>
                        </div>
                    </div>
                    <food-panel :food="food"></food-panel>
<!--                    <van-popup v-model="food.pop_isShow" position="bottom"-->
<!--                               get-container=".detail-foodmenu" :style="{ height: '100%' }"-->
<!--                               close-icon="cross" closeable class="fddetail-popup">-->
<!--                        <img class="pop-foodImg" :src="food.HDImg">-->
<!--                        <div class="pop-main">-->
<!--                            <h2 class="pop-foodName pop-line">{{food.foodName}}</h2>-->
<!--                            <p class="pop-foodDetail pop-line">-->
<!--                                <span>月售{{food.sale}}份</span>-->
<!--                                <span>好评率{{food.praise}}%</span>-->
<!--                            </p>-->
<!--                            <div class="pop-priceLine pop-line">-->
<!--                                <p class="pop-foodPrice">-->
<!--                                    <span class="small">¥</span>{{food.price}}-->
<!--                                    <del class="origin-price" v-if="food.originPrice">￥{{food.originPrice}}</del>-->
<!--                                </p>-->
<!--                                <p class="pop-foodActivity" v-if="food.activity.discount">-->
<!--                                    <span>{{food.activity.discount}}折</span>-->
<!--                                    <span class="limit" v-if="food.activity.isLimit">每单限一份优惠</span>-->
<!--                                </p>-->
<!--                                <p class="pop-foodButton">-->
<!--                                    <span class="min-purchase" v-if="food.minPurchase">{{food.minPurchase}}份起售</span>-->
<!--                                    <van-icon name="add" class="add-food"/>-->
<!--                                </p>-->
<!--                            </div>-->
<!--                            <p class="pop-foodDesc pop-line" v-text="food.desc"></p>-->
<!--                            <p class="pop-priceDesc">-->
<!--                                <span>价格说明</span>-->
<!--                            </p>-->
<!--                        </div>-->
<!--                    </van-popup>-->
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    // import BScroll from 'better-scroll'
    import foodPanel from "../../common/foodPanel";
    export default {
        name: "detailRecommend",
        data(){
            return {
                // foodDetailShow: false,
                recommended: []
            }
        },
        components: {
            foodPanel
        },
        watch: {
            getRecommended(value){
                value.forEach((item)=>{
                    item.foodList.forEach((food)=>{
                        if( food.isRecommended == true ){
                            this.recommended.push(food);
                        }
                    })
                })
            }
        },
        computed: {
            getRecommended(){
                return this.$store.state.shopDetail.foodMenu;
            }
        },
        methods: {
            // showPop(){
            //     this.foodDetailShow = true;
            // }
        }
        // mounted() {
        //     this.$nextTick(() => {
        //         this.scroll = new BScroll(this.$refs.rec_wrap, {
        //             scrollX: true,
        //         })
        //     })
        // }
    }
</script>

<style scoped lang="scss">
    .detail-recommend{
        margin-top: 15px;
        font-size: 0;
        .recommend-tit{
            padding-left: 16px;
            font-weight: bold;
            font-size: 16px;
        }
        .recommend-wrap{
            display: flex;
            overflow-x: scroll;
            margin-top: 11px;
            &::-webkit-scrollbar {display:none}
            .wrap-con{
                display: flex;
                padding-left: 16px;
                li{
                    /*flex: none;*/
                    width: 120px;
                    margin-right: 10px;
                    border-radius: 5px;
                    img{
                        width: 100%;
                    }
                    .food-card{
                        h4{
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            margin-top: 6px;
                            font-size: 14px;
                            font-weight: normal;
                        }
                        .food-detail{
                            margin-top: 2px;
                            span{
                                margin-right: 3px;
                                font-size: 10.5px;
                                color: #999;
                            }
                        }
                        .food-price{
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            margin-top: 4px;
                            span{
                                font-size: 17px;
                                color: rgb(255, 83, 57);
                                .small{
                                    font-size: 15px;
                                }
                            }
                            .add-food{
                                font-size: 25px;
                                color: #2396ff;
                            }
                        }
                    }
                }
            }
        }
    }
</style>