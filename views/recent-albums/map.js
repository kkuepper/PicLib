/*function(doc) {
  if(doc.type == "album" && doc.created_at)
    emit(doc._local_seq, doc);
}*/

function(doc) {
  if(doc.type == "album" && doc.created_at) {
    //emit([doc._id, doc._local_seq], doc);
    emit(doc._id, doc);
  }
  else if(doc.type != "album" && doc.created_at && doc.album) {
    emit(doc.album, doc);
  }
}