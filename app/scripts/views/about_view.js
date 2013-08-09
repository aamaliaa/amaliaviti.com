Amalia.AboutView = Ember.View.extend({
	didInsertElement: function(event){
		$('.turnup').turnup({
			list: [
				'a nerd',
				'crazy',
				'a dj',
				'a musician',
				'an engineer',
				'a developer',
				'creative',
				'a maker',
				'a technologist',
				'a hacker',
				'a tinkerer',
				'data-obsessed'
			]
		});
	}
});