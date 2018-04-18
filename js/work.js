//==========
//ナビメニュー
//==========
    var navContainerWidth = $(".navContainer").outerWidth();
    $(".navContainer").css("left",-navContainerWidth);
$(".button").on("click",function(){
  //非表示
  if($(this).hasClass("active")){
    $(".button-top").css("animation","button-top-back 1s forwards");
    $(".button-bottom").css("animation"," button-bottom-back 1s forwards");
    $(this).removeClass("active");
    $(".navContainer").fadeOut(400);
  }
  //表示
  else{
    $(".button-top").css("animation","button-top 1s forwards");
    $(".button-bottom").css("animation"," button-bottom 1s forwards");
    $(this).addClass("active");
    $(".navContainer").fadeIn(500).animate({"left":0},{duration:2000,queue:false})
  }
});
