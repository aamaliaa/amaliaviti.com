Amalia.Router.map(function () {
  this.route('about');
  this.route('projects');
  this.resource('project', { path: '/project/:project_id' });
});

// TODO: figure out how to get urls to work ALL THE TIME without hashbangs
// Amalia.Router.reopen({
//   location: 'history'
// });