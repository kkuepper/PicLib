function() {
  // Convert divs to queue widgets when the DOM is ready
  $("form#pluploadForm #uploader").plupload({
    // General settings
    runtimes : 'flash',
    url : 'http://localhost:5984/piclib/dd576722376ed7e8c0d69a370c0005e7',
    max_file_size : '10mb',
    unique_names : true,
    file_data_name : "_attachments",

    // Resize images on clientside if we can
    resize : {width : 320, height : 240, quality : 90},

    // Specify what files to browse for
    filters : [
        {title : "Image files", extensions : "jpg,gif,png"},
        {title : "Zip files", extensions : "zip"}
    ],

    // Flash settings
    flash_swf_url : 'js/plupload.flash.swf',

    multipart : true,
    multipart_params : {
      _rev: "3-e4e6e9b072203ef56f0a9b85ce5ad034"
    }
  });

  // Client side form validation
  $('form#pluploadForm').submit(function(e) {
    var uploader = $('form#pluploadForm #uploader').pluploadQueue();

    // Validate number of uploaded files
    if (uploader.total.uploaded == 0) {
        // Files in queue upload them first
        if (uploader.files.length > 0) {
            // When all files are uploaded submit form
            uploader.bind('UploadProgress', function() {
                if (uploader.total.uploaded == uploader.files.length) {
                  form.ajaxSubmit({
                    //url: dbUrl+doc._id,
                    url: "http://localhost:5984/piclib/dd576722376ed7e8c0d69a370c0005e7",
                    success: function(resp) {
                      alert("pictures submitted successfully!");
                      //couchApp.trigger('addPicture', doc);
                    }
                  });
                }
            });

            uploader.start();
        } else
            alert('You must at least upload one file.');

        e.preventDefault();
    }
  });
}