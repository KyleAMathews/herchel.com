webpackJsonp([0x8b907fe3eef6],{375:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Mike Herchel",author:"Mike Herchel"}},markdownRemark:{id:"/Users/mherchel/sites/herchel-new/src/blog/2014-04-02-ie-dev-tips/index.md absPath of file >>> MarkdownRemark",html:'<p>At the time of this writing, somewhere around 13% of the world’s web traffic is from Internet Explorer 8 (IE8). This can be even worse in certain demographics. Windows XP (and therefore IE8) is dying a slow death. It’s now unsupported by Microsoft (or not), but will probably be around for years to come.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/ie-2014-02_0-ceb32febf1d44b80886a7574fc59c4f0-69083.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 69.74483596597813%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAA6cAAAOnAEHlFPdAAACe0lEQVQ4y62T7UtTcRTH71+kbyJMfJE9gSVIOI3oRcznlZbTuwyRKHpEszTbk5bbcoljoiNnK9ZmZuF8mk5N7+7mtN3dubunNNBoMr7dbWgINt944MPv+zu/w+Fwzu8QalU3tNoeSOUKfDC9R19fH2QyOfR6PdQqFa+l0Ol0kMpk6H2rxcjIF6QzYmpyAp8sFsTjcRyFEeFwGDs7OzgqI7a3t8H4fIhEoggGw1gPcGD9AfjYdfzw+rDiWcPSsgsLiy445l2YnqExbqMxOuqB1erlW8DAYvEmcbl+gmBZFsMf3dDqKPQbxmAYMh2I0WTe73tngrLTDMktM0jSjKYmK4xGGkSiTN0Ah3tPY0kePIui5cUUnr/sRVuHcg+ZUrXvvktzqwJ378tBNkgxMPgtVaFC40WFZPMAIqggl1Bea0RZTTdKr7ejtFrOo+CRQih6BGHVHZRca02+6QfHQESjUWg6Z1FfaUdt+VwSUek8yoSLuMHrEuF3nCzyIu8qixwBkxZZz0ZqKKH+fsSfPP4vWw+bMXdbjqEaNcy13fgsfgWr+DUM1RroRD2w8Hqc7IR32AbC7/eD1ajxW0Kmp7Hx0JjYsDE1FKa9DZFiQVqiVy4fGrPFbxwRDAYx/aYdtnoBJuoEmCSLMVVXhOmbhZipvgi7qAD2snw4CnNBH8+AMysD1IlMUNmZWMw9BkdeFuwFOZjNz8Z6V0eqh2xXC35VXcBG5fkku3qz8p+Pa7gEh/gsFsTnsMyTOO31Z/CVPJXERp7G2pASRCz2BxRFgeM4+PiNWfV4wAUCoJxOhEIhJHpM85rjAvwmuLG2uorEV1txu8EwDJw0vReXyPMXDsxm1613VG4AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="2014 Internet Explorer Market Share"\n        title=""\n        src="/static/ie-2014-02_0-ceb32febf1d44b80886a7574fc59c4f0-fb8a0.png"\n        srcset="/static/ie-2014-02_0-ceb32febf1d44b80886a7574fc59c4f0-1a291.png 148w,\n/static/ie-2014-02_0-ceb32febf1d44b80886a7574fc59c4f0-2bc4a.png 295w,\n/static/ie-2014-02_0-ceb32febf1d44b80886a7574fc59c4f0-fb8a0.png 590w,\n/static/ie-2014-02_0-ceb32febf1d44b80886a7574fc59c4f0-69083.png 823w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Most front end developers don’t touch IE8 till the very end. The workflow looks something like the following: 1) develop in Chrome because it’s dev tools freakin rock 2) occasionally test in Safari, Firefox 3) at the very end test in Internet Explorer 4) facepalm.</p>\n<p>At this point, most developers are turning red with rage and wishing a terrible death to Microsoft in the most cruel and inhuman manner. They’ll go to their PM and beg, “No one uses IE8- We don’t need it.”</p>\n<p>But, what if I told you there was a better way?</p>\n<h2>Step one: Test early. Test often.</h2>\n<p>Get out of the habit of waiting until the end to test. Testing needs to come early in the process. Often, you can easily make strategic decisions early in the process based on your testing:</p>\n<ul>\n<li>float, inline-block, or absolute positioning</li>\n<li>changing grid systems</li>\n<li>z-index issues</li>\n<li>javascript issues</li>\n</ul>\n<p>Finding these issues early in the process allows you to change around your layout code early, eg. switching from inline-block elements to floats. Doing something like this is usually pretty simple early in the project, but can be a total pain in the ass toward the end.</p>\n<h3>So, how do you test?</h3>\n<p>I personally use Remote Desktop to remote into a Windows XP machine that I have access to. This is the easiest situation for me. But, another great alternative is to use virtual machines (like <a href="http://www.parallels.com/products/desktop/">Parallels</a> or <a href="https://www.virtualbox.org/">VirtualBox</a>) to run Windows XP. You can download free (and legal) images from Microsoft’s <a href="http://modern.ie/en-us/virtualization-tools">Modern.ie</a> website. Thanks Microsoft!</p>\n<p>The key here is that you need to make testing easy. If it’s easy, it can be integrated into your workflow. I’ve tried services such as <a href="http://www.browserstack.com/">BrowserStack</a>, and for me they don’t work well enough. I need the browser to be responsive so I can test hover-states and get a general ‘feel’ for the webpage.</p>\n<h2>Step two: IE Conditional Statements.</h2>\n<p>In a time not-to-long ago, many developers would put ugly CSS hacks into their stylesheets.</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token comment">/* IE6 */</span>\n<span class="token selector">* html #selector</span>  <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token selector">#selector</span> <span class="token punctuation">{</span> <span class="token property">_color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n<span class="token comment">/* IE6-7 */</span>\n<span class="token selector">#selector</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token selector">#selector</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> green !ie<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n<span class="token comment">/* IE7 */</span>\n<span class="token selector">*:first-child+html #selector</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token selector">*+html #selector</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n<span class="token comment">/* IE7-8 */</span>\n<span class="token selector">#selector</span> <span class="token punctuation">{</span> color<span class="token comment">/*\\**/</span><span class="token punctuation">:</span> green\\9<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>The problem with this is 1) it makes your CSS invalid (who cares, right?), 2) because it’s invalid, it doesn’t always work with Sass and 3) its tough to maintain.</p>\n<p>The obvious solution here is to use IE conditional statements.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token comment">&lt;!--[if lte IE 8]>\n  &lt;link type="text/css" rel="stylesheet" href="/css/ie-lte-8.css" media="all" />\n&lt;![endif]--></span>\n</code></pre>\n      </div>\n<p>I use this method to perform general ‘cleanup’ of the webpage. Adjust a margin here, padding over there. Maybe narrow the width on this div by 2px… And, definitely fix any RGBA transparency issues that IE8 doesn’t understand (you can use semi-transparent PNGs for this).</p>\n<h2>Step three: Dealing with Media Queries.</h2>\n<p>We’re all designing and developing our websites mobile-first, right? Right. With responsive website design (RWD), the styles nested under @media aren’t parsed by IE8. This means that all mobile-first RWD sites will look like the mobile version… which will probably be confusing as hell to the non-technical person driving that old Compaq PC.</p>\n<p>In years past, front-end devs dealt with this by splitting up stylesheets by media query, and dedicating one ‘full’ stylesheet to IE8.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>all<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style language-css">\n<span class="token atrule"><span class="token rule">@import</span> <span class="token url">url("/css/global.css")</span><span class="token punctuation">;</span></span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>all and (min-width: 740px) and (min-device-width: 740px), (max-device-width: 800px) and (min-width: 740px)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style language-css">\n<span class="token atrule"><span class="token rule">@import</span> <span class="token url">url("/css/default.css")</span><span class="token punctuation">;</span></span>\n<span class="token atrule"><span class="token rule">@import</span> <span class="token url">url("/css/default-narrow.css")</span><span class="token punctuation">;</span></span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>This is the wrong approach for a number of reasons:</p>\n<ol>\n<li>You end up writing code more than once. Good developers try to use DRY (don’t repeat yourself) principles as much as possible.</li>\n<li>You limit yourself to that specific number of breakpoints (typically 3 or so)</li>\n<li>Multiple HTTP requests to download the stylesheet, in addition to the browser’s effort to parse multiple CSS files leads to performance issues</li>\n</ol>\n<p>After that fad came to pass, many developers started using polyfils such as <a href="https://github.com/scottjehl/Respond">respond.js</a> to work with IE8 to parse media queries. This works, but can lead to a <a href="http://en.wikipedia.org/wiki/Flash_of_unstyled_content">FOUC</a> (flash of unstyled content) in your user’s malware-riddled circa 2001 Compaq PC.</p>\n<h3>The best scenario</h3>\n<p>The best way to deal with IE8 would be to somehow magically rewrite all of your nested media query selectors into a ‘new’ stylesheet that could be pulled in to IE8 via conditional statements.</p>\n<h2>Enter Breakpoint</h2>\n<p><a href="http://breakpoint-sass.com/">Breakpoint Sass</a> is magical. In addition to enabling a super-streamlined mobile-first workflow, it has options to rewrite all of your media query selectors into a different stylesheet!</p>\n<p>To do this using Breakpoint, first write your sass or scss like normal.</p>\n<div class="gatsby-highlight">\n      <pre class="language-scss"><code><span class="token comment">/* _layout.scss */</span>\n\n<span class="token selector">#selector </span><span class="token punctuation">{</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>\n  <span class="token keyword">@include</span> <span class="token function">breakpoint</span><span class="token punctuation">(</span><span class="token variable">$tablet_wide</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Be sure you have defined the breakpoint definitions…</p>\n<div class="gatsby-highlight">\n      <pre class="language-scss"><code><span class="token comment">/* _breakpoints.scss */</span>\n\n<span class="token keyword">@import</span> <span class="token string">"breakpoint"</span><span class="token punctuation">;</span> <span class="token comment">// Required to use the gem</span>\n<span class="token property"><span class="token variable">$tablet_wide</span></span><span class="token punctuation">:</span> 768px, <span class="token string">\'no-query\'</span> <span class="token string">\'.no-mq\'</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>This is the no-mq.scss fallback file that will generate the media query fallback file…</p>\n<div class="gatsby-highlight">\n      <pre class="language-scss"><code><span class="token comment">/* no-mq.scss */</span>\n\n<span class="token property"><span class="token variable">$breakpoint-no-queries</span></span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$breakpoint-no-query-fallbacks</span></span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n\n<span class="token keyword">@import</span> <span class="token string">\'breakpoints\'</span><span class="token punctuation">;</span>\n<span class="token keyword">@import</span> <span class="token string">\'layout\'</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>This is the regular styles.scss for all browsers…</p>\n<div class="gatsby-highlight">\n      <pre class="language-scss"><code><span class="token comment">/* styles.scss */</span>\n\n<span class="token property"><span class="token variable">$breakpoint-no-queries</span></span><span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$breakpoint-no-query-fallbacks</span></span><span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n\n<span class="token keyword">@import</span> <span class="token string">\'breakpoints\'</span><span class="token punctuation">;</span>\n<span class="token keyword">@import</span> <span class="token string">\'layout\'</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>This is the styles.css that gets generated and sent to all browsers…</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token comment">/* styles.css */</span>\n\n<span class="token selector">#selector</span> <span class="token punctuation">{</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>\n  <span class="token selector">#selector</span> <span class="token punctuation">{</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>And, this is the magical no-mq.css to be included in the conditional statement!!! Woohoo!</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token comment">/* no-mq.css */</span>\n\n<span class="token selector">#selector</span> <span class="token punctuation">{</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.no-mq #selector</span> <span class="token punctuation">{</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>So, you’re probably thinking, “What’s up with the .no-mq selector?”</p>\n<p>Many people will use conditional IE statements to wrap around their HTML tags. Another option is to use something like <a href="http://modernizr.com/">Modernizr</a> and some custom JQuery to add a class to the HTML tag.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">if</span><span class="token punctuation">(</span>Modernizr<span class="token punctuation">.</span><span class="token function">mq</span><span class="token punctuation">(</span><span class="token string">\'only all\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'html\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">\'no-mq\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>It doesn’t have to be that bad</h2>\n<p>If I can get one point across in this article, it’s that front-end developing for IE8 doesn’t have to be as bad as many make it out to be. Remember the first step: Test early and test often. You’ll save yourself heartache at the end.</p>\n<p>Now go grab yourself a beer.</p>',frontmatter:{title:"Development Tips for Internet Explorer",date:"April 02, 2014"}}},pathContext:{slug:"/2014-04-02-ie-dev-tips/"}}}});
//# sourceMappingURL=path---2014-04-02-ie-dev-tips-3c4c09d4dc8ac846c980.js.map