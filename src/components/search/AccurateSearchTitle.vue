<template>
    <div>
        <div 
            v-for="(titleCard , index) in list"
            :key='index'
        >
            <div v-if="titleCard.card_type === 11 && index < 3" class="card-list">
                <div v-for="(card,index) in titleCard.card_group" :key="index">
                    <div class=" card25" v-if="card.card_type === 25">
                        <div class="card-wrap">
                            <div class="card-main">
                                <div class="m-box">
                                    <div class="m-img-box">
                                        <img src="https://simg.s.weibo.com/20190604_lbs_bg.png" />
                                    </div>
                                    <div class="m-box-col m-box-dir m-box-center">
                                        <div class="m-text-box">
                                            <h3 class="m-text-cut">{{card.title_sub}}</h3>
                                            <h4 class="m-text-cut">{{card.desc}}</h4>
                                        </div>
                                    </div>
                                    <div class="box-right m-box-center-a">
                                        <i class="m-font m-font-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" card28" v-if="card.card_type === 10">
                        <div class="card-wrap">
                            <div class="card-main">
                                <div class="m-box">
                                    <div class="m-img-box">
                                        <img :src="card.user.profile_image_url" />
                                        <i v-if="card.user.mbrank > 0" class="m-icon m-icon-goldv"></i>
                                    </div>
                                    <div class="m-box-col m-box-dir m-box-center">
                                        <div class="m-text-box">
                                            <h3 class="m-text-cut" :class="{vip :card.user.mbrank > 0}">
                                                <span>{{card.user.screen_name}}</span>
                                                <i
                                                    v-if="card.user.mbrank > 0"
                                                    class="m-icon"
                                                    :class="'m-icon-vipl'+ `${card.user.mbrank}`"
                                                ></i>
                                            </h3>
                                            <h4 class="m-text-cut">{{card.desc1}}</h4>
                                            <h4 class="m-text-cut">{{card.desc2}}</h4>
                                        </div>
                                    </div>
                                    <div class="box-right m-box-center-a m-box-center m-btn-box">
                                        <div>
                                            <div class="m-add-box">
                                                <i class="m-font m-font-follow"></i>
                                                <h4>加关注</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" card26" v-if="card.card_type === 8">
                        <div class="card-wrap">
                            <div class="card-main">
                                <div class="m-box">
                                    <div class="m-img-box m-imghold-square">
                                        <img
                                            :src="card.pic"
                                        />
                                    </div>
                                    <div class="m-box-col m-box-dir m-box-center">
                                        <div class="m-text-box">
                                            <h3 class="m-text-cut-2">{{card.title_sub}}</h3>
                                            <h4 class="m-text-cut-2">{{card.desc2}}</h4>
                                        </div>
                                    </div>
                                    <div class="box-right m-box-center-a">
                                        <i class="m-font m-font-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="card-main" v-if="card.card_expand">
                                <div class="m-text-box">
                                    <h4
                                        class="m-text-cut-2"
                                    >{{card.card_expand.content}}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" card96" v-if="card.card_type === 16">
                        <div class="card-wrap">
                            <div class="card-main">
                                <div class="m-item-box"
                                    v-for="(btn,index) in card.group"
                                    :key="index"
                                >
                                    <div class="m-diy-btn m-box-col m-box-center0 m-box-center-a">
                                        <div class="m-diy-btn m-box-col m-box-center m-box-center-a">
                                            <img
                                                :src="btn.buttons[0].pic"
                                                height="24"
                                                width="24"
                                            />
                                            <h4>{{btn.buttons[0].name}}</h4>
                                        </div>
                                        <div class="m-box-dir text-box"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" card4" v-if="card.card_type === 4">
                        <div class="card-wrap">
                            <div class="card-main">
                                <div class="m-box">
                                    <div class="box-left m-box-col m-box-center-a">
                                        <span class="m-img-icon">
                                            <img
                                                :src="card.pic"
                                            />
                                        </span>
                                        <span class="main-link m-box m-box-center-a">
                                            <span class="main-text m-text-cut">
                                                {{card.desc}}
                                            </span>
                                            <span class="sub-text">{{card.desc_extr}}</span>
                                        </span>
                                    </div>
                                    <div class="box-right m-box-center-a">
                                        <i class="m-font m-font-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" card3" v-if="card.card_type === 3">
                        <div class="card-wrap">
                            <div class="card-main">
                                <div class="m-auto-list">
                                    <div
                                        class="m-auto-box"
                                        v-for="(pic , index) in card.pics"
                                        :key="index"
                                    >
                                        <div class="m-img-box m-imghold-square">
                                            <img :src="pic.pic" />
                                        </div>
                                        <div class="m-text-box"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" card19" v-if="card.card_type === 19">
                        <div class="card-wrap">
                            <div class="card-main">
                                <div
                                    class="m-item-box mode-two"
                                    v-for="(box,index) in card.group "
                                    :key="index"
                                >
                                    <div class="m-diy-btn m-box-col m-box-center0 m-box-center-a">
                                        <img :src="box.pic" class="item-pic" />
                                        <div class="m-box-dir text-box">
                                            <h3>{{box.item_title}}</h3>
                                            <h4 class="m-text-cut item-desc">{{box.item_desc}}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["list"],
};
</script>

