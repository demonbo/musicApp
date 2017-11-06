angular.module("musicApp")
    .controller("MyModal", function($scope, $element, $timeout) {

    })
    .directive("myModal", function() {
      return {
        restrict: "A",
        scope: {
          config: "=",
          api: "="
        },
        controller: "MyModal",
        templateUrl: "./scripts/directive/modal-del.template.html"
        // template: "<div>abc</div>"
      };
    });