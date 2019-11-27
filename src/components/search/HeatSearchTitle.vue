<template>
  <div class="npage-bg no-bg">
        <div class="npg-wz">
            <div class="m-box npg-wz-set">
                <div class="npg-headimg">
                    <img
                        :src="title.portrait_url"
                        alt
                    />
                </div>
                <div class="m-box-col m-box-dir npg-desc">
                    <h4 class="m-text-cut firsth">
                        {{title.title}}
                        <i class="nicon-top">
                            <b>热搜</b>
                        </i>
                    </h4>
                    <h4 class="m-text-cut1">
                        <span>{{title.midtext}}</span>
                    </h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['title'],
}
</script>

<style lang='stylus' scoped>
.m-box
    display flex
    padding 0 .12rem .12rem .12rem
    .npg-headimg
        width .7rem
        height .7rem
        img 
            width 100%
            height 100%
            vertical-align middle
    .m-box-dir
        flex 1
        overflow hidden
        display flex
        flex-direction column
        margin-left .12rem
        justify-content space-between
        .m-text-cut.firsth
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            padding-top .07rem
            font-size .22rem
            i 
                display: inline-block;
                width: .49rem;
                height: .16rem;
                background-color: #fe515a;
                border-radius: 2px;
                position: relative;
                margin-left: .09rem;
                b
                    color: #fff;
                    font-size: 12px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    -webkit-transform: translate(-50%,-50%) scale(.8);
                    transform: translate(-50%,-50%) scale(.8);
                    white-space: nowrap;
        .m-text-cut1
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-shadow: none
            padding-bottom .08rem
            span 
                font-size: .12rem;
                line-height: .2rem;
                font-weight 400
</style>