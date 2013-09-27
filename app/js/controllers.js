'use strict';

/* Controllers */

angular.module('wishlist.controllers', []).
  controller('MyCtrl1', [function() {
  

  }])
  
  .controller('MyCtrl2', [function() {

  }]);


function WishlistCtrl($scope) {
  $scope.wishlist = [
    {"name": "book", "date": "2013-12-12", "buyer": "", "owner": "3eye"},
    {"name": "book", "date": "2013-12-12", "buyer": "", "owner": "Awaw"},
    {"name": "book", "date": "2013-12-12", "buyer": "", "owner": "Bluef"},
    {"name": "book1", "date": "2013-12-12", "buyer": "", "owner": "Hawk"},
  ];
 
  // $scope.owner = 'bluef';
}

function OwnerListCtrl($scope) {
	$scope.owerList = [
		{"name": "3eye", "background": "#1ABC9C"},
		{"name": "Awaw", "background": "#F1C40F"},
		{"name": "Bluef", "background": "#2ECC71"},
		{"name": "Hawk", "background": "#E67E22"},
		{"name": "Killa", "background": "#3498DB"},
		{"name": "Loading99", "background": "#E74C3C"},
		{"name": "Nereid", "background": "#9B59B6"},
		{"name": "Peter", "background": "#ECF0F1"},
		{"name": "Sause", "background": "#34495E"},
		{"name": "Sub040", "background": "#95A5A6"},
	];
}