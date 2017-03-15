$('body').smoothScroll({
    delegateSelector: '#menu .navbar-nav a',
    offset: -60
});

jQuery(window).scroll(function(){
	var wScroll = jQuery(this).scrollTop();
	 
	
	if(wScroll<401){
        var opacity = 1-wScroll/300;
		jQuery('#particles-js').css({
			'opacity' : opacity
		});
        jQuery('.logo-img').css({
			'opacity' : opacity
		});
	}
    if(wScroll>401){
		jQuery('#particles-js').css({
			'opacity' : '0'
		});
        jQuery('.logo-img').css({
			'opacity' : opacity
		});
	}
    
    if(wScroll<=150){
		$('.about-top-container').css({
			'transform' : 'translate(0px,-'+ wScroll/2+'px)'
		});
		/*$('.omnie-container').css({
			'height' : 620 - wScroll/2
		});*/
	}
    
});



jQuery(center);
jQuery(window).on('resize', center);
function center() {
    var $box = jQuery('.logo-img');

    // To center the box
    var boxLeft = (jQuery(window).width()) / 2 - ($box.width() / 2),
        boxTop = (jQuery(window).height()) / 2 - ($box.height() / 2);

    $box.css({
        left: boxLeft,
        top: boxTop - 100
    });
}