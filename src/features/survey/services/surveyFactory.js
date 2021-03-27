(function () {

    var mod = angular.module('SurveyQuestions');
    mod.factory("surveyFactory", ["$http", surveyFactory]);

    function surveyFactory($http) {

        function _AddQuestion(question) {
            return $http({
                method: 'POST',
                url: 'http://localhost:8080/question',
                data: question
            }).then((res) => {
                return 'Success';
            }, (error) => {
                return (error);
            });
        }

        function _surveyList() {
            return $http.get('http://localhost:8080/survey')
                .then((res) => {
                    return res.data;
                })
                .catch((err) => {
                    return err;
                });
        }


        return {
            AddQuestion: _AddQuestion,
            getAll: _surveyList
        }

    }


}())