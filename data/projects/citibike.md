When Citibike was announced, I think I was more excited about the data that would be generated and shared publicly than the bikes themselves. This project is a quick experiment and current work in progress that is built on top of the real-time Citibike stations data.

I used Google Maps and d3.js to plot out each of the stations on the map:

- green stations have > 5 bikes available
- orange stations have between 1 and 5 bikes available
- red stations have 0 bikes available
- a green station with a larger circle radius has more available bikes

To use the tool, simply enter an origin address and a destination address (both NYC addresses), and hit the "plot" button. Bicycle directions between the closest stations to each of the two points that you've specified will be plotted on the map.
