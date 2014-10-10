turnUp.js is a jQuery plugin that, given a list of strings, continuously grabs one string randomly and "turns it up".

<h1 class='turnup' style='text-align: center;'>NYMERIA</h1>

I came across a similar implementation of this effect while browsing the Internet one day and decided that it might make a useful plugin for my portfolio (see the 'about' page) and other future projects.

###How to Use

It's super simple to plug it in your code:

	$('#title').turnup({ list: ['one', 'two', 'three', 'four'] });

You can also change the CSS3 transition and interval time:

	$('#title').turnup({
		list: ['Grey Wind', 'Lady', 'Nymeria', 'Summer', 'Shaggy Dog'],
		transition: 'all 250ms ease',
		interval: 450
	});

###Options

 - `list: ['one', 'two', 'three', 'four']` - an array of strings
 - `transition: 'all 250ms ease'` - valid css string
 - `interval: 450` - time between words (in milliseconds)

###Public Methods

If you want to stop an instance after it has been instantiated, just tell it to stop.

	$('#title').turnup('stop');

Then you can also turn up again!

	$('#title').turnup('start');

###To Do

 * add options for cycling through list (i.e. linearly, alphabetically) instead of at random
 * CSS3 animation support for transitions (i.e. zoom/fade in from left, zoom/fade out upwards, etc)
