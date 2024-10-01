const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ZSEHlbBZ#LxIIp7Cm9UZGn7qUw1MzIqiz5bn1WyR9vBAsSe2hEVs",
MONGODB: process.env.MONGODB || "mongodb://mongo:wvUTbhtdxdbMGajDDfogpBTSAqTvMgWH@junction.proxy.rlwy.net:24596",
PREFIX: process.env.PREFIX || ".",
BOT_NAME: process.env.BOT_NAME || "Thenu-MD",
BOT_NUMBER: process.env.BOT_NUMBER || "94767096711",
AUTO_AI: process.env.AUTO_AI || "true",

};
