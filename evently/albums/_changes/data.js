function(row) {
  var v = row.value;
  //debugger;
  var pictureUrl = "http://" + window.location.host + $$(this).app.db.uri;
  if(v.pictures.length > 0) {
    pic = v.pictures[0];
    for(att in pic._attachments) {
      pictureUrl += pic._id + "/" + att;
      break;
		}
  }
  
  var d = {
    _id : v._id,
    _rev : v._rev,
    title : v.name,
    description : v.description,
    type : v.type,
    created_at : $.prettyDate(v.created_at),
    author : v.author,
    pictureUrl : v.pictures.length > 0 ? pictureUrl : "",
    pictureTitle : v.pictures.length > 0 ? v.pictures[0].description : "keine Bilder"
  };
  
  return d;
};