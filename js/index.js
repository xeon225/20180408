document.write("<script language='javascript' src='http://qxu1146600266.my3w.com/www/20180408/js/nav.js'></script>");

$(document).ready(function(){
	nav(data);
  	$('.slider').bxSlider({
      	auto:true,
      	controls:false,
      	pager:false,
      	captions:false,
    });
    $(".menu").click(function(){
    	$('.navListM').slideToggle();
    });
    $(".navListM li>a").click(function(){
    	$(".navListM li .second").hide();
    	$(this).next(".second").slideToggle();
    });
    $('.temp').click(function(){
    	$('.mask').show();
    });
    $('.maskClose').click(function(){
    	$('.mask').hide();
    });
});
