const sql = require('mssql');
var config = require('./config');

module.exports = {
    ExecuteSelectQuery: (query, res) => {
        sql.connect(config).then(pool => {
            return pool.request().query(query);
        }).then(result => {
            sql.close();
            res.status(200).send(result.recordset);
        }).catch(err => {
            sql.close();
            console.log('Error::', err);
            res.status(501).send(err);
        });
    },
    InsertOrUpdate: (query, res) => {
        sql.connect(config).then(pool => {
            return pool.request().query(query);
        }).then(result => {
            sql.close();
            res.status(200).send('Success');
        }).catch(err => {
            sql.close();
            console.log('Error::', err);
            res.status(501).send(err);
        });
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
                reject(undefined);
            });    
        });
    },

}