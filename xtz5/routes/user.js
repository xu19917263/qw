const express=require("express");
var pool=require("../pool.js");
let router=express.Router();

// 注册验证
router.get("/register",(req,res)=>{
  var $uname=req.query.uname,
      $email=req.query.email,
      $phone=req.query.phone;
  // 验证非空
  if(!$uname){
    res.send(`${$uname}可用`);
    return ;
  };
  if(!$email){
    res.send(`${$email}可用`);
    return ;
  };
  if(!$phone){
    res.send(`${$phone}可用`);
    return ;
  };
  console.log('信息可用');
  //未被注册
  var sql="select uname,email,phone from qw_user where uname=?,email=?,phone=?";
  pool.query(sql,[$uname,$email,$phone],(err,result)=>{
    if(err)throw err;
    res.send(result);
    console.log("result");
  }) 
});
//注册
router.post("/register",(req,res)=>{
  console.log(req.body);
  var uname=req.body.uname;
  var email=req.body.email;
  var phone=req.body.phone;
  var upwd=req.body.upwd;
  var avatar=req.body.avatar;
  var user_name=req.body.user_name;
  var gender=req.body.gender;
  var sql='insert into qw_user (uname,email,phone,upwd,avatar,user_name,gender) values(?,?,?,?,?,?,?)';
  pool.query(sql,[uname,email,phone,upwd,avatar,user_name,gender],(err,result)=>{
    if(err)throw err;
    if(result.affectedRow==0){
      res.json({code:-1,msg:'注册失败'});
    }else{
      res.json({code:1,msg:'注册成功'})
    }
  })
});

// 登录
router.post('/login',(req,res)=>{
  console.log(req.body);
  var $uname=req.body.uname;
  var $upwd=req.body.upwd;
  //验证数据是否为空
  if(!$uname){
    res.json({code:401,msg:'uname required'});
    return;
  }
  if(!$upwd){
    res.json({code:401,msg:'upwd required'});
    return;
  }
  var sql="select*from qw_user where uname=? and upwd=?";
  pool.query(sql,[$uname,$upwd],(err,result)=>{
    if(err)throw err;
    console.log(result);
    if(result.length==0){
      res.json({code:301,msg:'login err'});
    }else{
      res.json({code:200,msg:"login success"});
    }
  });
});

module.exports=router;