(function() {

    angular
        .module("shopApp")
        .controller("loginController", loginController);

    loginController.$inject = ["$rootScope", "$location", "authService", "dialogService"];
    function loginController($rootScope, $location, authService, dialogService) {

        var vm = this;
            function login() {
                vm.dataLoading = true;
    
                authService.Login(vm.email, vm.password) 
                    .then(function (res) {
                        if(res.success) {
                            authService.SetCredentials(res.id, res.token);
                            $location.path("/home");
                        } else {
                            dialogService.Error(res.message);
                            vm.dataLoading = false;
                        }
                    })               
            }
            
            (function initController() {
                authService.ClearCredentials();
            })();
    
            vm.login = login;
    }
})();