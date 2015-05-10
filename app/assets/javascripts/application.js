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
//= require turbolinks
//= require bootstrap
//= require angular
//= require angular-route
//= require angular-resource

var blocmetrics = angular.module('blocmetrics', ['ngResource'])

.controller('mainCtrl', function($scope, $http){
  $http.defaults.headers.common['Authorization'] = 'Token ' + document.cookie;

  // API call for users apps
  var domain = $http.get('http://localhost:3001/apps').
  success(function(data, status, headers, config) {
    $scope.domains = data;
  }).
  error(function(data, status, headers, config) {
    console.log('Error');
  });

  // API call for an apps events
  $scope.getEvents = function(domainId) {
    var response = $http.get('http://localhost:3001/apps/' + domainId).
    success(function(data, status, headers, config) {
      $scope.events = data;
      new Chartkick.ColumnChart("analytics", data.data);
    }).
    error(function(data, status, headers, config) {
      console.log('Error');
    });
  };
});

// .controller('domainCtrl', function($scope, $http){
//   $http.defaults.headers.common['Authorization'] = 'Token ' + document.cookie;
//
//   var events = $http.get('http://localhost:3001/apps/#{domain.id}').
//   success(function(data, status, headers, config) {
//     $scope.events = data;
//   }).
//   error(function(data, status, headers, config) {
//     console.log('Error');
//   });
// })
