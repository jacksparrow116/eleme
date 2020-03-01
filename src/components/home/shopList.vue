<template>
    <div class="shop-list">
        <ul class="list-wrap">
            <li class="shop-item" v-for="(shop,index) in shopList"
                @click='toDetail(shop)' :key="index">
                <div class="left">
                    <img :src="shop.shopImg" alt="">
                </div>
                <div class="right">
                    <div class="msg-con">
                        <div class="msg-main">
                            <h3 class="shop-tit">
                                <i v-if="shop.isBrand">品牌</i>
                                <span v-text="shop.shopTit"></span>
                            </h3>
                            <div class="line">
                                <div class="rate">
                                    <div class="star pos-r">
                                        <span class="bg pos-a">
                                             <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+" alt="">
                                        </span>
                                        <span class="mask pos-a" :style="{width:shop.score/5*100+'%'}">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=" alt="">
                                        </span>
                                    </div>
                                    <span class="score" v-text="shop.score"></span>
                                    <span class="sales-volume">{{shop.sale | sale}}</span>
                                </div>
                                <div class="delivery" v-if="shop.isHummingbird">
                                    <span>蜂鸟专送</span>
                                </div>
                            </div>
                            <div class="line">
                                <div class="moneylimit">
                                    <span class="pseudo">￥{{shop.startPri}}起送</span>
                                    <span>{{shop.deliveryPri | deliveryPri}}</span>
                                </div>
                                <div class="timedistance">
                                    <span class="pseudo">{{shop.distance}}km</span>
                                    <span>{{shop.time}}分钟</span>
                                </div>
                            </div>
                            <div class="tags">
                                <span v-for="(tag,index) in shop.tags.list"
                                      v-text="tag" :key="index"></span>
                                <span v-if="shop.tags.isSole" class="sole">饿了么独家合作品牌</span>
                                <span v-if="shop.tags.isPopularity" class="popularity">口碑人气好店</span>
                            </div>
                        </div>
                    </div>
                    <div class="activity-con">
                        <div class="act-list">
                            <div v-for="(item,index) in shop.activity" class="act-item"
                                 :class="{'dis-none':!item.isShow}">
                                <i :class="item.icon" v-text="item.txt"></i>
                                <p v-text="item.des"></p>
                            </div>
                        </div>
                        <div class="act-btn" v-if="shop.activity.length>2">
                            <span @click.stop="showList($event, index)">{{shop.activity.length}}个活动
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-xiajiantou"></use>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "shopList",
        data(){
            return {
                // shopList: [
                //
                // ]
            }
        },
        mounted() {
            // this.$http.get('mock/shopList.json').then((response) => {
            //     console.log(response.data)
            //     this.shopList = response.data;
            // })
            this.$store.dispatch('getShopList');
        },
        computed: {
            shopList(){
                return this.$store.state.shopList;
            }
        },
        methods: {
            toDetail(shop){
                this.$router.push({name:'detail', params:{id:shop.id}});
            },
            showList(e, index){
                let activity = this.shopList[index].activity,
                    svg = e.currentTarget.children[0]
                ;
                svg.classList.toggle('show');
                for (let i=0; i<activity.length; i++) {
                    if( i>=2 ){
                        if( svg.classList.contains('show')==true ){
                            activity[i].isShow = true;
                        }else{
                            activity[i].isShow = false;
                        }
                    }
                }
            }
        },
        filters: {
            sale(value){
                if( value > 9999 ){
                    return '月售9999+单';
                }else{
                    return '月售'+value+'单';
                }
            },
            deliveryPri(value){
                if( value == 0 ){
                    return '免配送费';
                }else{
                    return '配送￥'+value;
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .shop-list{
        padding: 0 10px;
        .list-wrap{
            .shop-item{
                display: flex;
                padding: 10px 0 10px;
                margin-bottom: 5px;
                border-bottom: 1px solid #eee;
                .left{
                    img{
                        width: 65px;
                        border: .5px solid #ccc;
                    }
                }
                .right{
                    flex: 1;
                    padding-left: 10px;
                    font-size: 0;
                    .msg-con{
                        .msg-main{
                            .shop-tit{
                                display: flex;
                                padding-bottom: 2px;
                                align-items: center;
                                font-size: 15px;
                                i{
                                    padding: 0 2px;
                                    margin-right: 5px;
                                    background-image: linear-gradient(-139deg,#fff100,#ffe339);
                                    font-size: 11px;
                                    font-weight: normal;
                                    font-style: normal;
                                }
                            }
                            .line{
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                margin-top: 9px;
                                .rate{
                                    display: flex;
                                    align-items: center;
                                    .star{
                                        width: 60px;
                                        height: 10px;
                                        .bg{
                                            top: 0;
                                            left: 0;
                                            width: 100%;
                                        }
                                        .mask{
                                            @extend .bg;
                                            overflow: hidden;
                                            width: 100%;
                                        }
                                        img{
                                            width: 100%;
                                        }
                                    }
                                    .score,
                                    .sales-volume{
                                        padding-left: 5px;
                                        font-size: 11px;
                                        line-height: 11px;
                                        color: #666;
                                    }
                                }
                                .delivery{
                                    span{
                                        display: block;
                                        padding: 0 1px;
                                        background-image: linear-gradient(45deg,#0085ff,#0af);
                                        font-size: 10px;
                                        line-height: 12px;
                                        color: #fff;
                                    }
                                }
                                .moneylimit{
                                    font-size: 11px;
                                    color: #666;
                                }
                                .timedistance{
                                    font-size: 11px;
                                    color: #999;
                                }
                                .pseudo:after {
                                    content: '|';
                                    margin: 0 4px;
                                    font-size: 10px;
                                    color: #ddd;
                                }
                            }
                            .tags{
                                @extend .line;
                                justify-content: flex-start;
                                span{
                                    padding: 0 2px;
                                    margin-right: 5px;
                                    border: 1px solid #ddd;
                                    border-radius: 1px;
                                    font-size: 10.5px;
                                    color: #777777;
                                    &.sole{
                                        background-color: #D3EAFF;
                                        color: #2395FF;
                                    }
                                    &.popularity{
                                        display: flex;
                                        align-items: center;
                                        border: none;
                                        color: #e8470b;
                                    }
                                }
                            }
                        }
                    }
                    .activity-con{
                        display: flex;
                        justify-content: space-between;
                        margin-top: 18px;
                        .act-list{
                            overflow: hidden;
                            flex: 1;
                            width: 230px;
                            padding-right: 12px;
                            .act-item{
                                /*width: 200px;*/
                                display: flex;
                                margin-bottom: 6px;
                                align-items: center;
                                font-size: 11px;
                                &.dis-none{
                                    display: none;
                                }
                                i{
                                    padding: 0 1px;
                                    border-radius: 2px;
                                    font-style: normal;
                                    color: #fff;
                                    &.zeng{
                                        background-color: rgb(60, 199, 145);
                                    }
                                    &.jian,
                                    &.zhe{
                                        background-color: rgb(240, 115, 115);
                                    }
                                    &.pei,
                                    &.shou{
                                        background-color: rgb(112, 188, 70);
                                    }
                                    &.te{
                                        background-color: rgb(241, 136, 79);
                                    }
                                    &.piao,
                                    &.bao{
                                        background-color: rgb(153, 153, 153);
                                    }
                                    &.xin{
                                        background-color: rgb(0, 183, 98);
                                    }
                                }
                                p{
                                    overflow: hidden;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                    /*flex: 1;*/
                                    /*width: 50%;*/
                                    padding-left: 5px;
                                    color: #666;
                                }
                            }
                        }
                        .act-btn{
                            span{
                                font-size: 10px;
                                color: #999;
                                svg{
                                    transition: .5s;
                                    &.show{
                                        transform: rotateZ(180deg);
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