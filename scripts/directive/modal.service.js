angular.module("musicApp")
  .factory("modalFactory", function () {
    function modalService () {
      var service = {};
      service.set = set;
      service.get = get;

      function set(key, value) {
        if(key !== null && key !== undefined){
          data[key] = value;
        }
      }
      function get(key) {
        return data[key];
      }
      return service;
    }
  });