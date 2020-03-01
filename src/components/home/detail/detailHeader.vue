<template>
    <div class="detail-header">
        <div class="header-bg" :style="{background:`url(${shopDetail.bgUrl}) no-repeat center/cover`}">
            <svg @click="goBack" class="icon" aria-hidden="true">
                <use xlink:href="#icon-arrow-left-copy"></use>
            </svg>
        </div>
        <div class="header-main">
            <div class="shop-logo">
                <img :src="shopDetail.shopLogo">
                <span class="marker" v-if="shopDetail.isMarker">品牌</span>
            </div>
            <div class="shop-tit" @click="showPopup">
                <h2>
                    <span v-text="shopDetail.shopName"></span>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-youjiantou"></use>
                    </svg>
                </h2>
                <van-popup v-model="popup_show" get-container=".detail-header"
                           closeable close-icon="close" close-icon-position="bottom-right"
                           round class="tit-popup">
                    <h2 class="popup-tit" v-text="shopDetail.shopName"></h2>
                    <ul class="popup-brief">
                        <li class="brief-item">
                            <p v-text="shopDetail.score"></p>
                            <h4>评分</h4>
                        </li>
                        <li class="brief-item">
                            <p>{{shopDetail.sale}}单</p>
                            <h4>月售</h4>
                        </li>
                        <li class="brief-item">
                            <p>约{{shopDetail.time}}分钟</p>
                            <h4>蜂鸟快送</h4>
                        </li>
                        <li class="brief-item">
                            <p>{{shopDetail.deliveryPri}}元</p>
                            <h4>配送费</h4>
                        </li>
                        <li class="brief-item">
                            <p>{{shopDetail.distance}}km</p>
                            <h4>距离</h4>
                        </li>
                    </ul>
                    <div class="popup-notice">
                        <p class="notice-tit">
                            <span>公告</span>
                        </p>
                        <p class="notice-con" v-text="shopDetail.notice"></p>
                    </div>
                </van-popup>
            </div>
            <div class="rate">
                <span>评价{{shopDetail.score}}</span>
                <span>月售{{shopDetail.sale}}单</span>
                <span v-if="shopDetail.isHummingbird">蜂鸟专送约{{shopDetail.time}}分钟</span>
                <span v-else>蜂鸟快送约{{shopDetail.time}}分钟</span>
            </div>
            <div class="discount">
                <div class="dis-list">
                    <span v-for="(item,index) in shopDetail.tags" :key="index">{{item}}</span>
                </div>
                <div class="dis-btn" @click="showDiscount">
                    <span>{{shopDetail.activity!==undefined&&shopDetail.activity.length}}个优惠</span>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-xiajiantou"></use>
                    </svg>
                    <van-popup v-model="discount_show" position="bottom"
                               get-container=".detail-header" class="discount-popup"
                               closeable>
                        <h3 class="dis-popup-tit">优惠活动</h3>
                        <ul class="dis-popup-list">
                            <li v-for="(activity,index) in shopDetail.activity"
                                class="dis-popup-item" :key="index">
                                <span v-text="activity.icon"></span>
                                <p v-text="activity.desc"></p>
                            </li>
                        </ul>
                    </van-popup>
                </div>
            </div>
            <div class="notice">
                <p v-text="shopDetail.notice"></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "detailHeader",
        data() {
            return {
                popup_show: false,
                discount_show: false,
                aaa: [1,2,3,4,5]
            }
        },
        methods: {
            goBack(){
                this.$router.go(-1);
            },
            showPopup() {
                this.popup_show = true;
            },
            showDiscount(){
                this.discount_show = true;
            },
        },
        computed: {
            shopDetail(){
                return this.$store.state.shopDetail;
            }
        }
    }
</script>

