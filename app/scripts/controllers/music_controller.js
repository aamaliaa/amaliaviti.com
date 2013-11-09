Amalia.MusicController = Ember.ArrayController.extend({});

Amalia.PlayerController = Ember.ArrayController.create({
	init: function() {
		this.set('isPaused', true);
	},
	load: function(src) {

		var that = this;

		if (!Ember.isEqual(this.get('current'), src)) {

			var url = src.uri;

			this.set('relativePosition', 0); // fixes buggy progress behavior
			this.set('current', src);

			$.getJSON('http://soundcloud.com/oembed?auto_play=true&color=dd4b39&show_comments=false&format=json&url='+encodeURIComponent(url), function(a) {
				var widget = $(a.html).attr('id', 'soundcloud-widget').replaceAll('#soundcloud-widget').load(function() {
					that.audio = SC.Widget('soundcloud-widget');
					that.set('isPaused', false);
					that.loadPlayer();
				});
			});
			
		}
	},
	loadPlayer: function(){
		var that = this,
			widget = that.audio;

		widget.bind(SC.Widget.Events.READY, function(){
			that.audio.play();
			widget.bind(SC.Widget.Events.PLAY_PROGRESS, function(a) {
				that.set('relativePosition', a.relativePosition);
			});
			widget.bind(SC.Widget.Events.PLAY, function() {
				that.audio.isPaused(function(a){that.set('isPaused', a);});
			});
			widget.bind(SC.Widget.Events.PAUSE, function() {
				that.audio.isPaused(function(a){that.set('isPaused', a);});
			});
		});
	},
	playPause: function(){
		this.audio.toggle();
	}
});