<style lang='stylus' scoped>
@import '~assets/libs/border.styl'

.card4
    $border(0 0 1px 0)
    .card-wrap
        margin 0 .12rem
        .m-box
            height .44rem
            line-height .44rem
            display flex
            .box-left
                display flex
                flex 1
                .m-img-icon
                    margin-right: .1rem;
                    width: .24rem;
                    height: .24rem;
                    font-size: 0;
                    img 
                        width 100%
                        height 100%
                .main-text
                    font-size .16rem
                    color #333
                .sub-text
                    font-size .12rem
                    color #939393
                    margin-left .04rem
            .box-right
                display flex
                align-items center
                i
                    font-size .14rem
                    width .1rem
                    color #939393

.card96
    height 0.44rem
    $border(0 0 1px 0)
    .card-wrap
        margin 0 0.12rem
        .card-main
            margin-left -0.12rem
            margin-right -0.12rem
            height 100%
            .m-item-box:first-child:before
                content ''
                position absolute
                top 0.08rem
                bottom 0.08rem
                right 0
                background-color #e6e6e6
            .m-item-box:first-child
                .m-diy-btn
                    justify-content center
            .m-item-box
                height 0.44rem
                width 50%
                display inline-block
                padding 0 0.08rem 0 0.12rem
                position relative
                .m-diy-btn
                    display flex
                    align-items center
                    height 0.44rem
                    img
                        width 0.24rem
                        height 0.24rem
                    h4
                        margin-left 0.16rem
                        color #333
                        font-size 0.16rem
                        white-space nowrap
                        overflow hidden
                        text-overflow ellipsis
                        font-weight 400
.card26
    $border(0 0 1px 0)
    .card-wrap
        margin-left 0.12rem
        margin-right 0.12rem
        height 100%
        .card-main:last-child
            padding-top 0 !important
        .card-main
            padding 0.1rem 0
            h4.m-text-cut-2
                overflow hidden
                text-overflow ellipsis
                display -webkit-box
                -webkit-line-clamp 2
                -webkit-box-orient vertical
                font-size 0.12rem
                color #939393
                font-weight normal
            .m-box
                display flex
                .m-img-box
                    width 0.7rem
                    height 0.7rem
                    margin-right 0.1rem
                    img
                        height 100%
                        width 100%
                .m-box-dir
                    flex 1
                    overflow hidden
                    display flex
                    justify-content center
                    flex-direction column
                    .m-text-box
                        h3
                            font-size 0.16rem
                            color #333
                            font-weight normal
                            margin-bottom 0.06rem
                        h4
                            color #939393
                            font-size 0.12rem
                            line-height 0.24rem
                            white-space nowrap
                            overflow hidden
                            text-overflow ellipsis
                            font-weight 400
                .box-right
                    display flex
                    align-items center
