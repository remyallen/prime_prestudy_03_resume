$(document).ready(function() {
	$('.RESUME').on('click', 'button', function() {
		$(this).closest('.RESUME').find('.jumbotron').slideToggle();
  });
});