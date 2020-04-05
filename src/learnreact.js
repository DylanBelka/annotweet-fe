import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const tweet = {
    id: 1,
    twitterHandle: 'dylanbelka',
    name: 'I am so angry!!!!!!'
}

function formatTweet(tweet){
    return tweet.twitterHandle + ": " + tweet.name;
}

const mainElement = <h1>{formatTweet(tweet)}</h1>;

export default mainElement;
