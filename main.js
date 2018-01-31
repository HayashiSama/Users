$(document).ready(function()
{
	$('form').submit(function()
	{
		$('#fn').text($('#fn').text()+$('#first').val());
		$('#ln').text($('#ln').text()+$('#last').val());
		$('#ea').text($('#ea').text()+$('#email').val());
		$('#cn').text($('#cn').text()+$('#contact').val());

		console.log($('#first').val());

		return false;
		
	})












})

