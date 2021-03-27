(function () {
    var mod = angular.module('SurveyQuestions');
    mod.factory("userFactory", ["$http", userFactory]);

    function userFactory($http) {

        function _insert(user) {
            return new Promise((resolve, reject) => {
                $http({
                    method: 'POST',
                    url: 'http://localhost:8080/user',
                    data: user
                }).then((res) => {
                    resolve(res);
                }, (error) => {
                    reject(error);
                });
            })
        }

        function _getAll() {
            return new Promise((resolve, reject) => {
                $http.get('http://localhost:8080/user')
                    .then((res) => {
                        resolve(res.data);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            })
        }

        function _update(user) {

        }

        function _delete(id) {

        }

        function _getSingle(id) {

        }

        return {
            Insert: _insert,
            update: _update,
            delete: _delete,
            getSingle: _getSingle,
            getAll: _getAll
        }
    }

}());