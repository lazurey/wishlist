'use strict';

/* Filters */

angular.module('wishlist.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);

  // .filter('owner', ['ownerName', function(ownerName) {

  // }]);
