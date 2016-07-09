angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  
  $scope.link = {};
  $scope.addLink = function(link) {
    console.log('oh heyyyyyyyyyyyyyyyyyyyyyyyyyy');
    Links.addOne(link);
  };

});


// curl -d '{"url":"http://www.cnn.com"}' -H "Content-Type:application/json" http://localhost:3000/api/links   
