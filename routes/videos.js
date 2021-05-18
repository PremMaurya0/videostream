const express = require('express');
const router = express.Router();
const videoCtrl = require('../Controller/video');
module.exports=function(){
 
    router.get('/v1/livestreamvideo', function(req, res) {
      
      if(req.query.user_id=="" || req.query.user_id==null){
        res.json({error:true,message:"User Id is missing"});
      }
     else if(req.query.video_url=="" || req.query.video_url==null){
        res.json({error:true,message:"video url is missing"});
    }else{
        var datavideo={
            video_url:req.query.video_url,
            user_id:req.query.user_id
        }
        videoCtrl.videostreamurl(datavideo,result=>{
            res.json(result);
            });
        }
    
    });
    router.get('/v1/livestreamurl', function(req, res) {
      
        if(req.query.user_id=="" || req.query.user_id==null){
          res.json({error:true,message:"User Id is missing"});
        }
      else{
        
          videoCtrl.streamurl(req.query.user_id,result=>{
              res.json({message:result});
              });
          }
      
      });

    return router;
}