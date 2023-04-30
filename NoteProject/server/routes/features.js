import axios from 'axios';
  import express from 'express';
  import { google } from 'googleapis';
  import dotenv from 'dotenv';
  
  dotenv.config();
  
  const app = express();
  
  const PORT = process.env.PORT || 5001;
  
  const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URL
  );
  
  const scopes = [
    'https://www.googleapis.com/auth/calendar'
  ];
  
  app.get('/google',(req, res) => {
    const url = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: scopes
    });
    res.redirect(url);
  });
  
  app.get('/google/redirect', async (req, res) => {
      const code = req.query.code;
  
  const {tokens} = await oauth2Client.getToken(code);
  console.log(tokens);
  
    res.send({
      msg: "You Have successfully logged in",
    });
  });
  app.get ('/schedule_event')
  app.listen(PORT, () => {
    console.log('Server started on port', PORT);
  });
