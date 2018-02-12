var mysql = require('mysql')

exports.dbConnection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'headstails'
})

exports.dbConnection.connect(function(err) {
    if (err) {
        console.log(err)
    }
    else {
        console.log('mysql connected')
    }
})
