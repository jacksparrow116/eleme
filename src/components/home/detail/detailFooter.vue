<template>
    <div class="detail-footer" @click="showCart">
        <span class="shopcar">
            <i class="iconfont icon-cart" :class="{active:goodsList.length!=0}"></i>
            <i class="info" v-show="goodsList.length!=0" v-text="totalNum"></i>
        </span>
        <div class="desc">
            <p v-if="goodsList.length==0">未选购商品</p>
            <p v-else class="total-price">¥{{totalPrice}}</p>
            <p class="delivery-pri">另需配送费{{shopDetail.deliveryPri}}元</p>
        </div>
        <div class="submit-btn" @click.stop="submitOrder" :class="{active:totalPrice>=shopDetail.startPri}">
            <span v-if="goodsList.length==0">¥{{shopDetail.startPri}}起送</span>
            <span v-else-if="totalPrice<shopDetail.startPri" class="still">还差¥{{shopDetail.startPri-totalPrice}}起送</span>
            <span v-else>去结算</span>
        </div>
        <van-popup v-model="show" position="bottom"
                   get-container="#detail" class="goods-cart">
            <div class="cart-header">
                <span>已选商品</span>
                <span class="clear" @click="clearGoods">清空</span>
            </div>
            <ul class="goods-list">
                <li v-for="(goods,index) in goodsList" :key="index" class="goods-item">
                    <span class="goods-name">
                        <em v-text="goods.foodName"></em>
                    </span>
                    <span class="price">
                        <small>¥</small>{{goods.price*goods.num}}
                    </span>
                    <span class="btn-wrap">
                        <i @click.stop="subFood(goods)" class="iconfont icon-jian btn"></i>
                        <span class="quantity" v-text="goods.num"></span>
                        <i @click.stop="addFood(goods)" class="iconfont icon-jia btn"></i>
                    </span>
                </li>
            </ul>
        </van-popup>
    </div>
</template>

<script>
    export default {
        name: "detailFooter",
        data(){
            return {
                show: false
            }
        },
        computed: {
            shopDetail(){
                return this.$store.state.shopDetail;
            },
            goodsList(){
                return this.$store.state.goods;
            },
            totalPrice(){
                return this.$store.getters.totalPrice;
            },
            totalNum(){
                return this.$store.getters.totalNum;
            }
        },
        methods: {
            showCart(){
                if( this.goodsList.length == 0 )return;
                this.show = !this.show;
            },
            addFood(goods){
                console.log('addGoods');
                goods.num ++;
                this.$store.commit('addGoods', goods);
            },
            subFood(goods){
                console.log('subGoods');
                goods.num --;
                this.$store.commit('subGoods', goods);
            },
            submitOrder(){
                if( this.totalPrice >= this.shopDetail.startPri ){
                    alert("请支付订单");
                }
            },
            clearGoods(){
                this.$store.commit('clearGoods');
            }
        },
        watch: {
            goodsList(value){
                if( value.length == 0 ){
                    this.show = false;
                }
            }
        }
    }
</script>

<style scoped lang="scss">

    .goods-cart{
        max-height: 50vh;
        padding-bottom: 50px;
        z-index: 2000!important;
        .cart-header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 40px;
            padding: 0 15px;
            background-color: #eceff1;
            font-size: 16px;
            color: #666;
            .clear{
                font-size: 13px;
            }
        }
        .goods-list{
            .goods-item{
                display: flex;
                justify-content: space-between;
                align-items: center;
                min-height: 55px;
                padding: 0 15px;
                border-bottom: .5px solid #999;
                .goods-name{
                    flex: 5.5;
                    em{
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        font-size: 16px;
                        font-style: normal;
                    }
                }
                .price{
                    flex: 2.5;
                    text-align: right;
                    font-size: 15px;
                    font-weight: bold;
                    color: rgb(255, 83, 57);
                    small{
                        font-size: 11px;
                    }
                }
                .btn-wrap{
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    flex: 3;
                    text-align: right;
                    .btn{
                        font-size: 22px;
                        color: rgb(35, 149, 255);
                    }
                    .quantity{
                        display: inline-block;
                        width: 25px;
                        text-align: center;
                        font-size: 14px;
                    }
                }
            }
        }
    }
    $footerH: 48px;
    .detail-footer{
        position: fixed;
        bottom: 0;
        display: flex;
        align-items: center;
        height: $footerH;
        width: 100%;
        padding-left: 80px;
        background-color: #505052;
        box-sizing: border-box;
        z-index: 2001;
        .shopcar{
            position: absolute;
            top: -10px;
            left: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            background-color: #444;
            border-radius: 50%;
            text-align: center;
            box-shadow: 0 0 2px;
            .icon-cart{
                display: inline-block;
                width: 40px;
                height: 40px;
                background-color: #363636;
                border-radius: 50%;
                line-height: 42px;
                font-size: 25px;
                color: #5f5f63;
                &.active{
                    background-color: #3190e8;
                    color: #fff;
                }
            }
            .info{
                position: absolute;
                top: 0;
                right: 0;
                min-width: 15px;
                height: 15px;
                padding: 0 3px;
                background-color: #ff6a16;
                border-radius: 7.5px;
                text-align: center;
                font-style: normal;
                font-size: 11px;
                line-height: 15px;
                color: #fff;
                box-sizing: border-box;
            }
        }
        .desc{
            flex: 1;
            line-height: 13px;
            font-size: 12px;
            color: #999;
            .total-price{
                color: #fff;
                font-size: 17px;
            }
            .delivery-pri{
                margin-top: 2px;
            }
        }
        .submit-btn{
            width: 105px;
            height: 100%;
            background-color: #535356;
            text-align: center;
            line-height: $footerH;
            font-weight: bold;
            font-size: 15px;
            color: #fff;
            .still{
                font-size: 13px;
            }
            &.active{
                background-color: #38ca73;
            }
        }
    }
</style>