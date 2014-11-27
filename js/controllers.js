'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', ['LocalStorageModule']);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PrintPhoneListCtrl', ['$scope', 'Phone',
       function($scope,  Phone) {
        $scope.phones = Phone.query();
        $scope.orderProp = 'age';
    }]);
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
phonecatControllers.controller('Cart', ['$scope', '$routeParams', 'Phone',
    function($scope, Phone) {
        $scope.phones = Phone.query();
        $scope.orderProp = 'age';
    }]);


phonecatControllers.config(function (localStorageServiceProvider) {
    localStorageServiceProvider
        .setStorageCookie(45, '<path>');
});
phonecatControllers.config(function (localStorageServiceProvider) {
    localStorageServiceProvider
        .setStorageCookieDomain('<domain>');
});
phonecatControllers.config(function (localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('myApp')
        .setStorageType('sessionStorage')
        .setNotify(true, true)
});
phonecatControllers.config(['localStorageServiceProvider', function(localStorageServiceProvider){
        localStorageServiceProvider.setPrefix('demoPrefix');
        // localStorageServiceProvider.setStorageCookieDomain('example.com');
        // localStorageServiceProvider.setStorageType('sessionStorage');
    }]);
phonecatControllers.controller('Ctrl', [
        '$scope',
        'localStorageService',
        function($scope, localStorageService) {

            localStorageService.set('property', '2');
            $scope.unbind = localStorageService.bind($scope, 'property');

            //Test Changes
            $scope.update = function(val) {
                $scope.property = val;
                $timeout(function() {
                    alert("localStorage value: " + localStorageService.get('property'));
                });
            }
        }


    ]);