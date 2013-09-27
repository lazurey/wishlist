'use strict';

/* Controllers */

angular.module('wishlist.controllers', []).
  controller('MyCtrl1', [function() {
  

  }])
  
  .controller('MyCtrl2', [function() {

  }]);

function WishBoardCtrl($scope, $routeParams) {
  $scope.ownerName = $routeParams.ownerName;
  $scope.bg = 'background-color: ';
  $scope.currentOwner = function (owner) {
  	if (owner.name == $scope.ownerName) {
  		$scope.bg += owner.background;
  		return "active";
  	} else {
  		return "";
  	}
  }
}

function EditWishlistCtrl($scope, $routeParams, $http) {
	$scope.ownerName = $routeParams.ownerName;
	$http.get('wishlist/wishlist.json').success(function(data) {
		$scope.wishlist = data;
	});

	$scope.addNew = function() {
		$scope.wishlist.push({"name": $scope.newWish, "date": "2013-12-12", "buyer": "", "owner": $scope.ownerName, "status": "open"});
		$scope.wishlist.$save();
		$scope.newWish = '';
	};
}

function WishlistCtrl($scope, $http) {
  $http.get('wishlist/wishlist.json').success(function(data) {
    $scope.wishlist = data;
  });
}

WishlistCtrl.$inject = ['$scope', '$http'];

function OwnerListCtrl($scope, $http) {
	$http.get('wishlist/owner.json').success(function(data) {
		$scope.ownerList = data.slice(0, 10);
	});
}