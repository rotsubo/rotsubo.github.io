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
//画面サイズで分岐させる
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
  //描画
  function draw(){
    context = canvas.getContext('2d');
    context.beginPath();
    context.fillStyle = "black";
  };
  //ブラウザ幅で表示変更
  if (canvas.getContext) {
    if(xlg.matches){
    sizeChange();
    draw();
    context.arc(headerMiddleWidth+100,headerMiddleHeight,headerHeight -50,0,Math.PI*2,true);
    context.fill();
    }
    else if(lg.matches){
    sizeChange();
    draw();
    context.arc(headerMiddleWidth+100,headerMiddleHeight,headerHeight -100 ,0,Math.PI*2,true);
    context.fill();
    }
    else if(mdlg.matches){
    sizeChange();
    draw();
    context.arc(headerMiddleWidth+100,headerMiddleHeight,headerHeight -100,0,Math.PI*2,true);
    context.fill();
    }
    else if(md.matches){
    sizeChange();
    draw();
    context.arc(headerMiddleWidth+60,headerMiddleHeight,headerHeight -120,0,Math.PI*2,true);
    context.fill();
  }
   else if(sm.matches){
    sizeChange();
    draw();
    context.arc(headerMiddleWidth+50,headerMiddleHeight,headerHeight-80,0,Math.PI*2,true);
    context.fill();
  }
    else if(xsm.matches){
    sizeChange();
    draw();
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

//===============
//ストリートビュー
//===============
//緯度経度取得
 // var geocoder = new google.maps.Geocoder();
 // var sv = new google.maps.StreetViewService();
  //var location = result.geometry.location.lat
//function getGeolocation(){
 // defaltPos = {lat:36.322512, lng:139.01122399999997};
 // var viewOption = {
   // position : defaltPos,
   // pov:{
   // heading:88,pitch:7
 // }
 // };
//panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'),viewOption);
    //map.setStreetView(panorama);
//}



      function initialize() {
        var request = {
          query : "restaurant"
        };
service = new google.maps.places.PlacesService(map);
//service.textSearch(request, getLatLng);

function getLatLng(place) {
  var geocoder = new google.maps.Geocoder();
  // geocodeリクエストを実行。
  geocoder.geocode({
    address: place
  }, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      for (var i in results) {
        if (results[i].geometry) {
          // 緯度経度を取得
          var latlng = results[i].geometry.location;
          lat = results[i].geometry.location.lag ;
          lng = results[i].geometry.location.lng ;
          // 住所を取得(日本の場合だけ「日本, 」を削除)
          var address = results[i].formatted_address.replace(/^日本, /, '');

          //ストリートビューを表示
                  var pano = $("#pano");
        $("#map").after("<div id=pano"+i+"></div>");
        $("#pano"+i+"").css("width","300").css("height","300");
        var defaltPos = {lat: lat, lng: lng};
        var panorama = new google.maps.StreetViewPanorama(
            document.getElementById('pano'+i+''), {
              position: defaltPos,
              pov: {
                heading: 34,
                pitch: 10
              },
              zoom:1
            });

          }};
        }
      })
     }



      };






