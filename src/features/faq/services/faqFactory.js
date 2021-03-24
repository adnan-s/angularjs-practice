(function () {

    var mod = angular.module('SurveyQuestions');
    mod.factory("faqFactory", ['$http', faqFactory]);

    function faqFactory($http) {

        function _AddFaq(question) {
            return $http({
                method: 'POST',
                url: 'http://localhost:8080/Faq',
                data: question
            }).then((res) => {
                return 'Success';
            }, (error) => {
                return (error);
            });
        }

        function _getAll() {
            return $http.get('http://localhost:8080/faqlist')
                .then((res) => {
                    return res.data;
                })
                .catch((err) => {
                    return err;
                });
        }

        return {
            AddFaq: _AddFaq,
            getAll: _getAll
        }
    }
}());