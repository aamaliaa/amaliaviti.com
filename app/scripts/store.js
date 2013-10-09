Amalia.Store = DS.Store.extend({
	revision: 13,
	adapter: DS.FixtureAdapter.create()
});

// Note: this is Fixture data for the time being
// TODO: switch to MongoDB and a Node.js API to serve JSON files
// 		 using Ember DS.RESTAdapter
Amalia.About = DS.Model.extend({
	content: DS.attr('string')
});

Amalia.About.FIXTURES = [{
	"id": "1",
	"content": "<p>I find I am happiest when I am making things. These things include, but are not at all limited to web apps, hackathon projects, physical computing thingamabobs (think: arduino, raspberry pi, and the Internet of Things), and music. I am fascinated with the way things work and have been a tinkerer for as long as I can remember&mdash;<a href=\"http://www.aamaliaa.com/post/56397901620/legos-were-are-my-favorite\">LEGOs</a> were and still are my favorite toy. That cool place where technology, design, and creativity intersect is where I like to spend most of my time.</p> <p>I am curious. I like to learn something new every day and am always trying to discover new ways to do just that.</p> <p>I currently work as a full-stack developer at <strong><a href=\"http://www.mediamath.com\">MediaMath</a></strong>.</p>"
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
		"post": "When Citibike was announced, I think I was more excited about the data that would be generated and shared publicly than the bikes themselves. This project is a quick experiment and current work in progress that is built on top of the real-time Citibike stations data.\n\nI used Google Maps and d3.js to plot out each of the stations on the map:\n\n- green stations have > 5 bikes available\n\n- orange stations have between 1 and 5 bikes available\n\n- red stations have 0 bikes available\n\n- a green station with a larger circle radius has more available bikes\n\nTo use the tool, simply enter an origin address and a destination address (both NYC addresses), and hit the \"plot\" button. Bicycle directions between the closest stations to each of the two points that you've specified will be plotted on the map.",
		"github": "http://github.com/aamaliaa/citibike",
		"blog_url": "",
		"tags": ["javascript", "d3", "citibike", "google maps", "ember"]
	},
	{
		"id": "turnup-js",
		"title": "turnup.js",
		"date": "",
		"img_url": "http://s3.amazonaws.com/av_main/projects/turnupjs_screenshot.gif",
		"time_period": "July 2013",
		"url": "",
		"blurb": "A simple jQuery plugin that flashes text from a list.",
		"post": "turnUp.js is a jQuery plugin that, given a list of strings, continuously grabs one string randomly and \"turns it up\".\n\n<h1 class='turnup' style='text-align: center;'>NYMERIA</h1>\n\nI came across a similar implementation of this effect while browsing the Internet one day and decided that it might make a useful plugin for my portfolio (see the 'about' page) and other future projects.\n\n###How to Use\n\nIt's super simple to plug it in your code:\n\n\t$('#title').turnup({ list: ['one', 'two', 'three', 'four'] });\n\nYou can also change the CSS3 transition and interval time:\n\n\t$('#title').turnup({\n\t\tlist: ['Grey Wind', 'Lady', 'Nymeria', 'Summer', 'Shaggy Dog'],\n\t\ttransition: 'all 250ms ease',\n\t\tinterval: 450\n\t});\t\n\n###Options\n\n - `list: ['one', 'two', 'three', 'four']` - an array of strings\n\n - `transition: 'all 250ms ease'` - valid css string\n\n - `interval: 450` - time between words (in milliseconds)\n\n###Public Methods\n\nIf you want to stop an instance after it has been instantiated, just tell it to stop.\n\n\t$('#title').turnup('stop');\n\nThen you can also turn up again!\n\n\t$('#title').turnup('start');\n\n###To Do\n\n * add options for cycling through list (i.e. linearly, alphabetically) instead of at random\n\n * CSS3 animation support for transitions (i.e. zoom/fade in from left, zoom/fade out upwards, etc)",
		"github": "http://github.com/aamaliaa/turnup.js",
		"blog_url": "",
		"tags": ["javascript", "jquery"]
	},
	{
		"id": "bathroom-vacancy-light",
		"title": "bathroom vacancy light",
		"date": "",
		"img_url": "http://s3.amazonaws.com/av_main/projects/bathroomvacancy_screenshot.jpg",
		"time_period": "October 2012-Present",
		"url": "",
		"blurb": "An internet of things project with Raspberry Pi and Arduino.",
		"post": "I live in a 3-bedroom apartment with only one bathroom and wanted an easy way to know when the bathroom was unoccupied without leaving my room (and my bed, for that matter). So, like any other normal person, I decided the solution was to design my own airplane-style lavatory vacancy light for my room.\n\n###V1 (FALL 2012)\nAn Arduino equipped with a magnetic reed switch and a WiFly was attached to my bathroom doorframe that transmitted signals using Pusher via wifi. On the receiving end in my bedroom was a Raspberry Pi which was subscribed to the Arduino's Pusher channel. When signal was received upon door open and close, the Pi triggered an LED via its GPIO.\n\n###V2 (PRESENT)\nA current work in [progress](http://www.aamaliaa.com/post/57084963691/project-1-arduino-powered-bathroom-vacancy-light-part) that involves Node.js and web sockets.",
		"github": "",
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
		"post": "<iframe src=\"http://player.vimeo.com/video/50576416\" width=\"500\" height=\"281\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>\n\nJordan was a Florida resident who chose to let the world of Twitter decide which candidate would get his vote in the 2012 presidential election. Participants submitted their votes by hashtagging their tweets with either [#jordanvoteromney](http://twitter.com/search?q=%23jordanvoteromney&src=typd&mode=realtime) or [#jordanvoteobama](https://twitter.com/search?q=%23jordanvoteobama&src=typd&mode=realtime). The candidate that received the most votes was chosen on Jordan’s absentee ballot.\n\nI worked on this project with a team of art directors and copywriters and led the development of the voting system as well as the website myself. I set up a continuously running PHP script that utilized the Twitter Streaming API to filter the hashtag \"tweet-votes\" and update the percentages on the Vote For Jordan site in real-time.",
		"github": "",
		"blog_url": "",
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
		"post": "<iframe width=\"640\" height=\"360\" src=\"http://www.youtube.com/embed/gMG8yLw0-q0?rel=0\" frameborder=\"0\" allowfullscreen></iframe>\n\nFanfare allowed concertgoers to link up with Facebook friends with similar musical tastes and assisted with group ticket purchasing/distributing of funds.\n\nAs a huge music fan and concertgoer myself, I came up with the idea after trying and failing to find a friend to go see [Quadron](http://soundcloud.com/quadronmusic) with me at Rockwood Music Hall.\n\nThe app was written in PHP and Javascript and utilized the Facebook and Songkick APIs in less than 24 hours for AngelHack NYC 2012. My team took home a prize from Facebook for Fanfare’s use of the Facebook Open Graph API.",
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
		"post": "<div style='text-align:center; padding:15px;'><iframe src='http://www.snappytv.com/snap/fourplay-mashes-up-foursqaure-checkins-and-craigslist-miss-about-techcrunch-disrupt-ny-hackathon-2012-on-techcrunch-disrupt-ny-hackathon?w=500&h=312' width='500' height='312' frameborder='0' scrolling='no' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>\n\nFourplay mashed up Craigslist Missed Connection listings and Foursquare User data to bring users missed connections that happened near or at their check-ins.\n\nIn order to achieve this we:\n\n - screenscaped Craigslist Missed Connections with a [Python script](https://scraperwiki.com/scrapers/ottawa_craigslist_missed_connections_1/)\n\n - analyzed each post for GPS data using the [Metalayer Text API](http://apis.metalayer.com/)\n\n - then used the GPS information to locate and map locations using the [Factual](http://developer.factual.com/display/docs/Factual+Developer+APIs+Version+3) and [Foursquare](https://developer.foursquare.com/) APIs\n\nMy team was awarded the Metalayer API Award for our use of the Metalayer Text API to analyze the missed connection data.\n\n### Press\n- [Fourplay and Sidewinder Win MetaLayer’s API Hackathon](http://blog.metalayer.com/post/23444677000/fourplay-and-sidewinder-win-metalayers-api-hackathon)",
		"github": "",
		"blog_url": "",
		"tags": ["php", "foursquare", "craigslist", "api", "hackathon", "techcrunch"]
	},
	{
		"id": "ikea-timelapse",
		"title": "IKEA timelapse",
		"date": "",
		"img_url": "http://s3.amazonaws.com/av_main/projects/ikea_screenshot.jpg",
		"time_period": "May 2011",
		"url": "",
		"blurb": "Timelapse videos of IKEA furniture construction.",
		"post": "When I moved into my apartment in the summer of 2011, I made the usual trip to IKEA and then single-handedly built all of my furniture myself. Here is video proof:\n\n### A dresser.\n\n<iframe src=\"http://player.vimeo.com/video/23299173\" width=\"500\" height=\"375\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>\n\n### A bed.\n\n<iframe src=\"http://player.vimeo.com/video/23340498\" width=\"500\" height=\"375\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>",
		"github": "",
		"blog_url": "",
		"tags": ["video", "manual labor", "IKEA"]

	}
];