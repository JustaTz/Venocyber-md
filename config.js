//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "255742862266";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0dCU3B6d0F4STZ5czk5d1BIY0E2UmE2bmNSVXdxeXRhcjNPRjNpek9uZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2xXenNCdThyZzhRVmxKZnhCaWIyQ1ZLNFVYYUdGSXZKME9Za1c2cVVDQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyQXZvbHJ3VkprTUVVYnkvc1dERXBqTlM4Y01PU2o5WXFia2ZOM2xxT1g0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5VStybDM1UnFXL3JsOXpYQXdHbkVUVExCYlI1S3NiM3p3RnVOKythcEZnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFDbDY4SmxFalRoczhWYmx0WUN0elFlM1FqTU12dDZSNHgvZ24vRjdkM2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlwMHJZODdjcFUvRXl5d2dWRTlwTm1rbnNZSkxvc2doakY3SDVpMGpzekE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0VrQUdjV3NHVUhsVW1uMFZTa1JoV1F2c09IT2Q1VFVFV2d0YnI5KzhVWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicFN1Ky92cXp4cmN4OEpqVk1qNE05R0h0d1lSZnpmcG91T1hvelhQcTJrQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlB0RTREUDVFNE5ZU2dNdUkwd0o2L1ZYTG0rb3NlSTV2TGl2bzRZVXJxUnc4dTZRbEtzV1p5bG5JWXVheWFPN0ZGMUM2RGVBUHBocTU1MEgrcko5L0RnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU1LCJhZHZTZWNyZXRLZXkiOiJzSXhqajhOeHdmVUtERmE0NGJtVjBWVjRxYVJ2eWVYalcvdHFlN01aNHpFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJCQUhmOWJwU1N6aWdPLW5JRVhIU3F3IiwicGhvbmVJZCI6IjI0ZDQzY2MyLTc0ZGYtNGVkYS05YWM3LTJmOTJiOWMyYjczZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0Q1FQeGpNc1ZVdkZJaHJVSFRmMlpEY2ZRd1E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUJHZHlGa1psRVBsUk9TekppWFpvOFdoQWVnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkFWSzgxOUxBIiwibWUiOnsiaWQiOiIyNTU3ODQ1NTQwMzE6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZWB8J2VpvCdlaTwnZWl8J2VkiDwnZWL8J2VqyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS09ZdS9VSEVQRDc2clFHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicGFwU2RiL0xqeEdEWldrZkNtTmQ5bzNud3hLWUdBenp6SWlxSk93SWoxUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiL0xWQzZNNzh5SXpYbDVGMFlReU9mT1VwOEJZRk1NelFIN0hHaVBtRTdPdTVqVHNwNE5ENmVkL0RuOW12ZGZGQm94cGgyOGtpaDlHbnNGNURjV3R2Q1E9PSIsImRldmljZVNpZ25hdHVyZSI6InpCTXZnQjNSam16NGthcmhaRzFGK2gvOGFNK2hqbVRudndRSW9YRVNOZ2sxOEtwNXFnUHNrSXRyWlJXNDVrWENkYnpWNDJpUWRNeTdjblNVL3JPRUJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1Nzg0NTU0MDMxOjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYVdxVW5XL3k0OFJnMlZwSHdwalhmYU41OE1TbUJnTTg4eUlxaVRzQ0k5VSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTQxNzIxMywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQYmgifQ=="eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0dCU3B6d0F4STZ5czk5d1BIY0E2UmE2bmNSVXdxeXRhcjNPRjNpek9uZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2xXenNCdThyZzhRVmxKZnhCaWIyQ1ZLNFVYYUdGSXZKME9Za1c2cVVDQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyQXZvbHJ3VkprTUVVYnkvc1dERXBqTlM4Y01PU2o5WXFia2ZOM2xxT1g0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5VStybDM1UnFXL3JsOXpYQXdHbkVUVExCYlI1S3NiM3p3RnVOKythcEZnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFDbDY4SmxFalRoczhWYmx0WUN0elFlM1FqTU12dDZSNHgvZ24vRjdkM2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlwMHJZODdjcFUvRXl5d2dWRTlwTm1rbnNZSkxvc2doakY3SDVpMGpzekE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0VrQUdjV3NHVUhsVW1uMFZTa1JoV1F2c09IT2Q1VFVFV2d0YnI5KzhVWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicFN1Ky92cXp4cmN4OEpqVk1qNE05R0h0d1lSZnpmcG91T1hvelhQcTJrQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlB0RTREUDVFNE5ZU2dNdUkwd0o2L1ZYTG0rb3NlSTV2TGl2bzRZVXJxUnc4dTZRbEtzV1p5bG5JWXVheWFPN0ZGMUM2RGVBUHBocTU1MEgrcko5L0RnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU1LCJhZHZTZWNyZXRLZXkiOiJzSXhqajhOeHdmVUtERmE0NGJtVjBWVjRxYVJ2eWVYalcvdHFlN01aNHpFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJCQUhmOWJwU1N6aWdPLW5JRVhIU3F3IiwicGhvbmVJZCI6IjI0ZDQzY2MyLTc0ZGYtNGVkYS05YWM3LTJmOTJiOWMyYjczZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0Q1FQeGpNc1ZVdkZJaHJVSFRmMlpEY2ZRd1E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUJHZHlGa1psRVBsUk9TekppWFpvOFdoQWVnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkFWSzgxOUxBIiwibWUiOnsiaWQiOiIyNTU3ODQ1NTQwMzE6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZWB8J2VpvCdlaTwnZWl8J2VkiDwnZWL8J2VqyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS09ZdS9VSEVQRDc2clFHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicGFwU2RiL0xqeEdEWldrZkNtTmQ5bzNud3hLWUdBenp6SWlxSk93SWoxUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiL0xWQzZNNzh5SXpYbDVGMFlReU9mT1VwOEJZRk1NelFIN0hHaVBtRTdPdTVqVHNwNE5ENmVkL0RuOW12ZGZGQm94cGgyOGtpaDlHbnNGNURjV3R2Q1E9PSIsImRldmljZVNpZ25hdHVyZSI6InpCTXZnQjNSam16NGthcmhaRzFGK2gvOGFNK2hqbVRudndRSW9YRVNOZ2sxOEtwNXFnUHNrSXRyWlJXNDVrWENkYnpWNDJpUWRNeTdjblNVL3JPRUJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1Nzg0NTU0MDMxOjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYVdxVW5XL3k0OFJnMlZwSHdwalhmYU41OE1TbUJnTTg4eUlxaVRzQ0k5VSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTQxNzIxMywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQYmgifQ==
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
