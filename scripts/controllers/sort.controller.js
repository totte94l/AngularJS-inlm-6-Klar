app.controller('sortController', function($scope, $rootScope) {
    $rootScope.sortColumn = "productname";
    $rootScope.reverseSort = false;
    
    $rootScope.sortData = function(column) {
        $rootScope.reverseSort = ($scope.sortColumn == column) ?  !$scope.reverseSort : false;
        $rootScope.sortColumn = column;
    };
})