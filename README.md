the *old* amaliaviti.com
========================

I've used the following to build this:
*	yeoman (with bower and grunt)
*	Ember.js (thanks to the yeoman generator: generator-ember v0.5.2)
*	ember-data
*	handlebars
*	Sass
*	font-awesome
*	[turnup.js](http://github.com/aamaliaa/turnup.js)
*	fitvids.js

Reminder
--------

To deploy `dist/` to `gh-pages` branch only:

 * `git checkout master`
 * `git subtree split --prefix dist -b gh-pages`
 * `git push -f origin gh-pages:gh-pages`
 * `git branch -D gh-pages`

(from: http://www.damian.oquanta.info/posts/one-line-deployment-of-your-site-to-gh-pages.html)
