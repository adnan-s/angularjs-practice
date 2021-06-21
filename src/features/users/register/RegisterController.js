var mod = angular.module("SurveyQuestions")
mod.controller("RegisterController", ["$scope", "userFactory",
    function ($scope, userFactory) {
        $scope.title = "Create account.";
        const initUser = () => {
            $scope.user = {
                firstName: '',
                lastName: '',
                email: '',
                password: 'Test123!',
                role: 'staff'
            }
        }

        initUser();

        $scope.onCreateAccountClick = () => {
            userFactory.Insert($scope.user)
                .then((response) => {
                    initUser();
                    alert(response)
                }, (err) => {
                    console.log(err.data.originalError.info.message);
                });
        }

    }
]);
