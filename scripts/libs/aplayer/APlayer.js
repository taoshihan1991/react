!function(e,a){if("object"==typeof exports&&"object"==typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var t=a();for(var l in t)("object"==typeof exports?exports:e)[l]=t[l]}}(this,function(){return function(e){function a(l){if(t[l])return t[l].exports;var i=t[l]={exports:{},id:l,loaded:!1};return e[l].call(i.exports,i,i.exports,a),i.loaded=!0,i.exports}var t={};return a.m=e,a.c=t,a.p="",a(0)}([function(e,a,t){"use strict";function l(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(a,"__esModule",{value:!0});var i=function(){function e(e,a){for(var t=0;t<a.length;t++){var l=a[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(a,t,l){return t&&e(a.prototype,t),l&&e(a,l),a}}();t(1);var r=[],n=function(){function e(a){var t=this;l(this,e),this.svg={play:["0 0 16 31","M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"],pause:["0 0 17 32","M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"],"volume-up":["0 0 28 32","M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056zM29.728 16q0 4.096-2.272 7.552t-6.048 5.056q-0.224 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.64 0.704-1.056 0.128-0.064 0.384-0.192t0.416-0.192q0.8-0.448 1.44-0.896 2.208-1.632 3.456-4.064t1.216-5.152-1.216-5.152-3.456-4.064q-0.64-0.448-1.44-0.896-0.128-0.096-0.416-0.192t-0.384-0.192q-0.704-0.416-0.704-1.056 0-0.448 0.32-0.8t0.832-0.352q0.224 0 0.448 0.096 3.776 1.632 6.048 5.056t2.272 7.552z"],"volume-down":["0 0 28 32","M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"],"volume-off":["0 0 28 32","M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"],loop:["0 0 29 32","M25.6 9.92q1.344 0 2.272 0.928t0.928 2.272v9.28q0 1.28-0.928 2.24t-2.272 0.96h-22.4q-1.28 0-2.24-0.96t-0.96-2.24v-9.28q0-1.344 0.96-2.272t2.24-0.928h8v-3.52l6.4 5.76-6.4 5.76v-3.52h-6.72v6.72h19.84v-6.72h-4.8v-4.48h6.080z"],menu:["0 0 22 32","M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z"]},this.getSVG=function(e){return'\n                <svg xmlns:xlink="http://www.w3.org/1999/xlink" height="100%" version="1.1" viewBox="'+t.svg[e][0]+'" width="100%">\n                    <use xlink:href="#aplayer-'+e+'"></use>\n                    <path class="aplayer-fill" d="'+t.svg[e][1]+'" id="aplayer-'+e+'"></path>\n                </svg>\n            '},this.isMobile=/mobile/i.test(window.navigator.userAgent),this.isMobile&&(a.autoplay=!1);var i={element:document.getElementsByClassName("aplayer")[0],narrow:!1,autoplay:!1,mutex:!0,showlrc:0,theme:"#b7daff",loop:!0};for(var r in i)i.hasOwnProperty(r)&&!a.hasOwnProperty(r)&&(a[r]=i[r]);this.playIndex="[object Array]"===Object.prototype.toString.call(a.music)?0:-1,this.option=a,this.audios=[],this.loop=a.loop,this.secondToTime=function(e){var a=function(e){return e<10?"0"+e:""+e},t=parseInt(e/60),l=parseInt(e-60*t);return a(t)+":"+a(l)},this.parseLrc=function(e){for(var a=[],t=0;t<e.length;t++){for(var l=e[t].split("\n"),i=[],r=l.length,n=0;n<r;n++){var o=l[n].match(/\[(\d{2}):(\d{2})\.(\d{2,3})]/g),s=l[n].replace(/\[(\d{2}):(\d{2})\.(\d{2,3})]/g,"").replace(/^\s+|\s+$/g,"");if(null!=o)for(var p=o.length,u=0;u<p;u++){var c=/\[(\d{2}):(\d{2})\.(\d{2,3})]/.exec(o[u]),d=60*c[1]+parseInt(c[2])+parseInt(c[3])/(2===(c[3]+"").length?100:1e3);i.push([d,s])}}i.sort(function(e,a){return e[0]-a[0]}),a.push(i)}return a},this.updateBar=function(e,a,l){a=a>0?a:0,a=a<1?a:1,t[e+"Bar"].style[l]=100*a+"%"},this.updateLrc=function(){var e=arguments.length<=0||void 0===arguments[0]?t.audio.currentTime:arguments[0];if(t.lrcIndex>t.lrc.length-1||e<t.lrc[t.lrcIndex][0]||!t.lrc[t.lrcIndex+1]||e>=t.lrc[t.lrcIndex+1][0])for(var a=0;a<t.lrc.length;a++)e>=t.lrc[a][0]&&(!t.lrc[a+1]||e<t.lrc[a+1][0])&&(t.lrcIndex=a,t.lrcContents.style.transform="translateY("+20*-t.lrcIndex+"px)",t.lrcContents.style.webkitTransform="translateY("+20*-t.lrcIndex+"px)",t.lrcContents.getElementsByClassName("aplayer-lrc-current")[0].classList.remove("aplayer-lrc-current"),t.lrcContents.getElementsByTagName("p")[a].classList.add("aplayer-lrc-current"))},this.eventTypes=["play","pause","canplay","playing","ended","error"],this.event={};for(var n=0;n<this.eventTypes.length;n++)this.event[this.eventTypes[n]]=[];this.trigger=function(e){for(var a=0;a<t.event[e].length;a++)t.event[e][a]()}}return i(e,[{key:"init",value:function(){function e(e){for(var a=e.offsetLeft,t=e.offsetParent,l=void 0;null!==t;)a+=t.offsetLeft,t=t.offsetParent;return l=document.body.scrollLeft+document.documentElement.scrollLeft,a-l}function a(e){for(var a=e.offsetTop,t=e.offsetParent,l=void 0;null!==t;)a+=t.offsetTop,t=t.offsetParent;return l=document.body.scrollTop+document.documentElement.scrollTop,a-l}var t=this;this.element=this.option.element,this.multiple=this.playIndex>-1,this.music=this.multiple?this.option.music[this.playIndex]:this.option.music;var l=void 0;if(this.option.showlrc){var i=[];if(1===this.option.showlrc)if(this.multiple)for(l=0;l<this.option.music.length;l++)i.push(this.option.music[l].lrc);else i.push(this.option.music.lrc);else if(2===this.option.showlrc||this.option.showlrc===!0)for(l=0;l<this.element.getElementsByClassName("aplayer-lrc-content").length;l++)i.push(this.element.getElementsByClassName("aplayer-lrc-content")[l].innerHTML);this.lrcs=this.parseLrc(i)}this.option.showlrc&&this.element.classList.add("aplayer-withlrc");var n='\n            <div class="aplayer-pic" '+(this.music.pic?"style=\"background-image: url('"+this.music.pic+"');\"":"")+'>\n                <div class="aplayer-button aplayer-play">\n                    <button class="aplayer-icon aplayer-icon-play">'+this.getSVG("play")+('     </button>\n                </div>\n            </div>\n            <div class="aplayer-info">\n                <div class="aplayer-music">\n                    <span class="aplayer-title"></span>\n                    <span class="aplayer-author"></span>\n                </div>\n                <div class="aplayer-lrc">\n                    <div class="aplayer-lrc-contents" style="transform: translateY(0); -webkit-transform: translateY(0);"></div>\n                </div>\n                <div class="aplayer-controller">\n                    <div class="aplayer-bar-wrap">\n                        <div class="aplayer-bar">\n                            <div class="aplayer-loaded" style="width: 0"></div>\n                            <div class="aplayer-played" style="width: 0; background: '+this.option.theme+';">\n                                <span class="aplayer-thumb" style="border: 1px solid '+this.option.theme+';"></span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="aplayer-time">\n                        <span class="aplayer-time-inner">\n                            - <span class="aplayer-ptime">00:00</span> / <span class="aplayer-dtime">00:00</span>\n                        </span>\n                        <div class="aplayer-volume-wrap">\n                            <button class="aplayer-icon aplayer-icon-volume-down">')+this.getSVG("volume-down")+('             </button>\n                            <div class="aplayer-volume-bar-wrap">\n                                <div class="aplayer-volume-bar">\n                                    <div class="aplayer-volume" style="height: 80%; background: '+this.option.theme+';"></div>\n                                </div>\n                            </div>\n                        </div>\n                        <button class="aplayer-icon aplayer-icon-loop'+(this.loop?"":" aplayer-noloop")+'">')+this.getSVG("loop")+("         </button>\n                        "+(this.multiple?'<button class="aplayer-icon aplayer-icon-menu">'+this.getSVG("menu")+"         </button>":"")+"\n                    </div>\n                </div>\n            </div>");if(this.multiple){for(n+='\n            <div class="aplayer-list">\n                <ol>',l=0;l<this.option.music.length;l++)n+='\n                    <li>\n                        <span class="aplayer-list-cur" style="background: '+this.option.theme+';"></span>\n                        <span class="aplayer-list-index">'+(l+1)+'</span>\n                        <span class="aplayer-list-title">'+this.option.music[l].title+'</span>\n                        <span class="aplayer-list-author">'+this.option.music[l].author+"</span>\n                    </li>";n+="\n                </ol>\n            </div>"}this.element.innerHTML=n,this.element.offsetWidth<300&&(this.element.getElementsByClassName("aplayer-icon-loop")[0].style.display="none"),this.ptime=this.element.getElementsByClassName("aplayer-ptime")[0],this.element.getElementsByClassName("aplayer-info")[0].offsetWidth<200&&this.element.getElementsByClassName("aplayer-time")[0].classList.add("aplayer-time-narrow"),this.bar=this.element.getElementsByClassName("aplayer-bar-wrap")[0],this.bar.style.marginRight=this.element.getElementsByClassName("aplayer-time")[0].offsetWidth+5+"px",this.option.narrow&&this.element.classList.add("aplayer-narrow"),this.button=this.element.getElementsByClassName("aplayer-button")[0],this.button.addEventListener("click",function(e){t.button.classList.contains("aplayer-play")?t.play():t.button.classList.contains("aplayer-pause")&&t.pause()}),this.multiple&&!function(){for(var e=t.element.getElementsByClassName("aplayer-list")[0].getElementsByTagName("li"),a=function(a){e[a].addEventListener("click",function(){var l=parseInt(e[a].getElementsByClassName("aplayer-list-index")[0].innerHTML)-1;l!==t.playIndex?(t.setMusic(l),t.isMobile?t.pause():t.play()):t.toggle()})},l=0;l<t.option.music.length;l++)a(l)}(),this.playedBar=this.element.getElementsByClassName("aplayer-played")[0],this.loadedBar=this.element.getElementsByClassName("aplayer-loaded")[0],this.thumb=this.element.getElementsByClassName("aplayer-thumb")[0];var o=void 0;this.bar.addEventListener("click",function(a){var l=a||window.event;o=t.bar.clientWidth;var i=(l.clientX-e(t.bar))/o;t.updateBar("played",i,"width"),t.element.getElementsByClassName("aplayer-ptime")[0].innerHTML=t.secondToTime(i*t.audio.duration),t.audio.currentTime=parseFloat(t.playedBar.style.width)/100*t.audio.duration}),this.thumb.addEventListener("mouseover",function(){t.thumb.style.background=t.option.theme}),this.thumb.addEventListener("mouseout",function(){t.thumb.style.background="#fff"});var s=function(a){var l=a||window.event,i=(l.clientX-e(t.bar))/o;i=i>0?i:0,i=i<1?i:1,t.updateBar("played",i,"width"),t.option.showlrc&&t.updateLrc(parseFloat(t.playedBar.style.width)/100*t.audio.duration),t.element.getElementsByClassName("aplayer-ptime")[0].innerHTML=t.secondToTime(i*t.audio.duration)},p=function y(){document.removeEventListener("mouseup",y),document.removeEventListener("mousemove",s),t.audio.currentTime=parseFloat(t.playedBar.style.width)/100*t.audio.duration,t.playedTime=setInterval(function(){t.updateBar("played",t.audio.currentTime/t.audio.duration,"width"),t.option.showlrc&&t.updateLrc(),t.element.getElementsByClassName("aplayer-ptime")[0].innerHTML=t.secondToTime(t.audio.currentTime),t.trigger("playing")},100)};this.thumb.addEventListener("mousedown",function(){o=t.bar.clientWidth,clearInterval(t.playedTime),document.addEventListener("mousemove",s),document.addEventListener("mouseup",p)}),this.volumeBar=this.element.getElementsByClassName("aplayer-volume")[0];var u=this.element.getElementsByClassName("aplayer-volume-bar")[0];this.volumeicon=this.element.getElementsByClassName("aplayer-time")[0].getElementsByTagName("button")[0];var c=35;this.element.getElementsByClassName("aplayer-volume-bar-wrap")[0].addEventListener("click",function(e){var l=e||window.event,i=(c-l.clientY+a(u))/c;i=i>0?i:0,i=i<1?i:1,t.volume(i)}),this.volumeicon.addEventListener("click",function(){t.audio.muted?(t.audio.muted=!1,t.volumeicon.className=1===t.audio.volume?"aplayer-icon aplayer-icon-volume-up":"aplayer-icon aplayer-icon-volume-down",1===t.audio.volume?(t.volumeicon.className="aplayer-icon aplayer-icon-volume-up",t.volumeicon.innerHTML=t.getSVG("volume-up")):(t.volumeicon.className="aplayer-icon aplayer-icon-volume-down",t.volumeicon.innerHTML=t.getSVG("volume-down")),t.updateBar("volume",t.audio.volume,"height")):(t.audio.muted=!0,t.volumeicon.className="aplayer-icon aplayer-icon-volume-off",t.volumeicon.innerHTML=t.getSVG("volume-off"),t.updateBar("volume",0,"height"))});var d=this.element.getElementsByClassName("aplayer-icon-loop")[0];d.addEventListener("click",function(){t.loop?(d.classList.add("aplayer-noloop"),t.loop=!1,t.audio.loop=!t.multiple&&t.loop):(d.classList.remove("aplayer-noloop"),t.loop=!0,t.audio.loop=!t.multiple&&t.loop)}),this.multiple&&!function(){var e=t.element.getElementsByClassName("aplayer-list")[0];e.style.height=e.offsetHeight+"px",t.element.getElementsByClassName("aplayer-icon-menu")[0].addEventListener("click",function(){e.classList.contains("aplayer-list-hide")?e.classList.remove("aplayer-list-hide"):e.classList.add("aplayer-list-hide")})}(),this.setMusic(0),r.push(this)}},{key:"setMusic",value:function(e){var a=this;this.multiple&&"undefined"!=typeof e&&(this.playIndex=e);var t=this.playIndex;if(this.music=this.multiple?this.option.music[t]:this.option.music,this.music.pic&&(this.element.getElementsByClassName("aplayer-pic")[0].style.backgroundImage="url('"+this.music.pic+"')"),this.element.getElementsByClassName("aplayer-title")[0].innerHTML=this.music.title,this.element.getElementsByClassName("aplayer-author")[0].innerHTML=" - "+this.music.author,this.multiple&&(this.element.getElementsByClassName("aplayer-list-light")[0]&&this.element.getElementsByClassName("aplayer-list-light")[0].classList.remove("aplayer-list-light"),this.element.getElementsByClassName("aplayer-list")[0].getElementsByTagName("li")[t].classList.add("aplayer-list-light")),this.audio&&(this.pause(),this.audio.currentTime=0),this.multiple&&!this.audios[t]||this.playIndex===-1?(this.audio=document.createElement("audio"),this.audio.src=this.music.url,this.option.preload?this.audio.preload=this.option.preload:this.audio.preload=this.isMobile?"none":"metadata",this.audio.addEventListener("durationchange",function(){1!==a.audio.duration&&(a.element.getElementsByClassName("aplayer-dtime")[0].innerHTML=a.secondToTime(a.audio.duration))}),this.audio.addEventListener("progress",function(){var e=a.audio.buffered.length?a.audio.buffered.end(a.audio.buffered.length-1)/a.audio.duration:0;a.updateBar("loaded",e,"width")}),this.audio.addEventListener("error",function(){a.element.getElementsByClassName("aplayer-author")[0].innerHTML=" - Error happens ╥﹏╥",a.trigger("pause")}),this.audio.addEventListener("canplay",function(){a.trigger("canplay")}),this.ended=!1,this.multiple?this.audio.addEventListener("ended",function(){return a.isMobile?(a.ended=!0,void a.pause()):void(0!==a.audio.currentTime&&(a.playIndex<a.option.music.length-1?a.setMusic(++a.playIndex):a.loop?a.setMusic(0):a.loop||(a.ended=!0,a.pause(),a.trigger("ended"))))}):this.audio.addEventListener("ended",function(){a.loop||(a.ended=!0,a.pause(),a.trigger("ended"))}),this.audio.volume=parseInt(this.element.getElementsByClassName("aplayer-volume")[0].style.height)/100,this.audio.loop=!this.multiple&&this.loop,this.multiple&&(this.audios[t]=this.audio)):(this.audio=this.audios[t],this.audio.volume=parseInt(this.element.getElementsByClassName("aplayer-volume")[0].style.height)/100,this.audio.currentTime=0),this.option.showlrc){this.lrc=this.multiple?this.lrcs[t]:this.lrcs[0];var l="";this.lrcContents=this.element.getElementsByClassName("aplayer-lrc-contents")[0];for(var i=0;i<this.lrc.length;i++)l+="<p>"+this.lrc[i][1]+"</p>";this.lrcContents.innerHTML=l,this.lrcIndex||(this.lrcIndex=0),this.lrcContents.getElementsByTagName("p")[0].classList.add("aplayer-lrc-current"),this.lrcContents.style.transform="translateY(0px)",this.lrcContents.style.webkitTransform="translateY(0px)"}1!==this.audio.duration&&(this.element.getElementsByClassName("aplayer-dtime")[0].innerHTML=this.audio.duration?this.secondToTime(this.audio.duration):"00:00"),this.option.autoplay&&!this.isMobile&&this.play(),this.option.autoplay=!0,this.isMobile&&this.pause()}},{key:"play",value:function(e){var a=this;if("[object Number]"===Object.prototype.toString.call(e)&&(this.audio.currentTime=e),this.audio.paused){if(this.button.classList.remove("aplayer-play"),this.button.classList.add("aplayer-pause"),this.button.innerHTML="",setTimeout(function(){a.button.innerHTML='\n                            <button class="aplayer-icon aplayer-icon-pause">'+a.getSVG("pause")+"     </button>"},100),this.option.mutex)for(var t=0;t<r.length;t++)this!=r[t]&&r[t].pause();this.audio.play(),this.playedTime&&clearInterval(this.playedTime),this.playedTime=setInterval(function(){a.updateBar("played",a.audio.currentTime/a.audio.duration,"width"),a.option.showlrc&&a.updateLrc(),a.ptime.innerHTML=a.secondToTime(a.audio.currentTime),a.trigger("playing")},100),this.trigger("play")}}},{key:"pause",value:function(){var e=this;this.audio.paused&&!this.ended||(this.ended=!1,this.button.classList.remove("aplayer-pause"),this.button.classList.add("aplayer-play"),this.button.innerHTML="",setTimeout(function(){e.button.innerHTML='\n                            <button class="aplayer-icon aplayer-icon-play">'+e.getSVG("play")+"     </button>"},100),this.audio.pause(),clearInterval(this.playedTime),this.trigger("pause"))}},{key:"volume",value:function(e){this.updateBar("volume",e,"height"),this.audio.volume=e,this.audio.muted&&(this.audio.muted=!1),1===e?(this.volumeicon.className="aplayer-icon aplayer-icon-volume-up",this.volumeicon.innerHTML=this.getSVG("volume-up")):(this.volumeicon.className="aplayer-icon aplayer-icon-volume-down",this.volumeicon.innerHTML=this.getSVG("volume-down"))}},{key:"on",value:function(e,a){"function"==typeof a&&this.event[e].push(a)}},{key:"toggle",value:function(){this.audio.paused?this.play():this.pause()}}]),e}();a.APlayer=n},function(e,a,t){var l=t(2);"string"==typeof l&&(l=[[e.id,l,""]]);t(5)(l,{});l.locals&&(e.exports=l.locals)},function(e,a,t){a=e.exports=t(3)(),a.push([e.id,".aplayer-narrow{width:66px}.aplayer-narrow .aplayer-info{display:none}.aplayer-withlrc.aplayer-narrow{width:106px}.aplayer-withlrc.aplayer .aplayer-pic{height:106px;width:106px}.aplayer-withlrc.aplayer .aplayer-info{margin-left:106px;height:106px}.aplayer-withlrc.aplayer .aplayer-lrc{display:block}.aplayer{font-family:Arial,Helvetica,sans-serif;margin:5px;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);border-radius:2px;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;line-height:normal}.aplayer *{box-sizing:content-box}.aplayer .aplayer-icon{width:15px;height:15px;border:none;background-color:transparent;outline:none;cursor:pointer;opacity:.8;vertical-align:middle;padding:0}.aplayer .aplayer-icon .aplayer-fill{-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.aplayer .aplayer-lrc-content{display:none}.aplayer .aplayer-pic{position:relative;float:left;height:66px;width:66px;background-image:url("+t(4)+");background-size:100%;-webkit-transition:all .3s ease;transition:all .3s ease}.aplayer .aplayer-pic .aplayer-button{position:absolute;border-radius:50%;opacity:.8;cursor:pointer;text-shadow:0 1px 1px rgba(0,0,0,.2);box-shadow:0 1px 1px rgba(0,0,0,.2);background:rgba(0,0,0,.2);-webkit-transition:all .1s ease;transition:all .1s ease}.aplayer .aplayer-pic .aplayer-button:hover{opacity:1}.aplayer .aplayer-pic .aplayer-button .aplayer-fill{fill:#fff}.aplayer .aplayer-pic .aplayer-hide{display:none}.aplayer .aplayer-pic .aplayer-play{width:26px;height:26px;border:2px solid #fff;bottom:50%;right:50%;margin:0 -15px -15px 0}.aplayer .aplayer-pic .aplayer-play .aplayer-icon-play{position:absolute;top:3px;left:4px;height:20px;width:20px}.aplayer .aplayer-pic .aplayer-pause{width:16px;height:16px;border:2px solid #fff;bottom:4px;right:4px}.aplayer .aplayer-pic .aplayer-pause .aplayer-icon-pause{position:absolute;top:2px;left:2px;height:12px;width:12px}.aplayer .aplayer-info{margin-left:66px;padding:14px 7px 0 10px;height:66px;box-sizing:border-box}.aplayer .aplayer-info .aplayer-music{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-bottom:13px}.aplayer .aplayer-info .aplayer-music .aplayer-title{font-size:14px}.aplayer .aplayer-info .aplayer-music .aplayer-author{font-size:12px;color:#666}.aplayer .aplayer-info .aplayer-controller{position:relative}.aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap{margin:0 140px 0 5px;padding:4px 0;cursor:pointer!important}.aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar{position:relative;height:2px;width:100%;background:#cdcdcd}.aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar .aplayer-loaded{position:absolute;left:0;top:0;bottom:0;background:#aaa;height:2px;-webkit-transition:all .5s ease;transition:all .5s ease}.aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar .aplayer-played{position:absolute;left:0;top:0;bottom:0;height:2px}.aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar .aplayer-played .aplayer-thumb{position:absolute;top:0;right:5px;margin-top:-4px;margin-right:-10px;height:8px;width:8px;border-radius:50%;background:#fff;cursor:pointer!important}.aplayer .aplayer-info .aplayer-controller .aplayer-time{position:absolute;right:0;bottom:-3px;height:17px;color:#999;font-size:11px}.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-time-inner{vertical-align:middle}.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon{cursor:pointer;-webkit-transition:all .2s ease;transition:all .2s ease}.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon .aplayer-fill{fill:#666}.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon.aplayer-icon-loop{margin-right:4px}.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon.aplayer-noloop .aplayer-fill{fill:#ddd}.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon.aplayer-noloop:hover .aplayer-fill{fill:#bbb}.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon:hover .aplayer-fill{fill:#000}.aplayer .aplayer-info .aplayer-controller .aplayer-time.aplayer-time-narrow .aplayer-icon-loop,.aplayer .aplayer-info .aplayer-controller .aplayer-time.aplayer-time-narrow .aplayer-icon-menu{display:none}.aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap{position:relative;display:inline-block;margin-left:3px;cursor:pointer!important}.aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap:hover .aplayer-volume-bar-wrap{display:block}.aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap .aplayer-volume-bar-wrap{display:none;position:absolute;bottom:15px;right:-3px;width:25px;height:40px;z-index:99}.aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap .aplayer-volume-bar-wrap .aplayer-volume-bar{position:absolute;bottom:0;right:10px;width:5px;height:35px;background:#aaa}.aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap .aplayer-volume-bar-wrap .aplayer-volume-bar .aplayer-volume{position:absolute;bottom:0;right:0;width:5px;-webkit-transition:all .1s ease;transition:all .1s ease}.aplayer .aplayer-lrc{display:none;position:relative;height:40px;background:#fff;text-align:center;overflow:hidden;margin:-10px 0 10px}.aplayer .aplayer-lrc:before{top:0;height:10%;background:-webkit-linear-gradient(top,#fff,hsla(0,0%,100%,0));background:-webkit-gradient(linear,left top,left bottom,from(#fff),to(hsla(0,0%,100%,0)));background:linear-gradient(180deg,#fff 0,hsla(0,0%,100%,0));filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff',endColorstr='#00ffffff',GradientType=0)}.aplayer .aplayer-lrc:after,.aplayer .aplayer-lrc:before{position:absolute;z-index:1;display:block;overflow:hidden;width:100%;content:' '}.aplayer .aplayer-lrc:after{bottom:0;height:33%;background:-webkit-linear-gradient(bottom,#fff,hsla(0,0%,100%,0));background:-webkit-gradient(linear,left bottom,left top,from(#fff),to(hsla(0,0%,100%,0)));background:linear-gradient(0deg,#fff 0,hsla(0,0%,100%,0));filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff',endColorstr='#ffffff',GradientType=0)}.aplayer .aplayer-lrc p{font-size:12px;color:#666;line-height:20px!important;height:20px!important;padding:0!important;margin:0!important;-webkit-transition:all .5s ease-out;transition:all .5s ease-out;opacity:.4;overflow:hidden}.aplayer .aplayer-lrc p.aplayer-lrc-current{opacity:1}.aplayer .aplayer-lrc .aplayer-lrc-contents{width:100%;-webkit-transition:all .5s ease-out;transition:all .5s ease-out}.aplayer .aplayer-list{overflow:auto;-webkit-transition:all .5s ease;transition:all .5s ease}.aplayer .aplayer-list.aplayer-list-hide{height:0!important}.aplayer .aplayer-list ol{list-style-type:none;margin:0;padding:0}.aplayer .aplayer-list ol li{position:relative;height:32px;line-height:32px;padding:0 15px;font-size:12px;border-top:1px solid #e9e9e9;cursor:pointer;-webkit-transition:all .2s ease;transition:all .2s ease;overflow:hidden}.aplayer .aplayer-list ol li:hover{background:#efefef}.aplayer .aplayer-list ol li.aplayer-list-light{background:#e9e9e9}.aplayer .aplayer-list ol li.aplayer-list-light .aplayer-list-cur{display:inline-block}.aplayer .aplayer-list ol li .aplayer-list-cur{display:none;width:3px;height:22px;position:absolute;left:0;top:5px;cursor:pointer}.aplayer .aplayer-list ol li .aplayer-list-index{color:#666;margin-right:12px;cursor:pointer}.aplayer .aplayer-list ol li .aplayer-list-author{color:#666;float:right;cursor:pointer}@-webkit-keyframes aplayer-roll{0%{left:0}to{left:-100%}}@keyframes aplayer-roll{0%{left:0}to{left:-100%}}",""])},function(e,a){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],a=0;a<this.length;a++){var t=this[a];t[2]?e.push("@media "+t[2]+"{"+t[1]+"}"):e.push(t[1])}return e.join("")},e.i=function(a,t){"string"==typeof a&&(a=[[null,a,""]]);for(var l={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(l[r]=!0)}for(i=0;i<a.length;i++){var n=a[i];"number"==typeof n[0]&&l[n[0]]||(t&&!n[2]?n[2]=t:t&&(n[2]="("+n[2]+") and ("+t+")"),e.push(n))}},e}},function(e,a){e.exports="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/4QMfaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE2NjQ3NUZBM0Y4RDExRTY4NzJCRDdCNkZCQTQ0MjNBIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE2NjQ3NUY5M0Y4RDExRTY4NzJCRDdCNkZCQTQ0MjNBIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI5OENEMEFFRjM0NTI1NjE0NEREQkU4RjkxRjAwNjM3NiIgc3RSZWY6ZG9jdW1lbnRJRD0iOThDRDBBRUYzNDUyNTYxNDREREJFOEY5MUYwMDYzNzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAQCwsLDAsQDAwQFw8NDxcbFBAQFBsfFxcXFxcfHhca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";
},function(e,a,t){function l(e,a){for(var t=0;t<e.length;t++){var l=e[t],i=y[l.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](l.parts[r]);for(;r<l.parts.length;r++)i.parts.push(p(l.parts[r],a))}else{for(var n=[],r=0;r<l.parts.length;r++)n.push(p(l.parts[r],a));y[l.id]={id:l.id,refs:1,parts:n}}}}function i(e){for(var a=[],t={},l=0;l<e.length;l++){var i=e[l],r=i[0],n=i[1],o=i[2],s=i[3],p={css:n,media:o,sourceMap:s};t[r]?t[r].parts.push(p):a.push(t[r]={id:r,parts:[p]})}return a}function r(e,a){var t=f(),l=b[b.length-1];if("top"===e.insertAt)l?l.nextSibling?t.insertBefore(a,l.nextSibling):t.appendChild(a):t.insertBefore(a,t.firstChild),b.push(a);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(a)}}function n(e){e.parentNode.removeChild(e);var a=b.indexOf(e);a>=0&&b.splice(a,1)}function o(e){var a=document.createElement("style");return a.type="text/css",r(e,a),a}function s(e){var a=document.createElement("link");return a.rel="stylesheet",r(e,a),a}function p(e,a){var t,l,i;if(a.singleton){var r=g++;t=v||(v=o(a)),l=u.bind(null,t,r,!1),i=u.bind(null,t,r,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=s(a),l=d.bind(null,t),i=function(){n(t),t.href&&URL.revokeObjectURL(t.href)}):(t=o(a),l=c.bind(null,t),i=function(){n(t)});return l(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;l(e=a)}else i()}}function u(e,a,t,l){var i=t?"":l.css;if(e.styleSheet)e.styleSheet.cssText=x(a,i);else{var r=document.createTextNode(i),n=e.childNodes;n[a]&&e.removeChild(n[a]),n.length?e.insertBefore(r,n[a]):e.appendChild(r)}}function c(e,a){var t=a.css,l=a.media;if(l&&e.setAttribute("media",l),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}function d(e,a){var t=a.css,l=a.sourceMap;l&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */");var i=new Blob([t],{type:"text/css"}),r=e.href;e.href=URL.createObjectURL(i),r&&URL.revokeObjectURL(r)}var y={},h=function(e){var a;return function(){return"undefined"==typeof a&&(a=e.apply(this,arguments)),a}},m=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),f=h(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,g=0,b=[];e.exports=function(e,a){a=a||{},"undefined"==typeof a.singleton&&(a.singleton=m()),"undefined"==typeof a.insertAt&&(a.insertAt="bottom");var t=i(e);return l(t,a),function(e){for(var r=[],n=0;n<t.length;n++){var o=t[n],s=y[o.id];s.refs--,r.push(s)}if(e){var p=i(e);l(p,a)}for(var n=0;n<r.length;n++){var s=r[n];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete y[s.id]}}}};var x=function(){var e=[];return function(a,t){return e[a]=t,e.filter(Boolean).join("\n")}}()}])});
//# sourceMappingURL=APlayer.min.js.map
