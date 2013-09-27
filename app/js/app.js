'use strict';


// Declare app level module which depends on filters, and services
angular.module('wishlist', ['wishlist.filters', 'wishlist.services', 'wishlist.directives', 'wishlist.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/board/:ownerName', {templateUrl: 'partials/board.html', controller: 'WishBoardCtrl'});
    $routeProvider.when('/edit/:ownerName', {templateUrl: 'partials/edit.html', controller: 'EditWishlistCtrl'});
    $routeProvider.otherwise({redirectTo: '/board/Awaw'});
  }]);
