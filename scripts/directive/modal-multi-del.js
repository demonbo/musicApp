angular.module("musicApp")
    .controller("MyModalMulti", ["$scope", "$element", "$timeout",
      function($scope, $element, $timeout) {

      }])
    .directive("myModalMulti", function() {
      return {
        restrict: "A",
        scope: {
          config: "="
        },
        controller: "MyModalMulti",
        templateUrl: "./scripts/directive/modal-multi-del.template.html"
        // template: "<div>abc</div>"
      };
    });