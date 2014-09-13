function load_grumble(){
	
	$('#grumble1').grumble(
		{
			text: 'this is a tag', 
			angle: 65, 
			distance: 60, 
			showAfter: 1000,
		}
	);
}

window.onload=load_grumble
