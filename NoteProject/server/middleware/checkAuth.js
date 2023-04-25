exports.isLoggedIn = function (req, res, next) {
    if (req.user) {
      next();
    } else {
      let message = 'Sorry! You are not allowed to access this dashboard!';
      let repeatedMessage = '<div style="font-size: 50px; line-height: 1.5em;">';
      for (let i = 0; i < 50; i++) {
        repeatedMessage += message;
      }
      res.status(401).send(`
        <style>
          .marquee {
            width: 100%;
            margin: 0 auto;
            white-space: nowrap;
            overflow: hidden;
            text-align: center;
            box-sizing: border-box;
          }
  
          .marquee span {
            display: inline-block;
            padding-right: 100%;
            animation: marquee 100s linear infinite;
          }
  
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        </style>
  
        <div style="color: red; font-weight: bold; position: relative;">
        <div class="marquee">
          <span>${repeatedMessage}</span>
        </div>
      </div>
      
      `);
    }
  }
  /** 
   * WITH BUTTONS
      res.status(401).send('<div style="color: red; font-weight: bold;">  <video autoplay loop play-inline muted controls>  <source type="video/mp4" src="video/template2.mp4"></video><br>' + repeatedMessage + '</div>');

    }
  } */