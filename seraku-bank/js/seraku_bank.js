/*文字サイズ変更*/
$("#mojisize img:first").click(function(){
  $("body").css("font-size","0.5em")
});

$("#mojisize img:nth-child(2)").click(function(){
  $("body").css("font-size","1em")
});

$("#mojisize img:nth-child(3)").click(function(){
  $("body").css("font-size","1.5em")
});

/*スライド*/
      $(function() {
    $('.slide').slick({
      accessibility: true,
      autoplay:true
    });
});

/*タブ切り替え*/
      $(function(){
        $("#tabs").tabs();
      });

  $("#tabs>ul>li>a:eq(0)").on("click",function(){
                           $("#tabs>ul>li>a>img:eq(0)").attr("src","images/tab01_on.png")
                           $("#tabs>ul>li>a>img:eq(1)").attr("src","images/tab02_off.png")
                           $("#tabs>ul>li>a>img:eq(2)").attr("src","images/tab03_off.png")
                           $("#tabs>ul>li>a>img:eq(3)").attr("src","images/tab04_off.png")
                           })

  $("#tabs>ul>li>a:eq(1)").on("click",function(){
                           $("#tabs>ul>li>a>img:eq(0)").attr("src","images/tab01_off.png")
                           $("#tabs>ul>li>a>img:eq(1)").attr("src","images/tab02_on.png")
                           $("#tabs>ul>li>a>img:eq(2)").attr("src","images/tab03_off.png")
                           $("#tabs>ul>li>a>img:eq(3)").attr("src","images/tab04_off.png")
                           })

  $("#tabs>ul>li>a:eq(2)").on("click",function(){
                           $("#tabs>ul>li>a>img:eq(0)").attr("src","images/tab01_off.png")
                           $("#tabs>ul>li>a>img:eq(1)").attr("src","images/tab02_off.png")
                           $("#tabs>ul>li>a>img:eq(2)").attr("src","images/tab03_on.png")
                           $("#tabs>ul>li>a>img:eq(3)").attr("src","images/tab04_off.png")
                           })

  $("#tabs>ul>li>a:eq(3)").on("click",function(){
                           $("#tabs>ul>li>a>img:eq(0)").attr("src","images/tab01_off.png")
                           $("#tabs>ul>li>a>img:eq(1)").attr("src","images/tab02_off.png")
                           $("#tabs>ul>li>a>img:eq(2)").attr("src","images/tab03_off.png")
                           $("#tabs>ul>li>a>img:eq(3)").attr("src","images/tab04_on.png")
                           })


