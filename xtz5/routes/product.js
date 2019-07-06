//商品路由模块
//引入express
const express=require('express');
//引入pool
const pool=require('../pool.js');
//创建空的路由器
const router=express.Router();

router.get('/search',(req,res)=>{
  console.log(req.query);
  var sql='select * from qw_site_info';
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    res.send(result);
  })
}) 
router. get('/index_project_show',(req,res)=>{
  var lid=req.query.lid;
  var lid=req.query.lid;
  var sql='select*from index_project_show';
  pool.query(sql,[lid],(err,result)=>{
    if(err)throw err;
    res.send(result);
    console.log(result);
  })
})

//导出路由
module.exports=router;