<style scoped lang="scss">
    .detail-header{
        .tit-popup{
            overflow: visible;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 80vw;
            padding: 23px 0 28px;
            color: #333;
            /*z-index: 999;*/
            &.van-popup--round{
                border-radius: 5px;
            }
            .popup-tit{
                padding: 0 25px;
                font-size: 22px;
                text-align: center;
            }
            .popup-brief{
                display: flex;
                justify-content: space-between;
                margin-top: 15px;
                padding: 0 10px;
                .brief-item{
                    /*flex: 1;*/
                    margin: 0 5px;
                    text-align: center;
                    p{
                        font-weight: bold;
                        font-size: 14px;
                    }
                    h4{
                        font-weight: normal;
                        font-size: 11px;
                        color: #999;
                    }
                }
            }
            .popup-notice{
                margin-top: 18px;
                padding: 0 25px;
                .notice-tit{
                    width: 75px;
                    margin: 0 auto;
                    background-image: linear-gradient(90deg,#fff,#333 50%,#fff);
                    background-repeat: no-repeat;
                    background-size: 100% 1px;
                    background-position: 0 50%;
                    text-align: center;
                    font-size: 12px;
                    color: #999;
                    span{
                        background-color: #fff;
                        padding: 0 3px;
                    }
                }
                .notice-con{
                    margin-top: 10px;
                    line-height: 20px;
                    font-size: 13px;
                }
            }
            &::v-deep .van-icon{
                bottom: -50px;
                left: 50%;
                right: auto;
                font-size: 33px;
                color: #fff;
                transform: translateX(-50%);
            }
        }
        .discount-popup{
            padding: 20px 25px 19px;
            box-sizing: border-box;
            &::v-deep .van-popup__close-icon--top-right{
                top: 10px;
                right: 10px;
                font-size: 25px;
            }
            .dis-popup-tit{
                text-align: center;
                font-size: 17px;
            }
            .dis-popup-list{
                overflow-y: scroll;
                height: 193px;
                /*background-color: #ffcccf;*/
                margin-top: 13px;
                .dis-popup-item{
                    display: flex;
                    align-items: flex-start;
                    margin-bottom: 10px;
                    span{
                        padding: 0 2px;
                        border: 1px solid rgb(255, 201, 193);
                        font-size: 10.5px;
                        color: rgb(255, 75, 51);
                    }
                    p{
                        flex: 1;
                        padding-left: 5px;
                        line-height: 1.2;
                        font-size: 12px;
                        color: #666;
                    }
                }
            }
        }
        .header-bg{
            position: relative;
            height: 100px;
            /*background:
                    url("../../../../public/images/3e3097122cba45ac38fd08d659442png.webp")
                    no-repeat center/cover;*/
            &:before{
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
            }
            svg{
                position: absolute;
                top: 6px;
                left: 10px;
                font-size: 18px;
                color: #fff;
            }
        }
        .header-main{
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 28px;
            .shop-logo{
                overflow: hidden;
                position: absolute;
                left: 50%;
                top: -60px;
                border-radius: 3px;
                transform: translateX(-50%);
                img{
                    width: 75px;
                    box-shadow: 0 0 1px rgba(0, 0, 0, 0.31);
                }
                .marker{
                    position: absolute;
                    top: 0;
                    left: 0;
                    padding: 0 1px;
                    background-color: #ffe339;
                    font-size: 10px;
                    font-weight: bold;
                    color: #6f3f15;
                }
            }
            .shop-tit{
                width: 72vw;
                h2{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 20.5px;
                    span{
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    svg{
                        margin-left: -7px;
                        font-size: 23px;
                        color: #4b4b4b;
                    }
                }
            }
            .rate{
                margin-top: 5px;
                font-size: 0;
                span{
                    margin: 0 5px;
                    font-size: 11px;
                    color: #666;
                }
            }
            .discount{
                display: flex;
                align-items: center;
                width: 80vw;
                margin-top: 12px;
                font-size: 0;
                .dis-list{
                    flex: 1;
                    span{
                        margin: 0 2px;
                        padding: 0 2px;
                        border: 1px solid rgb(255, 201, 193);
                        font-size: 10px;
                        color: rgb(255, 75, 51);
                    }
                }
                .dis-btn{
                    span{
                        padding-right: 3px;
                        font-size: 11px;
                        color: #999;
                    }
                    svg{
                        font-size: 10px;
                        color: #999;
                    }
                }
            }
            .notice{
                width: 80vw;
                margin-top: 10px;
                p{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-size: 11px;
                    color: #999;
                }
            }
        }
    }
</style>