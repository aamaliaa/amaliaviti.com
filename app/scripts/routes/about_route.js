Amalia.AboutRoute = Ember.Route.extend({
  model: function () {
    return $.getJSON("/data/about.json");
  }
});
