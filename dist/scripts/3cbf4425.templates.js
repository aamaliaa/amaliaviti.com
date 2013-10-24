Ember.TEMPLATES._footer=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[3,">= 1.0.0-rc.4"],c=c||Ember.Handlebars.helpers,e=e||{},e.buffer.push("<footer>\n	<p>© AMALIA VITI, 2013.</p>\n</footer>")}),Ember.TEMPLATES.about=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,g="";return b.buffer.push('	\n	<div class="bio" style="margin: 0 auto">\n		<div class="avatar-wrapper">\n			<img alt="Amalia Viti" class="avatar" src="http://s3.amazonaws.com/av_main/images/aviti_avatar.jpg">\n		</div>\n		<div class="blurb">\n			<div class="head">\n				<p>HI, I\'M AMALIA VITI</p>\n				<p>I\'M <span class="turnup">A TECHNOLOGIST</span></p>\n			</div>\n			<ul class="icons">\n				<li><a href="http://www.twitter.com/amaliaviti" target="_blank"><i class="icon-twitter"></i></a></li>\n				<li><a href="http://www.github.com/aamaliaa" target="_blank"><i class="icon-github"></i></a></li>\n				<li><a href="http://www.linkedin.com/in/amaliaviti" target="_blank"><i class="icon-linkedin-sign"></i></a></li>\n				<li><a href="http://www.aamaliaa.com" target="_blank"><i class="icon-tumblr"></i></a></li>\n				<li><a href="http://www.instagram.com/aamaliaa" target="_blank"><i class="icon-instagram"></i></a></li>\n			</ul>\n		</div>\n	</div>\n\n	<div class="about">\n		'),e={unescaped:a},f={unescaped:"STRING"},d=c._triageMustache.call(a,"about.content",{hash:{unescaped:"true"},contexts:[a],types:["ID"],hashContexts:e,hashTypes:f,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push("\n	</div>\n"),g}this.compilerInfo=[3,">= 1.0.0-rc.4"],c=c||Ember.Handlebars.helpers,e=e||{};var g,h,i,j=this;h={},i={},g=c.each.call(b,"about","in","controller",{hash:{},inverse:j.noop,fn:j.program(1,f,e),contexts:[b,b,b],types:["ID","ID","ID"],hashContexts:i,hashTypes:h,data:e}),g||0===g?e.buffer.push(g):e.buffer.push("")}),Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push('\n				<img src="images/triangles.svg">\n			')}function g(a,b){b.buffer.push("ABOUT")}function h(a,b){b.buffer.push("PROJECTS")}this.compilerInfo=[3,">= 1.0.0-rc.4"],c=c||Ember.Handlebars.helpers,e=e||{};var i,j,k,l,m,n="",o=this,p=c.helperMissing,q=this.escapeExpression;return e.buffer.push('<div class="wrap">\n	<div class="navbar navbar-fixed-top">\n		<div class="navbar-inner">\n			'),k={"class":b},l={"class":"STRING"},m={hash:{"class":"navbar-logo"},inverse:o.noop,fn:o.program(1,f,e),contexts:[b],types:["STRING"],hashContexts:k,hashTypes:l,data:e},i=c.linkTo,j=i?i.call(b,"index",m):p.call(b,"linkTo","index",m),(j||0===j)&&e.buffer.push(j),e.buffer.push('\n\n			<ul class="nav">\n				<li>'),l={},k={},m={hash:{},inverse:o.noop,fn:o.program(3,g,e),contexts:[b],types:["STRING"],hashContexts:k,hashTypes:l,data:e},i=c.linkTo,j=i?i.call(b,"about",m):p.call(b,"linkTo","about",m),(j||0===j)&&e.buffer.push(j),e.buffer.push("</li>\n				<li>"),l={},k={},m={hash:{},inverse:o.noop,fn:o.program(5,h,e),contexts:[b],types:["STRING"],hashContexts:k,hashTypes:l,data:e},i=c.linkTo,j=i?i.call(b,"projects",m):p.call(b,"linkTo","projects",m),(j||0===j)&&e.buffer.push(j),e.buffer.push('</li>\n				<li><a href="http://www.aamaliaa.com" target="_blank">BLOG</a></li>\n			</ul>\n		</div>\n	</div>\n\n	<div class="main">\n		'),l={},k={},e.buffer.push(q(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:k,hashTypes:l,data:e}))),e.buffer.push('\n	</div>\n\n	<div class="push"></div>\n</div>\n'),l={},k={},m={hash:{},contexts:[b],types:["STRING"],hashContexts:k,hashTypes:l,data:e},e.buffer.push(q((i=c.partial,i?i.call(b,"footer",m):p.call(b,"partial","footer",m)))),n}),Ember.TEMPLATES.index=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[3,">= 1.0.0-rc.4"],c=c||Ember.Handlebars.helpers,e=e||{},e.buffer.push('<div class="splash">\n\n</div>')}),Ember.TEMPLATES.project=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,i="";return b.buffer.push('\n				<li class="url">\n					<div class="details-header">Links</div>\n					'),e={},f={},d=c["if"].call(a,"url",{hash:{},inverse:s.noop,fn:s.program(2,g,b),contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push("\n					"),e={},f={},d=c["if"].call(a,"github",{hash:{},inverse:s.noop,fn:s.program(4,h,b),contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push("\n				</li>\n			"),i}function g(a,b){var d,e,f,g,h="";return b.buffer.push("\n						<a "),e={href:a},f={href:"ID"},b.buffer.push(q(c.bindAttr.call(a,{hash:{href:"url"},contexts:[],types:[],hashContexts:e,hashTypes:f,data:b}))),b.buffer.push(' target="_blank">'),f={},e={},g={hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:f,data:b},b.buffer.push(q((d=c.cleanLink,d?d.call(a,"url",g):r.call(a,"cleanLink","url",g)))),b.buffer.push("</a>\n					"),h}function h(a,b){var d,e,f,g,h="";return b.buffer.push("\n						<a "),e={href:a},f={href:"STRING"},b.buffer.push(q(c.bindAttr.call(a,{hash:{href:"github"},contexts:[],types:[],hashContexts:e,hashTypes:f,data:b}))),b.buffer.push(' target="_blank">'),f={},e={},g={hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:f,data:b},b.buffer.push(q((d=c.cleanLink,d?d.call(a,"github",g):r.call(a,"cleanLink","github",g)))),b.buffer.push("</a>\n					"),h}function i(a,b){var d,e,f,g="";return b.buffer.push('\n					<li>\n						<div class="details-header">Tags</div> \n						<div class="tags">\n							<ul>\n								'),e={},f={},d=c.each.call(a,"tag","in","tags",{hash:{},inverse:s.noop,fn:s.program(7,j,b),contexts:[a,a,a],types:["ID","ID","ID"],hashContexts:f,hashTypes:e,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push("\n							</ul>\n						</div>\n					</li>\n				"),g}function j(a,b){var d,e,f="";return b.buffer.push('\n									<li class="tag">'),d={},e={},b.buffer.push(q(c._triageMustache.call(a,"tag",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("</li>\n								"),f}this.compilerInfo=[3,">= 1.0.0-rc.4"],c=c||Ember.Handlebars.helpers,e=e||{};var k,l,m,n,o,p="",q=this.escapeExpression,r=c.helperMissing,s=this;return e.buffer.push('<div class="entry">\n	<div class="header">\n		<header class="title">\n			<h1>'),m={},n={},e.buffer.push(q(c._triageMustache.call(b,"title",{hash:{},contexts:[b],types:["ID"],hashContexts:n,hashTypes:m,data:e}))),e.buffer.push('</h1>\n		</header>\n	</div>\n	<div class="row-fluid">\n		<div class="content span9">\n		  <div class="post">'),m={},n={},o={hash:{},contexts:[b],types:["ID"],hashContexts:n,hashTypes:m,data:e},e.buffer.push(q((k=c.markdown,k?k.call(b,"post",o):r.call(b,"markdown","post",o)))),e.buffer.push('</div>\n		</div>\n		<div class="sidebar span3">\n			<ul class="details">\n				<li>\n					<div class="details-header">Synopsis</div>\n					'),m={},n={},e.buffer.push(q(c._triageMustache.call(b,"blurb",{hash:{},contexts:[b],types:["ID"],hashContexts:n,hashTypes:m,data:e}))),e.buffer.push("\n				</li>\n			"),m={},n={},l=c["if"].call(b,"view.renderLinks",{hash:{},inverse:s.noop,fn:s.program(1,f,e),contexts:[b],types:["ID"],hashContexts:n,hashTypes:m,data:e}),(l||0===l)&&e.buffer.push(l),e.buffer.push("\n				"),m={},n={},l=c["if"].call(b,"tags",{hash:{},inverse:s.noop,fn:s.program(6,i,e),contexts:[b],types:["ID"],hashContexts:n,hashTypes:m,data:e}),(l||0===l)&&e.buffer.push(l),e.buffer.push('\n			</ul>\n		</div>\n	</div>\n	<div class="footer"></div>\n</div>'),p}),Ember.TEMPLATES.projects=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,j,k,l="";return b.buffer.push('\n	<li class="project-tile">\n		'),f={},j={},d=c["if"].call(a,"project.img_url",{hash:{},inverse:o.program(4,h,b),fn:o.program(2,g,b),contexts:[a],types:["ID"],hashContexts:j,hashTypes:f,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push("\n		"),f={},j={},k={hash:{},inverse:o.noop,fn:o.program(6,i,b),contexts:[a,a],types:["STRING","ID"],hashContexts:j,hashTypes:f,data:b},d=c.linkTo,e=d?d.call(a,"project","project",k):p.call(a,"linkTo","project","project",k),(e||0===e)&&b.buffer.push(e),b.buffer.push("\n	</li>\n"),l}function g(a,b){var d,e,f="";return b.buffer.push('\n		\n			<div class="image" '),d={style:a},e={style:"STRING"},b.buffer.push(n(c.bindAttr.call(a,{hash:{style:"project.img_style"},contexts:[],types:[],hashContexts:d,hashTypes:e,data:b}))),b.buffer.push("></div>\n\n		"),f}function h(a,b){b.buffer.push('\n\n			<div class="image" style="background-image:url(http://placehold.it/800x600)"></div>\n\n		')}function i(a,b){var d,e,f="";return b.buffer.push('\n			<div class="overlay"></div>\n			<div class="meta">\n				<h4>'),d={},e={},b.buffer.push(n(c._triageMustache.call(a,"project.title",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push('</h4>\n				<div class="blurb">'),d={},e={},b.buffer.push(n(c._triageMustache.call(a,"project.blurb",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("</div>\n			</div>\n		"),f}this.compilerInfo=[3,">= 1.0.0-rc.4"],c=c||Ember.Handlebars.helpers,e=e||{};var j,k,l,m="",n=this.escapeExpression,o=this,p=c.helperMissing;return e.buffer.push('<ul class="projects-list tiles clearfix">\n'),k={},l={},j=c.each.call(b,"project","in","controller",{hash:{},inverse:o.noop,fn:o.program(1,f,e),contexts:[b,b,b],types:["ID","ID","ID"],hashContexts:l,hashTypes:k,data:e}),(j||0===j)&&e.buffer.push(j),e.buffer.push("\n</ul>"),m});