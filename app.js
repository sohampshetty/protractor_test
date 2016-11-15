var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })
        
        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            templateUrl: 'partial-home-list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })
        
        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            templateUrl: 'partial-paragraph.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: 'partial-about.html' },
                'columnOne@about': { template: 'Look I am a column1!' },
                'columnTwo@about': { 
                    templateUrl: 'table-data.html',
                    controller: 'scotchController'
                }
            }
            
        })

        .state('calculator', {
            url: '/calculator',
            views: {
                '': { 
                        templateUrl: 'calculator.html',
                        controller: 'calcController'
                }
            }

        });

});

routerApp.controller('scotchController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];
    
});

routerApp.controller('calcController', function($timeout, $scope) {
    
      $scope.memory = [];
      $scope.latest = 0;
      $scope.operators = {
        ADDITION: '+',
        SUBTRACTION: '-',
        MULTIPLICATION: '*',
        DIVISION: '/',
        MODULO: '%'
      };
      $scope.operator = $scope.operators.ADDITION;

      $scope.doAddition = function() {
        var times = 5;
        $scope.latest = '. ';
        $timeout(function tickslowly() {
          if (times == 0) {
            var latestResult;
            var first = parseInt($scope.first);
            var second = parseInt($scope.second);
            switch ($scope.operator) {
              case '+':
                latestResult = first + second;
                break;
              case '-':
                latestResult = first - second;
                break;
              case '*':
                latestResult = first * second;
                break;
              case '/':
                latestResult = first / second;
                break;
              case '%':
                latestResult = first % second;
                break;
            }
            $scope.memory.unshift({
              timestamp: new Date(),
              first: $scope.first,
              operator: $scope.operator,
              second: $scope.second,
              value: latestResult
            });
            $scope.first = $scope.second = '';
            $scope.latest = latestResult;
          } else {
            $scope.latest += '. ';
            times--;
            $timeout(tickslowly, 300);
          }
        }, 300)
      };
});