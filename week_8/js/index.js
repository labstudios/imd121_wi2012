$(document).ready(function(){
	$(".hidable").click(function(ev){
		$(ev.currentTarget).hide(500);
	});
	
	$("#sorry").click(function(){
		$(".hidable").show(2500);
		return false;
	});
	
	$("a[href^='http://']").click(function(){
		return confirm("You are now leaving the site. We have no control over the content you will experience after this. \r\n\r\n Do you want to continue?");
	});
});