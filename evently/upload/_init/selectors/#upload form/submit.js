function(e) {
  alert("submit called");
	var form = $(this);

	e.preventDefault();
	
	var doc = new Object();
	doc._id = $.couch.newUUID();
	doc.created_at = new Date();
	doc.description = form.find("input[name=description]").val();
	
	var data = {};
	form.find(":file").each(function() {
		data[this.name] = this.value;
	});
	
	if(!data._attachments || data._attachments.length == 0) {
		alert("Please select a file to upload");
		return;
	}
	
	var dbUrl = $$(this).app.db.uri;
	var couchApp = $(this);
	
	//ToDo: replace hardcoded database name
	$$(this).app.db.saveDoc(doc, { success: function(resp) {
			doc.id = resp.id;
			doc.rev = resp.rev;
			doc.tags = "newly created picture has no tags";
			doc.url = form.find("input[name=_attachment]").val();
			
			form.find("input[name=_rev]").val(doc._rev);
			
			// The document has to exist before beeing able to upload the file
			form.ajaxSubmit({
				url: dbUrl+doc._id,
				success: function(resp) {
					couchApp.trigger('addPicture', doc);
				}
			});
		}
	});
}