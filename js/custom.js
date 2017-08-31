jQuery(window).scroll(function() {
    var windowScrollPosTop = jQuery(window).scrollTop();
    var windowInnerWidth = jQuery(window).innerWidth();

    if(windowScrollPosTop >= 150 && windowInnerWidth >= 736) {
      jQuery(".top-header").css({"background": "#ffffff", "box-shadow":" 0 0 15px 0 #d4d3d3"});
      jQuery(".navbar .navbar-header img").css({"width": "86px", "padding-top": "4px"});
      jQuery(".navbar-default .navbar-nav>li>a").css({"padding-top": "22px"});
      jQuery(".navbar-default .navbar-nav>li.phone>a").css({"padding-top": "16.5px"});
    }
    else{
      jQuery(".top-header").css({"background": "transparent", "box-shadow": "none"});
      jQuery(".navbar .navbar-header img").css({"width": "135px","padding-top": "18px"});
      jQuery(".navbar-default .navbar-nav>li>a").css({"padding-top": "52px"});
      jQuery(".navbar-default .navbar-nav>li.phone>a").css({"padding-top": "50px"});
    }
 });


//this code is for smooth scroll and nav selector

jQuery(document).on("scroll", onScroll);
  
  //smoothscroll
jQuery('.navbar-right a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    jQuery(document).off("scroll");
      
    jQuery('.navbar-right a').each(function () {
      jQuery(this).removeClass('active');
    })
    jQuery(this).addClass('active');

    var target = this.hash,
      menu = target;
    $target = jQuery(target);
    jQuery('html, body').stop().animate({
      'scrollTop': $target.offset().top+2
    }, 500, 'swing', function () {
      window.location.hash = target;
      jQuery(document).on("scroll", onScroll);
    });
});

function onScroll(event){
    var scrollPos = jQuery(document).scrollTop();
    jQuery('.navbar-default .navbar-right>li>a').each(function () {
        var currLink = jQuery(this);
      	var refElement = jQuery(currLink.attr("href"));
      	if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          	jQuery('.navbar-default .navbar-right>li>a').removeClass("active");
          	currLink.addClass("active");
      	}
      	else{
          	currLink.removeClass("active");
      	}
  	});
}

if($("#location_value").length) {
$('#location_value').niceSelect();
}
$( "#datepicker" ).datepicker({minDate: 0});
$( "#datepicker_2" ).datepicker({minDate: 0});
$( "#datepicker_4" ).datepicker({minDate: 0});
$( "#datepicker_5" ).datepicker({minDate: 0});
$( "#datepicker_6" ).datepicker({minDate: 0});
  
jQuery("#down").click(function () {          
	jQuery("#down").css({"display":"none"});  
	jQuery("#up").css({"display":"block"});  
	jQuery(".add_inf").css({"display":"block"}); 
});

jQuery("#up").click(function () {          
	jQuery(".add_inf").css({"display":"none"});
	jQuery("#down").css({"display":"block"});  
	jQuery("#up").css({"display":"none"});  
});

jQuery("#down-2").click(function () {          
	jQuery("#down-2").css({"display":"none"});  
	jQuery("#up-2").css({"display":"block"});  
	jQuery(".add_inf-2").css({"display":"block"});
	jQuery(".close").css({"top":"20px"});
	jQuery(".modalDialog").css({"padding-top":"10px"});  
	
});

jQuery("#up-2").click(function () {          
	jQuery(".add_inf-2").css({"display":"none"});
	jQuery("#down-2").css({"display":"block"});  
	jQuery("#up-2").css({"display":"none"});  
	jQuery(".close").css({"top":"80px"});
	jQuery(".modalDialog").css({"padding-top":"100px"});
	
});

jQuery("#down-4").click(function () {          
  jQuery("#down-4").css({"display":"none"});  
  jQuery("#up-4").css({"display":"block"});  
  jQuery(".add_inf-4").css({"display":"block"});
  jQuery(".close").css({"top":"20px"});
  jQuery(".modalDialog").css({"padding-top":"10px"});  
  
});

jQuery("#up-4").click(function () {          
  jQuery(".add_inf-4").css({"display":"none"});
  jQuery("#down-4").css({"display":"block"});  
  jQuery("#up-4").css({"display":"none"});  
  jQuery(".close").css({"top":"80px"});
  jQuery(".modalDialog").css({"padding-top":"100px"});
  
});