.card28
    $border(0 0 1px 0)
    .card-wrap
        margin 0 0.12rem
        .card-main
            padding 0.1rem 0
            .m-box
                display flex
                .m-img-box:before
                    content ''
                    position absolute
                    z-index 2
                    top 0
                    right 0
                    bottom 0
                    left 0
                    border 1px solid rgba(0, 0, 0, 0.05)
                    border-radius 50%
                .m-img-box
                    margin-right 0.1rem
                    width 0.7rem
                    height 0.7rem
                    position relative
                    border-radius 50%
                    img
                        width 100%
                        height 100%
                        border-radius 50%
                    i
                        position absolute
                        z-index 3
                        right -0.01rem
                        bottom -0.01rem
                .m-box-dir
                    overflow hidden
                    flex 1
                    display flex
                    flex-direction column
                    justify-content center
                    width 100%
                    .m-text-box
                        .m-text-cut.vip
                            color #ff8200
                        .m-text-cut
                            white-space nowrap
                            overflow hidden
                            text-overflow ellipsis
                        h3
                            font-size 0.16rem
                            line-height 0.16rem
                            margin-bottom 0.06rem
                            font-weight normal
                            vertical-align middle
                        h4
                            display block
                            font-weight 400
                            font-size 0.12rem
                            margin-bottom 0.06rem
                        h4:first-child
                            color #636363
                        h4:last-child
                            color #939393
                .box-right
                    display flex
                    align-items center
                    margin-left 0.12rem
                    justify-content center
                    width 0.52rem
                    .m-add-box
                        color #FF8200
                        text-align center
                        display inline-block
                        i
                            font-size 0.28rem
                        h4
                            line-height 0.1rem
                            font-size 0.1rem
                            font-weight 400
.card19
    height 0.66rem
    $border(0 0 1px 0)
    .card-wrap
        margin 0 0.12rem
        .card-main
            margin-left -0.12rem
            margin-right -0.12rem
            height 100%
            .m-item-box:first-child:before
                content ''
                position absolute
                top 0.08rem
                bottom 0.08rem
                right 0
                background-color #e6e6e6
            .m-item-box
                width 50%
                display inline-block
                padding 0.14rem 0.32rem 0.13rem 0.1rem
                position relative
                .m-diy-btn
                    display flex
                    img
                        width 0.22rem
                        height 0.22rem
                .m-box-dir
                    h3
                        font-size 0.16rem
                        color #333
                        line-height 0.22rem
                        font-weight normal
                        margin-left 0.05rem
                    h4
                        margin-top 0.02rem
                        margin-left 0.05rem
                        color #939393
                        font-size 0.12rem
                        white-space nowrap
                        overflow hidden
                        text-overflow ellipsis
                        font-weight 400
.card3
    .card-wrap
        .card-main
            .m-auto-list
                position relative
                padding 0.1rem 0.12rem 0
                $border(0 0 1px 0)
                .m-auto-box
                    padding 0 0.02rem
                    margin-bottom 0.06rem
                    width 20%
                    display inline-block
                    .m-img-box
                        padding-bottom 100%
                        position relative
                        img
                            width 100%
                            height 100%
                            position absolute
                            object-fit cover
.card25
    padding-left 0.12rem
    padding-right 0.12rem
    height 0.7rem
    $border(0 0 1px 0)
    .card-main
        padding 0.1rem 0
        .m-box
            display flex
            .m-img-box
                width 0.5rem
                height 0.5rem
                margin 0 0.1rem 0 0
                img
                    width 100%
                    height 100%
            .m-box-dir
                flex 1
                overflow hidden
                .m-text-box
                    h3
                        font-size 0.16rem
                        color #333
                        line-height 0.22rem
                        font-weight normal
                        margin-bottom 0.06rem
                    h4
                        color #939393
                        font-size 0.12rem
                        line-height 0.24rem
                        white-space nowrap
                        overflow hidden
                        text-overflow ellipsis
                        font-weight 400
            .box-right
                display flex
                align-items center
.card-list
    background #fff
    margin-bottom 0.09rem
</style>