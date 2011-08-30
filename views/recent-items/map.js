function(doc) {
  if (doc.created_at && doc.type == "picture")
    emit(doc.created_at, doc);
}