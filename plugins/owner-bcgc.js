import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of groups) { 
conn.sendButton(id, `*ââââ° ðððððððððð â±âââ*\n*â*\n*â â§* ${text}\n*â*\n*ââââââââââââââââ*`, 'ðððð ðð ðð ð¾ðððððð¾ð¼ð¿ð ðððð¾ðð¼ð\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['ð¤ ð¾ðð½ð´ð ð¤', '.owner'],['ð ð³ð¾ð½ð°ð ð', '.donasi']], false, { 
contextInfo: { externalAdReply: {
title: 'á´á´á´á´É´Éªá´á´á´á´ á´ÒÉªá´Éªá´Ê á´ É¢Êá´á´á´s',
body: 'ÊÊ á´Êá´ á´Êsá´Éªá´ ï¹£ Êá´á´', 
sourceUrl: `https://github.com/VIRUZOFC/DORRAT-TERMUX`, 
thumbnail: fs.readFileSync('./Menu2.jpg') }}})}
m.reply(`*[âððððâ] ð¼ð´ð½ðð°ð¹ð´ ð´ð½ðð¸ð°ð³ð¾ ð° ${groups.length} ð¶ððð¿ð¾/ð*\n\n*ðððð: ð´ð ð¿ð¾ðð¸ð±ð»ð´ ððð´ ðð´ð½ð¶ð° ðµð°ð»ð»ð¾ð ð´ððð´ ð²ð¾ð¼ð°ð½ð³ð¾ ð ð½ð¾ ðð´ ð´ð½ðð¸ð´ ð° ðð¾ð³ð¾ð ð»ð¾ð ð²ð·ð°ðð, ð³ð¸ðð²ðð»ð¿ð´ ð¿ð¾ð ð´ð» ð¼ð¾ð¼ð´ð½ðð¾*`)
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i
handler.rowner = true
export default handler
