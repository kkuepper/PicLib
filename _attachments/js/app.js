$.couch.app(function(app) {
  $("#createAlbum").evently("createAlbum", app);
  $("#albums").evently(app.ddoc.evently.albums, app);
  $("#account").evently("account", app);
  $("#profile").evently("profile", app);
  $("#pictures").evently("pictures", app);
  $("#upload").evently("upload", app);
  $.evently.connect("#upload", "#pictures", ["addPicture", "refreshPictures", "testMethod"]);
  $.evently.connect("#account", "#profile", ["loggedIn","loggedOut"]);
  
  $.log('evently items successfully connected');
  /*$("#items").evently("items", app);*/
});