document.write("<script language='javascript' src='js/vue.js'></script>");
document.write("<script language='javascript' src='js/nav.js'></script>");

$(document).ready(function(){
	nav(data);
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
