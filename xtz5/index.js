//引入express,创建web服务器
const express=require('express');
// 引入中间件bodyParser
const bodyParser=require('body-parser');
//跨域
const cors=require('cors');
//引入商品路由模块
var productRouter=require('./routes/product.js');
//引入用户路由模块
var userRouter=require('./routes/user.js');

var app=express();
app.listen(5050,()=>{
	console.log("服务器启动完成");
});

//伪装跨域
app.use(cors({
  origin:'http://xtz5.applinzi.com:5050'
}));
// 使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
// 托管静态资源到public下
app.use(express.static('public'));

// 商品路由器
app.use('/product',productRouter);
//用户路由器
app.use('/user',userRouter);