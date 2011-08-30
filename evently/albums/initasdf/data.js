function(data) {
	var couchApp = $$(this).app;
	
	var items = data.rows.map(function(el) {
		return {
			_id : el.value._id,
			_rev : el.value._rev,
      name : el.value.name,
			description : el.value.description,
      type : el.value.type,
			created_at : $.prettyDate(el.value.created_at),
      author : el.value.author
		};
	});
  
	$$(this).albums = [];
	for(var i = 0; i < data.total_rows; i++) {
		$$(this).albums.push(items[i]);
	}
	return {items : items, dbName : $$(this).app.db.name};
};