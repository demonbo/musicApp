angular.module("musicApp")
    .controller("MainCtrl", ["$scope", "$location",
      function ($scope, $location) {
        //  select item
        $scope.selectItem = function (data) {
          var c = 0;
          for (var i = 0; i < data.length; i++) {
            if (data[i].selected) {
              c++;
              break;
            }
          }
          if (c > 0) {
            return true;
          } else {
            return false;
          }
        };

        // indeterminate check
        $scope.indeterminateCheck = function (data) {
          var c = 0;
          angular.forEach(data, function (item) {
            if (item.selected) {
              c++;
            }
          });
          if (c < data.length) {
            return false;
          } else {
            return true;
          }

          // if (c < data.length) {
          //   return true;
          // } else {
          //   return false;
          // }
        };

        //check All item
        $scope.checkAllItem = function (status, data) {
          status = !status;
          if (status) {
            angular.forEach(data, function (item) {
              item.selected = true;
            });
            return false;
          } else {
            angular.forEach(data, function (item) {
              item.selected = false;
            });
            return true;
          }
        };

        // Go Somewhere
        $scope.goSomeWhere = function (place, id) {
          if (typeof id === 'undefined') {
            $location.url(place);
          } else {
            $location.url(place + '/' + id);
          }
        };

      }
    ]);


$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});

