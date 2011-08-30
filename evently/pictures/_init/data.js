function(data) {
	var couchApp = $$(this).app;
	
	var items = data.rows.map(function(el) {
		var obj = {
			id : el.value._id,
			rev : el.value._rev,
			description : el.value.description,
			created_at : $.prettyDate(el.value.created_at),
			tags : el.value.tags
		};
		for(att in el.value._attachments) {
			obj.url = "http://" + window.location.host + couchApp.db.uri + obj.id + "/" + att;
			return obj;
		}
	});
	$$(this).pictures = [];
	for(var i = 0; i < data.total_rows; i++) {
		$$(this).pictures.push(items[i]);
	}
	return {items : items, dbName : $$(this).app.db.name};
};