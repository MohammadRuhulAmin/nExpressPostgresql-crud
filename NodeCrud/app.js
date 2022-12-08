const express = require('express');
const app = express();
const morgan = require('morgan');
const {Pool} = require('pg');
require('dotenv').config();
const port = process.env.PORT;

let pool = new Pool();

app.use(morgan('dev'));


// app.get('/',(req,res)=>{
//   try{
//     pool.connect((error,client,release)=>{
//       client.query(`SELECT * FROM borolekh where plot_no_en = 1`);
//     })
//   }catch(error){
//     console.log(error);
//   }
// })

app.listen(port,()=>{
  console.log('Server is listening to the port :', port );
});
