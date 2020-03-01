<template>
    <div class="shop-mall">
        <div class="sm-left">
            <div class="con-left">
                <p class="title col-orange">金币商城</p>
                <p class="tips">0元好物在这里</p>
            </div>
            <img src="https://cube.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?x-oss-process=image/format,webp" alt="">
        </div>
        <div class="sm-right">
            <div class="recommend wrap">
                <div class="con-left">
                    <p class="title col-blue">推荐有奖</p>
                    <p class="tips">20元现金拿不停</p>
                </div>
                <img src="https://cube.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg?x-oss-process=image/format,webp" alt="">
            </div>
            <div class="discount wrap">
                <div class="con-left">
                    <p class="title col-red">周边优惠</p>
                    <p class="tips">领取口碑好券</p>
                </div>
                <img src="https://cube.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?x-oss-process=image/format,webp" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "shopMall"
    }
</script>

<style scoped lang="scss">
    .shop-mall{
        display: flex;
        background-color: #fff;
        .title{
            margin-bottom: 5px;
            font-size: 16px;
            &.col-orange{
                color: rgb(255, 153, 0);
            }
            &.col-blue{
                color: rgb(27, 169, 225);
            }
            &.col-red{
                color: rgb(237, 102, 96);
            }
        }
        .tips{
            font-size: 12px;
            color: #999;
        }
        .sm-left{
            display: flex;
            justify-content: space-between;
            width: 50%;
            height: 160px;
            padding: 21px 11px 6px 17px;
            border-right: 1px solid #ededed;
            /*background-color: aquamarine;*/
            box-sizing: border-box;
            img{
                align-self: flex-end;
                width: 75px;
            }
        }
        .sm-right{
            width: 50%;
            .wrap{
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 80px;
                padding: 0 15px;
                /*background-color: #00ff05;*/
                box-sizing: border-box;
                img{
                    width: 45px;
                }
            }
            .recommend{
                border-bottom: 1px solid #ededed;
            }
        }
    }
</style>