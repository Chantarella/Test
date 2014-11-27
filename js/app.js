'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',

  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
        when('/cart', {
            templateUrl: 'partials/cart.html'
        }).
        when('/ctrl', {
            templateUrl: 'partials/test.html',
            controller: 'ctrl'
        }).
        when('/print', {
            templateUrl: 'partials/print-phone-list.html',
            controller: 'PrintPhoneListCtrl'
        }).

      otherwise({
        redirectTo: '/phones'
      });
  }]);
