// Your scripts go here.
$(document).ready(function() {
	$('.nav .dropdown').hover(function() {
		$(this).addClass('open');
	}, function() {
		$(this).removeClass('open');
	});
});