Amalia.IndexView = Ember.View.extend({
	didInsertElement: function(event){
		window.scrollTo(0,0);
		if(this.$().find('.turnup').length > 0) {
			this.$('.turnup').turnup({
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
		} else {
			Em.run.next(this, function(){
				this.didInsertElement();
			});
		}
	}
});