// ===
// Angular routes
// ===

angular.module('app.routes', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
  // home page router
  .when('/', {
    templateUrl : 'app/views/pages/home.html'
  });

  $locationProvider.html5Mode(true);
});