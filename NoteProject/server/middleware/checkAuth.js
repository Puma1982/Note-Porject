exports.isLoggedIn = function (req, res, next) {
    if(req.user) {
      next();
    } else {
        let message = 'Sorry! You are not allowed to access the dashboard!';
        let repeatedMessage = '';
        for (let i = 0; i < 300; i++) {
          repeatedMessage += message;
        }
        
        res.status(401).send('<div style="color: red; font-weight: bold;"><img src="./public/template.mp4" style="width: 100px;"><br>' + repeatedMessage + '</div>');
        

    }
  }