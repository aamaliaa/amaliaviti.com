Amalia.ProjectsRoute = Ember.Route.extend({
	model: function(){
		return Amalia.Project.find();
	}
});