jQuery("#down-5").click(function () {          
  jQuery("#down-5").css({"display":"none"});  
  jQuery("#up-5").css({"display":"block"});  
  jQuery(".add_inf-5").css({"display":"block"});
  jQuery(".close").css({"top":"20px"});
  jQuery(".modalDialog").css({"padding-top":"10px"});  
  
});

jQuery("#up-5").click(function () {          
  jQuery(".add_inf-5").css({"display":"none"});
  jQuery("#down-5").css({"display":"block"});  
  jQuery("#up-5").css({"display":"none"});  
  jQuery(".close").css({"top":"80px"});
  jQuery(".modalDialog").css({"padding-top":"100px"});
  
});

jQuery("#down-6").click(function () {          
  jQuery("#down-6").css({"display":"none"});  
  jQuery("#up-6").css({"display":"block"});  
  jQuery(".add_inf-6").css({"display":"block"});
  jQuery(".close").css({"top":"20px"});
  jQuery(".modalDialog").css({"padding-top":"10px"});  
  
});

jQuery("#up-6").click(function () {          
  jQuery(".add_inf-6").css({"display":"none"});
  jQuery("#down-6").css({"display":"block"});  
  jQuery("#up-6").css({"display":"none"});  
  jQuery(".close").css({"top":"80px"});
  jQuery(".modalDialog").css({"padding-top":"100px"});
  
});

$('.rev-item').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.rev-decr',
  centerMode: true,
  centerPadding: '30px',
  dots: false,
  centerMode: true,
  focusOnSelect: true,


  responsive: [
    {
      breakpoint: 1024,
      settings: {
       
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 420,
      settings: {      
        centerMode: true,
        centerPadding: '5px',               
        slidesToShow: 3
      }
    }
  ]
});
$('.rev-decr').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  adaptiveHeight: true,
  asNavFor: '.rev-item'
});

jQuery(".nav li").click(function () {        
	jQuery(".navbar-default .navbar-collapse").slideToggle();
	/*jQuery(".navbar-default .navbar-collapse").hide('slow'); */
});

jQuery(".navbar-toggle").click(function () {        
	jQuery(".navbar-default .navbar-collapse").slideToggle();
	/*jQuery(".navbar-default .navbar-collapse").hide('slow'); */
});


/*abour us tabs*/
(function($){				
    jQuery.fn.lightTabs = function(options){
        
        var createTabs = function(){
            tabs = this;
            i = 0;
            
            showPage = function(i){
                $(tabs).children("div").children("div").hide();
                $(tabs).children("div").children("div").eq(i).show();
                $(tabs).children("ul").children("li").removeClass("active-tabs");
                $(tabs).children("ul").children("li").eq(i).addClass("active-tabs");
            }
            
            showPage(0);				
            
            $(tabs).children("ul").children("li").each(function(index, element){
                $(element).attr("data-page", i);
                i++;                        
            });
            
            $(tabs).children("ul").children("li").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });				
        };		
        return this.each(createTabs);
    };	
})(jQuery);
$(document).ready(function(){
    $(".tabs").lightTabs();
});


//image click
jQuery(".tabs-1").click(function () {          
	jQuery("#tabs_1").attr("src","/img/image-1-active.png");
	jQuery("#tabs_2").attr("src","/img/skills.png");
	jQuery("#tabs_3").attr("src","/img/image-3.png");
	
});
jQuery(".tabs-2").click(function () { 
	jQuery("#tabs_2").attr("src","/img/skills-active.png");
	jQuery("#tabs_1").attr("src","/img/image-1.png");
	jQuery("#tabs_3").attr("src","/img/image-3.png");
	
});
jQuery(".tabs-3").click(function () {          
	jQuery("#tabs_3").attr("src","/img/image-3-active.png");
	jQuery("#tabs_1").attr("src","/img/image-1.png");
	jQuery("#tabs_2").attr("src","/img/skills.png");
	
});


jQuery( "#dialog" ).dialog({
	modal: true,
	autoOpen: false,
	width: 400,
	buttons: [
		{
			text: "GO BACK",
			click: function() {
				jQuery( this ).dialog( "close" );
			}
		},
		
	]
});

	
new WOW({ offset: 100}).init();