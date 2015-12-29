angular.module('employeeApp')
    .controller('EmployeeMainController', [
        '$scope',
        '$log',
        'EmployeeService',

        function($scope, $log, EmployeeService) {
            $scope.employees = [];
            $scope.employeeListRecieved = false;

            /*$scope.addEmployee = function(newEmployee) {
                if(EmployeeService.isValid(newEmployee)) {
                    $scope.employees = EmployeeService.addEmployee(newEmployee, $scope.employees);
                } else {

                }
            };*/

            $scope.deleteEmployee = function (id) {
                $log.debug('Deleting employee with id = ', id);
                var deletedEmployee = null;
                $scope.employees.forEach(function(emp) {
                    if (emp.id === id) {
                        deletedEmployee = emp;
                        return false;
                    }
                });
                $log.debug('deletedEmployee = ', deletedEmployee);
                $scope.employees = EmployeeService.deleteEmployee(deletedEmployee, $scope.employees);
            };

            EmployeeService.getEmployees()
              .then(function (response) {
                  if(angular.isArray(response) && response.length > 0) {
                      $log.debug('Success! response = ', response);
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

