document.addEvent("domready", function(){
	$$(".hidable").addEvent("click", function(ev){
		ev.target.set('reveal', {duration: 750});
		ev.target.dissolve();
		//ev.target.parentElement.addClass("hidden");
	});
	
	document.id("sorry").addEvent("click", function(ev){
		ev.stop();
		var hides = $$(".hidable");
		for(var i = 0; i < hides.length; ++i)
		{
			hides[i].getChildren().set("reveal", {duration: 3500});
			hides[i].getChildren().reveal();
		}
		//hides.removeClass("hidden");
		return false;
	});
});