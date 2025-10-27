/* Mobile nav toggling implemented with jQuery
	 - toggles `.open` on the <header> when hamburger clicked
	 - closes the mobile menu when a link inside `.mobile-menu` is clicked
*/
$(function () {
	var $header = $("header");
	var $hamburger = $(".hamburger-icon");

	function toggleMenu() {
		$header.toggleClass("open");
	}

	// click or Enter/Space on the hamburger toggles the menu
	$hamburger.on("click", function (e) {
		e.preventDefault();
		toggleMenu();
	});

	// close mobile menu when a link is selected
	$(document).on("click", ".mobile-menu a", function () {
		$header.removeClass("open");
	});
});
