var mod = angular.module("SurveyQuestions");
mod.controller("faqListController", ["$scope",
    "$location",
    "faqFactory",
    function ($scope, $location, faqFactory) {

        $scope.title = "FAQ List";

        const loadFaq = () => {
            faqFactory.GetAll()
                .then((data) => {
                    $scope.faqlist = data;
                    $scope.userResponse = [];
                });
        }

        loadFaq();

        $scope.onEditFaq = (Id) => {
            $location.path('/faq/' + Id);
            faqFactory.GetSingle()
                .then((data) => {
                    $scope.faq = data;
                    console.log(data);
                });
        }

        $scope.onDeleteFaq = (Id) => {
            if (confirm("Are you sure you wand to delete this question")) {
                faqFactory.Delete(Id)
                    .then((data) => {
                        alert(data.data);
                        loadFaq();
                    });
            }
        }
    }
]);




