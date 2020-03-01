<template>
    <div id="detail">
        <detail-header></detail-header>
        <detail-main></detail-main>
        <detail-footer></detail-footer>
    </div>
</template>

<script>
    import detailHeader from "../components/home/detail/detailHeader";
    import detailMain from "../components/home/detail/detailMain";
    import detailFooter from "../components/home/detail/detailFooter";
    export default {
        name: "detail",
        components: {
            detailHeader,
            detailMain,
            detailFooter
        },
        activated(){
            window.scrollTo(0,0);
            this.$store.commit('chgFTB', false);
            // this.$http.get('mock/shopDetail/shop'+this.$route.params.id+'.json').then((response)=>{
            //     console.log(response.data);
            // })
            this.$store.dispatch('getShopDetail', this.$route.params.id);
        },
        deactivated(){
            this.$store.commit('chgFTB', true);
        }
    }
</script>

<style scoped lang="scss">
    #detail{
        color: #333;
        ::v-deep.van-overlay{
            z-index: 1999!important;
        }
    }
</style>