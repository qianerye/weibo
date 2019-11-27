<template>
    <div class="write-box">
        <div class="write-container">
            <div class="write-head">
                <div class="write-back" @click="handleBackClick">
                    <i class="m-font m-font-arrow-left"></i>
                </div>
                <div class="write-head-apace"></div>
                <div class="write-send" @click="handleWriteClick">
                    <a>发送</a>
                </div>
            </div>
            <div class="write-content">
                <textarea v-model="myText" placeholder="分享新鲜事..."></textarea>
            </div>
            <div class="write-type">
                <div class="write-type-space"></div>
                <div class="write-type-list">
                    <div class="write-open write-type-display">
                        <i class="yo-ico">&#xe60a;</i>
                        <span>公开</span>
                    </div>
                    <div class="write-friends">
                        <i class="yo-ico">&#xe609;</i>
                        <span>好友圈</span>
                    </div>
                    <div class="write-private">
                        <i class="yo-ico">&#xe631;</i>
                        <span>私密</span>
                    </div>
                </div>
            </div>
            <div class="write-modification">
                <div class="write-img">
                    <i class="yo-ico">&#xe61c;</i>
                </div>
                <div class="write-expression">
                    <i class="yo-ico">&#xe610;</i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import sessionstorage from "sessionstorage";
export default {
    data() {
        return {
            myText: ""
        };
    },
    methods: {
        handleBackClick() {
            this.myText = "";
            this.$router.back();
        },

        handleWriteClick() {
            let myAllData = JSON.parse(sessionstorage.getItem("myAllData"))
                ? JSON.parse(sessionstorage.getItem("myAllData"))
                : [];
            if (this.myText) {
                let myData = {
                    card_type: 9,
                    itemid: "102803_-_mbloglist_4443253825177187",
                    scheme:
                        "https://m.weibo.cn/status/4443253825177187?mblogid=4443253825177187&luicode=10000011&lfid=102803",
                    weibo_need: "mblog",
                    mblog: {
                        created_at: "1小时前",
                        id: "4443253825177187",
                        idstr: "4443253825177187",
                        mid: "4443253825177187",
                        can_edit: false,
                        show_additional_indication: 0,
                        text: `${this.myText}`,
                        source: "微博 weibo.com",
                        user: {
                            id: 1642591402,
                            screen_name: "Mr温m",
                            profile_image_url:
                                "https://tvax3.sinaimg.cn/crop.0.0.996.996.180/006zzK6vly8fy0o26gho9j30ro0roq6x.jpg?KID=imgbed,tva&Expires=1574852058&ssig=LOuAQTGr6H",
                            profile_url:
                                "https://m.weibo.cn/u/1642591402?uid=1642591402&luicode=10000011&lfid=102803",
                            mbtype: 11,
                            urank: 48,
                            mbrank: 7,
                            follow_me: false,
                            following: false,
                            followers_count: 33948989,
                            follow_count: 3370,
                            like: false,
                            like_me: false
                        },
                        reposts_count: 190,
                        comments_count: 727,
                        attitudes_count: 7296,
                        pending_approval_count: 0,
                        isLongText: true,
                        reward_exhibition_type: 0,
                        hide_flag: 0,
                        mblogtype: 0,
                        rid: "2_0_0_3069995662008886511_0_0_0",
                        more_info_type: 0,
                        extern_safe: 0,
                        content_auth: 0,
                        pic_num: 6,
                        pics: [
                            {
                                pid: "71482140ly1g9clptq0tpj20e60jlwqb",
                                url:
                                    "https://wx2.sinaimg.cn/orj360/71482140ly1g9clptq0tpj20e60jlwqb.jpg",
                                size: "orj360",
                                geo: {
                                    width: 360,
                                    height: 497,
                                    croped: false
                                },
                                large: {
                                    size: "large",
                                    url:
                                        "https://wx2.sinaimg.cn/large/71482140ly1g9clptq0tpj20e60jlwqb.jpg",
                                    geo: {
                                        width: "510",
                                        height: "705",
                                        croped: false
                                    }
                                }
                            },
                            {
                                pid: "71482140ly1g9clonljs9j20j60pkang",
                                url:
                                    "https://wx3.sinaimg.cn/orj360/71482140ly1g9clonljs9j20j60pkang.jpg",
                                size: "orj360",
                                geo: {
                                    width: 360,
                                    height: 480,
                                    croped: false
                                },
                                large: {
                                    size: "large",
                                    url:
                                        "https://wx3.sinaimg.cn/large/71482140ly1g9clonljs9j20j60pkang.jpg",
                                    geo: {
                                        width: "690",
                                        height: "920",
                                        croped: false
                                    }
                                }
                            },
                            {
                                pid: "71482140ly1g9clos638dj20j60x8wvo",
                                url:
                                    "https://wx3.sinaimg.cn/orj360/71482140ly1g9clos638dj20j60x8wvo.jpg",
                                size: "orj360",
                                geo: {
                                    width: 360,
                                    height: 624,
                                    croped: false
                                },
                                large: {
                                    size: "large",
                                    url:
                                        "https://wx3.sinaimg.cn/large/71482140ly1g9clos638dj20j60x8wvo.jpg",
                                    geo: {
                                        width: "690",
                                        height: "1196",
                                        croped: false
                                    }
                                }
                            },
                            {
                                pid: "71482140ly1g9clow9847j20j60wawxf",
                                url:
                                    "https://wx2.sinaimg.cn/orj360/71482140ly1g9clow9847j20j60wawxf.jpg",
                                size: "orj360",
                                geo: {
                                    width: 360,
                                    height: 606,
                                    croped: false
                                },
                                large: {
                                    size: "large",
                                    url:
                                        "https://wx2.sinaimg.cn/large/71482140ly1g9clow9847j20j60wawxf.jpg",
                                    geo: {
                                        width: "690",
                                        height: "1162",
                                        croped: false
                                    }
                                }
                            },
                            {
                                pid: "71482140ly1g9cloywftzj20j60kj7fv",
                                url:
                                    "https://wx4.sinaimg.cn/orj360/71482140ly1g9cloywftzj20j60kj7fv.jpg",
                                size: "orj360",
                                geo: {
                                    width: 360,
                                    height: 385,
                                    croped: false
                                },
                                large: {
                                    size: "large",
                                    url:
                                        "https://wx4.sinaimg.cn/large/71482140ly1g9cloywftzj20j60kj7fv.jpg",
                                    geo: {
                                        width: "690",
                                        height: "739",
                                        croped: false
                                    }
                                }
                            },
                            {
                                pid: "71482140ly1g9clpzq2voj20j60cr7gi",
                                url:
                                    "https://wx4.sinaimg.cn/orj360/71482140ly1g9clpzq2voj20j60cr7gi.jpg",
                                size: "orj360",
                                geo: {
                                    width: 405,
                                    height: 270,
                                    croped: false
                                },
                                large: {
                                    size: "large",
                                    url:
                                        "https://wx4.sinaimg.cn/large/71482140ly1g9clpzq2voj20j60cr7gi.jpg",
                                    geo: {
                                        width: "690",
                                        height: "459",
                                        croped: false
                                    }
                                }
                            }
                        ]
                    }
                };
                myAllData.unshift(myData);
                this.$store.dispatch("write/addMyWriteDate", {
                    myWriteData: myAllData
                });
                sessionstorage.setItem("myAllData", JSON.stringify(myAllData));
                this.$router.push({
                    path: "/"
                });
            }
        }
    }
};
</script>

