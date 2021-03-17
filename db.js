const sql = require('mssql');
var config = require('./config');

module.exports = {
    ExecuteSelectQuery: (query) => {
        return new Promise((resolve, reject) => {
            sql.connect(config).then(pool => {
                return pool.request().query(query);
            }).then(result => {
                sql.close();
                resolve(result.recordset);
            }).catch(err => {
                sql.close();
                reject(err);
            });
        });
    },

    insertOrUpdate: (query) => {
        return new Promise((resolve, reject) => {
            sql.connect(config).then(pool => {
                return pool.request().query(query);
            }).then(result => {
                sql.close();
                resolve('success');
            }).catch(err => {
                sql.close();
                reject(err);
            });
        })
    },

    getDataSet: (query) => {
        return new Promise((resolve, reject) => {
            sql.connect(config).then(pool => {
                return pool.request().query(query);
            }).then(result => {
                sql.close();
                resolve(result.recordset);
            }).catch(err => {
                sql.close();
                reject(err);
            });
        });
    }
}