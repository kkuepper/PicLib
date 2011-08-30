function(doc, req) {
  // top two lines have to come first or else parent references in the ddoc
  // which are created by calls to require will break JSON.stringify.
  var ddoc = this;
  var mustache = require("vendor/couchapp/lib/mustache");
  var data = {
      ddoc : JSON.stringify(require("vendor/couchapp/lib/code").ddoc(ddoc), function(key, value) {
        return (key == "parent") ? undefined : value;
      }),
      docid : JSON.stringify(req.id),
      id : req.id,
      path : "../page/"+req.id,
      site_title : this.couchapp.name
    };
  data.title = "Home";
  
  return mustache.to_html(ddoc.templates.index, data, ddoc.templates.partials);
}