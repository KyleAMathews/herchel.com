webpackJsonp([0xd2a57dc1d883],{121:function(n,e,o){"use strict";function t(n,e,o){var t=a.map(function(o){if(o.plugin[n]){var t=o.plugin[n](e,o.options);return t}});return t=t.filter(function(n){return"undefined"!=typeof n}),t.length>0?t:o?[o]:[]}function r(n,e,o){return a.reduce(function(o,t){return t.plugin[n]?o.then(function(){return t.plugin[n](e,t.options)}):o},Promise.resolve())}e.__esModule=!0,e.apiRunner=t,e.apiRunnerAsync=r;var a=[{plugin:o(361),options:{plugins:[]}},{plugin:o(363),options:{plugins:[]}},{plugin:o(360),options:{plugins:[]}}]},226:function(n,e,o){"use strict";var t;e.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":o(335),"component---src-templates-blog-post-js":o(341),"component---src-pages-about-js":o(337),"component---src-pages-events-js":o(338),"component---src-pages-index-js":o(339),"component---src-pages-philosophy-js":o(340)},e.json=(t={"layout-index.json":o(8),"offline-plugin-app-shell-fallback.json":o(358)},t["layout-index.json"]=o(8),t["2012-12-02-florida-drupalcamp-2012-session-notes.json"]=o(342),t["layout-index.json"]=o(8),t["2013-10-20-drupalcamp-atlanta-session-notes.json"]=o(344),t["layout-index.json"]=o(8),t["2013-05-21-drupalcon-portland-session-notes.json"]=o(343),t["layout-index.json"]=o(8),t["2014-03-08-forida-drupalcamp-presentation-notes.json"]=o(345),t["layout-index.json"]=o(8),t["2014-04-02-ie-dev-tips.json"]=o(346),t["layout-index.json"]=o(8),t["2014-04-29-notes-on-developing-drupal-8-alpha-13.json"]=o(347),t["layout-index.json"]=o(8),t["2014-09-04-new-method-comment-spam.json"]=o(348),t["layout-index.json"]=o(8),t["2015-04-19-making-syfy-animations-not-suck.json"]=o(349),t["layout-index.json"]=o(8),t["2015-06-09-advice-newbie-frontend-developer.json"]=o(350),t["layout-index.json"]=o(8),t["2015-06-16-importing-css-breakpoints-js.json"]=o(351),t["layout-index.json"]=o(8),t["2018-01-01-hello-2018.json"]=o(353),t["layout-index.json"]=o(8),t["2017-12-31-reflections-on-2017.json"]=o(352),t["layout-index.json"]=o(8),t["2018-01-10-why-is-gatsby-fast-prpl.json"]=o(354),t["layout-index.json"]=o(8),t["about.json"]=o(355),t["layout-index.json"]=o(8),t["events.json"]=o(356),t["layout-index.json"]=o(8),t["index.json"]=o(357),t["layout-index.json"]=o(8),t["philosophy.json"]=o(359),t),e.layouts={"layout---index":o(336)}},227:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},i=o(2),c=t(i),l=o(9),p=t(l),f=o(163),d=t(f),m=o(103),h=t(m),g=o(121),y=function(n){var e=n.children;return c.default.createElement("div",null,e())},v=function(n){function e(o){r(this,e);var t=a(this,n.call(this)),u=o.location;return d.default.getPage(u.pathname)||(u=s({},u,{pathname:"/404.html"})),t.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},t}return u(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var o=d.default.getResourcesForPathname(n.location.pathname);if(o)this.setState({location:n.location,pageResources:o});else{var t=n.location;d.default.getPage(t.pathname)||(t=s({},t,{pathname:"/404.html"})),d.default.getResourcesForPathname(t.pathname,function(n){e.setState({location:t,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;h.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path))))},e.prototype.render=function(){var n=(0,g.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,i.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:y,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);v.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=v,n.exports=e.default},103:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(391),a=t(r),u=(0,a.default)();n.exports=u},228:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(120),a=o(164),u=t(a),s={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var t=decodeURIComponent(o),a=(0,u.default)(t,e);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),s[a])return s[a];var i=void 0;return n.some(function(n){if(n.matchPath){if((0,r.matchPath)(a,{path:n.path})||(0,r.matchPath)(a,{path:n.matchPath}))return i=n,s[a]=n,!0}else{if((0,r.matchPath)(a,{path:n.path,exact:!0}))return i=n,s[a]=n,!0;if((0,r.matchPath)(a,{path:n.path+"index.html"}))return i=n,s[a]=n,!0}return!1}),i}}},229:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(140),a=t(r),u=o(121),s=(0,u.apiRunner)("replaceHistory"),i=s[0],c=i||(0,a.default)();n.exports=c},342:function(n,e,o){o(5),n.exports=function(n){return o.e(70377159570471,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(371)})})}},343:function(n,e,o){o(5),n.exports=function(n){return o.e(0x8974ce4f7907,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(372)})})}},344:function(n,e,o){o(5),n.exports=function(n){return o.e(89926328501068,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(373)})})}},345:function(n,e,o){o(5),n.exports=function(n){return o.e(0xd414f63fdd9b,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(374)})})}},346:function(n,e,o){o(5),n.exports=function(n){return o.e(0x8b907fe3eef6,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(375)})})}},347:function(n,e,o){o(5),n.exports=function(n){return o.e(0x67ffc6641957,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(376)})})}},348:function(n,e,o){o(5),n.exports=function(n){return o.e(0xe715d43b0010,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(377)})})}},349:function(n,e,o){o(5),n.exports=function(n){return o.e(22890600373292,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(378)})})}},350:function(n,e,o){o(5),n.exports=function(n){return o.e(0x9c6f77b1c617,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(379)})})}},351:function(n,e,o){o(5),n.exports=function(n){return o.e(39229358024304,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(380)})})}},352:function(n,e,o){o(5),n.exports=function(n){return o.e(0xea360bb422cb,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(381)})})}},353:function(n,e,o){o(5),n.exports=function(n){return o.e(0x8e8144995599,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(382)})})}},354:function(n,e,o){o(5),n.exports=function(n){return o.e(28210096298019,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(383)})})}},355:function(n,e,o){o(5),n.exports=function(n){return o.e(0xf927f8900006,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(384)})})}},356:function(n,e,o){o(5),n.exports=function(n){return o.e(44713349584700,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(385)})})}},357:function(n,e,o){o(5),n.exports=function(n){return o.e(0x81b8806e4260,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(386)})})}},8:function(n,e,o){o(5),n.exports=function(n){return o.e(60335399758886,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(142)})})}},358:function(n,e,o){o(5),n.exports=function(n){return o.e(0xbf4c176e203a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(387)})})}},359:function(n,e,o){o(5),n.exports=function(n){return o.e(0x773013b8a162,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(388)})})}},336:function(n,e,o){o(5),n.exports=function(n){return o.e(0x67ef26645b2a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(230)})})}},163:function(n,e,o){(function(n){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var r=o(2),a=(t(r),o(228)),u=t(a),s=o(103),i=t(s),c=o(164),l=t(c),p=void 0,f={},d={},m={},h={},g={},y=[],v=[],j={},x="",b=[],R={},w=function(n){return n&&n.default||n},C=void 0,_=!0,N=[],k={},P={},E=5;C=o(231)({getNextQueuedResources:function(){return b.slice(-1)[0]},createResourceDownload:function(n){L(n,function(){b=b.filter(function(e){return e!==n}),C.onResourcedFinished(n)})}}),i.default.on("onPreLoadPageResources",function(n){C.onPreLoadPageResources(n)}),i.default.on("onPostLoadPageResources",function(n){C.onPostLoadPageResources(n)});var O=function(n,e){return R[n]>R[e]?1:R[n]<R[e]?-1:0},S=function(n,e){return j[n]>j[e]?1:j[n]<j[e]?-1:0},L=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[e])n.nextTick(function(){o(null,h[e])});else{var t=void 0;t="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],t(function(n,t){h[e]=t,N.push({resource:e,succeeded:!n}),P[e]||(P[e]=n),N=N.slice(-E),o(n,t)})}},T=function(e,o){g[e]?n.nextTick(function(){o(null,g[e])}):P[e]?n.nextTick(function(){o(P[e])}):L(e,function(n,t){if(n)o(n);else{var r=w(t());g[e]=r,o(n,r)}})},A=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=N.find(function(n){return n.succeeded});return!!e},D=function(n,e){console.log(e),k[n]||(k[n]=e),A()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},I=1,M={empty:function(){v=[],j={},R={},b=[],y=[],x=""},addPagesArray:function(n){y=n,x="",p=(0,u.default)(n,x)},addDevRequires:function(n){f=n},addProdRequires:function(n){d=n},dequeue:function(){return v.pop()},enqueue:function(n){var e=(0,l.default)(n,x);if(!y.some(function(n){return n.path===e}))return!1;var o=1/I;I+=1,j[e]?j[e]+=1:j[e]=1,M.has(e)||v.unshift(e),v.sort(S);var t=p(e);return t.jsonName&&(R[t.jsonName]?R[t.jsonName]+=1+o:R[t.jsonName]=1+o,b.indexOf(t.jsonName)!==-1||h[t.jsonName]||b.unshift(t.jsonName)),t.componentChunkName&&(R[t.componentChunkName]?R[t.componentChunkName]+=1+o:R[t.componentChunkName]=1+o,b.indexOf(t.componentChunkName)!==-1||h[t.jsonName]||b.unshift(t.componentChunkName)),b.sort(O),C.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:b,resourcesCount:R}},getPages:function(){return{pathArray:v,pathCount:j}},getPage:function(n){return p(n)},has:function(n){return v.some(function(e){return e===n})},getResourcesForPathname:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};_&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,o=Array.isArray(e),t=0,e=o?e:e[Symbol.iterator]();;){var r;if(o){if(t>=e.length)break;r=e[t++]}else{if(t=e.next(),t.done)break;r=t.value}var a=r;a.unregister()}window.location.reload()}})),_=!1;if(k[e])return D(e,'Previously detected load failure for "'+e+'"'),o();var t=p(e);if(!t)return D(e,"A page wasn't found for \""+e+'"'),o();if(e=t.path,m[e])return n.nextTick(function(){o(m[e]),i.default.emit("onPostLoadPageResources",{page:t,pageResources:m[e]})}),m[e];i.default.emit("onPreLoadPageResources",{path:e});var r=void 0,a=void 0,u=void 0,s=function(){if(r&&a&&(!t.layoutComponentChunkName||u)){m[e]={component:r,json:a,layout:u,page:t};var n={component:r,json:a,layout:u,page:t};o(n),i.default.emit("onPostLoadPageResources",{page:t,pageResources:n})}};return T(t.componentChunkName,function(n,e){n&&D(t.path,"Loading the component for "+t.path+" failed"),r=e,s()}),T(t.jsonName,function(n,e){n&&D(t.path,"Loading the JSON for "+t.path+" failed"),a=e,s()}),void(t.layoutComponentChunkName&&T(t.layout,function(n,e){n&&D(t.path,"Loading the Layout for "+t.path+" failed"),u=e,s()}))},peek:function(n){return v.slice(-1)[0]},length:function(){return v.length},indexOf:function(n){return v.length-v.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:M.getResourcesForPathname};e.default=M}).call(e,o(143))},389:function(n,e){n.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"2012-12-02-florida-drupalcamp-2012-session-notes.json",path:"/2012-12-02-florida-drupalcamp-2012-session-notes/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"2013-10-20-drupalcamp-atlanta-session-notes.json",path:"/2013-10-20-drupalcamp-atlanta-session-notes/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"2013-05-21-drupalcon-portland-session-notes.json",path:"/2013-05-21-drupalcon-portland-session-notes/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"2014-03-08-forida-drupalcamp-presentation-notes.json",path:"/2014-03-08-forida-drupalcamp-presentation-notes/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"2014-04-02-ie-dev-tips.json",path:"/2014-04-02-ie-dev-tips/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"2014-04-29-notes-on-developing-drupal-8-alpha-13.json",path:"/2014-04-29-notes-on-developing-drupal-8-alpha13/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"2014-09-04-new-method-comment-spam.json",path:"/2014-09-04-new-method-comment-spam/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"2015-04-19-making-syfy-animations-not-suck.json",path:"/2015-04-19-making-syfy-animations-not-suck/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"2015-06-09-advice-newbie-frontend-developer.json",path:"/2015-06-09-advice-newbie-frontend-developer/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"2015-06-16-importing-css-breakpoints-js.json",path:"/2015-06-16-importing-css-breakpoints-js/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"2018-01-01-hello-2018.json",path:"/2018-01-01-hello-2018/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"2017-12-31-reflections-on-2017.json",path:"/2017-12-31-reflections-on-2017/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"2018-01-10-why-is-gatsby-fast-prpl.json",path:"/2018-01-10-why-is-gatsby-fast-prpl/"},{componentChunkName:"component---src-pages-about-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"about.json",path:"/about/"},{componentChunkName:"component---src-pages-events-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"events.json",path:"/events/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-philosophy-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"philosophy.json",path:"/philosophy/"}]},231:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,o=n.createResourceDownload,t=[],r=[],a=function(){var n=e();n&&(r.push(n),o(n))},u=function(n){switch(n.type){case"RESOURCE_FINISHED":r=r.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===t.length&&a()},0)};return{onResourcedFinished:function(n){u({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:r}},empty:function(){t=[],r=[]}}}},0:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},a=o(121),u=o(2),s=t(u),i=o(195),c=t(i),l=o(120),p=o(367),f=o(319),d=t(f),m=o(229),h=t(m),g=o(103),y=t(g),v=o(389),j=t(v),x=o(390),b=t(x),R=o(227),w=t(R),C=o(226),_=t(C),N=o(163),k=t(N);o(309),window.___history=h.default,window.___emitter=y.default,k.default.addPagesArray(j.default),k.default.addProdRequires(_.default),window.asyncRequires=_.default,window.___loader=k.default,window.matchPath=l.matchPath;var P=b.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),E=function(n){var e=P[n];return null!=e&&(h.default.replace(e.toPath),!0)};E(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&i!==!1||(window.___history=n,i=!0,n.listen(function(n,e){E(n.pathname)||(0,a.apiRunner)("onRouteUpdate",{location:n,action:e})}))}function e(n,e){var o=e.location.pathname,t=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:o});if(t.length>0)return t[0];if(n){var r=n.location.pathname;if(r===o)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&o(232);var t=function(n){function e(o){o.page.path===k.default.getPage(n).path&&(y.default.off("onPostLoadPageResources",e),clearTimeout(t),window.___history.push(n))}var o=P[n];if(o&&(n=o.toPath),window.location.pathname!==n){var t=setTimeout(function(){y.default.off("onPostLoadPageResources",e),y.default.emit("onDelayedLoadPageResources",{pathname:n}),window.___history.push(n)},1e3);k.default.getResourcesForPathname(n)?(clearTimeout(t),window.___history.push(n)):y.default.on("onPostLoadPageResources",e)}};window.___navigateTo=t,(0,a.apiRunner)("onRouteUpdate",{location:h.default.location,action:h.default.action});var i=!1,f=(0,a.apiRunner)("replaceRouterComponent",{history:h.default})[0],m=function(n){var e=n.children;return s.default.createElement(l.Router,{history:h.default},e)},g=(0,l.withRouter)(w.default);k.default.getResourcesForPathname(window.location.pathname,function(){var o=function(){return(0,u.createElement)(f?f:m,null,(0,u.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,u.createElement)(g,{layout:!0,children:function(e){return(0,u.createElement)(l.Route,{render:function(o){n(o.history);var t=e?e:o;return k.default.getPage(t.location.pathname)?(0,u.createElement)(w.default,r({page:!0},t)):(0,u.createElement)(w.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},t=(0,a.apiRunner)("wrapRootComponent",{Root:o},o)[0];(0,d.default)(function(){return c.default.render(s.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},390:function(n,e){n.exports=[]},232:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(103),a=t(r),u="/";u="/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},164:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},319:function(n,e,o){!function(e,o){n.exports=o()}("domready",function(){var n,e=[],o=document,t=o.documentElement.doScroll,r="DOMContentLoaded",a=(t?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);return a||o.addEventListener(r,n=function(){for(o.removeEventListener(r,n),a=1;n=e.shift();)n()}),function(n){a?setTimeout(n,0):e.push(n)}})},5:function(n,e,o){"use strict";function t(){function n(n){var e=t.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,t=document.querySelector("head"),r=o.e,a=o.s;o.e=function(t,u){var s=!1,i=!0,c=function(n){u&&(u(o,n),u=null)};return!a&&e&&e[t]?void c(!0):(r(t,function(){s||(s=!0,i?setTimeout(function(){c()}):c())}),void(s||(i=!1,n(function(){s||(s=!0,a?a[t]=void 0:(e||(e={}),e[t]=!0),c(!0))}))))}}t()},360:function(n,e,o){"use strict";var t=o(33);e.onClientEntry=function(){"undefined"!=typeof window&&"undefined"!=typeof window.__EMOTION_CRITICAL_CSS_IDS__&&(0,t.hydrate)(window.__EMOTION_CRITICAL_CSS_IDS__)}},361:function(n,e,o){"use strict";e.onRouteUpdate=function(n){var e=n.location;"function"==typeof ga&&(window.ga("set","page",(e||{}).pathname),window.ga("send","pageview"))}},335:function(n,e,o){o(5),n.exports=function(n){return o.e(99219681209289,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(362)})})}},363:function(n,e){"use strict";e.registerServiceWorker=function(){return!0}},391:function(n,e){function o(n){return n=n||Object.create(null),{on:function(e,o){(n[e]||(n[e]=[])).push(o)},off:function(e,o){n[e]&&n[e].splice(n[e].indexOf(o)>>>0,1)},emit:function(e,o){(n[e]||[]).slice().map(function(n){n(o)}),(n["*"]||[]).slice().map(function(n){n(e,o)})}}}n.exports=o},143:function(n,e){function o(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}function r(n){if(l===setTimeout)return setTimeout(n,0);if((l===o||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(e){try{return l.call(null,n,0)}catch(e){return l.call(this,n,0)}}}function a(n){if(p===clearTimeout)return clearTimeout(n);if((p===t||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(n);try{return p(n)}catch(e){try{return p.call(null,n)}catch(e){return p.call(this,n)}}}function u(){h&&d&&(h=!1,d.length?m=d.concat(m):g=-1,m.length&&s())}function s(){if(!h){var n=r(u);h=!0;for(var e=m.length;e;){for(d=m,m=[];++g<e;)d&&d[g].run();g=-1,e=m.length}d=null,h=!1,a(n)}}function i(n,e){this.fun=n,this.array=e}function c(){}var l,p,f=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:o}catch(n){l=o}try{p="function"==typeof clearTimeout?clearTimeout:t}catch(n){p=t}}();var d,m=[],h=!1,g=-1;f.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)e[o-1]=arguments[o];m.push(new i(n,e)),1!==m.length||h||r(s)},i.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(n){return[]},f.binding=function(n){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(n){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},337:function(n,e,o){o(5),n.exports=function(n){return o.e(0xefeaa6d1881d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(236)})})}},338:function(n,e,o){o(5),n.exports=function(n){return o.e(0xe03105f01a98,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(237)})})}},339:function(n,e,o){o(5),n.exports=function(n){return o.e(35783957827783,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(238)})})}},340:function(n,e,o){o(5),n.exports=function(n){return o.e(0xb6eef032af7f,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(239)})})}},341:function(n,e,o){o(5),n.exports=function(n){return o.e(0x620f737b6699,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(240)})})}}});
//# sourceMappingURL=app-9b09f21f3ea5b9938978.js.map