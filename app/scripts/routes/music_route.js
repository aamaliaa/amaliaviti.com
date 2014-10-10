Amalia.MusicRoute = Ember.Route.extend({
	setupController: function(controller, model) {
		SC.get('/resolve.json?url=http://soundcloud.com/amalia/tracks', function(data){
			controller.set('model', data);
		});
 	}
});
