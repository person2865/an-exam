angular.module('employeeApp')
  .factory('EmployeeService', [
    '$http',
    '$log',

    function ($http, $log) {
      return {
        getEmployees: function () {
          return $http
            .get('/mock/employees.json')
            .then(function (successResponse) {
              $log.debug('successResponse = ', successResponse);
              return successResponse.data;
            }, function (failureResponse) {
              $log.debug('failureResponse = ', failureResponse);
              return failureResponse.data;
            });
        },

        addEmployee: function (item, itemList) {
          item.id = itemList[itemList.length - 1].id + 1;
          itemList.push(item);
          return itemList;
        },

        deleteEmployee: function (item, itemList) {
          $log.debug('Deleting item = ', item);
          $log.debug('Deleting item from itemList = ', itemList);
          var newList = itemList.filter(function(el) {
            $log.debug('el.id = ', el.id);
            $log.debug('item.id = ', item.id);
            return el.id !== item.id;
          });
          $log.debug('New List = ', newList);
          return newList;
        }/*,

        isValid: function (item) {

        }*/
      };
    }
  ]);