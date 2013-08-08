Amalia.ProjectView = Ember.View.extend({
	didInsertElement: function(event){
		$('.post').fitVids({ maxWidth: 650 });
	},
});