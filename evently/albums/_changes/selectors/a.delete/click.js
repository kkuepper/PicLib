function(e) {
	//albums/_changes/selectors/a.delete/click.js
	var item = $(this).parents("div.item");
	//var elId = item.attr("id");
	
  $$(this).app.db.removeDoc({ _id : item.attr("id"), _rev : item.attr("rev") });
  
	//$(this).trigger("deletePicture", { id : item.attr("id"), rev : item.attr("rev") });
	
	item.hide("puff", {}, 1000);
}