(function () {
    var mod = angular.module("SurveyQuestions")
    mod.controller("faqController", ["$scope", "$http", faqCreate]);

    function faqCreate($scope, $http) {
        $scope.title = "Add FAQ (Frequently Asked Questions)"

        $scope.faq = {
            faq: '', answer: ''
        }

        $scope.onSaveClick = () => {
            $http({
                method: 'POST',
                url: 'http://localhost:8080/faq',
                data: $scope.faq
            })
                .then((response) => {
                    $scope.faq = {
                        faq: '', answer: ''
                    };
                    alert('Faq added successfully.');
                }, (error) => {
                    console.log(error);
                });
        }
    }
}());