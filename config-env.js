/**
░█▀▀█ ░█▀▀█ ─█▀▀█ ░█▀▀█ ─█▀▀█ ▀▀█▀▀ ░█─░█ ── ░█▀▄▀█ ░█▀▀▄ 
░█▄▄█ ░█▄▄▀ ░█▄▄█ ░█▀▀▄ ░█▄▄█ ─░█── ░█▀▀█ ▀▀ ░█░█░█ ░█─░█ 
░█─── ░█─░█ ░█─░█ ░█▄▄█ ░█─░█ ─░█── ░█─░█ ── ░█──░█ ░█▄▄▀

* @project_name PRABATH-MD
* @authors Prabath Kumara & sachibot-team(Sachintha) <https://github.com/prabathLK>
* @description The main hope of creating this bot is to take full advantage of the WhatsApp app and make its work easier
* @link <https://github.com/prabathLK/PRABATH-MD>
* @version 2.0.6

© 2023 Prabath Kumara, SACHI-BOT. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRABATH-MD~JyVW1QQR#k2hoWXRWU414eH29dKcUGq6rXZ19CI9Z35dU1iALbVg",
BOT_NUMBER: process.env.BOT_NUMBER || "263719038262",
PASSWORD: process.env.PASSWORD || "0004",
GITHUB_USERNAME: process.env.GITHUB_USERNAME || "CRAiBEr",
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN || "e72e16c7e42f292c6912e7710c838347ae178b4"
};
