<template>
    <van-popup v-model="pop_isShow" position="bottom"
               get-container=".detail-foodmenu"
               class="foodpanel">
        <div class="img-wrap">
            <img class="foodpanel-img" :src="food.HDImg">
            <van-icon class="foodpanel-close" name="cross"
                      @click="closePanel"/>
        </div>
        <div class="foodpanel-main">
            <h2 class="foodpanel-name foodpanel-line">{{food.foodName}}</h2>
            <p class="foodpanel-sales foodpanel-line">
                <span>月售{{food.sale}}份</span>
                <span>好评率{{food.praise}}%</span>
            </p>
            <div class="foodpanel-priceLine foodpanel-line">
                <p class="foodpanel-price">
                    <span class="small">¥</span>{{food.price}}
                    <del class="origin-price" v-if="food.originPrice">￥{{food.originPrice}}</del>
                </p>
                <p class="foodpanel-activityRow" v-if="food.activity!==undefined&&food.activity.discount">
                    <span class="foodpanel-activity">{{food.activity.discount}}折</span>
                    <span class="limit" v-if="food.activity.isLimit">每单限一份优惠</span>
                </p>
                <p class="foodpanel-cartBtn">
                    <span class="min-purchase" v-if="food.minPurchase">{{food.minPurchase}}份起售</span>
                    <van-icon name="add" class="add-food"/>
                </p>
            </div>
            <p class="foodpanel-desc foodpanel-line" v-text="food.desc"></p>
            <p class="foodpanel-priceDesc">
                <span>价格说明</span>
            </p>
        </div>
    </van-popup>
</template>

<script>

    export default {
        name: "foodPanel",
        props: ['food','pop_isShow'],
        methods: {
            closePanel(){
                this.$emit('closePanel');
            }
        },
        mounted() {
            // console.log(this.food);
        }
    }
</script>

<style scoped lang="scss">
    .foodpanel{
        height: 100%;
        font-size: 0;
        .img-wrap{
            position: relative;
            .foodpanel-close{
                position: absolute;
                top: 15px;
                right: 15px;
                display: block;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background-color: rgba(0, 0, 0, 0.25);
                line-height: 30px;
                text-align: center;
                font-size: 20px;
                color: #fff;
            }
            .foodpanel-img{
                width: 100%;
            }
        }
        .foodpanel-main{
            padding-bottom: 50px;
            .foodpanel-line{
                margin-bottom: 6px;
            }
            padding:{
                top: 14px;
                left: 15px;
            }
            .foodpanel-name{
                font-size: 20px;
            }
            .foodpanel-sales{
                font-size: 11.5px;
                color: #666;
                span{
                    margin-right: 5px;
                }
            }
            .foodpanel-priceLine{
                display: flex;
                align-items: center;
                .foodpanel-price{
                    margin-right: 5px;
                    font-size: 15px;
                    color: rgb(255, 83, 57);
                    .small{
                        font-size: 13px;
                    }
                    .origin-price{
                        font-size: 11px;
                        color: #999;
                    }
                }
                .foodpanel-activityRow{
                    font-size: 12px;
                    .foodpanel-activity{
                        padding: 0 1px;
                        border: 1px solid #ffcdc8;
                        font-size: 10.5px;
                        color: #eb6551;
                    }
                    .limit{
                        margin-left: 5px;
                        color: #eb6551;
                    }
                }
                .foodpanel-cartBtn{
                    position: absolute;
                    right: 14px;
                    display: flex;
                    align-items: center;
                    .min-purchase{
                        font-size: 11px;
                        color: #666;
                    }
                    .add-food{
                        font-size: 25px;
                        color: #2396ff;
                    }
                }
            }
            .foodpanel-desc,
            .foodpanel-priceDesc{
                font-size: 12px;
                color: #666;
            }
        }
    }
</style>