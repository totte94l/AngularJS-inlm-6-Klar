var app = angular
    .module("shopApp", ["ngRoute", "ngCookies"])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when("/", {
            templateUrl: "partials/card-view/card.view.html"
        })
        .when("/list-view", {
            templateUrl: "partials/list-view/list.view.html"
        })
        .when("/home", {
            controller: "homeController",
            templateUrl: "partials/home/home.view.html",
            controllerAs: "vm"
        })
        .when("/login", {
            controller: "loginController",
            templateUrl: "partials/login/login.view.html",
            controllerAs: "vm"                
        })
        .when("/register", {
            controller: "registerController",
            templateUrl: "partials/register/register.view.html",
            controllerAs: "vm"                
        })
    })
    .factory("productsService", function ($http) {
        return {
            products: function () {
                return $http.get("http://localhost:3001/api/products").then(function (response) {
                    return response.data;
                });
            }
        }
    })
    .run(run)    

    run.$inject = ["$rootScope", "$location", "$cookies", "$http"];
    function run($rootScope, $location, $cookies, $http) {

        $rootScope.globals = $cookies.getObject("globals") || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common["Authorization"] = 'Bearer ' +  $rootScope.globals.currentUser.token;
           
        }

        $rootScope.$on("$locationChangeStart", function(event, next, current) {
            var restrictedPage = $.inArray($location.path(), ["/", "/login", "/register"]) === -1;
            

            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path("/login");
            }
/* 
            if(restrictedPage && loggedIn) {
                $location.path("/");
            } */

        })
    }

    app.controller('mainController', function ($scope, $rootScope, productsService) {
        // Compontent
        $scope.filterComponent = "../partials/filter/filter.view.html";

        // Gets the products from the api
        productsService.products().then(function (data) {
            $scope.products = data;
        });
            /* Products per page values */
            $scope.options = [{ value: 5, name: "5" }, { value: 10, name: "10" }, { value: 20, name: "20" }, { value: 50, name: "50" }, { value: 100, name: "100" }];
            $scope.productsPerPage = 10; // Sets the default value for products per page.
            //$scope.totalProducts = $scope.products.length;

            /* Sorting */
            $scope.sortColumn = "productname"; //Default sorting type
            $scope.reverseSort = false;

            $scope.sortData = function (column) {
                $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
                $scope.sortColumn = column;
            }

            /* View icon (card or list) */
            $scope.cardActive = true;

            $scope.number = 5;
            $scope.getNumber = function (num) {
                return new Array(num);
            }
    })





