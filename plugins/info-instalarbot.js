import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `
*ββ ππππΎππΈπ°π» ππ΄ππΌππ*:
https://youtu.be/DKo7PO2ta4o
*ββ π²πΎπΌπ°π½π³πΎπ ππ΄ππΌππ*
> cd
> termux-setup-storage
> apt update 
> pkg upgrade 
> pkg install git -y
> pkg install nodejs -y
> pkg install ffmpeg -y
> pkg install imagemagick -y
> pkg install yarn
> git clone https://github.com/VIRUZOFC/DORRAT-TERMUX
> cd DORRAT-TERMUX
> yarn install 
> npm install
> npm update
> npm install 
> npm start
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'πΈπ½π΅πΎππΌπ°π²πΈπΎπ½ - πΈπ½πππ°π»π°ππ±πΎπ',
body: 'ππΌππππ-π΅ππ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/VIRUZOFC/DORRAT-TERMUX`}}})   
}
handler.command = /^(instalarbot)/i
export default handler
