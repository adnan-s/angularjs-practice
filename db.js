const sql = require('mssql');
var config = require('./config');

module.exports = {
    ExecuteQuery: (query, res) => {
        sql.connect(config).then(pool => {
            return pool.request().query(query);
        }).then(result => {
            sql.close();
            console.log('here::', result);
            res.status(200).send(result.recordset);
        }).catch(err => {
            sql.close();
            console.log('here::', err);
            res.status(501).send(err);
        });
    }
}