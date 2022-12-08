const express = require('express');
const app = express();
const morgan = require('morgan');
const {Pool} = require('pg');
require('dotenv').config();
const port = process.env.PORT;

let pool = new Pool();

app.use(morgan('dev'));


app.get('/info/get',(req,res)=>{
  try{
    pool.connect(async (error,client,release)=>{
      let resp = await client.query(`SELECT ST_AsGeoJson(geom) from borolekh`);
      res.send(resp.rows);
    });
  }catch(error){
    console.log(error);
  }
})

app.listen(port,()=>{
  console.log('Server is listening to the port :', port );
});
