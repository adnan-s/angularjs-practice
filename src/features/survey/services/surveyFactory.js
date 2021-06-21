var mod = angular.module('SurveyQuestions');
mod.factory("surveyFactory", ["$http",
    function ($http) {
        const apiUrl = 'http://api.surveyportal.com:81'

        function _AddQuestion(question) {
            return $http({
                method: 'POST',
                url: `${apiUrl}/addquestion`,
                data: question
            }).then((res) => {
                return 'Success';
            }, (error) => {
                return (error);
            });
        }

        function _surveyList() {
            return $http.get(`${apiUrl}/survey`)
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
]);

