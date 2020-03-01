<template>
    <div class="detail-recommend">
        <p class="recommend-tit">商家推荐</p>
        <div class="recommend-wrap" ref="rec_wrap">
            <ul class="wrap-con">
                <li v-for="(food,index) in recommended" :key="index" @click="showPop(food)">
                    <img :src="food.foodImg">
                    <div class="food-card">
                        <h4>{{food.foodName}}</h4>
                        <p class="food-detail">
                            <span>月售{{food.sale}}</span>
                            <span>好评率{{food.praise}}%</span>
                        </p>
                        <div class="food-price">
                            <span class="price-wrap">
                                <span class="small">¥</span>{{food.price}}
                            </span>
                            <div class="food-btn">
                                <span class="min-purchase" v-show="food.minPurchase&&food.num===0">{{food.minPurchase}}份起售</span>
                                <i @click.stop="subFood(food)"  v-show="food.num!==0" class="iconfont icon-jian btn"></i>
                                <span v-show="food.num!==0" class="num">{{food.num}}</span>
                                <i @click.stop="addFood(food)" class="iconfont icon-jia btn"></i>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <food-panel :food="food" :pop_isShow="pop_isShow" @closePanel="closePanel"/>
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
                recommended: [],
                pop_isShow: false,
                food: {}
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
            closePanel(){
                this.pop_isShow = false;
            },
            showPop(food){
                this.pop_isShow = true;
                this.food = food;
            },
            addFood(food){
                console.log('addFood');
                if( food.minPurchase && food.num == 0 ){
                    food.num += food.minPurchase;
                }else{
                    food.num ++;
                }
                // this.$store.commit('chgFoodNum', 1);
            },
            subFood(food){
                console.log('subFood');
                if( food.num > 0 ){
                    if( food.minPurchase && food.num - food.minPurchase == 0 ){
                        food.num -= food.minPurchase;
                    }else{
                        food.num --;
                    }
                }
                // this.$store.commit('chgFoodNum', -1);
            }
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
                            .price-wrap{
                                font-size: 17px;
                                color: rgb(255, 83, 57);
                                .small{
                                    font-size: 15px;
                                }
                            }
                            .food-btn{
                                display: flex;
                                align-items: center;
                                .btn{
                                    font-size: 23px;
                                    color: #2396ff;
                                }
                                .num{
                                    display: inline-block;
                                    width: 23px;
                                    text-align: center;
                                    font-size: 14px;
                                }
                            }

                        }
                    }
                }
            }
        }
    }
</style>