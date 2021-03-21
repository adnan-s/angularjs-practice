(function () {
    var mod = angular.module("SurveyQuestions");
    mod.controller("faqListController", ["$scope","faqFactory","$location", faqListCtrl]);

    function faqListCtrl($scope, faqFactory, $location) {

        $scope.title = "FAQ List";

        faqFactory.getAll()
        .then((data) => {
            $scope.faqlist = data;
            $scope.userResponse = [];
        });

        $scope.onEditFaq = (Id) => {
            $location.path('/faq/' + Id);
        }
    }
}());


