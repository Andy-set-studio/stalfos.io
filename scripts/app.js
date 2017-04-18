function debounce(t,e,n){var a;return function(){var o=this,r=arguments,i=function(){a=null,n||t.apply(o,r)},s=n&&!a;clearTimeout(a),a=setTimeout(i,e),s&&t.apply(o,r)}}!function(t){t.fn.any=function(){return t(this).length>0},t.fn.parseSettings=function(){var e=t(this),n={};if(e.attr("data-settings"))try{n=t.parseJSON(e.attr("data-settings"))}catch(a){return console.log("Check input data. Message: "+a.message),{}}return n},t.extend({ajaxRequest:function(e){var n={dataType:"application/json",url:"/",data:{},method:"GET",callback:null},a=function(){n=t.extend(!0,{},n,e),t.ajax({contentType:n.dataType,url:n.url,data:n.data,type:n.method,success:function(t){o(t)},error:function(t){o(t)}})},o=function(t){"function"==typeof n.callback&&n.callback(t,null==t||200!=t.status)};a()}}),t.extend({ajaxHtml:function(e,n){t.ajaxRequest({dataType:"text/html",url:e,callback:n})}}),t.extend({queryString:{toJson:function(e){var n={},a=window.location.href.toString().toLowerCase(),o=[];if("undefined"==typeof a)return{};if(0==a.length)return{};"undefined"==typeof e&&(e=[]),o=a.split("?")[1].split("&");for(var r=0,i=o.length;r<i;r++){var s=o[r].split("=");n[s[0]]=s[1]}return e.length>0&&t.each(e,function(t,e){n.hasOwnProperty(e)&&delete n[e]}),n},fromJson:function(e){return"?"+t.param(e).replace("?","&")}}}),t.extend({esc:function(e){var n={callback:null};n=t.extend(!0,{},n,e),"function"==typeof n.callback&&t(document).keyup(function(t){27==t.keyCode&&n.callback(t)})}}),t.extend({getBreakpoint:function(){return window.getComputedStyle(document.querySelector("body"),":before").getPropertyValue("content").replace(/\"/g,"")}}),t.fn.changeEvent=function(){var e=t(this),n="change";switch(e.prop("tagName").toString().toLowerCase()){case"input":"checkbox"!=e.attr("type")&&"radio"!=e.attr("type")&&(n="input")}return n}}($),function(t){t.fn.hamburger=function(){var e=t(this),n={activeClass:"is-active",target:"",targetAttr:"data-menu-id"},a=function(){n.target=e.attr("href"),o(),t(window).on("hashchange",function(){o()}),e.on("click",function(t){e.hasClass(n.activeClass)&&(t.preventDefault(),r())})},o=function(){location.hash==n.target?e.addClass(n.activeClass):e.removeClass(n.activeClass)},r=function(){location.hash="",e.removeClass(n.activeClass)};return a(),this}}($),function(t){t.fn.page=function(){var e=t(this),n=e.find(".js-page__table-of-contents-source"),a=e.find(".js-page__table-of-contents-target"),o={tableOfContentsWrapperClass:"list-view-menu",tableOfContentsListClass:"list-view-menu__list",tableOfContentsItemClass:"list-view-menu__item"},r=function(){i(),t(window).on("hashchange",function(){var n=t(":target");n.parents(e).any()&&t(window).scrollTop(n.offset().top-80)})},i=function(){var t="";n.any()&&(n.find("ol,ul").addClass(o.tableOfContentsListClass),n.find("li").addClass(o.tableOfContentsItemClass),t=n.html(),n.remove()),t.length&&a.html('<ul class="'+o.tableOfContentsWrapperClass+'">'+t+"</ul>")};return r(),this}}($);var app=function(t){var e=function(){var e=t("[data-module]");e.any()&&e.each(function(){var e=t(this),n=e.attr("data-module");n&&(n=n.split(","),t.each(n,function(t,n){switch(n){case"page":e.page();break;case"hamburger":e.hamburger()}}))}),t("pre > code").each(function(){var e=t(this),n=e.html();n=n.replace(/&amp;lbrace;/g,"{").replace(/&amp;rbrace;/g,"}"),e.html(n)})};return{init:e}}(window.$);app.init();
//# sourceMappingURL=app.js.map
