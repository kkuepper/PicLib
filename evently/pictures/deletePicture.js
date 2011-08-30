function(e, picture) {
	$$(this).app.db.removeDoc({ _id : picture.id, _rev : picture.rev });

	for(var i = 0; i < $$(this).pictures.length; i++) {
		if($$(this).pictures[i].id == picture.id)
			$$(this).pictures.splice(i, 1);
	}
	$.log("picture "+picture.id+" removed successfully!");
}