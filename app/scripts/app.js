var Amalia = window.Amalia = Ember.Application.create();

SC.initialize({ client_id: '1d38ce7985da6f44eb227d75e39223a3' });		

require('scripts/store');
require('scripts/routes/*');
require('scripts/controllers/*');
require('scripts/models/*');
require('scripts/views/*');
require('scripts/router');

Ember.Handlebars.registerBoundHelper('cleanLink', function(url){
	return new Handlebars.SafeString(url.replace('http://', ''));
});
