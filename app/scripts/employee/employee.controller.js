angular.module('employeeApp')
    .controller('EmployeeMainController', [
        '$scope',
        'employeeService',
        
        function($scope) {
            $scope.employees = [{
                "id": 1,
                "name": {
                    "first": "Tabitha",
                    "middle": "Barrera",
                    "last": "Parsons"
                },
                "age": 31,
                "salary": "34164.47",
                "designation": "Consultant"
            }, {
                "id": 2,
                "name": {
                    "first": "Blackburn",
                    "middle": "Claudine",
                    "last": "Wright"
                },
                "age": 32,
                "salary": "37716.27",
                "designation": "Snr. Consultant"
            }, {
                "id": 3,
                "name": {
                    "first": "Verna",
                    "middle": "Manuela",
                    "last": "Hinton"
                },
                "age": 38,
                "salary": "73646.74",
                "designation": "Snr. Manager"
            }, {

                "id": 4,
                "name": {
                    "last": "Castaneda",
                    "middle": "Oconnor",
                    "first": "Tammie"
                },
                "age": 38,
                "salary": "77862.15",
                "designation": "Snr. Manager"
            }, {
                "id": 5,
                "name": {
                    "last": "Gates",
                    "middle": "Diana",
                    "first": "Dennis"
                },
                "age": 39,
                "salary": "45404.98",
                "designation": "Lead"
            }];
        }
    ]);
