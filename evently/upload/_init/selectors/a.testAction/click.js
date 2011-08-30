function(e) {
  alert("test action triggered");
	$(this).trigger('refreshPictures');
	$.log("refreshing of pictures complete");
}