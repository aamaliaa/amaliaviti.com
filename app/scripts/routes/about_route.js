Amalia.AboutRoute = Ember.Route.extend({
  model: function () {
	return Amalia.About.find();
  }
});
