var app = angular
    .module('shopApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider.when("/", {
            templateUrl : "partials/card-view/card.view.html",
            controller: "mainController"
        })
        .when("/list-view", {
            templateUrl: "partials/list-view/list.view.html",
            controller: "mainController"
        })
    });

    app.controller('mainController', function($scope) {
        
    })





