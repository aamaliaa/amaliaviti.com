Amalia.ProjectView = Ember.View.extend({
	didInsertElement: function(event){
		
		$('.post').fitVids({ maxWidth: 650 });

		if(this.get('controller').get('id') === 'turnup-js') {
			this.$('.turnup').turnup({list: ['Grey Wind', 'Lady', 'Nymeria', 'Summer', 'Shaggy Dog']});
		}
	}
});