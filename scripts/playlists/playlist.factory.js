  angular.module('musicApp').factory('myListFactory', [function () {
    var factory = {};
    var myList = [
      {'id': 1, 'name': 'Playlist 1', 'desc': 'Nhac tru tinh'},
      {'id': 2, 'name': 'Playlist 2', 'desc': 'Nhac tre'},
      {'id': 3, 'name': 'Playlist 7', 'desc': 'Nhac cach mang'},
      {'id': 4, 'name': 'Playlist 8', 'desc': 'KPop'},
      {'id': 5, 'name': 'Playlist 16', 'desc': 'Nhac Trinh'},
      {'id': 6, 'name': 'Playlist 9', 'desc': 'JPop'},
      {'id': 7, 'name': 'Playlist 5', 'desc': 'Rock'},
      {'id': 8, 'name': 'Playlist 10', 'desc': 'CPop'},
      {'id': 13, 'name': 'Playlist 13', 'desc': 'Rap'}
    ];

    factory.getList = function () {
      return angular.copy(myList);
    };

    factory.addList = function (name, desc) {
      var index = myList.length;
      if (index > 0) {
        myList.push({'id': +myList[index - 1].id + 1/* + ''*/, 'name': name, 'desc': desc});

      } else if (index === 0) {
        myList.push({'id': '1', 'name': name, 'desc': desc});
      }
      return myList[index].id;
    };

    factory.removeList = function (id) {
      for (var i = 0; i < myList.length;) {
        if (myList[i].id === id) {
          myList.splice(i, 1);
        } else {
          i++;
        }
      }
    };

    factory.editList = function (id, name, desc) {
      for (var i = 0; i < myList.length; i++) {
        if (myList[i].id === id) {
          if (typeof name !== 'undefined' && name !== '') {
            myList[i].name = name;
          }
          if (typeof desc !== 'undefined' && desc !== '') {
            myList[i].desc = desc;
          }
        }
      }
      return true;
    };

    return factory;
  }]);
