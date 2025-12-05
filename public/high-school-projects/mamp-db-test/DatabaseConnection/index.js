var mysql = require('mysql');

function ConnectDatabase(sql) {

  console.log(sql);

  // Parameter
  // Konstant

    const connection = mysql.createConnection({ // Const er en connection. 
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'Dromtorp',
        port: 3306
      });
      
      connection.connect(

        (err) => {
      
          if (err) {
            console.error('error connecting: ' + err.stack);
            return;
          }
        
          console.log('connected as id ' + connection.threadId);
      
        }

      );
      
      
      connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        //console.log('The solution is: ', results);

      });

      connection.end();
}

function updateSql() {
    const updateSQL = "UPDATE TABLE elev set Hobby = 'Basket' where elev='Hanna'";
    ConnectDatabase(updateSQL);
}

function insertSql(sql) {
  const updateSQL = "INSERT INTO elev () VALUES ()";
    ConnectDatabase(updateSQL);
}

function deleteTable(sql) {

}

updateSql();