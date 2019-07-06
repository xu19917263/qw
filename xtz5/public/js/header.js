(function search(){
  var  $show_search=$('#show_search');
  var $search=$('#search');
  $show_search.click(function(){
    $search.removeClass('collapse');
  });
  var $nav=$search.children().first();
  var $gb=$nav.children().last();
  $gb.click(function(){
    $search.addClass('collapse');
  })
})()

$(function(){
  $.ajax({
    url:"header.html",
    type:"get",
    success:function(html){
      // console.log(html);
      $(html).replaceAll("#header");
      $(`<link rel="stylesheet" href="css/header.css" />`).appendTo("head")
    }
  })
})

