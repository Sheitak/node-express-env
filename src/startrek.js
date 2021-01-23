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
            throw new Error("An error was occured");
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

const body = {
    episodeUid: "EPMA0000001362",
    comment: "My first comment about Star-Trek !"
}

app.post('/episodes/comment', (req, res) => {
    fetch("http://stapi.co/api/v1/rest/episode?uid=" + body.episodeUid, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json; charset=UTF-8" }
    })
    .then(res => res.status(200).json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
    /*
    .then(res => {
        if (!res.ok) {
            throw new Error("An error was occured")
        }
        return res.json()
    })
    .then(data => {
        const { episodeUid, comment } = req.body;
        console.log(req.body);
        res.status(200).send('Post route is working 🎉');
    })
    .catch(err => {
        res.redirect('/error');
    });
    */
});

app.listen(port, () => {
  console.log(`Application run at http://localhost:${port}`)
});
