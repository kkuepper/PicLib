function(e, picture) {
	$.log('start adding picture ' + picture.description);
	$$(this).pictures.unshift(picture);
	$(this).trigger('pictures');
	$.log('adding a picture completed');
}