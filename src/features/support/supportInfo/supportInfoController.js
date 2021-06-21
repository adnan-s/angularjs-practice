var mod = angular.module('SurveyQuestions');
mod.controller("supportInfoController", ["$scope", "supportFactory",
    function ($scope, supportFactory) {

        $scope.title = "Create Support Info";

        const initSupport = () => {
            $scope.support = {
                contact: '', shortDesc: '', description: '', email: '', phone: '', whatsApp: '',
                skypeId: '', webAddress: ''
            };
        }

        initSupport();

        $scope.onSaveClick = () => {
            supportFactory.Insert($scope.support)
                .then((response) => {
                    alert('Support Info added successfully.');
                    initSupport();
                }, (error) => {
                    console.log(error);
                });
        }
    }
]);