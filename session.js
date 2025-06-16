//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ054aG1VZVlTN0JzcTJrVkZ3Z3RpbUZPblhOdTF3TXhWTThra0tsYm8yMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUlFSWExaS0lyeUQ4R1h2Z0lGR3VDMnQvTU9wTlNKRXBSOFNDd2RSVmcyRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSGlhNGhBWk0xdmVqb1k3WlMxZFF0QlFkK0gycGYvb0tORi9KOG1SdUU4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHdzYvZVgvejZWeEdKTy8rS3U3U0MyckRxdFZWcFJhbC9vRVdad2RqaEdJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJGNW9GeW9iNzdSTWRHSDB6Tmx2WUdTVHM0cVVCcWw2TjFYbEZTZlcva1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inlna1prM0diUjl1TTRKOVNmMnFvdHh0cE5WQ211a1RWOU9VZGp5dllzUjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0ZEWktzbkdHYUlzekNTaU04MFNjY1VJM0c2cVRjZ2t4WXZLcVljazluTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZWRLZzgxSlVxU2lRYnd0a21tSVJWampUQkgxaTdhMG9MUzhEamNUMmZUWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRLMWRXZ0F0TlU2TmhrRzJrUWtDYjZhbWl3dGZSNzJxTGxFVElwYTlINGpFQld6WXZGUzZLNER4c1ZKSGlvaGxZOFdYdW1EL2dCMmZhTG5KZlVCL2hnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTExLCJhZHZTZWNyZXRLZXkiOiJuekJ1T3o5RGgzM2hUZ0Q0Wm4wMEtocllaVkdnNXQvdUx0K3YyUmRmWlZ3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzIsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMiwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIyb3dKaXFySVE1dXdqMkFCbG9wWVhnIiwicGhvbmVJZCI6IjkzODdjZDc2LTkyNjItNDE0MC04MzhlLTY3YjczZjZiM2ZjMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4SWg3U0NmVVRiamh3cGZVZGRaRlNrY04zTmc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3Y2bzRSYzg5MFhLOE9hc1lQU0FzQWlURHZnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik5UTThMQ0daIiwibWUiOnsiaWQiOiI5NDc2NjUxODI0Mjo2OEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjgxNjMwMTgxOTkwNTg0OjY4QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS2JjNzhFRUVOUG93TUlHR0EwZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVkhxM2tPQmprMnpBRUpSZE4zbGtpT044cUh3UmhvVHphaVdJbkg4UXFVVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiOVdrUll1LzQvckVlUGxlV1gwUkxYZmVNREpGUWNneThVYU1EQkhnb1BQNURCeEVmdjZ6bEJFS3dZWCtRMHVTSHRERUw0RjdMT2FRS085QjVreUxHRHc9PSIsImRldmljZVNpZ25hdHVyZSI6IlRTNDlIanl4ajRsbEp1WWJaazc1cXc4b1JvZ1FRTlFiMFNMakUxRkxlaWFkdXFObDEwUTRET0svd0dkQTlCdDl6MVN6ZnlyWlEyanI4Rk9MRjRBbWhBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjY1MTgyNDI6NjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVlI2dDVEZ1k1TnN3QkNVWFRkNVpJampmS2g4RVlhRTgyb2xpSngvRUtsRiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FzSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwMDg2NzUzLCJsYXN0UHJvcEhhc2giOiIzUjlaMzkifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94766518242",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94766518242", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
