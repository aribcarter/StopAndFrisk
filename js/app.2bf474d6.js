(function(t){function e(e){for(var n,s,o=e[0],l=e[1],c=e[2],u=0,p=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);h&&h(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/StopAndFrisk/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var h=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"0740":function(t,e,a){"use strict";var n=a("c8b6"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"antialiased",attrs:{id:"app"}},[t.sampleData?a("Intro",{attrs:{sampleData:this.sampleData,svgSize:this.svgSize}}):t._e(),t._m(0),t._l(t.safData,(function(t){return a("div",{key:t.year},[a("AnnualSlot",{attrs:{yearData:t}})],1)}))],2)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex"},[a("div",{staticClass:"w-1/2 bg-viz-black text-gray-100 text-center font-bold p-2 text-2xl"},[a("h1",[t._v("Black New Yorkers")])]),a("div",{staticClass:"w-1/2 bg-gray-100 text-viz-black text-center font-bold p-2 text-2xl"},[a("h1",[t._v("White New Yorkers")])])])}],s=(a("99af"),a("a9e3"),a("d3b7"),a("96cf"),a("1da1")),o=a("5698"),l=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"justify-center items-center bg-viz-black text-gray-200"},[a("div",{staticClass:"flex flex-wrap p-4 justify-center items-center text-center",attrs:{id:"title"}},[a("div",{staticClass:"w-full mb-2"},[a("h1",{staticClass:"text-5xl lg:text-6xl font-bold italic"},[t._v("Broken Windows")])]),a("div",{staticClass:"w-full mb-4"},[a("h2",{staticClass:"text-xl lg:text-2xl text-gray-300"},[t._v("Exploring racial disparities in the NPYD's use of Stop and Frisk from 2003 to 2019")])])]),a("div",{staticClass:"flex p-4 ml-4 mr-4 text-center text-sm lg:text-lg",attrs:{id:"context"}},[a("p",[t._v(" Inspired by the national movement against racism in the police force (and police in general) I wanted to visualize how Broken Windows Policing, realized through the New York City Police Department’s Stop and Frisk policy, targeted Black citizens more readily than white citizens, especially in the late oughts and early 2010’s. Stop and Frisk saw a peak in 2012, after which a lawsuit by The Center for Constitutional Rights lead to increased regulations for NYPD officers requiring them to thoroughly justify the reason for a stop. "),a("br"),a("br"),t._v(" This visualization seeks to underline Stop and Frisk’s disproportionate focus on Black New Yorkers, who experience roughly half of all annual stops despite only making up a quarter of the New York City population according to the "),a("a",{attrs:{href:"https://www.census.gov/quickfacts/newyorkcitynewyork"}},[t._v("2010 census")]),t._v(". Three major statistics are visualized here: percent of total stops, percent of stops finding no wrongdoing, and number of times a police officer reported drawing their service weapon despite reporting the New Yorker they stopped being completely unarmed. The choice to add the third statistic and its presence across all years of data represented highlights possible unnecessary force used by the NYPD in situations where it is not warranted. Note that all statistics are from the "),a("a",{attrs:{href:"https://www1.nyc.gov/site/nypd/stats/reports-analysis/stopfrisk.page"}},[t._v("NYPD’s self reported Stop and Frisk data")]),t._v(". "),a("br"),a("br"),t._v(" If you are looking to donate to any organizations in the New York area, consider "),a("a",{attrs:{href:"https://www.libertyfund.nyc/"}},[t._v("The Liberty Fund")]),t._v(", "),a("a",{attrs:{href:"https://www.changethenypd.org/"}},[t._v("Communities United for Police Reform")]),t._v(", and/or "),a("a",{attrs:{href:"https://www.legalaidnyc.org/"}},[t._v("The Legal Aid Society")]),t._v(". ")])]),a("div",{staticClass:"flex p-2 items-center justify-center w-full",attrs:{id:"sample"}},[a("div",{staticClass:"fill-current stroke-current text-gray-100 full-screen-container md:half-screen-container",attrs:{id:"sampleBreak"}})])])}],h={name:"Intro",props:["sampleData","svgSize"],mounted:function(){this.$parent.MakeBreak(this.sampleData.blackSplit,this.sampleData.totalStops,"#sampleBreak")}},u=h,p=(a("0740"),a("2877")),d=Object(p["a"])(u,l,c,!1,null,null,null),f=d.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex w-full"},[a("div",{staticClass:"bg-viz-black w-1/2 p-8 flex items-center justify-center relative"},[a("div",{staticClass:"relative inset-0 flex items-center justify-center align-top inline-block w-full text-gray-100 fadeBlock"},[a("div",{staticClass:"fill-current stroke-current full-screen-container removeFade",attrs:{id:this.blackTag}}),a("div",{staticClass:"absolute text-center leading-tight opacity-0 addFade text-2xs p-3 md:text-lg lg:p-2",attrs:{id:this.blackFade}},[a("p",[t._v("Black New Yorkers experienced "+t._s(this.FormatStopPercentage(this.yearData.blackSplit))+" of total stops")]),a("br"),a("p",[t._v(t._s(this.FormatInnocentPercentage(this.yearData.blackSplit))+" of these stops found no wrongdoing")]),a("br"),a("p",[t._v("On "+t._s(this.yearData.blackSplit.unarmed)+" stops officers drew their gun against an unarmed black New Yorker")])])]),a("div",{staticClass:"absolute right-0 text-gray-100 font-semibold text-right",attrs:{id:"yearText"}},[a("h1",{staticClass:"text-sm md:text-xl"},[t._v(t._s(this.yearData.year[0]+this.yearData.year[1]))]),a("h1",{staticClass:"text-2xs md:text-base"},[t._v(t._s(this.FormatTotalStops(!0)))])])]),a("div",{staticClass:"bg-gray-100 w-1/2 p-8 flex items-center justify-center relative"},[a("div",{staticClass:"relative inset-0 flex items-center justify-center align-top inline-block w-full text-viz-black fadeBlock"},[a("div",{staticClass:"fill-current stroke-current full-screen-container removeFade",attrs:{id:this.whiteTag}}),a("div",{staticClass:"absolute text-center leading-tight opacity-0 addFade text-2xs p-3 md:text-lg lg:p-2",attrs:{id:this.whiteFade}},[a("p",[t._v("White New Yorkers experienced "+t._s(this.FormatStopPercentage(this.yearData.whiteSplit))+" of total stops")]),a("br"),a("p",[t._v(t._s(this.FormatInnocentPercentage(this.yearData.whiteSplit))+" of these stops found no wrongdoing")]),a("br"),a("p",[t._v("On "+t._s(this.yearData.whiteSplit.unarmed)+" stops officers drew their gun against an unarmed white New Yorker")])])]),a("div",{staticClass:"absolute left-0 text-viz-black font-semibold",attrs:{id:"yearText"}},[a("h1",{staticClass:"text-sm md:text-xl"},[t._v(t._s(this.yearData.year[2]+this.yearData.year[3]))]),a("h1",{staticClass:"text-2xs md:text-base"},[t._v(t._s(this.FormatTotalStops(!1)))])])])])},m=[],v=(a("7db0"),a("b680"),a("ac1f"),a("25f0"),a("5319"),a("cffa")),x=a("1157"),y=a.n(x),w={name:"AnnualSlot",props:["yearData"],mounted:function(){this.$parent.MakeBreak(this.yearData.blackSplit,this.yearData.totalStops,"#"+this.blackTag),this.$parent.MakeBreak(this.yearData.whiteSplit,this.yearData.totalStops,"#"+this.whiteTag),this.EstablishFade()},data:function(){return{whiteTag:"whiteside"+this.yearData.year,blackTag:"blackside"+this.yearData.year,whiteFade:"whiteFade"+this.yearData.year,blackFade:"blackFade"+this.yearData.year}},methods:{EstablishFade:function(){y()(".fadeBlock").each((function(t,e){e.animation=v["a"].timeline({paused:!0}).to(y()(e).find("div.removeFade"),{autoAlpha:0,duration:.5}).to(y()(e).find("div.addFade"),{autoAlpha:1,duration:.5},"-=.25")})),y()(".fadeBlock").hover((function(){y()(this)[0].animation.play()}),(function(){y()(this)[0].animation.reverse()})),y()(".fadeBlock").on("touchstart",(function(){y()(this)[0].animation.play()})),y()(".fadeBlock").on("touchend",(function(){y()(this)[0].animation.reverse()}))},FormatStopPercentage:function(t){return(100*t.stops/this.yearData.totalStops).toFixed(2)+"%"},FormatInnocentPercentage:function(t){return(100*t.innocent/t.stops).toFixed(2)+"%"},FormatTotalStops:function(t){var e=this.numberWithCommas(this.yearData.totalStops)+" total stops",a=Math.floor(e.length/2);return t?e.substring(0,a):e.substring(a,e.length)},numberWithCommas:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}},k=w,b=Object(p["a"])(k,g,m,!1,null,null,null),S=b.exports,M={name:"App",components:{Intro:f,AnnualSlot:S},data:function(){return{safData:[],sampleData:null,smallestRadius:5,largestRadius:30,svgSize:400,activeAnimation:null}},created:function(){this.CompleteData(),document.title="Broken Windows"},computed:{holeScale:function(){return o["f"]().range([this.smallestRadius,this.largestRadius]).domain([o["e"](this.safData,(function(t){return t.blackSplit.unarmed<t.whiteSplit.unarmed?t.blackSplit.unarmed:t.whiteSplit.unarmed})),o["d"](this.safData,(function(t){return t.blackSplit.unarmed>t.whiteSplit.unarmed?t.blackSplit.unarmed:t.whiteSplit.unarmed}))])},crackScale:function(){return o["f"]().range([0,this.svgSize/2-this.largestRadius]).domain([0,1])}},methods:{VerifyData:function(){var t=this;return new Promise((function(e,a){t.safData.length>1?e("resolved"):a("fail")}))},GetSampleData:function(){var t=this;this.VerifyData().then((function(){return t.safData[14]})).catch((function(t){console.log(t)}))},YearSplitProcessor:function(t){return{year:t.Year,totalStops:parseFloat(t.TotalStops),blackSplit:{stops:parseFloat(t.BlackStops),innocent:parseFloat(t.BlackInnocents),unarmed:parseFloat(t.BlackUnarmed)},whiteSplit:{stops:parseFloat(t.WhiteStops),innocent:parseFloat(t.WhiteInnocents),unarmed:parseFloat(t.WhiteUnarmed)}}},CompleteData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["b"]("StopAndFriskByYear.csv",t.YearSplitProcessor).then((function(t){return t}));case 2:a=e.sent,t.safData=a,t.sampleData=a[14];case 5:case"end":return e.stop()}}),e)})))()},MakeBreak:function(t,e,a){var n=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n.VerifyData().then((function(){var r=n.svgSize,i=12,s=n.holeScale(t.unarmed);"#sampleBreak"==a&&(s=35);for(var l=t.innocent/t.stops*360,c=t.stops/e,h=o["g"](a).append("svg").classed("svg-content-responsive",!0).attr("preserveAspectRatio","xMinYMin meet").attr("viewBox","0 0 "+r+" "+r).append("g"),u=0;u<l;u++){var p=r/2+s*Math.sin(u*(Math.PI/180)),d=r/2+s*Math.cos(u*(Math.PI/180)),f=r/2+(s+n.crackScale(c))*Math.sin(u*(Math.PI/180)),g=r/2+(s+n.crackScale(c))*Math.cos(u*(Math.PI/180)),m=n.JaggedPath({x:p,y:d},{x:f,y:g}),v=o["c"]().x((function(t){return t.x})).y((function(t){return t.y}));h.append("path").attr("d",v(m)).attr("stroke-width",.8).attr("fill","none"),u+=i}"#sampleBreak"==a&&n.AnnotateCrack()}));case 1:case"end":return r.stop()}}),r)})))()},JaggedPath:function(t,e){var a=[t],n=this.LineEquation(t,e,!1),r=[Math.round(Math.random()*(n.length,n.length/2))],i=n.length-r[0];while(i>0){var s=Math.round(Math.random()*(n.length,n.length/5));i-=s,i>0&&r.push(s+r[r.length-1])}for(var o=0;o<r.length;o++){var l=Math.round(Math.random()*(n.length,n.length/7)),c=n.ComputePointFromDistanceAndStart(t,r[o]),h=this.ReturnPerpendicularLine(n,c),u=h.ComputePointFromDistanceAndStart(c,l);a.push(u)}return a.push(e),a},LineEquation:function(t,e,a){var n=[],r=[];return n=t.x>e.x?[e.x,t.x]:[t.x,e.x],r=t.y>e.y?[e.y,t.y]:[t.y,e.y],a&&(n=[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],r=[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY]),{slope:(e.y-t.y)/(e.x-t.x),xBound:n,yBound:r,length:Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)),ComputePointFromDistanceAndStart:function(t,e){var a=Math.sqrt(Math.pow(e,2)/(Math.pow(this.slope,2)+1))+t.x;(a>n[1]||a<n[0])&&(a=-Math.sqrt(Math.pow(e,2)/(Math.pow(this.slope,2)+1))+t.x);var i=Math.sqrt(Math.pow(e,2)/(Math.pow(1/this.slope,2)+1))+t.y;return(i<r[0]||i>r[1])&&(i=-Math.sqrt(Math.pow(e,2)/(Math.pow(1/this.slope,2)+1))+t.y),{x:a,y:i}},ComputePointsInEitherDirection:function(t,e){var a=Math.sqrt(Math.pow(e,2)/(Math.pow(this.slope,2)+1))+t.x,n=-Math.sqrt(Math.pow(e,2)/(Math.pow(this.slope,2)+1))+t.x,r=Math.sqrt(Math.pow(e,2)/(Math.pow(1/this.slope,2)+1))+t.y,i=-Math.sqrt(Math.pow(e,2)/(Math.pow(1/this.slope,2)+1))+t.y;return[{x:a,y:r},{x:n,y:i}]}}},ReturnPerpendicularLine:function(t,e){var a=-1/t.slope,n={x:Math.sqrt(1/(Math.pow(a,2)+1))+e.x,y:Math.sqrt(1/(Math.pow(1/a,2)+1))+e.y},r=this.LineEquation(e,n,!0);return r},EndpointArrow:function(t,e,a,n){var r=this.LineEquation(t[0],t[1],!0);a?r.xBound[0]=t[0].x:r.xBound[1]=t[0].x,n?r.yBound[0]=t[0].y:r.yBound[1]=t[0].y;var i=e/Math.sqrt(2),s=r.ComputePointFromDistanceAndStart(t[0],i),o=this.ReturnPerpendicularLine(r,s),l=o.ComputePointsInEitherDirection(s,i);return[[t[0],l[0]],[t[0],l[1]]]},EndpointBar:function(t,e,a){var n=this.LineEquation(t[0],t[1],!0),r=this.ReturnPerpendicularLine(n,e);return r.ComputePointsInEitherDirection(e,a/2)},AnnotateCrack:function(){var t=o["g"]("#sampleBreak").select("svg"),e=150,a=o["a"]().innerRadius(e).outerRadius(e+.5).startAngle(-.38*Math.PI).endAngle(1*Math.PI),n=o["a"]().innerRadius(e+5).outerRadius(e+5.5).startAngle(-.38*Math.PI).endAngle(1*Math.PI);t.append("path").attr("d",a).attr("transform","translate("+this.svgSize/2+","+this.svgSize/2+")"),t.append("path").attr("id","arcAround").attr("d",n).attr("transform","translate("+this.svgSize/2+","+this.svgSize/2+")").attr("stroke","none").attr("fill","none"),t.append("text").append("textPath").attr("xlink:href","#arcAround").style("text-anchor","right").attr("startOffset","1.5%").text("Percent of stops finding no wrongdoing (not arrested or summoned to court)").classed("text-xs font-thin tracking-wide",!0);var r=o["c"]().x((function(t){return t.x})).y((function(t){return t.y})),i=[];i=i.concat(this.EndpointArrow([this.PolarToCartesian(150,Math.PI/2),this.PolarToCartesian(150,Math.PI/2+.001)],10,!0,!1)),i=i.concat(this.EndpointArrow([this.PolarToCartesian(150,201.2*Math.PI/180),this.PolarToCartesian(150,201.2*Math.PI/180+.001)],10,!0,!1));for(var s=0;s<i.length;s++)t.append("path").attr("d",r(i[s])).attr("stroke-width",.8).attr("fill","none");t.append("text").style("text-anchor","center").attr("transform","translate("+(this.svgSize/2-25)+","+(this.svgSize/2-5)+")").text("Gun draws").classed("text-3xs font-hairline tracking-wide text-center",!0),t.append("text").style("text-anchor","center").attr("transform","translate("+(this.svgSize/2-35)+","+(this.svgSize/2+5)+")").text("against unarmed").classed("text-3xs font-hairline tracking-wide text-center",!0),t.append("text").style("text-anchor","center").attr("transform","translate("+(this.svgSize/2-25)+","+(this.svgSize/2+15)+")").text("New Yorkers").classed("text-3xs font-hairline tracking-wide text-center",!0);var l=[{x:this.svgSize/2+145*Math.cos(Math.PI/180*120),y:this.svgSize/2+145*Math.sin(Math.PI/180*120)},{x:this.svgSize/2+35*Math.cos(Math.PI/180*120),y:this.svgSize/2+35*Math.sin(Math.PI/180*120)}],c=5,h=[{x:l[0].x-c,y:l[0].y-c},{x:l[1].x-c,y:l[1].y-c}];t.append("path").attr("d",r(l)).attr("stroke-width",.8).attr("fill","none"),t.append("path").attr("id","radiusLine").attr("d",r(h)).attr("fill","none").attr("stroke","none"),t.append("text").append("textPath").attr("xlink:href","#radiusLine").attr("startOffset","3%").text("Portion of total stops").classed("text-2xs font-thin tracking-wide",!0);var u=[this.EndpointBar(l,l[0],10)];for(u.push(this.EndpointBar(l,l[1],10)),s=0;s<u.length;s++)console.log(u[s]),t.append("path").attr("d",r(u[s])).attr("stroke-width",.8).attr("fill","none")},PolarToCartesian:function(t,e){return{x:this.svgSize/2+t*Math.cos(e),y:this.svgSize/2+t*Math.sin(e)}}}},P=M,_=(a("034f"),Object(p["a"])(P,r,i,!1,null,null,null)),D=_.exports;a("db43");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(D)}}).$mount("#app")},"85ec":function(t,e,a){},c8b6:function(t,e,a){},db43:function(t,e,a){}});
//# sourceMappingURL=app.2bf474d6.js.map