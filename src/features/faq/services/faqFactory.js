(function () {

    var mod = angular.module('SurveyQuestions');
    mod.factory("faqFactory", ['$http', faqFactory]);

    function faqFactory($http) {

        function _insert(faq) {
            return $http({
                method: 'POST',
                url: 'http://localhost:8080/Faq',
                data: faq
            }).then((res) => {
                return 'Success';
            }, (error) => {
                return (error);
            });
        }

        function _update(faq) {
            return $http({
                method: 'PUT',
                url: 'http://localhost:8080/faq',
                data: faq
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

        function _delete(id) {
            return $http.delete('http://localhost:8080/faq/' + id)
            .then((data) => {
                return data;
            }).catch((err) => {
                return err;
            })
        }

        function _getSingle(id) {
            return $http.get('http://localhost:8080/faq/' + id)
            .then((data) => {
                return data;
            }).catch((err) => {
                return err;
            })
        }

        return {
            Insert: _insert,
            Update: _update,
            GetAll: _getAll,
            Delete: _delete,
            GetSingle: _getSingle
        }
    }
}());