var express = require('express');
var router = express.Router();
const pool = require('../config/dbConfig');
/* GET home page. */
router.get('/', function(req, res, next) {
  try{
    pool.getConnection((err,conn) => {
        if(err){
          console.log(err)
          throw err.message;
        }
        const query = "SELECT * FROM t_user";
        conn.query(query, (err, rows) =>{
          if(err){
            console.log(err)
            throw err.message;
          }
          conn.release
          console.log(rows);
          
          res.status(200).json({status: 200, data: rows, message: "success"})
        })
    })
  }catch(error){
    res.status(500).json({
      result: 500,
      message: error
    })
  }
});

module.exports = router;
