var employeeApp = angular.module('employeeApp', ['ui.router']);

employeeApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'scripts/employee/table.template.html',
            controller: 'EmployeeMainController'
        })
        /*.state('edit', {

        })*/;
});