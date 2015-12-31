angular.module('employeeApp')
  .controller('EmployeeAddEditController', [
    '$scope',
    '$log',
    '$stateParams',
    'EmployeeService',
    '$window',

    function ($scope, $log, $stateParams, EmployeeService, $window) {
      var employeeId = $stateParams.employeeId,
        employeeList = $scope.employees,
        designationsAvailable = false;

      $scope.employeeFormModel = {};
      $scope.employee = {};

      $scope.resetForm = function () {
        $scope.employee = EmployeeService.getEmployeeById(employeeId, employeeList);
        $log.debug($scope.designations);
        if(!$scope.employee.designation && designationsAvailable) {
          $scope.employee.designation = $scope.designations[0];
        }
        $scope.employeeFormModel = angular.copy($scope.employee);

      };

      $scope.submitEmployee = function () {
        $scope.employee = angular.copy($scope.employeeFormModel);
        if ($scope.employee.id && $scope.employee.id > 0) {
          //edit existing employee
          EmployeeService.editEmployee($scope.employee, $scope.employees);
        } else {
          //add new employee
          EmployeeService.addEmployee($scope.employee, $scope.employees);
        }
        $window.location = '#';
      };

      //$scope.$watch(designationsAvailable, $scope.resetForm());



      $scope.resetForm();
    }


    /*function($scope, $log, $stateParams, EmployeeService, $window) {
     var employeeId = $stateParams.employeeId,
     employeeList = $scope.employees;

     $scope.employee = {};
     $scope.designations = null;
     $scope.selectedDesignation = null;

     $scope.loadEmployee = function() {
     $log.debug('Reset called...');
     $scope.employee = angular.copy(EmployeeService.getEmployeeById(employeeId, $scope.employees));
     if (!$scope.employee.designation && $scope.designationsReceived) {
     $scope.employee.designation = $scope.designations[0];
     }
     };

     $scope.submitEmployee = function() {
     var employeeModel = angular.copy($scope.employee);

     if (employeeId > -1) {
     $scope.employees = employeeList = EmployeeService.editEmployee(employeeModel, $scope.employees);
     } else {
     $scope.employees = employeeList = EmployeeService.addEmployee(employeeModel, $scope.employees);
     }
     $window.location = '#';

     };

     $scope.$watch('designationsReceived', $scope.loadEmployee);

     EmployeeService.getDesignations()
     .then(function (response) {
     if(angular.isArray(response) && response.length > 0) {
     $scope.designations = response;
     $scope.designationsReceived = true;
     } else {
     throw 'Failed to get designations.';
     }
     })
     .catch(function (error) {
     $log.debug('Failed! error = ', error);
     $scope.designations = [];
     $scope.designationsReceived = false;
     });

     if(employeeId > -1) {
     $scope.heading = 'Edit Employee';
     } else {
     $scope.heading = 'Add New Employee';
     }

     }*/

  ]);