/* Created By https://github.com/VIRUZOFC */
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, {text, usedPrefix, command, conn}) => {
let sfoto = fs.readFileSync('./Menu2.jpg')
if (!text) throw `*[β] πΈπ½πΆππ΄ππ΄ π΄π» π½πΎπΌπ±ππ΄ π³π΄π» πΏπ°πππ΄ππ΄ πππ΄ π³π΄ππ΄π΄ π±πππ²π°π*`
let json = await fetch(`https://api.zacros.my.id/search/sticker?query=${text}`)
let jsons = await json.json()
  let res = jsons.result.map((v, index) => `*πͺ΄ β’ ππ΄πππ»ππ°π³πΎ:* ${1 + index}\n*π΅ β’ π½πΎπΌπ±ππ΄:* ${v.title}\n*π β’ πππ»:* ${v.url}`).join`\n\nβββββββββββββββββββββ\n\n`
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let buttonMessage= {
'document': { url: `https://github.com/VIRUZOFC/DORRAT-TERMUX` },
'mimetype': `application/${document}`,
'fileName': `γ  π―ππππ πΎππππ γ`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/VIRUZOFC/DORRAT-TERMUX',
'mediaType': 2,
'previewType': 'pdf',
'title': `β’ Resultados Encontradosπ`,
'body': wm,
'thumbnail': sfoto,
'sourceUrl': 'https://youtube.com/channel/UClmUwNliV-LH_JKJXEj9M3g'}},
'caption': res,
'footer': `β’ ππΈ π³π΄ππ΄π° π³π΄ππ²π°ππΆπ°π ππ½\n*πΏπ°πππ΄ππ΄ π³π΄ πππΈπ²πΊπ΄ππ*\n*π΄ππ²ππΈπ±π° ${usedPrefix}stickerpack <URL>*`,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'πΌπ΄π½π'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.command = ['stickersearch', 'searchsticker', 'stickerssearch', 'searchstickers']
export default handler
