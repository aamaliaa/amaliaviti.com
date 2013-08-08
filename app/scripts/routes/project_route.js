Amalia.ProjectRoute = Ember.Route.extend({
	model: function(params) {
		return Amalia.Project.find(params.project_id);
	}
});