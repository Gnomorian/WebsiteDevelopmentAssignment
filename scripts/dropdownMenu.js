$(document).ready(function() {
		$('#topNav > li').bind('mouseover', openSubMenu);
		$('#topNav > li').bind('mouseout', closeSubMenu);

		function openSubMenu() {
			$(this).find('ul').css('visibility', 'visible');
		};

		function closeSubMenu() {
			$(this).find('ul').css('visibility', 'hidden');
		};
});
