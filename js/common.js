$(document).ready(function(){


			/*pagescroll2id*/

	 $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
        return false;
    });


			/*scroll fixed nav*/

	$(window).scroll(function(){
	    $('.navigation').toggleClass('navigation-scroll', $(this).scrollTop() > 850);
	});


			/*bamburger menu*/

	$('.nav-menu').on('click', function(){
		$('.nav').slideToggle();
	});



	/*customers slider*/

	$("#owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 3,

      itemsTablet: [768,1],
      itemsMobile: [479,1]
 
  });

				/*form validate*/

	$("#post_form").validate({
	 	rules: {
	 		name: {
	 			required: true
	 		},
	 		email: {
	 			required: true,
	 			email: true
	 		}

	 	},
	 	focusCleanup: true
	 });


			/*up button*/


	$('.back-top a').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});



});