
function close_popup(){
     jQuery('.search_popup .search_popup_wrap').hide();
     jQuery('.search_popup .search_error').hide();    
}

//footer toogle js start
	$( document ).ready(function() {
			  if($( window ).width() < 1023){ 
					$(".acord").hide(); 
					$(".footer-info-heading").click(function(){ 
					$(this).toggleClass("active"); 
					$(this).siblings(".acord").slideToggle(); 
					}); 
				} 
	});
//footer toggle js end

//hover menu js start

       $( document ).ready(function() {  
            if ($(window).width() > 1023) {
                $('.navPages li.navPages-item').mouseenter(function() 
                {
                   $(this).children('div.navPage-subMenu').addClass('is-open');
                });

                $('.navPages li.navPages-item').mouseleave(function() 
                 { 
                   $(this).children('div.navPage-subMenu').removeClass('is-open');
                });

                $('.navPage-subMenu-list li.navPage-subMenu-item-child').mouseenter(function() 
                 { 
                   $(this).children('div.navPage-subMenu').addClass('is-open');
                });

                $('.navPage-subMenu-list li.navPage-subMenu-item-child').mouseleave(function() 
                { 
                   $(this).children('div.navPage-subMenu').removeClass('is-open');
                });
            }

            if ($(window).width() > 1023) {
             $('.navPages-list .navPages-item a').click(function(e) 
                {
                    var cat_link= $(this).attr('href'); 
                    e.preventDefault(); 
                    window.location = cat_link ; 
                });
            }

            if($( window ).width() < 960) 
             { 
                $(".navPages-action").click(function(){ 
                    var lnk = $(this).attr("href");
                    window.location = lnk;
                });
                
                $(".ca").click(function(e){ 
                e.preventDefault(); 
                $(this).siblings('.navPage-subMenu').slideToggle('1000'); 
                $(this).toggleClass('opn'); 
            }); 
            } 

            
       });
//hover menu js end





$(document).ready(function() {
     ///7 level Category js start  
        $('.navPage-subMenu-list').each(function() {
            var countItem = $(this).find('.navPage-subMenu-item');
            console.log(countItem);
            for (var i = 0; i < countItem.length; i += 7) {
                countItem.slice(i, i + 7).wrapAll('<div class="navPage-subMenu-item-block"></div>');
            }
        });
//7 level category js end
//web pages title img js start
var get_bg = $(".title_background").attr("src");
 $(".page-heading.web-head").css({"background-image": "url('"+ get_bg+"')"});
//web pages title img js end


//category sidebar toggle js satrt
    if($( window ).width() > 1023)
    {
        $('header nav ul.navPages-list li.navPages-item').mouseenter(function(){
            $(this).children('a.navPages-action').after( "<div class='hlp'></div>" );
            $('.hlp').width($('.navPages' ).outerWidth()) ;
        });
        
         $('header nav ul.navPages-list li.navPages-item').mouseleave(function(){
            $(this).children('.hlp').remove();     
        });
    }

     $("li.navList-item .add_icon").click(function(){
            $(this).parents("li.navList-item").toggleClass('active');
        });

        $(".submenu").hide();
        $(".add_icon2").click(function(){
            $(this).parents("li").find("a.navList-action").addClass('active');
            $(this).siblings(".submenu").slideToggle();
        });
//category sidebar toggle js End

 //search bar container with js start
  if($( window ).width() > 1199){
      var tw = $(".container").width();
      $(".quickSearchResults.search_popup").width(tw);
  }    
 //search bar container with js end here

//Testimonials Accordiation js start here
 if($( window ).width() < 768) {
       $(".testimonial_h2").click(function(){
         $(this).siblings(".testimonial_div").slideToggle().addClass("testimonial_isopen");
         $(this).toggleClass("testimonial_down");
      })
}

//Testimonials Accordiation js  End here

// pdf setups satrt 
     $(".pdf-docs a.is-pdf").parent(".p-file").prevAll('.p-file').hide();
// pdf setups satrt 

/*------- Product-detail page  Description tabbing video popup js start  -------*/
    $('.videoGallery-list a.video').click(function(){
    var vdo_id = $(this).attr('data-video-id')
    var updated_vdo_id = "//www.youtube.com/embed/"+vdo_id+"?autoplay=1";
    $(".installationvideo-popup .catc").html("<iframe class='video-frame' src="+updated_vdo_id+"></iframe>");
       $(".installationvideo-popup").show();
        $("a.close").click(function(){ 
          $(".video-frame").attr('src',"");
          $(".installationvideo-popup").hide();

    });
   });
/*------- Product-detail page Description tabbing video popup js End  -------*/

/*------- Installation Guide page video  popup js Start  -------*/
            $(".col-4 a").click(function(){
              var video_id = $(this).attr("data-video-id");
              console.log(video_id);

              var video_url = "//www.youtube.com/embed/"+video_id+"?autoplay=1";
              console.log(video_url);

              $(".popup_install_content").html("<iframe src='' class='popup_install_iframe'></iframe>");
              $('.popup_install_iframe').attr("src",video_url);
               $(".popup_install").toggle(); 

              $(".popup_install span").html("<a href='javascript:void(0)' class='popup_install_close'> X </a>");
              $('.popup_install_close').click(function(){
                $(".popup_install").toggle();
                 $(".popup_install_iframe").attr('src',"");
              });

            });
/*------- Installation Guide page video  popup js End  -------*/        

$(".bmw_series_containt_img").click(function(){
    $(".bmw_series_containt").hide();
});
$(".bmw_series").mouseenter(function(){
    $(".bmw_series_containt").show();
});



});

