    var fs = require('fs')
    var path = require('path')
    var arrayFiles = new Array();
    
    
    module.exports = function(folder,ext,callback){
      ext = '.' + ext;
      fs.readdir(folder, function (err, files) {
          if (err) return callback(err)
          files.forEach(function (file) {
            if (path.extname(file) === ext) {
                arrayFiles.push(file)
            }
          })
          callback(null,arrayFiles)
      })
    }