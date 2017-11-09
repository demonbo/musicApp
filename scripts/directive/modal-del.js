angular.module("musicApp")
    .controller("MyModal", ["$scope", "$element", "$timeout",
      function($scope, $element, $timeout) {
        $scope.showModal = function (value) {
          // $scope.api({value: value});
          // if ($scope.api.value){
          if (value){
            $timeout(function(){
              $element.find('#modalDel') && $element.find('#modalDel').modal('show');
            });
          }
        };
      //
      //   console.log('functionList', $scope.config.functionList);
        $scope.config.api.showModal = $scope.showModal;
        // console.log('functionList after', $scope.config.functionList);
      //
    }])
    .directive("myModal", function() {
      return {
        restrict: "A",
        scope: {
          config: "="
        },
        controller: "MyModal",
        templateUrl: "./scripts/directive/modal-del.template.html"
        // template: "<div>abc</div>"
      };
    });