// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require angular
//= require angular-route
//= require angular-resource
//= require angular-rails-templates
// Templates in app/assets/javascript/templates
//= require_tree ./templates


var blocmetrics = angular.module('blocmetrics', ['ngResource', 'ngRoute', 'templates']);

blocmetrics.config(function($routeProvider, $locationProvider) {
  // $locationProvider.html5Mode(true);
  $routeProvider
  .when('/domains/:domain_id', {
    templateUrl: 'assets/templates/domain.html',
    controller: 'domainCtrl'
  })
  .when('/setup', {
    templateUrl: 'assets/templates/setup.html',
    controller: 'setupCtrl'
  })
  .otherwise({
    redirectTo: '/setup'
  });
});

angular.module('blocmetrics').controller('mainCtrl', function($scope, $http){
  $http.defaults.headers.common['Authorization'] = 'Token ' + document.cookie;

  $scope.goToDomain = function(domainId) {
    document.location = '#domains/' + domainId;
  };
  // API call for users apps
  var domain = $http.get('http://localhost:3001/apps').
  success(function(data, status, headers, config) {
    $scope.domains = data;
  }).
  error(function(data, status, headers, config) {
    console.log('Error');
  });
});

angular.module('blocmetrics').controller('setupCtrl', function($scope, $http){

});

angular.module('blocmetrics').controller('domainCtrl', function($scope, $routeParams, $http) {
  // API call for an apps events
  var response = $http.get('http://localhost:3001/apps/' + $routeParams.domain_id).
  success(function(data, status, headers, config) {
    $scope.events = data;
    $scope.app = data.data[Object.keys(data.data)[Object.keys(data.data).length - 1]];
    new Chartkick.ColumnChart("analytics", data.data.slice(0, -1));
  }).
  error(function(data, status, headers, config) {
    console.log('Error');
  });
});
