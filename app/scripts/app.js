var Amalia = window.Amalia = Ember.Application.create();

/* Order and include as you please. */
require('scripts/store');
require('scripts/routes/*');
require('scripts/controllers/*');
require('scripts/models/*');
require('scripts/views/*');
require('scripts/router');

var showdown = new Showdown.converter();

Ember.Handlebars.registerBoundHelper('markdown', function(input){
	return new Handlebars.SafeString(showdown.makeHtml(input));
});

Ember.Handlebars.registerBoundHelper('csv', function(items, options) {
    return options.fn(items.join(', '));
});