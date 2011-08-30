function(doc) {
  if(doc.type == "album" && doc.created_at) {
    //emit([doc._id, doc._local_seq], doc);
    emit(doc._id, doc);
  }
}