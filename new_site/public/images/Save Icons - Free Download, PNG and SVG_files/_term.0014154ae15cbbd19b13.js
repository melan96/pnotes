(window.webpackJsonp=window.webpackJsonp||[]).push([[67,8],{1012:function(t,e,o){"use strict";o(14),o(13),o(35),o(10),o(9),o(11);var r=o(0),n=o(2);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"ComponentPackPage",components:{ShutterstockAds:o(97).a},props:{parsedParams:{type:Object,required:!0}},data:function(){return{popularPlatforms:{ios7:!0,ios11:!0,androidL:!0,color:!0,win10:!0,Dusk_Wired:!0,p1em:!0},packsPerRow:0}},computed:l(l({},Object(n.e)({seo:function(t){return t.seo.data},platform:function(t){return t.platform.apiCode},platforms:function(t){return t.appInfo.platforms},pack:function(t){return t.pack},lang:function(t){return t.i18n.locale},colors:function(t){return t.filters.colorsList},filters:function(t){return t.filters}})),{},{platformIcons:function(){var t=this,e={};return this.platforms?(Object.keys(this.platforms).filter((function(t){return"all"!==t})).map((function(o){if(t.pack.mainPreviews){e[o]=[];var r=t.pack.mainPreviews.find((function(t){return t.styleApiCode===o}));r&&r.previews.map((function(t){e[o].length<8&&e[o].push({commonName:t,platform:o})}))}})),Object.keys(e).length?e:null):e},getColorIcon:function(){return this.colors?this.colors[this.parsedParams.color||"black"].value:"000000"}}),updated:function(){0===this.packsPerRow&&this.$nextTick((function(){var t=this.$refs["preview-grid"];if(t&&t.children[1]){var e=t.offsetWidth,o=t.children[1].offsetWidth+16;this.packsPerRow=3*Math.floor(e/o)}else this.packsPerRow=16}))},methods:{platformTitle:function(t){return"office40"===t?"Office M":this.$t("PLATFORMS.".concat(t,".SHORT_TITLE"),this.platforms[t]?this.platforms[t].title:t)||(this.platforms[t]?this.platforms[t].title:t)},getIconTotalCountByPlatform:function(t){var e,o=this.pack.mainPreviews.find((function(e){return e.styleApiCode===t}));return o&&(e=o.iconTotalCount),e}}},m=(o(976),o(1)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"icons-pack-page"},[!t.platformIcons&&t.pack.code?[o("div",{staticClass:"app-page-section custom-padding ph-descr-wrap"},[o("icon-placeholder",{attrs:{type:"description",shortBottomMargin:!0}})],1)]:[o("div",{staticClass:"app-page-section custom-padding"},[o("app-header")],1)],!t.platformIcons&&t.pack.code?[o("div",{staticClass:"app-page-section custom-padding"},[o("icon-placeholder",{attrs:{count:12,type:"card",iconsHeading:!1}})],1)]:[o("div",{staticClass:"app-page-section custom-padding"},[o("div",{staticClass:"popular-title-wrap"},[o("h6",{staticClass:"app-page-section-title"},[t._v(t._s(t.$t("ICON.ICONS.PACK.POPULAR_STYLES_BY_ICONS8")))])]),o("div",{staticClass:"pack-grid"},[t._l(t.popularPlatforms,(function(e,r){return[t.platformIcons&&t.platformIcons[r]&&t.platformIcons[r].length?o("pack-preview",{key:t.pack.code+"-"+r,staticClass:"pack-preview",attrs:{pack:t.platformIcons[r].map((function(i){return i.commonName})),id:""+t.pack.code,platform:r,platformObj:{title:t.platformTitle(r)},color:t.getColorIcon,iconTotalCount:t.getIconTotalCountByPlatform(r)}}):t._e()]}))],2),o("client-only",[t.pack.name?o("div",{staticClass:"ads"},[o("ShutterstockAds",{attrs:{adParams:{query:t.pack.name["en-US"]}}})],1):t._e()]),o("div",{staticClass:"other-styles-wrap"},[o("h6",{staticClass:"app-page-section-title"},[t._v(t._s(t.$t("ICON.ICONS.PACK.OTHER_STYLES_BY_ICONS8")))]),t.platformIcons?o("div",{ref:"preview-grid",staticClass:"pack-grid"},[t._l(t.platformIcons,(function(e,r,n){return[!t.popularPlatforms[r]&&t.platformIcons[r]&&t.platformIcons[r].length?o("pack-preview",{key:t.pack.code+"-"+r,staticClass:"pack-preview",attrs:{pack:t.platformIcons[r].map((function(i){return i.commonName})),id:""+t.pack.code,platform:r,platformObj:{title:t.platformTitle(r)},color:t.getColorIcon,iconTotalCount:t.getIconTotalCountByPlatform(r)}}):t._e()]}))],2):t._e()])],1)]],2)}),[],!1,null,"5c8b3d8e",null);e.a=component.exports},1136:function(t,e,o){"use strict";var r=o(980);o.n(r).a},1137:function(t,e,o){(e=o(7)(!1)).push([t.i,'@-webkit-keyframes spin-data-v-7e2bb1d6{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spin-data-v-7e2bb1d6{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.icons-search-page .app-page-section.is-video-preview[data-v-7e2bb1d6]{min-height:208px}.icons-search-page .video-preview[data-v-7e2bb1d6]{float:left;width:312px;height:160px;padding-top:32px;margin:24px 32px 24px 0;border-radius:6px;background:#fbefd9;text-align:center;cursor:pointer}@media (max-width:600px){.icons-search-page .video-preview[data-v-7e2bb1d6]{float:none}}.icons-search-page .play[data-v-7e2bb1d6]{display:inline-block;width:62px;height:62px}.icons-search-page .video-title[data-v-7e2bb1d6]{font-size:14px;font-weight:600;color:#4c4c4c}.icons-search-page .video-duration[data-v-7e2bb1d6]{font-size:14px;color:#999}.icons-search-page .platforms[data-v-7e2bb1d6]{display:flex;flex-flow:row wrap;justify-content:flex-start;margin:0 -16px}.icons-search-page .platform[data-v-7e2bb1d6]{background:#f2f2f2;width:312px;padding:16px;margin:16px;border-radius:6px;display:flex;flex-flow:column;justify-content:space-between}.icons-search-page .platform-title[data-v-7e2bb1d6]{font-size:16px;line-height:16px;margin:8px 12px;font-weight:600;color:#4c4c4c}.icons-search-page .icons[data-v-7e2bb1d6]{display:flex;flex-flow:row wrap;justify-content:flex-start}.icons-search-page .icon[data-v-7e2bb1d6]{display:flex;width:50px;height:50px;margin:4px 10px}.is-loading[data-v-7e2bb1d6]{position:relative;height:100px}.is-loading[data-v-7e2bb1d6]:after{content:"";position:absolute;top:50%;left:50%;margin-top:-1.5rem;margin-left:-1.5rem;width:3rem;height:3rem;border-radius:50%;border:2px solid hsla(0,0%,66.7%,.2);border-top-color:hsla(0,0%,66.7%,.8);-webkit-animation:spin-data-v-7e2bb1d6 1s linear infinite;animation:spin-data-v-7e2bb1d6 1s linear infinite}.icon-total-count[data-v-7e2bb1d6]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:32px;padding:4px 12px;margin-top:16px;background:#f5f7fa;border-radius:6px;font-size:16px;line-height:24px;color:#1a1a1a;display:flex;justify-content:center;align-items:center}.icon-total-count .search-icon[data-v-7e2bb1d6]{width:16px;height:16px;margin-right:9px}',""]),t.exports=e},3462:function(t,e,o){"use strict";o.r(e);o(14),o(13),o(10),o(11),o(17),o(35),o(36),o(37),o(9),o(21),o(28),o(79);var r=o(0),n=o(2),c=o(975),l=o(65),d=o(1012);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function h(t){var e=t.app,o=t.params,r=t.store;return new Promise((function(t){var n=e.$utils.escapeSpecialChars(e.$utils.normalizeValue(o.term)),c=Object(l.a)(n),d=function(text){var pattern=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Made in",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:" in ",e=""+text,o=new RegExp(pattern);if(!o.test(e))return e;var content=e.split(t);if(!content[1])return e;var r=!1,n=["USA","UK","UAE","NBA","FIFA"];return n.forEach((function(t){t.toLowerCase()===content[1].toLowerCase()&&(content[1]=t,r=!0)})),r||(content[1]=content[1].replace(/(^|\s)\S/g,(function(t){return t.toUpperCase()}))),content.join(t)}(e.$utils.uppercaseFirstLetter(e.$utils.prettifyValue(c.$rootPath))),m=c.$rootPath.slice(0,50);r.dispatch("search",{term:m,platform:"all",amount:150,page:1}).then((function(o){var l=r.getters.hostUrl||"https://icons8.com",m=e.$t("WEB_APP.SEO.SEARCH.TITLE_DYNAMIC.OVER_PLATFORMS_HEADING",{term:d,platforms:"iOS, Material, Windows"},'<span style="color: #28B351">'.concat(d,"</span>  icons in iOS, Material, Windows, and other design styles")),h=e.$t("WEB_APP.SEO.SEARCH.DESCRIPTION_PAGE",{term:d,platforms:"iOS, Material, Windows"},"<p>Get free icons of ".concat(d,' in iOS, Material, Windows and other design styles for web, mobile, and graphic design projects. The free images are <a href="https://icons8.com/articles/make-pixel-perfect-icons/">pixel perfect</a> to fit your design and available in both png and vector. Download icons in all formats or edit them for your designs.descriptionPageAs well, welcome to check <a href="https://icons8.com/icons/new">new icons</a> and <a href="https://icons8.com/icons/pack/free-icons">popular icons</a>.</p>'));if(r.dispatch("updateSEO",{titlePage:m,descriptionPage:h,title:e.$t("WEB_APP.SEO.SEARCH.TITLE_ALL",{term:d}),description:e.$t("WEB_APP.SEO.SEARCH.DESCRIPTION_META",{term:d},"Free icons of ".concat(d,"} in various design styles for web, mobile, and graphic design projects. Available in png and vector. Download icons in all formats or edit them for your designs.")),canonical:"".concat(l,"/icons/set/").concat(n)}),!o.icons.length)throw new Error({message:"empty-icons"});t(f(f({term:n,isFound:!0},o),{},{fetchComplete:!0,page:2,parsedParams:c}))})).catch((function(e){console.error("page error",e&&e.message?e.message:e),t({term:n,isFound:!1,fetchComplete:!0,page:1,parsedParams:c,error:{message:e.message}})}))}))}var v={name:"IconsSearchPage",components:{IstockBanner:o(927).default,packPage:d.a},layout:"app",scrollToTop:!0,data:function(){return{term:null,icons:[],countAll:0,isFound:!1,page:1,fetchComplete:!1,allIconsLoaded:!1,parsedParams:null,maskedByCategory:!1,intervalSendGA:null}},computed:f(f({},Object(n.e)({platform:function(t){return t.platform},user:function(t){return t.auth.user}})),{},{crossLinkText:function(){var t="Also, explore";return t+=' <a target="_blank" href="https://photos.icons8.com/images/'.concat(this.term,'">').concat(this.term.split("-").join(" ")," photos</a>"),t+=' and <a target="_blank" href="https://icons8.com/ouch/search/'.concat(this.term,'">').concat(this.term.split("-").join(" ")," vectors</a>"),t+=" from Icons8.",this.$t("REQUEST_ICONS.WEBAPP_REQUEST.CROSS_LINK",{term:this.term,termText:this.term.split("-").join(" ")},t)},countAllFormatted:function(){return this.countAll.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}}),watch:{user:function(t){t&&this.$analytics.trackSearchEvent({userId:t.id,platform:"all",isPaidUser:!!t.activeLicense,type:"icon",term:this.term,ip:t.ip})}},middleware:function(t){t.store;var e=t.params,o=t.redirect;if(!e.term)return o("/icons")},asyncData:function(t){var e=t.app,o=t.params,r=t.store,n=(t.route,e.$utils.escapeSpecialChars(e.$utils.normalizeValue(o.term))),d=o.term.replace(/-/g," ").replace(/[/\\^$*+?.()|[\]{}]/g,""),m=new RegExp("^".concat(d,"$"),"i"),h=r.state.i18n.locale,v=r.state.appInfo.packs.find((function(t){return m.test(t.name[h])}));return r.dispatch("setPlatform","all"),"en-US"!==h&&r.commit("HREFLANG_DELETE"),v?function(t){var e=t.app,o=t.params,r=t.store,n=t.pack,d=e.$utils.escapeSpecialChars(e.$utils.normalizeValue(o.term)),m=Object(l.a)(d);r.dispatch("setPack",n.code);var h=r.state,v=h.i18n.locale,w=r.getters.hostUrl||"https://icons8.com",x=c.a.getTitlePage(e,f(f({},n),{},{lang:v}),m);h.pack.free&&h.auth.user.isGuest&&(x+='<span class="badge is-big">Free SVG</span>');var y=c.a.getDescription({that:e,category:f(f({},h.pack),{},{lang:v}),params:m});"free-icons"!==h.pack.code&&(y+="<br/>".concat(e.$t("WEB_APP.SEO.CATEGORY_PACKS.DESCRIPTION_ADDITION")));var P=c.a.getDescription({that:e,category:f(f({},h.pack),{},{lang:v}),meta:!0,params:m});return r.dispatch("updateSEO",{titlePage:x,descriptionPage:y,title:x,description:P,canonical:"".concat(w,"/icons/set/").concat(d)}),{term:d,parsedParams:m,maskedByCategory:!0}}({app:e,params:o,store:r,pack:v}):{term:n,icons:[],fetchComplete:!1}},mounted:function(){var t=this;this.$analytics.trackIconSearch({term:this.term}),this.maskedByCategory||this.icons.length||this.error||this.fetchData(this.$route.params),this.intervalSendGA=setInterval((function(){t.fetchComplete&&(clearInterval(t.intervalSendGA),t.isFound?t.$ga.page({page:"/icons/search?query=".concat(t.term,"&style=all"),title:"Found icons"}):(t.$analytics.track({event:"Nothing found",category:t.$route.params.platform}),t.$ga.page({page:"/icons/not_found?query=".concat(t.term,"&style=all"),title:"Not found icons"})))}),1e3),this.setSearchMain(this.term)},methods:f(f({},Object(n.b)(["setSearchMain"])),{},{fetchData:function(t){var e=this;return this.fetchComplete=!1,new Promise((function(o){h({app:e,params:t,store:e.$store}).then((function(t){var r;e.term=t.term,e.icons=null!==(r=t.icons)&&void 0!==r?r:[],e.isFound=!!e.icons.length,e.fetchComplete=t.fetchComplete,e.countAll=t.countAll,e.page=2,e.parsedParams=t.parsedParams,o()})).catch((function(t){e.fetchComplete=!0,console.error("error",t),e.checkError(t),o()}))}))},checkError:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.error;t&&(console.log("this.error",this.error),this.error=void 0)},fetchNext:function(t){var e=this;if(this.icons.length>=this.countAll)return t.complete(),void(this.allIconsLoaded=!0);this.$store.dispatch("search",{term:this.parsedParams.$rootPath,platform:"all",amount:150,page:this.page}).then((function(o){o.icons.length?(o.icons.forEach((function(t){e.icons.push(t)})),e.page++,t.loaded()):(t.complete(),e.allIconsLoaded=!0)})).catch((function(o){t.complete(),e.allIconsLoaded=!0,console.error("page error",o&&o.message?o.message:o)}))}})},w=(o(1136),o(1)),component=Object(w.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"icons-search-page"},[t.maskedByCategory?[o("pack-page",{attrs:{parsedParams:t.parsedParams}})]:[t.fetchComplete?t.isFound?[o("div",{staticClass:"app-page-section custom-padding"},[t.countAll?o("div",{staticClass:"icon-total-count"},[o("div",{staticClass:"search-icon",domProps:{innerHTML:t._s(t.$icons.iconSearch)}}),t._v(t._s(t.$t("WEB_APP.SEARCH.ICONS_FOUND",{count:t.countAllFormatted},t.countAllFormatted+" icons found")))]):t._e(),o("app-header")],1)]:t._e():[o("div",{staticClass:"app-page-section custom-padding ph-descr-wrap"},[o("icon-placeholder",{attrs:{type:"description",text:"haveDescription",lineText:3,shortBottomMargin:!0}})],1)],t.fetchComplete?[t.fetchComplete&&!t.isFound?o("div",{staticClass:"app-page-section custom-padding"},[o("search-nothing-found")],1):t._e(),t.fetchComplete&&t.isFound?o("div",{staticClass:"app-page-section custom-padding grid-section"},[o("icon-grid",{attrs:{icons:t.icons,"grid-style":"labels",action:"select","ads-params":{rowAds:5,term:t.term}}}),t.allIconsLoaded&&t.isFound?o("request-icon",{attrs:{"request-text-extra":t.crossLinkText}}):t._e(),o("client-only",[t.fetchComplete&&!t.icons.length||t.allIconsLoaded&&t.icons.length&&t.allIconsLoaded?[o("istock-banner")]:t._e()],2),o("client-only",[o("infinite-loading",{directives:[{name:"show",rawName:"v-show",value:!t.allIconsLoaded&&t.isFound,expression:"!allIconsLoaded && isFound"}],attrs:{distance:350},on:{infinite:t.fetchNext}},[o("div",{staticClass:"is-loading",attrs:{slot:"spinner"},slot:"spinner"})])],1)],1):t._e()]:[o("div",{staticClass:"app-page-section custom-padding"},[o("icon-placeholder",{attrs:{count:36,type:"icon",iconsHeading:!1}})],1)]]],2)}),[],!1,null,"7e2bb1d6",null);e.default=component.exports},909:function(t,e,o){var content=o(923);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("12e2a7b9",content,!0,{sourceMap:!1})},915:function(t,e,o){var content=o(977);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("31ec3462",content,!0,{sourceMap:!1})},922:function(t,e,o){"use strict";var r=o(909);o.n(r).a},923:function(t,e,o){(e=o(7)(!1)).push([t.i,'.istock-widget[data-v-06d52480]{margin-top:50px;margin-bottom:50px;padding-top:14px;padding-left:16px;padding-bottom:16px;background:#fafafa;border-radius:8px;overflow:hidden}.overflow-fade[data-v-06d52480]{position:relative}.overflow-fade[data-v-06d52480]:after{background:linear-gradient(270deg,#fafafa 22.32%,hsla(0,0%,98%,0));content:"";position:absolute;top:0;right:0;height:100%;width:10%}.istock-widget-header[data-v-06d52480]{margin:0 16px 14px 0;display:flex;justify-content:space-between}.istock-widget-remove-ads[data-v-06d52480],.istock-widget-title[data-v-06d52480]{margin:0;padding:0;font-style:normal;font-weight:400;font-size:14px;line-height:14px;color:#333;opacity:.5}.istock-widget-remove-ads[data-v-06d52480]:hover{opacity:1}.istock-widget-images[data-v-06d52480]{height:96px;width:5000px}.istock-widget-image-link[data-v-06d52480]{display:inline-block;background:#ebebeb;border-radius:8px;height:96px;width:96px;margin-right:16px}.istock-widget-image[data-v-06d52480]{width:100%}.remove-ads-banner[data-v-06d52480]{padding-top:19px;padding-bottom:17px;display:flex;justify-content:space-between;align-items:center;flex-direction:column}.remove-ads-banner-text[data-v-06d52480]{text-align:center;max-width:288px;max-height:60px;font-style:normal;font-weight:400;font-size:14px;line-height:20px;color:#333;opacity:.4}.remove-ads-link[data-v-06d52480]{margin-top:8px;font-size:14px;line-height:20px}',""]),t.exports=e},927:function(t,e,o){"use strict";o.r(e);o(14),o(13),o(10),o(9),o(11),o(25);var r=o(16),n=o(0),c=o(20),l=o.n(c),d=o(2);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function h(t,e,o){return l.a.get(t,{headers:{"api-key":e},params:o}).then((function(t){return t.data.images})).catch((function(t){console.error(t)}))}var v={name:"IstockBanner",props:{searchPhrase:{type:String,required:!1,default:""}},data:function(){return{images:[],removeAdsClicked:!1}},computed:f(f({},Object(d.e)({user:function(t){return t.auth.user},phrase:function(t){return this.searchPhrase||t.mainSearch||t.pack.code||t.platform.seoCode||t.seo.data.page.title}})),{},{showBanner:function(){return!1}}),mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o,r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="https://api.gettyimages.com/v3/search/images/creative",r="385ccdq74qvm278hygaa2wnu",n={sort_order:"random",exclude_nudity:!0,orientations:"square",graphical_styles:"illustration,vector",fields:"summary_set,referral_destinations",page_size:24,phrase:t.searchPhrase||t.phrase},e.next=5,h(o,r,n);case 5:if(!(c=e.sent)){e.next=13;break}if(!(c.length<24)){e.next=12;break}return delete n.phrase,e.next=11,h(o,r,n);case 11:c=e.sent;case 12:t.images=c;case 13:case"end":return e.stop()}}),e)})))()},methods:{partnerLink:function(t){var e=t.filter((function(t){return"istockphoto"===t.site_name}))[0].uri;return"".concat("https://iStockphoto.6q33.net/c/2052558/258824/4205/","?u=").concat(encodeURI(e))}}},w=(o(922),o(1)),component=Object(w.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.showBanner&&t.images&&t.images.length>0?o("div",{staticClass:"istock-widget"},[t.removeAdsClicked?[t._m(1)]:[o("div",{staticClass:"istock-widget-header"},[t._m(0),o("a",{staticClass:"istock-widget-remove-ads",on:{click:function(e){t.removeAdsClicked=!0}}},[t._v("Remove ads")])]),o("div",{staticClass:"overflow-fade"},[o("div",{staticClass:"istock-widget-images"},t._l(t.images,(function(image){return o("a",{key:image.id,staticClass:"istock-widget-image-link",attrs:{href:t.partnerLink(image.referral_destinations),target:"_blank"}},[o("img",{staticClass:"istock-widget-image",attrs:{src:image.display_sizes[0].uri}})])})),0)])]],2):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://iStockphoto.6q33.net/c/2052558/258824/4205/",target:"_blank"}},[e("h4",{staticClass:"istock-widget-title"},[this._v("Premium Images by iStock")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"remove-ads-banner"},[e("div",{staticClass:"remove-ads-banner-text"},[this._v("You can remove ads by purchasing a subscription. You will also get unlimited SVGs and our other products.")]),e("a",{staticClass:"remove-ads-link",attrs:{href:"https://icons8.com/pricing"}},[this._v("Learn more")])])}],!1,null,"06d52480",null);e.default=component.exports},975:function(t,e,o){"use strict";o(17);e.a={getTitlePage:function(t,e,o){var r=e.name[e.lang]||e.name["en-US"];if(!o)return name;var n=t.$t("WEB_APP.SEO.CATEGORY_PACKS.".concat(e.code,".LABEL"),r),c=o.color?t.$t("WEB_APP.SEO.FILTERS.".concat(o.color.toUpperCase()),""):"",l="";return(l+=c?t.$t("WEB_APP.SEO.TITLE_PACK_COLOR",{category:n,color:c},"Icons ".concat(n,". ").concat(c,".")):t.$t("WEB_APP.SEO.TITLE_PACK",{title:n},"Icons ".concat(n))).trim()},getFilterStatus:function(t,e){var o=e.shape,r=e.color,n=e.format;return o||r||n?!o||r||n?o||!r||n?o||r||!n?"much":"format":"color":"shape":"none"},getAlsoFormat:function(t,e,o){var r=t.$t("WEB_APP.SEO.FILTERS.VECTOR"),n="".concat(t.$t("WEB_APP.SEO.CATEGORY_PACKS.".concat(e.code,".LABEL"),e.name[e.lang])),path="/icons/pack/".concat(e.code);return path+="png"===o?"--vector":"--png",t.$t("WEB_APP.SEO.CATEGORY_PACKS.GET_ALSO_FORMAT",{url:path,category:n.toLowerCase(),format:"png"===o?r.toLowerCase():"PNG"})},getDescription:function(t){var e=t.that,o=t.category,r=t.meta,meta=void 0!==r&&r,n=t.params,c=void 0===n?{}:n,l=this.getFilterStatus(e,c),d=meta?"_META":"",m=["free-icons","alphabet","animals","arrows","astrology","baby","beauty","business","characters","cinema","city","clothing","computer-hardware"].some((function(t){return t===o.code})),f=o.name[o.lang]||o.name["en-US"],h=m?".".concat(o.code):"";if("format"===l){var v=c.format.toUpperCase(),w=e.$t("WEB_APP.SEO.CATEGORY_PACKS".concat(h,".DESCRIPTION_").concat(v).concat(d),{category:f.toLowerCase()});return meta||(w+="<br/>".concat(this.getAlsoFormat(e,o,c.format))),w}if("much"===l||"color"===l){var x="free-icons"===o.code?".".concat(o.code):"",y="";return c.shape&&(y+="".concat(e.$t("WEB_APP.SEO.FILTERS.".concat(c.shape.toUpperCase()),"")," ")),c.color&&(y+="".concat(e.$t("WEB_APP.SEO.FILTERS.".concat(c.color.toUpperCase()),"")," ")),c.format&&(y+="".concat(e.$t("WEB_APP.SEO.FILTERS.".concat(c.format.toUpperCase()),"PNG")," ")),x?e.$t("WEB_APP.SEO.CATEGORY_PACKS".concat(x,".DESCRIPTION_FILTERS").concat(d),{filters:y.trim().toLowerCase(),filter_category:"".concat(f.toLowerCase()," ").concat(y.trim().toLowerCase())},"Get free popular icons for user interface and graphic design projects. "):e.$t("WEB_APP.SEO.CATEGORY_PACKS.DESCRIPTION_FILTERS".concat(d),{filters:y.trim().toLowerCase(),category:f},"")}return e.$t("WEB_APP.SEO.CATEGORY_PACKS".concat(h,".DESCRIPTION").concat(d),{category:f})}}},976:function(t,e,o){"use strict";var r=o(915);o.n(r).a},977:function(t,e,o){(e=o(7)(!1)).push([t.i,"@-webkit-keyframes spin-data-v-5c8b3d8e{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spin-data-v-5c8b3d8e{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.icons-pack-page .nothing-found[data-v-5c8b3d8e]{padding:2rem;text-align:center}.icons-pack-page .nothing-found .nothing-found-title[data-v-5c8b3d8e]{font-size:2rem}.icons-pack-page .preview-grid-item.is-white[data-v-5c8b3d8e]{background:rgba(26,26,26,.15)}.cross-linking[data-v-5c8b3d8e]{top:0;margin-right:0}.app-page-section.is-header[data-v-5c8b3d8e]{margin-bottom:20px}@media (max-width:452px){.app-page-section.is-header[data-v-5c8b3d8e]{padding:24px}}.app-page-section.is-body .app-page-section-title[data-v-5c8b3d8e]{margin-bottom:16px}@media (max-width:348px){.app-page-section.custom-padding[data-v-5c8b3d8e]{padding-left:8px;padding-right:8px}}.other-styles-wrap[data-v-5c8b3d8e]{margin-top:32px}.pack-grid[data-v-5c8b3d8e]{display:flex;flex-wrap:wrap}.pack-grid .pack-preview[data-v-5c8b3d8e]{margin-bottom:16px;margin-right:16px}@media (max-width:375px){.pack-grid .pack-preview[data-v-5c8b3d8e]{margin-right:0}}.popular-title-wrap[data-v-5c8b3d8e]{display:flex;justify-content:space-between;align-items:baseline}@media (max-width:1080px){.popular-title-wrap[data-v-5c8b3d8e]{flex-direction:column}.popular-title-wrap .cross-linking[data-v-5c8b3d8e]{margin-bottom:12px}}.packs-istock-banner[data-v-5c8b3d8e]{max-width:1000px}.ads[data-v-5c8b3d8e]{display:block;width:100%;padding-top:16px;overflow:hidden}.ads[data-v-5c8b3d8e]:empty{display:none}@media (max-width:2340px){.ads[data-v-5c8b3d8e]{max-width:1583px;margin-right:16px}}@media (max-width:2017px){.ads[data-v-5c8b3d8e]{max-width:1276px}}@media (max-width:1694px){.ads[data-v-5c8b3d8e]{max-width:953px}}@media (max-width:1371px){.ads[data-v-5c8b3d8e]{max-width:630px}}",""]),t.exports=e},980:function(t,e,o){var content=o(1137);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("0b211da4",content,!0,{sourceMap:!1})}}]);