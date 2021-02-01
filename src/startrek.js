/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
require('dotenv').config();
const express = require("express");
const app = express();

const favicon = require('serve-favicon');
const path = require('path');
const axios = require('axios');
const fetch = require('node-fetch');
const port = process.env.PORT || 3000;

const apiUrl = 'http://stapi.co/api/v1/rest/episode/search';

app.use(favicon(path.join(__dirname, '../public', 'images', 'favicon.ico')));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/episodes/seasons', (req, res) => {
    fetch(apiUrl)
    .then(res => {
        if (!res.ok) {
            throw `Server error : [${res.status}] [${res.statusText}] [${res.url}]`;
        }
        return res.json();
    })
    .then(data => {

        const Obj = [];

        data["episodes"].map((episode) => {
            
            let actualEpisode = {
                episodeUid: episode["uid"],
                episodeTitle: episode["title"],
                episodeNumber: episode["episodeNumber"],
                episodeSerialNumber: episode["productionSerialNumber"]
            };
            
            let seasons = Obj.find(ep => ep.seasonNumber == episode["seasonNumber"]);
            
            if (seasons != undefined) {
                seasons.episodes.push(actualEpisode);
            } else {
                let newSeason = {
                    seasonNumber: episode["seasonNumber"],
                    episodes: [actualEpisode]
                }
                Obj.push(newSeason);
            }
        })
        res.status(200).json(Obj);
    })
    .catch(err => {
        res.redirect('/error');
    });
});


const apiSingleEp = "http://stapi.co/api/v1/rest/episode?uid=";
// EPMA0000001362
/*
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    try {
      const newData = await response.json();
    } catch (error) {
      console.log("error", error);
    }
}
*/
app.post('/episodes/comment', (req, res) => {

    let body = {
        episodeUid : "EPMA0000001362",
        comment : "My first comment about Star-Trek !"
    }
    
    
    fetch('http://stapi.co/api/v1/rest/episode?uid=EPMA0000001362', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            //'Content-Type': 'application/x-www-form-urlencoded',
            //'Content-Type': 'text/html; charset=utf-8'
        }
    })
    .then(res => {
        if (!res.ok) {
            throw `Server error : [${res.status}] [${res.statusText}] [${res.url}]`;
        }
        return res.json();
    })
    //.then(res => res.json())
    .then(res => {
        console.log(res.ok);
        console.log(res.status);
        console.log(res.statusText);
        console.log(res.headers.raw());
        console.log(res.headers.get('content-type'));
    })
    .then(json => console.log(json))
    .then(response => console.log(response))
    .catch(err => console.log(err))
});


app.listen(port, () => {
  console.log(`Application run at http://localhost:${port}`)
});
