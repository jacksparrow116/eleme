<template>
    <div class="detail-foodmenu" ref="foodMenu">
        <div class="menuWrap" ref="menuWrap">
            <ul class="menu-con">
                <li v-for="(item,index) in foodMenu" @click="select(index)"
                    ref="menuItem" :class="{active:index==0}" v-text="item.title"></li>
            </ul>
        </div>
        <div ref="foodWrap" class="food-wrap">
            <div class="food-con" ref="foodCon">
                <dl class="food-list" v-for="(foodItem,index) in foodMenu"
                    ref="foodList" :key="index">
                    <dt class="menu-tit">{{foodItem.title}}</dt>
                    <dd class="food-details" v-for="(food,index) in foodItem.foodList"
                        :key="index" @click="food.pop_isShow=true">
                        <span class="img">
                            <img :src="food.foodImg">
                        </span>
                        <div class="fddetails-right">
                            <h4 class="food-name" v-text="food.foodName"></h4>
                            <p class="fddetails-desc" v-text="food.desc"></p>
                            <p class="fddetails-sales">
                                <span>月售{{food.sale}}份</span>
                                <span>好评率{{food.praise}}%</span>
                            </p>
                            <p class="fddetails-activity" v-if="food.activity.discount">
                                <span>{{food.activity.discount}}折</span>
                                <span class="limit" v-if="food.activity.isLimit">每单限一份优惠</span>
                            </p>
                            <div class="fddetails-price">
                                <p class="price-con">
                                    <span>￥{{food.price}}</span>
                                    <del class="origin-price" v-if="food.originPrice">￥{{food.originPrice}}</del>
                                </p>
                                <p class="fddetails-button">
                                    <span class="min-purchase" v-if="food.minPurchase">{{food.minPurchase}}份起售</span>
                                    <van-icon @click.native.stop="subFood(food)" name="close" class="add-food"/>
                                    <span class="quantity">{{food.quantity}}</span>
                                    <van-icon @click.native.stop="addFood(food)" name="add" class="add-food"/>
                                </p>
                            </div>
                        </div>
                        <food-panel :food="food"></food-panel>
                    </dd>
                </dl>
            </div>
<!--            <food-detail></food-detail>-->
        </div>

    </div>
</template>

<script>
    import foodDetail from "../../common/foodPanel";
    import foodPanel from "../../common/foodPanel";
    export default {
        name: "detailFoodmenu",
        data(){
            return {
                lastIndex: 0,
                foodTop: [],
                lastIndex: 0,
                // foodDetailShow: false,
            }
        },
        computed: {
            foodMenu(){
                return this.$store.state.shopDetail.foodMenu;
            }
        },
        watch: {
            foodMenu(){
                this.$nextTick(()=>{
                    for (let item of this.$refs.foodList) {
                        this.foodTop.push(item.offsetTop-5);
                    }
                    this.$refs.foodCon.addEventListener('scroll', ()=>{
                        this.foodTop.forEach((item,index)=>{
                            if( this.$refs.foodCon.scrollTop >= item ){
                                this.$refs.menuItem[this.lastIndex].classList.remove('active');
                                this.$refs.menuItem[index].classList.add('active');
                                this.lastIndex = index;
                            }
                        })
                    })
                })
            }
        },
        components: {
            foodDetail,
            foodPanel
        },
        mounted() {
            this.$nextTick(() => {
                let $foodMenu = this.$refs.foodMenu;
                this.$refs.foodCon.addEventListener('scroll', ()=>{
                    document.documentElement.scrollTop = $foodMenu.offsetTop;
                })
            })
        },
        methods: {
            select(index){
                this.$refs.foodCon.scrollTo({
                    top: this.$refs.foodList[index].offsetTop-4,
                    behavior: 'smooth'
                });

            },
            addFood(food){
                console.log('addFood');
                if( food.minPurchase && food.quantity == 0 ){
                    food.quantity += food.minPurchase;
                }else{
                    food.quantity ++;
                }
                // this.$store.commit('chgFoodNum', 1);
            },
            subFood(food){
                console.log('subFood');
                if( food.quantity > 0 ){
                    if( food.minPurchase && food.quantity - food.minPurchase == 0 ){
                        food.quantity -= food.minPurchase;
                    }else{
                        food.quantity --;
                    }
                }
                // this.$store.commit('chgFoodNum', -1);
            }
        }
    }
</script>

<style scoped lang="scss">
    .detail-foodmenu{
        display: flex;
        height: 94vh;
        margin-top: 21px;
        padding-bottom: 49px;
        box-sizing: border-box;
        .menuWrap{
            overflow: hidden;
            width: 21vw;
            height: 100%;
            /*background-color: #ffeecd;*/
            .menu-con{
                overflow-y: scroll;
                height: 100%;
                width: 100%;
                padding-right: 20px;
                li{
                    padding:{
                        top: 17px;
                        bottom: 17px;
                        left: 8px;
                    }
                    background-color: #f5f5f5;
                    font-size: 12px;
                    color: #666;
                    &.active{
                        background-color: #fff;
                    }
                }
            }
        }
        .food-wrap{
            overflow: hidden;
            width: 79vw;
            height: 100%;
            padding-left: 10px;
            .food-con{
                position: relative;
                overflow-y: scroll;
                height: 100%;
                width: 100%;
                padding-right: 20px;
                .food-list{
                    .menu-tit{
                        margin-bottom: 16px;
                        font-size: 12px;
                        font-weight: bold;
                        color: #666;
                    }
                    .food-details{
                        display: flex;
                        /*align-items: center;*/
                        margin-bottom: 17px;
                        .img{
                            flex: none;
                            width: 96px;
                            height: 96px;
                            img{
                                width: 100%;
                                height: 100%;
                                border-radius: 3px;
                            }
                        }
                        .fddetails-right{
                            position: relative;
                            flex: 1;
                            margin-left: 10px;
                            padding-right: 13px;
                            font-size: 0;
                            .food-name{
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                width: 150px;
                                font-size: 15px;
                            }
                            .fddetails-desc{
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                width: 150px;
                                margin-top: 4px;
                                font-size: 10.5px;
                                color: #999;
                            }
                            .fddetails-sales{
                                margin-top: 4px;
                                span{
                                    margin-right: 5px;
                                    font-size: 10.5px;
                                    color: #999;
                                }
                            }
                            .fddetails-activity{
                                margin-top: 5px;
                                span{
                                    margin-right: 3px;
                                    padding: 0 1px;
                                    border: 1px solid #ff9f8d;
                                    font-size: 10px;
                                    color: #eb6551;
                                }
                                .limit{
                                    border: none;
                                    font-size: 11px;
                                }
                            }
                            .fddetails-price{
                                position: absolute;
                                bottom: 0;
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                width: 100%;
                                .price-con{
                                    span{
                                        font-size: 15px;
                                        color: rgb(255, 83, 57);
                                    }
                                    .origin-price{
                                        margin-left: 3px;
                                        font-size: 10.5px;
                                        color: #999;
                                    }
                                }
                                .fddetails-button{
                                    position: absolute;
                                    right: 13px;
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
                                    .quantity{
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
    }
</style>