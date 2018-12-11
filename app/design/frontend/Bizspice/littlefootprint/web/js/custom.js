require([
    "jquery"
],function($) {
	
	$(document).ready(function(){
		$('.owl-carousel').owlCarousel({
			loop:true,
			margin:10,
			responsiveClass:true,
			items:1
		});

		$('.tab .tablinks a').on('click', function (event) {
			event.preventDefault();
			
			$('.tab-active').removeClass('tab-active');
			$(this).parent().addClass('tab-active');
			$('.tabs-stage .tabcontent').hide();
			$($(this).attr('href')).show();
		});

		$('.tabs .tablinks a:first').trigger('click'); // Default	

		$(".account-cart-wrapper .skip-account").click(function(){
			$(".header.links").slideToggle();
		});		
		
		$(".my-acc-link").click(function(){
			$(this).children(".myaccount-dropdown").slideToggle();
		});

	});	

})