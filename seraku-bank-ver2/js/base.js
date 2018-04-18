/*スライドショー*/
$(function(){
    // サムネイル画像アイテムに data-index でindex番号を付与
 $(".thumb-item").each(function(){
   var index = $(".thumb-item").index(this);
   $(this).attr("data-index",index);
 });
   // スライダー初期化後、カレントのサムネイル画像にクラス「thumbnail-current」を付ける
  $(".slide").on('init',function(slick){
   var index = $(".slide-item.slick-slide.slick-current").attr("data-slick-index");
   $(".thumb-item"+'[data-index="'+index+'"]').addClass("thumbnail-current");
  });

    //slickスライダー初期化
 $('.slide').slick({
  arrows: true,
  fade: true,
  autoplay:true,
   infinite:false
});
    //サムネイル画像アイテムをクリックしたときにスライダー切り替え
$(".thumb-item").on("click",function(){
  var index = $(this).attr("data-index");
  $(".slide").slick("slickGoTo",index,false);
});
    //サムネイル画像のカレントを切り替え
  $(".slide").on('beforeChange',function(event,slick, currentSlide,nextSlide){
    $(".thumb-item").each(function(){
      $(this).removeClass("thumbnail-current").removeClass("filter").css("filter","brightness(0.3)");
    });
    $(".thumb-item"+'[data-index="'+nextSlide+'"]').addClass("thumbnail-current").removeClass("filter").css("filter","brightness(1)");
  });
});

//文字サイズ変更//
$("img[alt='moji S']").on('click',function(){
  $("body").css("font-size","0.5em");
});
$("img[alt='moji M']").on('click',function(){
  $("body").css("font-size","1em");
});
$("img[alt='moji L']").on('click',function(){
  $("body").css("font-size","1.5em");
});

//タブ//
  $( function() {
    $( "#tabs" ).tabs();
  } );

//タブ色変更//
$(function(){
    $(this).on('click',function(){
        $("#tabs li a").each(function(){
          var tabindex = $(this).parent().attr("tabindex")
      if(tabindex == -1){
      $(this).css('background-color','gray');
    }
    else{$(this).css('background-color','midnightblue')};
    })
  });
  });

