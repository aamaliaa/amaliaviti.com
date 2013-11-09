Amalia.MusicView = Ember.View.extend({
	didInsertElement: function(event){
		window.scrollTo(0,0);
	},
	list: Em.View.extend({
		tagName: 'ul',
		classNames: 'track-list',
		track: Ember.View.extend({
			tagName: 'li',
			classNames: 'track',
			classNameBindings: ['isActive'],
			click: function(e) {
				if ($(e.target).is('i.icon-play')){
					if(Ember.isEqual(this.get('content'), this.get('parentView.activeTrack'))){
						Amalia.PlayerController.playPause();
					} else {
						this.set('parentView.activeTrack', this.get('content'));
						this.loadTrack(this.get('content'));
					}
				} else if ($(e.target).is('i.icon-pause')){
					Amalia.PlayerController.playPause();
				}
			},
			loadTrack: function() {
				Amalia.PlayerController.load(this.get('content'));
			},
			isSelected: function() {
				return Ember.isEqual(this.get('content'), this.get('parentView.activeTrack'));
			}.property('parentView.activeTrack'),
			isActive: function() {
				return (Ember.isEqual(this.get('content'), this.get('parentView.activeTrack')) && !Amalia.PlayerController.isPaused);
			}.property('parentView.activeTrack', 'Amalia.PlayerController.isPaused'),
			relativePosition: function() {
				if(this.get('isSelected')){
					return Amalia.PlayerController.relativePosition;
				} else {
					return 0;
				}
			}.property('Amalia.PlayerController.relativePosition', 'isSelected')
		})
	})
});