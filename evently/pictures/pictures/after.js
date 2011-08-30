function() {
	var el = $$(this).pictures[0];
	$('#pictures #'+el.id).effect("highlight", {}, 1000);
	//alert("Hello after world");
  
  $('#pictures .button.delete').button({
    icons: { primary: "ui-icon-trash" }
  });
};