<style lang='stylus' scoped>
.write-box
    z-index 9
    width 100%
    height 100%
    position relative
    background #fff
    .write-container
        width 100%
        height 100%
        display flex
        flex-direction column
        .write-head
            height 0.45rem
            background #fafafa
            border-bottom 1px solid #cfcfcf
            display flex
            padding 0 0.1rem
            .write-back
                width 0.45rem
                font-size 0.2rem
                line-height 0.45rem
            .write-head-apace
                flex 1
            .write-send
                line-height 0.45rem
                a
                    color #1b9af4
        .write-content
            flex 1
            textarea
                width 100%
                outline none
                font-size 0.16rem
                padding 0.2rem
                border none
                min-height 3rem
                resize none
        .write-type
            height 0.42rem
            display flex
            .write-type-space
                flex 1
            .write-type-list
                font-size 0.12rem
                background #f8f8f8
                color #4e7cb1
                text-align center
                height 0.24rem
                line-height 0.24rem
                border 1px solid #e4e4e4
                border-radius 0.5rem
                margin-right 0.1rem
                padding 0 0.1rem
                i
                    display inline-block
                    margin-right 0.1rem
                    vertical-align middle
                .write-open, .write-friends, .write-private
                    display none
                .write-type-display
                    display block
        .write-modification
            height 0.48rem
            display flex
            line-height 0.48rem
            text-align center
            font-size 0.2rem
            .write-img
                width 0.64rem
            .write-expression
                width 0.64rem
                font-size 0.24rem
</style>