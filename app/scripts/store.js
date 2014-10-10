require('scripts/data');

Amalia.Store = DS.Store.extend({
	revision: 13,
	adapter: DS.FixtureAdapter.create()
});

Amalia.About = DS.Model.extend({
	content: DS.attr('string')
});

Amalia.About.FIXTURES = [{
	"id": "1",
	"content": Amalia.Data.about
}];

Amalia.Project = DS.Model.extend({
	title: DS.attr('string'),
	img_url: DS.attr('string'),
	url: DS.attr('string'),
	blurb: DS.attr('string'),
	post: DS.attr('string'),
	github: DS.attr('string'),
	blogUrl: DS.attr('string'),
	tags: DS.attr('array'),
	img_style: function(){
		return 'background-image:url(' + this.get('img_url') + ')';
	}.property('img_url')
});

Amalia.Project.FIXTURES = [
	{
		"id": "citibike",
		"title": "citibike",
		"date": "",
		"img_url": "http://s3.amazonaws.com/av_main/projects/citibike_screenshot.png",
		"time_period": "June 2013",
		"url": "http://citibike.amaliaviti.com",
		"blurb": "An exploration with the Citibike API, Google Maps API, d3.js, and Ember.js.",
		"post": Amalia.Data.projects.citibike,
		"blog_url": "",
		"tags": ["javascript", "d3", "citibike", "google maps", "ember"]
	},
	{
		"id": "turnup_js",
		"title": "turnup.js",
		"date": "",
		"img_url": "http://s3.amazonaws.com/av_main/projects/turnupjs_screenshot.gif",
		"time_period": "July 2013",
		"url": "",
		"blurb": "A simple jQuery plugin that flashes text from a list.",
		"post": Amalia.Data.projects.turnup_js,
		"github": "http://github.com/aamaliaa/turnup.js",
		"blog_url": "",
		"tags": ["javascript", "jquery"]
	},
	{
		"id": "bathroom_vacancy_light",
		"title": "bathroom vacancy light",
		"date": "",
		"img_url": "http://s3.amazonaws.com/av_main/projects/bathroomvacancy_screenshot.jpg",
		"time_period": "October 2012-Present",
		"url": "",
		"blurb": "An internet of things project with Raspberry Pi and Arduino.",
		"post": Amalia.Data.projects.bathroom_vacancy_light,
		"github": "http://github.com/aamaliaa/arduino-raspi-bathroom-monitor",
		"blog_url": "http://www.aamaliaa.com/tagged/project1",
		"tags": ["raspberry pi", "arduino", "internet of things"]
	},
	{
		"id": "voteforjordan",
		"title": "voteforjordan",
		"date": "",
		"img_url": "http://s3.amazonaws.com/av_main/projects/voteforjordan_screenshot.png",
		"time_period": "October 2012",
		"blurb": "A swing voter put his presidential vote up to a vote on Twitter.",
		"post": Amalia.Data.projects.voteforjordan,
		"github": "",
		"blog_url": "http://www.aamaliaa.com/post/33385968884/voteforjordanrich-com",
		"tags": ["php", "twitter", "mysql"]
	},
	{
		"id": "fanfare",
		"title": "fanfare",
		"date": "",
		"img_url": "http://s3.amazonaws.com/av_main/projects/fanfare_screenshot.png",
		"time_period": "June 2012",
		"url": "",
		"blurb": "A hackathon project that connected concertgoers via their music tastes.",
		"post": Amalia.Data.projects.fanfare,
		"github": "",
		"blog_url": "",
		"tags": ["php", "javascript", "hackathon", "angelhack"]
	},
	{
		"id": "fourplay",
		"title": "fourplay",
		"date": "",
		"img_url": "http://s3.amazonaws.com/av_main/projects/fourplay_screenshot.png",
		"time_period": "May 2012",
		"url": "",
		"blurb": "A hackathon mashup of Craigslist Missed Connections and Foursquare.",
		"post": Amalia.Data.projects.fourplay,
		"github": "",
		"blog_url": "",
		"tags": ["php", "foursquare", "craigslist", "api", "hackathon", "techcrunch"]
	},
	{
		"id": "ikea_timelapse",
		"title": "IKEA timelapse",
		"date": "",
		"img_url": "http://s3.amazonaws.com/av_main/projects/ikea_screenshot.jpg",
		"time_period": "May 2011",
		"url": "",
		"blurb": "Timelapse videos of IKEA furniture construction.",
		"post": Amalia.Data.projects.ikea_timelapse,
		"github": "",
		"blog_url": "",
		"tags": ["video", "manual labor", "IKEA"]

	}
];
