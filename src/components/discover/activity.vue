<template>
    <div class="activity">
        <div class="act-header">
            <p class="act-tit">
                <span class="line left"></span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xianmain"></use>
                </svg>
                限时好礼
                <span class="line right"></span>
            </p>
            <p class="tips">金币换豪礼</p>
        </div>
        <div class="act-commodity">
            <ul class="com-list">
                <li class="com-item">
                    <div class="img">
                        <span>限时优惠</span>
                        <img src="../../../public/images/d86b57a31e7a0740ab3af99bdd97cjpeg.webp" alt="">
                    </div>
                    <div class="detail">
                        <p class="tit">3元品质联盟红包</p>
                        <span class="pri">
                            90金币<del>￥3</del>
                        </span>
                    </div>
                </li>
                <li class="com-item">
                    <div class="img">
                        <span>限时优惠</span>
                        <img src="../../../public/images/30303cdcbaec53bb450b171381385jpeg.webp" alt="">
                    </div>
                    <div class="detail">
                        <p class="tit">数据线二合一</p>
                        <span class="pri">
                            1500金币<del>￥12</del>
                        </span>
                    </div>
                </li>
                <li class="com-item">
                    <div class="img">
                        <span>限时优惠</span>
                        <img src="../../../public/images/d09232d45598fa5fe259efd65333djpeg.webp" alt="">
                    </div>
                    <div class="detail">
                        <p class="tit">黑人牙刷（限时专供）</p>
                        <span class="pri">
                            1900金币<del>￥15</del>
                        </span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="more">
            <p>
                查看更多
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-iconfontyoujiantou"></use>
                </svg>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "activity"
    }
</script>

<style scoped lang="scss">
    .activity{
        margin-top: 10px;
        background-color: #fff;
        .act-header{
            .act-tit{
                display: flex;
                align-items: center;
                justify-content: center;
                padding-top: 20px;
                font-size: 18px;
                font-weight: bold;
                color: #333;
                .icon{
                    margin-right: 3px;
                    font-size: 21px;
                }
                .line{
                    position: relative;
                    display: inline-block;
                    width: 15px;
                    height: 0;
                    margin: 0 4px;
                    border: .5px solid #333;
                }
                .left{
                    &:after{
                        content: '';
                        position: absolute;
                        right: -1px;
                        top: -2px;
                        width: 5px;
                        height: 5px;
                        border-radius: 50%;
                        background-color: #000;
                    }
                }
                .right{
                    &:after{
                        @extend .left;
                        left: -1px;
                    }
                }
            }
            .tips{
                text-align: center;
                font-size: 11px;
                color: #999;
            }
        }
        .act-commodity{
            margin-top: 15px;
            .com-list{
                display: flex;
                justify-content: center;
                .com-item{
                    width: 29vw;
                    margin: 0 6px;
                    .img{
                        position: relative;
                        display: flex;
                        align-items: center;
                        height: 113px;
                        margin-bottom: 10px;
                        span{
                            position: absolute;
                            top: 0;
                            left: 0;
                            padding: 1px 2px;
                            background-color: #413d3c;
                            line-height: 16px;
                            font-size: 12px;
                            color: #fff;
                        }
                        img{
                            width: 100%;
                        }
                    }
                    .detail{
                        font-size: 0;
                        .tit{
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow:ellipsis;
                            margin-bottom: 10px;
                            font-size: 13px;
                            color: #333;
                        }
                        .pri{
                            font-size: 13px;
                            color: #ff5339;
                            del{
                                padding-left: 5px;
                                font-size: 11px;
                                color: #aaa;
                            }
                        }
                    }
                }
            }
        }
        .more{
            p{
                display: flex;
                align-items: center;
                justify-content: center;
                margin:{
                    top: 13px;
                    bottom: 60px;
                }
                line-height: 54px;
                font-size: 13px;
                color: #999;
                .icon{
                    margin-left: 4px;
                    font-size: 10px;
                }
            }
        }
    }
</style>