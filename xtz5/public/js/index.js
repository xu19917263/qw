$(function(){//DOMContentLoad
  //向服务端接口localhost:3000/index发送ajax请求，获得返回的数组对象
    $.ajax({
      url:"http://xtz5.applinzi.com:5050",
      type:"get",
      dataType:"json",//让ajax自动将json字符串转为对象，可直接使用
      //onreadystatechange
      success:function(result){
        console.log(result);
      }
    })//当ajax请求完成后
    //.then(function(result){//result就是服务端返回的结果
  
  })
  