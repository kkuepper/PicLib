function couchapp_load(scripts) {
  for (var i=0; i < scripts.length; i++) {
    document.write('<script src="'+scripts[i]+'"><\/script>')
  };
};

couchapp_load([
  "/_utils/script/sha1.js",
  "/_utils/script/json2.js",
  "/_utils/script/jquery.js",
  "/_utils/script/jquery.couch.js",
  "/_utils/script/base64.js",
  "/_utils/script/jquery.form.js",
  "../vendor/couchapp/jquery.couch.app.js",
  "../vendor/couchapp/jquery.couch.app.util.js",
  "../vendor/couchapp/jquery.mustache.js",
  "../vendor/couchapp/jquery.pathbinder.js",
  "../vendor/couchapp/jquery.evently.js",
  "../js/jquery-ui-1.8.16.custom.min.js"
]);