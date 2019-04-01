var app = angular
    .module("shopApp", ["ngRoute"])
    .config(function($routeProvider) {
        $routeProvider.when("/", {
            templateUrl : "views/card-view.html",
            controller: "productsController"
        })
        .when("/list-view", {
            templateUrl: "views/list-view.html",
            controller: "productsController"
        })
    });




