app.controller('searchController', function($scope) {
    $scope.search = function(item) {
        if( $scope.searchText == undefined ) {
            return true;
        } else {
            if (
                item.productname.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                item.brand.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                item.category.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                item.rating.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ) {
                    return true;
                }
            return true;
        }
    }
})