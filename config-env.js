
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

const username = fs.readFileSync('github_username.txt', 'utf8').trim()

module.exports = {
    SESSION_ID:  process.env.SESSION_ID,PRABATH-MD~d6FQiDQI#7s2mWPRJW8n7Fmx2haR5V1k3VwHLWhbMQwfJTUhhH5g  
    BOT_NUMBER:  process.env.BOT_NUMBER,263773168961
    GITHUB_USERNAME: username,
    GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN,
};
