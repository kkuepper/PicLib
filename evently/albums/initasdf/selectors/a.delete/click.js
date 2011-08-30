function(e) {
	//pictures/_init/selectors/a.delete/click.js
	var item = $(this).parents("div.item");
	var elId = item.attr("id");
	
	$(this).trigger("deletePicture", { id : item.attr("id"), rev : item.attr("rev") });
	
	item.hide("puff", {}, 1000);
}