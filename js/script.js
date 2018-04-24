  //==========
  //ナビメニュー
  //==========
  var navContainerWidth = $(".navContainer").outerWidth();
  $(".navContainer").css("left", -navContainerWidth);
  $(".button").on("click", function () {
    //非表示
    if ($(this).hasClass("active")) {
      $(".button-top").css("animation", "button-top-back 1s forwards");
      $(".button-bottom").css("animation", " button-bottom-back 1s forwards");
      $(this).removeClass("active");
      $(".navContainer").fadeOut(400);
    }
    //表示
    else {
      $(".button-top").css("animation", "button-top 1s forwards");
      $(".button-bottom").css("animation", " button-bottom 1s forwards");
      $(this).addClass("active");
      $(".navContainer").fadeIn(500).animate({
        "left": 0
      }, {
        duration: 2000,
        queue: false
      })
    }
  });
  //=========
  //スクロール
  //=========
  //ナビゲーションバー
  $(".navbar a[href^='#']").on("click", function () {
    var speed = 2000;
    var href = $(this).attr("href");
    var position = $(href).offset().top;
    $("html,body").animate({
      scrollTop: position
    }, "slow", "swing");
  });
  //topへ戻る
  $(".backButton").on("click", function () {
    $("html,body").animate({
      scrollTop: 0
    }, "fast", "swing");
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
  window.onload = function breakPoint() {
    function sizeChange() {
      //canvasｻｲｽﾞ変更
      headerWidth = $("header").outerWidth();
      headerHeight = $("header").outerHeight();
      headerMiddleWidth = headerWidth * 0.5;
      headerMiddleHeight = headerHeight * 0.5;
      $("#canvas").attr("width", headerWidth).attr("height", headerHeight);
    }
    //描画
    function draw() {
      context = canvas.getContext('2d');
      context.beginPath();
      context.fillStyle = "black";
    };
    //ブラウザ幅で表示変更
    if (canvas.getContext) {
      if (xlg.matches) {
        sizeChange();
        draw();
        context.arc(headerMiddleWidth + 100, headerMiddleHeight, headerHeight - 50, 0, Math.PI * 2, true);
        context.fill();
      } else if (lg.matches) {
        sizeChange();
        draw();
        context.arc(headerMiddleWidth + 100, headerMiddleHeight, headerHeight - 100, 0, Math.PI * 2, true);
        context.fill();
      } else if (mdlg.matches) {
        sizeChange();
        draw();
        context.arc(headerMiddleWidth + 100, headerMiddleHeight, headerHeight - 100, 0, Math.PI * 2, true);
        context.fill();
      } else if (md.matches) {
        sizeChange();
        draw();
        context.arc(headerMiddleWidth + 60, headerMiddleHeight, headerHeight - 120, 0, Math.PI * 2, true);
        context.fill();
      } else if (sm.matches) {
        sizeChange();
        draw();
        context.arc(headerMiddleWidth + 50, headerMiddleHeight, headerHeight - 80, 0, Math.PI * 2, true);
        context.fill();
      } else if (xsm.matches) {
        sizeChange();
        draw();
        context.arc(headerMiddleWidth + 30, headerMiddleHeight, headerHeight - 70, 0, Math.PI * 2, true);
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
  mainWidth = $("#main").outerWidth();
  mediaquery = window.matchMedia("screen and (max-width:800px)");
  if (mediaquery.matches) {
    $("#poster").css("width", mainWidth * 0.7).css("height", mainWidth * 2);
  } else {
    $("#poster").css("width", mainWidth).css("height", mainWidth * 0.6);
  };
  //初期化
  function initialize() {
    $("div[id^='pano']").remove();
    input = document.getElementById("address");
  };
  var button = document.querySelector("#button");
  //プレイス検索。初期値は新宿駅に設定
  function addressSearch() {
    place = input.value;
    var shinjuku = new google.maps.LatLng(35.689592, 139.700413);
    myMap = new google.maps.Map(document.getElementById("map"), {
      center: shinjuku
    });
    service = new google.maps.places.PlacesService(myMap);
    var request = {
      query: place
    }
    service.textSearch({
      query: place
    }, function (results, status) {
      //データがあればストリートビューを表示
      if (status == google.maps.GeocoderStatus.OK) {
        var minNumMobile = Math.min(3, results.length)
        var minNum = Math.min(5, results.length)
        //表示幅が800px未満の場合
        if (mediaquery.matches) {
          //表示例を削除
          $("#poster").remove();
          $(".panoContainer p").remove();
          //検索結果を表示する
          for (i = 0; i <= minNumMobile; i++) {
            $("#map").after("<div id=pano" + i + "></div>");
            if (results[i].geometry) {
              // 緯度経度を取得
              lat = results[i].geometry.location.lat();
              lng = results[i].geometry.location.lng();
              //ストリートビューを表示
              $("#pano" + i + "").css("width", mainWidth).css("height", mainWidth * 0.6).css("margin-top", "30px");
              var defaltPos = {
                lat: lat,
                lng: lng
              };
              var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano' + i + ''), {
                position: defaltPos,
                pov: {
                  heading: 0,
                  pitch: 10
                },
                zoom: 1
              });
            }
          }
        }
        //表示幅が800px以上の場合
        else {
          //表示例を削除
          $("#poster").remove();
          $(".panoContainer p").remove();
          //検索結果を表示する
          for (i = 0; i <= minNum; i++) {
            $("#map").after("<div id=pano" + i + "></div>");
            if (results[i].geometry) {
              // 緯度経度を取得
              lat = results[i].geometry.location.lat();
              lng = results[i].geometry.location.lng();
              //ストリートビューを表示
              if (mediaquery.matches = true) {
                $("#pano" + i + "").css("width", mainWidth * 0.49).css("height", mainWidth * 0.3).css("margin-top", "40px");
                var defaltPos = {
                  lat: lat,
                  lng: lng
                };
                var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano' + i + ''), {
                  position: defaltPos,
                  pov: {
                    heading: 0,
                    pitch: 10
                  },
                  zoom: 1
                });
              }
            }
          }
        }
      }
      //データが見つからない場合
      else{
          //表示例を削除
          $("#poster").remove();
          $(".panoContainer p").remove();
          $("#map").after("<div id=pano><em>No Data</em>、、、、キーワードは2つ指定してください。ex.)新宿　レストラン</div>");
      }
    });
  };
