var angularFilter = angular.module('angularFilter', ['ui.router', 'ngTouch', 'ngAnimate']);

angularFilter.run(['$rootScope', '$state', function ($rootScope, $state) {
  $rootScope.$state = $state;
}]);

angularFilter.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html'
    })
      .state('home.task', {
        url: 'task/:id',
        templateUrl: 'views/task.html'
      })
}]);
