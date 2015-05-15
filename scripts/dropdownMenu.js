$(document).ready(function() {
		$('nav > li').bind('mouseover', openSubMenu);
		$('nav > li').bind('mouseout', closeSubMenu);
    
		function openSubMenu() {
			$(this).find('ul').css('visibility', 'visible');
		};

		function closeSubMenu() {
			$(this).find('ul').css('visibility', 'hidden');
		};
});
