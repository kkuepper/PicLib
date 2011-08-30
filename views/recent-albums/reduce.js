function(key, values, rereduce) {
  var output = { numberOfPictures: 0, pictures: [] };
  var el;
  
  if (!rereduce) {
    for (idx in values) {
      el = values[idx];
      if (values[idx].type == "picture") {
        output.pictures.push(values[idx])
        output.numberOfPictures += 1;
        output.calculated = "by else path because its not rereduce";
      } else if(values[idx].type == "album") {
        el.numberOfPictures = output.numberOfPictures;
        el.pictures = output.pictures;
        output = el;
      }
    }
  } else {
    for (idx in values) {
      el = values[idx];
      if (el.album !== undefined) {
        output.total += 1;
      } else {
        output.author = el.author;
        output.created_at = el.created_at;
        output.description = el.description;
        output.name = el.name;
        output.type = el.type;
      }
    }
    output.name = "calculated by rereduce";
  }
  return output;
}