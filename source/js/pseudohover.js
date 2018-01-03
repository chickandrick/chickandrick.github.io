if ($) $ (function () {

	$ ('a').hover (
		function () {
			if (($ (this).attr ('href') != '') && ($ (this).attr ('href') != '#')) {
				$ ('a[href="' + $ (this).attr ('href') + '"]').addClass ('hover')
			}
		},
		function () {
			$ ('a').removeClass ('hover')
		}
	)

})

$(function($){
	$('.rating-game:first-child a').hover(function() {
		$('div.rating-game:first-child').toggleClass('hover');
	});
});