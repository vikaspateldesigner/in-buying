// Product Slider
jQuery(document).ready(function(){
// Fix Header
  var scrollThreshold = $('main').offset().top;
  $(window).scroll(function() {
    if ($(window).scrollTop() >= scrollThreshold) {
      $('body').addClass('ib-header-fixed');
    } else {
      $('body').removeClass('ib-header-fixed');
    }
  });

  // Footer Scroll
  $(window).scroll(function() {
    var footerOffset = $('footer').offset().top;
    var windowHeight = $(window).height();
    var scrollPosition = $(window).scrollTop() + windowHeight;

    if (scrollPosition >= footerOffset) {
      $('body').addClass('footer-visible');
    } else {
      $('body').removeClass('footer-visible');
    }
  });


  // Slider
    jQuery('#sync1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#sync2'
      });
      jQuery('#sync2').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        asNavFor: '#sync1',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1250,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 950,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow:7,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow:6,
            },
          },
        ],
      });

      jQuery('#ib-product__itemsSlider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        centerMode: false,
        responsive: [
          {
            breakpoint: 1250,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 950,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      })

      // Tabs
      $('.ib-description__tabs > div > div').not(':first').hide();
      $('.ib-description__tabs ul li').click(function(e) {
        e.preventDefault();
      $('.ib-description__tabs ul li').removeClass('active');
      $(this).addClass('active');
      var target = $(this).find('a').attr('href');
      $('.ib-description__tabs > div >div').hide();
      $(target).fadeIn();
  });

    // Tab Reviews
    $('.ib-tabs__item').click(function(e) {
      e.preventDefault();
      $(".ib-tabs li").removeClass('active');
      $(this).parent('li').addClass('active');
      var targete = $(this).attr('href');
      $(".ib-tab__container > div").hide();
      $(targete).fadeIn();
    
    });
})
