function(e) {
  e.preventDefault();
  var form = $(this);
  
  var doc = new Object();
  doc._id = $.couch.newUUID();
  doc.created_at = new Date();
  doc.name = form.find("input[name=name]").val();
  doc.description = form.find("input[name=description]").val();
  doc.type = "album";
  doc.author = "Karsten Kuepper";
  
  $$(this).app.db.saveDoc(doc, { success: function(resp) {
      form.find(".message.success").effect("highlight", {}, 1000);
    }
  });
}