Amalia.Store = DS.Store.extend({
	revision: 13,
	adapter: DS.FixtureAdapter.create()
});

// Note: this is Fixture data for the time being
// TODO: switch to MongoDB and a Node.js API to serve JSON files
// 		 using Ember DS.RESTAdapter

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
		"img_url": "",
		"time_period": "Summer 2013",
		"url": "http://citibike.amaliaviti.com",
		"blurb": "An exploration with the Citibike API, Google Maps API, d3.js, and Ember.js.",
		"post": "This is some sample text.\n\nBacon ipsum dolor sit amet proident aliqua swine, ex tempor tail do strip steak bresaola. Cillum magna shank, in ea aute frankfurter capicola. Voluptate cupidatat sint ex beef pork belly. Chuck et bresaola est sed ground round id incididunt spare ribs. Fugiat meatball et, ribeye tri-tip occaecat ham drumstick eu pastrami mollit dolor nisi aliqua labore.\n\nPork belly boudin shankle meatloaf cillum irure. Ham hock pork chop eiusmod in pancetta pastrami aliqua. Turkey sausage salami chicken ham hock. Consequat ball tip beef ribs pork belly sunt in chicken quis anim hamburger cupidatat ullamco.\n\nSalami pork pork chop elit, in ut magna pork loin dolor minim sint ribeye. In chuck ut enim tempor, sint irure pariatur qui boudin kielbasa. Dolor pork short loin spare ribs, eiusmod quis turducken meatloaf voluptate sirloin dolore. Sunt consequat ut bresaola sausage occaecat, sirloin biltong. Brisket mollit minim laborum prosciutto sirloin deserunt. Sirloin ad dolore minim.",
		"github": "aamaliaa/citibike",
		"blog_url": "",
		"tags": ["javascript", "d3", "citibike", "google maps", "ember"]
	},
	{
		"id": "turnup-js",
		"title": "turnup.js",
		"date": "",
		"img_url": "",
		"time_period": "July 2013",
		"url": "",
		"blurb": "A simple jQuery plugin that flashes text from a list.",
		"post": "I saw an effect similar to this while browsing one day and decided that I wanted to implement it on my personal site. It was a simple enough feature (that I could imagine would be quite useful for other projects) so I decided to code it as a jQuery plugin.",
		"github": "aamaliaa/turnup.js",
		"blog_url": "",
		"tags": ["javascript", "jquery"]
	},
	{
		"id": "bathroom-vacancy-light",
		"title": "bathroom vacancy light",
		"date": "",
		"img_url": "",
		"time_period": "October 2012-Present",
		"url": "",
		"blurb": "An internet of things project with Raspberry Pi and Arduino.",
		"post": "I live in a 3-bedroom apartment with only one bathroom and wanted an easy way to know when the bathroom was unoccupied without leaving my room. My solution was to design my own airplane-style lavatory vacancy light for my room.\n\nAn Arduino equipped with a magnetic reed switch and a WiFly is attached to my bathroom doorframe that transmits signals using Pusher via wifi. On the receiving end in my bedroom is a Raspberry Pi that listens to the Arduino’s Pusher channel and triggers an LED via GPIO when the bathroom door is closed.",
		"github": "",
		"blog_url": "http://www.aamaliaa.com/tagged/project1",
		"tags": ["raspberry pi", "arduino", "internet of things"]
	},
	{
		"id": "voteforjordan",
		"title": "voteforjordan",
		"date": "",
		"img_url": "../images/projects/voteforjordan_screenshot.png",
		"time_period": "October 2012",
		"url": "http://www.voteforjordan.com",
		"blurb": "A swing voter put his presidential vote up to a vote on Twitter.",
		"post": "<iframe src=\"http://player.vimeo.com/video/50576416\" width=\"500\" height=\"281\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>\n\nJordan was a Florida resident who chose to let the world of Twitter decide which candidate would get his vote in the 2012 presidential election. Participants submitted their votes by hashtagging their tweets with either [#jordanvoteromney](http://twitter.com/search?q=%23jordanvoteromney&src=typd&mode=realtime) or [#jordanvoteobama](https://twitter.com/search?q=%23jordanvoteobama&src=typd&mode=realtime). The candidate that received the most votes was chosen on Jordan’s absentee ballot.\n\nI worked on this project with a team of art directors and copywriters and led the development of the voting system as well as the website myself. I set up a continuously running PHP script that utilized the Twitter Streaming API to filter the hashtag \"tweet-votes\" and update the percentages on the Vote For Jordan site in real-time.",
		"github": "",
		"blog_url": "",
		"tags": ["php", "twitter"]
	},
	{
		"id": "fanfare",
		"title": "fanfare",
		"date": "",
		"img_url": "../images/projects/fanfare_screenshot.png",
		"time_period": "June 2012",
		"url": "",
		"blurb": "A hackathon project that connected concertgoers via their music tastes.",
		"post": "Fanfare allowed concertgoers to link up with Facebook friends with similar musical tastes and assisted with group ticket purchasing/distributing of funds.\n\nAs a huge music fan and concertgoer myself, I came up with the idea after trying and failing to find a friend to go see [Quadron](http://soundcloud.com/quadronmusic) (an amazing band who hasn’t quite made its landing in the US yet) with me at Rockwood Music Hall.\n\nMy team won a prize from Facebook for Fanfare’s use of the Facebook Open Graph API.",
		"github": "",
		"blog_url": "",
		"tags": ["php", "javascript", "hackathon", "angelhack"]
	},
	{
		"id": "fourplay",
		"title": "fourplay",
		"date": "",
		"img_url": "../images/projects/fourplay_screenshot.png",
		"time_period": "May 2012",
		"url": "",
		"blurb": "A hackathon mashup of the Craigslist Missed Connections and Foursquare.",
		"post": "Fourplay mashed up Craigslist Missed Connection listings and Foursquare User data to bring users missed connections that happened near or at their check-ins.\n\nIn order to achieve this we:\n\n - screenscaped Craigslist Missed Connections with a [Python script](https://scraperwiki.com/scrapers/ottawa_craigslist_missed_connections_1/)\n\n*\tanalyzed each post for GPS data using the [Metalayer Text API](http://apis.metalayer.com/)\n\n*\tthen used the GPS information to locate and map locations using the [Factual](http://developer.factual.com/display/docs/Factual+Developer+APIs+Version+3) and [Foursquare](https://developer.foursquare.com/) APIs\n### PRESS\n- [Metalayer Blog](http://blog.metalayer.com/post/23444677000/fourplay-and-sidewinder-win-metalayers-api-hackathon)",
		"github": "",
		"blog_url": "",
		"tags": ["php", "foursquare", "craigslist", "api", "hackathon", "techcrunch"]
	},
	{
		"id": "ikea-timelapse",
		"title": "IKEA timelapse",
		"date": "",
		"img_url": "../images/projects/ikea_screenshot.jpg",
		"time_period": "May 2011",
		"url": "",
		"blurb": "Timelapse videos of IKEA furniture construction",
		"post": "When I moved into my apartment in the summer of 2011, I made the usual trip to IKEA and then single-handedly built all of my furniture myself. Here is video proof:\n\n### A dresser.\n\n<iframe src=\"http://player.vimeo.com/video/23299173\" width=\"500\" height=\"375\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>\n\n### A bed.\n\n<iframe src=\"http://player.vimeo.com/video/23340498\" width=\"500\" height=\"375\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>",
		"github": "",
		"blog_url": "",
		"tags": ["video", "manual labor", "IKEA"]

	}
];