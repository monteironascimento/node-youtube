var Youtube = require('youtube-video-api')
import { Router } from 'express';
const ofertasRouter = Router();


ofertasRouter.post("/", async (req, res) => {

    const obj = req.body;

    var youtube = Youtube({ 
      video: {
        part: 'status,snippet'
      },
      email: 'john@gmail.com',
      password: 'svp3r_p@s$p0rd'
    })
     
    youtube.on('auth:success', function (err) {
      if (!err) {
        youtube.upload('path/to/video.mp4', {}, function (err, video) {
          if (!err) console.log('Video was uploaded:', video.id)
        })
      }
    })
     
    youtube.authenticate('my-client-id', 'my-client-secret')

    
    
    
    return res.status(201).json({ status: "OK"});
})


