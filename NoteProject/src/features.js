import dotenv from 'dotenv';

dotenv.config({});

import express from 'express';
import { google } from 'googleapis';
import dayjs from 'dayjs';
import {v4 as uuid} from 'uuid';

const calendar = google.calendar({
  version: 'v3',
  auth: process.env.API_KEY,
});

const app = express();

const PORT = process.env.NODE_ENV || 8000;

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL
);

const scopes = ['https://www.googleapis.com/auth/calendar'];


app.get('/google', (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
  });
  res.redirect(url);
});

app.get('/google/redirect', async (req, res) => {
  const code = req.query.code;

  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);
  tokens;

  res.send({
    msg: 'You Have successfully logged in',
  });
});

app.get('/schedule_event', async (req, res) => {

await calendar.events.insert({
    calendarId: 'primary',
    auth: oauth2Client,
    conferenceDataVersion : 1,

    requestBody: {
      summary: 'You are in Haithem Grissander NoteNotes Calendar',
      description: 'Some event that is very very important',
      start: {
        dateTime: dayjs(new Date()).add(1, 'day').toISOString(),
        timeZone: 'Europe/Stockholm',
      },
      end : {
        dateTime: dayjs(new Date()).add(1, 'day').add(1, "hour").toISOString(),
        timeZone: 'Europe/Stockholm',
      },
      conferenceData : {
createRequest : {
requestId : uuid(),
},
      },
      attendees : [{
        email : "haithemgrissa@gmail.com"
      }],
    },
  });
  res.send({
    msg: 'Excellent,Done',
  });
});

app.listen(PORT, () => {
  console.log('Server started on port', PORT);
});

/** const user_info = await axios.get("https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=eyJ" + token);
  console.log(user_info.data) */
