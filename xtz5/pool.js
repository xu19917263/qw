// 创建pool
const mysql=require('mysql');
var pool=mysql.createPool({
  host:'w.rdc.sae.sina.com.cn',	
  user:'lyz4y015jj',
  password:'mx211h24yli0hyz5wjzk2mlm4145ll0jmx3km0w5',
  port:'3306',
  database:'app_xtz5',
  connectionLimit:15
});
console.log("数据库连接池创建完成");
// 导出pool
module.exports=pool;