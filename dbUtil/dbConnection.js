/**
 * Created by zhouxiong on 16/12/19.
 */

var mysql = require('mysql')

var options = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'jianshu'
}

var connection = mysql.createConnection(options)

module.exports = connection
