const db = require('../DbConnection');
var video = {

    videostreamurl:function(obj,callback){
        //console.log(obj);
 
        var sqlquery = "insert into video_file (video_url,user_id) VALUES ('"+obj.video_url+"','"+obj.user_id+"')";
        //var sqlquery = "UPDATE video_file set video_url=?  WHERE user_id = ?";
        db.query(sqlquery, function (error,result) {
            if (error) {
                     callback(error,null);
                }
                 else{ 
                    
                    callback("Updated",null);
              }
           });
     
        },
        streamurl:function(user_id,callback){
      
         var sqlquery = "select video_url from video_file WHERE user_id = ? ORDER BY id DESC LIMIT 1";
          db.query(sqlquery,[user_id], function (error,results) {
             if (error) {
                      callback(error,null);
                 }
                  else{ 
                    // console.log(results[0])
                     if(results[0]==undefined){
                        callback("User is not found!",null);
                     }
                     else if(results[0].video_url==null){
                        callback("Not any URL",null);
                     }
                     else{
                        callback(results[0].video_url,null);
                     }
                     
                     
               }
            });
      
         }
     }

  module.exports =video;