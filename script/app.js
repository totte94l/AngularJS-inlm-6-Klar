var app = angular
    .module('shopApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider.when("/", {
            templateUrl : "partials/card-view/card.view.html"
        })
        .when("/list-view", {
            templateUrl: "partials/list-view/list.view.html"
        })
    })

   .controller('mainController', function($scope) {
        // Adds all products to the scope from products.js
        $scope.products = products;

        /* Products per page values */
        $scope.productsPerPage = 10; // Sets the default value for products per page.
        $scope.totalProducts = $scope.products.length;

        /* Sorting */
        $scope.sortColumn = "productname"; //Default sorting type
        $scope.reverseSort = false;

        $scope.sortData = function(column) {
            $scope.reverseSort = ( $scope.sortColumn == column ) ? !$scope.reverseSort : false;
            $scope.sortColumn = column;
        }

        /* View icon (card or list) */
        $scope.cardActive = true; 

    })





