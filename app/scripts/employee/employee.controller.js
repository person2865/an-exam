angular.module('employeeApp')
    .controller('EmployeeMainController', [
        '$scope',
        '$log',
        'EmployeeService',

        function($scope, $log, EmployeeService) {
            $scope.employees = [];
            $scope.employeeListRecieved = false;

            $scope.deleteEmployee = function (id) {
                var deletedEmployee = null;
                $scope.employees.forEach(function(emp) {
                    if (emp.id === id) {
                        deletedEmployee = emp;
                        return false;
                    }
                });
                $scope.employees = EmployeeService.deleteEmployee(deletedEmployee, $scope.employees);
            };

            EmployeeService.getEmployees()
              .then(function (response) {
                  if(angular.isArray(response) && response.length > 0) {
                      $scope.employees = response;
                      $scope.employeeListRecieved = true;
                  } else {
                      throw 'Failed to get employees.';
                  }
              })
              .catch(function (error) {
                  $log.debug('Failed! error = ', error);
                  $scope.employees = [];
                  $scope.employeeListRecieved = false;
              });
        }
    ]);

