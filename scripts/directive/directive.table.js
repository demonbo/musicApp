angular.module("musicApp")
    .controller("MyTable", function($scope) {

    })
    .directive("myTable", function() {
      return {
        restrict: "A",
        scope: {
          varTable: "=",
          data: "=",
          config: "=",
          search: "="
        },
        controller: "MyTable",
        templateUrl: "./scripts/directive/directive.table.html"
        // template: "<div>abc</div>"
    };
  });