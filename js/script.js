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

//=========
//スクロール
//=========
//ナビゲーションバー
$(".navbar a[href^='#']").on("click",function(){
  var speed = 2000;
  var href = $(this).attr("href");
  var position = $(href).offset().top;
  $("html,body").animate({scrollTop:position},"slow","swing");
});
//topへ戻る
$(".backButton").on("click",function(){
  $("html,body").animate({scrollTop:0},"fast","swing");
})


//=========
//canvas
//=========

//画面サイズで分岐


//分岐条件
var xlg = window.matchMedia("screen and (min-width:1501px)")
var lg = window.matchMedia("screen and (min-width:1201px) and (max-width:1500px)")
var mdlg = window.matchMedia("screen and (max-width:1200px) and (min-width:959px)")
var md = window.matchMedia("screen and (max-width:960px) and (min-width:599px)")
var sm = window.matchMedia("screen and (max-width:600px) and (min-width:401px)")
var xsm = window.matchMedia("screen and (max-width:400px)")


window.onload = function breakPoint(){
  function sizeChange(){
//canvasｻｲｽﾞ変更
 headerWidth = $("header").outerWidth();
 headerHeight = $("header").outerHeight();
 headerMiddleWidth = headerWidth*0.5 ;
 headerMiddleHeight = headerHeight*0.5 ;
$("#canvas").attr("width",headerWidth).attr("height",headerHeight);
}
  if (canvas.getContext) {
    if(xlg.matches){
    sizeChange();
    var context = canvas.getContext('2d');
    context.beginPath();
    context.fillStyle = "black";
    context.arc(headerMiddleWidth+100,headerMiddleHeight,headerHeight -50,0,Math.PI*2,true);
    context.fill();
    }
    else if(lg.matches){
    sizeChange();
    var context = canvas.getContext('2d');
    context.beginPath();
    context.fillStyle = "black";
    context.arc(headerMiddleWidth+100,headerMiddleHeight,headerHeight -100 ,0,Math.PI*2,true);
    context.fill();
    }
    else if(mdlg.matches){
    sizeChange();
    var context = canvas.getContext('2d');
    context.beginPath();
    context.fillStyle = "black";
    context.arc(headerMiddleWidth+100,headerMiddleHeight,headerHeight -100,0,Math.PI*2,true);
    context.fill();
    }
    else if(md.matches){
    sizeChange();
    var context = canvas.getContext('2d');
    context.beginPath();
    context.fillStyle = "black";
    context.arc(headerMiddleWidth+60,headerMiddleHeight,headerHeight -120,0,Math.PI*2,true);
    context.fill();
  }
   else if(sm.matches){
    sizeChange();
    var context = canvas.getContext('2d');
    context.beginPath();
    context.fillStyle = "black";
    context.arc(headerMiddleWidth+50,headerMiddleHeight,headerHeight-80,0,Math.PI*2,true);
    context.fill();
  }
    else if(xsm.matches){
    sizeChange();
    var context = canvas.getContext('2d');
    context.beginPath();
    context.fillStyle = "black";
    context.arc(headerMiddleWidth+30,headerMiddleHeight,headerHeight -70,0,Math.PI*2,true);
    context.fill();
    }
    }
  xlg.addListener(breakPoint);
  lg.addListener(breakPoint);
  mdlg.addListener(breakPoint);
  md.addListener(breakPoint);
  sm.addListener(breakPoint);
  xsm.addListener(breakPoint);
  }






