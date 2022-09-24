jQuery(document).ready(function( $ ) {
    function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }

  $(window).scroll(function () {
    var height = $(window).height();
    var scroll = $(window).scrollTop();
    if (scroll) {
      $(".header-hide").addClass("scroll-header");
    } else {
      $(".header-hide").removeClass("scroll-header");
    }

  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });
    //내코드 시작
    //파일 읽기

    function openTextFile() {
        var input = document.createElement("input");
        input.type = "file";
        input.accept = "text/plain"; // 확장자가 xxx, yyy 일때, ".xxx, .yyy"
        input.onchange = function (event) {
            processFile(event.target.files[0]);
        };
        input.click();
    }
    function processFile(file) {
        var reader = new FileReader();
        reader.onload = function () {
            output.innerText = reader.result;
        };
        reader.readAsText(file, /* optional */ "euc-kr");
    }

        function sample() {

            var result_indexOf = arrnum1.indexOf("1.///");
            document.write(result_indexOf);
    }


    window.onload = function () {
        var fileInput = document.getElementById('fileInput');
        var fileDisplayArea = document.getElementById('fileDisplayArea');

        fileInput.addEventListener('change', function (e) {
            var file = fileInput.files[0];
            var textType = /text.*/;
            var arrnum1 = new String;

            if (file.type.match(textType)) {
                var reader = new FileReader();

                reader.onload = function (e) {

                    fileDisplayArea.innerText = reader.result;
                    arrnum1 = reader.result;




                }

                reader.readAsText(file);
            } else {
                fileDisplayArea.innerText = "File not supported!"


            }


        };

            

function sample() {

    var result_indexOf = arrnum1.indexOf("1.///");
    document.write(result_indexOf);


function openTextFile() {
    var input = document.createElement("input");
    input.type = "file";
    input.accept = "text/plain"; // 확장자가 xxx, yyy 일때, ".xxx, .yyy"
    input.onchange = function (event) {
        processFile(event.target.files[0]);
    };
    input.click();
    }

function processFile(file) {
    var arrnumber1 = new String;
    var reader = new FileReader();
    reader.onload = function () {
        output.innerText = reader.result;
        arrnumber1 = reader.result;
    };
    document.write(arrnumber1)
    reader.readAsText(file, /* optional */ "euc-kr");
}

function sample() {

    var result_indexOf = arrnumber1.indexOf("1.///");
    document.write(result_indexOf);




    function readFile2() {
        var target = document.getElementById('file1');

        var file = target.files[0];
        if (!file) {
            return;
        }
        var reader = new FileReader();
        reader.onload = function (e) {
            fileData = e.target.result;
        };
        reader.readAsText(file, "utf-8");
    }




    // 드랍박스래
    let dropbox;

    dropbox = document.getElementById("dropbox");
    dropbox.addEventListener("dragenter", dragenter, false);
    dropbox.addEventListener("dragover", dragover, false);
    dropbox.addEventListener("drop", drop, false);

    
    var hw = document.getElementById('hw');
    hw.addEventListener('click', function () {
        alert('Hello world');
    })




    var wordsinput = document.getElementByld("words-input");
   

    wordsinput.addEventListener("")

  
        $("#button1").click(function () {
            alert("버튼1을 누르셨습니다.");
        });















































































    //내코드 끝
  // Initiate the wowjs animation library
  new WOW().init();
    function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }
  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }


  // Smooth scroll for the menu and links with .scrollto classes
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if( ! $('#header').hasClass('header-fixed') ) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    /* ---------------------------------------------------------------
    여기까지는 youtube api를 추가하겠단 뜻입니다. 
    만약 이게 쓰고싶지않다면 
    <script src="https://www.youtube.com/iframe_api"></script> 
    해당 스크립트를 import 할 것.
    --------------------------------------------------------------- */


    //  after the API code downloads.
    var player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    };
    /* ---------------------------------------------------------------
    첫번째 방식과는 다른 이유는, 앞서 iframe 태그에 바로 매개변수를 넣어 
    본인이 원하고자 하는 옵션들을 설정했기 때문입니다. 
    --------------------------------------------------------------- */


    // 1) 동영상이 준비되면 발생하는 함수
    function onPlayerReady(event) {
        player.mute(); // 동영상 준비 후, 음소거 합니다.
    };


    // 2) 플레이어의 상태에 따른 이벤트 
    function onPlayerStateChange() {
        // 위와 동일
    };
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  // Modal video
  new ModalVideo('.js-modal-btn', {channel: 'youtube'});

  // Init Owl Carousel
  $('.owl-carousel').owlCarousel({
    items: 1,
    autoplay: true,
    loop: true,
    margin: 10,
      dots: true,
    autoWidth:true,
    responsiveClass: true,
    responsive: {

      320: { items: 1},
      1600: { items: 2},
      600: { items: 2},
      767: { items: 3},
      768: { items: 3},
      992: { items: 4},
    }
  });

// custom code


function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
};

function myFunction1() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
};


function myFunction2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
};
    

});