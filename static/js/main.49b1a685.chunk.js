(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{21:function(e,t,a){e.exports=a(61)},26:function(e,t,a){},27:function(e,t,a){},45:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),o=a.n(r),i=(a(26),a(27),a(3)),s=a.n(i),l=a(5),u=a(4),m=a(17),d="d03799692be1c26faf0ade18a4205f9f",v="https://image.tmdb.org/t/p/original",f=a.n(m).a.create({baseURL:"https://api.themoviedb.org/3"}),h=(a(45),a(18));var p=function(e){var t=e.title,a=e.fetchUrl,r=e.isLargeRow,o=Object(n.useState)([]),i=Object(u.a)(o,2),m=i[0],p=i[1],g=Object(n.useState)(""),b=Object(u.a)(g,2),w=b[0],_=b[1];Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(a);case 2:return t=e.sent,p(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]);var E=function(){var e=Object(l.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!w){e.next=4;break}_(""),e.next=8;break;case 4:return e.next=6,f.get("/movie/".concat(t.id,"/videos?api_key=").concat(d));case 6:n=e.sent,_(null===(a=n.data.results[0])||void 0===a?void 0:a.key);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"row"},c.a.createElement("h2",null,t),c.a.createElement("div",{className:"row_posters"},m.map((function(e){return null!==e.backdrop_path&&c.a.createElement("img",{className:"row_poster ".concat(r&&"row_posterLarge"),src:"".concat(v).concat(r?e.poster_path:e.backdrop_path),alt:e.name,key:e.id,onClick:function(){return E(e)}})}))),w&&c.a.createElement(h.a,{videoId:w,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}}))};a(59);var g=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?r(!0):r(!1)})),function(){window.removeEventListener("scroll")}}),[]),c.a.createElement("div",{className:"nav ".concat(a&&"nav_black")},c.a.createElement("img",{className:"nav_logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png",alt:"Netflix Logo"}),c.a.createElement("img",{className:"nav_avatar",src:"https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png",alt:"Avatar"}))},b={fetchTrending:"/trending/all/week?api_key=".concat(d,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(d,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(d,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(d,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(d,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(d,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(d,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(d,"&with_genres=99")};a(60);var w=function(){var e,t,a=Object(n.useState)(),r=Object(u.a)(a,2),o=r[0],i=r[1];return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(b.fetchNetflixOriginals);case 2:return t=e.sent,i(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(o),c.a.createElement("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("'.concat(v).concat(null===o||void 0===o?void 0:o.backdrop_path,'")')}},c.a.createElement("div",{className:"banner_contents"},c.a.createElement("h1",{className:"banner_title"},(null===o||void 0===o?void 0:o.title)||(null===o||void 0===o?void 0:o.name)||(null===o||void 0===o?void 0:o.original_name)),c.a.createElement("div",{className:"banner_buttons"},c.a.createElement("button",{className:"banner_button"},"Play"),c.a.createElement("button",{className:"banner_button"},"My List ")),c.a.createElement("h1",{className:"banner_description"},(e=null===o||void 0===o?void 0:o.overview,t=200,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e))),c.a.createElement("div",{className:"banner_fadeBottom"}))};var _=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(g,null),c.a.createElement(w,null),c.a.createElement(p,{title:"NETFLIX ORIGINALS",fetchUrl:b.fetchNetflixOriginals,isLargeRow:!0}),c.a.createElement(p,{title:"Trending Now",fetchUrl:b.fetchTrending}),c.a.createElement(p,{title:"Top Rated",fetchUrl:b.fetchTopRated}),c.a.createElement(p,{title:"Action Movies",fetchUrl:b.fetchActionMovies}),c.a.createElement(p,{title:"Comedy Movies",fetchUrl:b.fetchComedyMovies}),c.a.createElement(p,{title:"Horror Movies",fetchUrl:b.fetchHorrorMovies}),c.a.createElement(p,{title:"Romance Movies",fetchUrl:b.fetchRomanceMovies}),c.a.createElement(p,{title:"Documentaries",fetchUrl:b.fetchDocumentaries}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.49b1a685.chunk.js.map