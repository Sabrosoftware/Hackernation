// ===
// Angular routes
// ===

angular.module('app.routes', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
  // home page router
  .when('/', {
    templateUrl : 'app/views/pages/home.html'
  })
  .when('/problems', {
    templateUrl : 'app/views/pages/problems.html',
    controller : 'problemController'
  });

  $locationProvider.html5Mode(true);
});

