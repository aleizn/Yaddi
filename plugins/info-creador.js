let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `
*—◉ 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 𝙴𝚂 wa.me/595986674310*

*—◉ 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴𝙻 𝙲𝙾𝙻𝙰𝙱𝙾𝚁𝙰𝙳𝙾𝚁 𝟷 𝙴𝚂 wa.me/593959425714*

`.trim()   
let buttonMessage= {
'document': { url: `https://github.com/VIRUZOFC/DORRAT-TERMUX` },
'mimetype': `application/${document}`,
'fileName': `「  𝑉𝐼𝑅𝑈𝑍𝑍-𝐵𝑂𝑇 」`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/VIRUZOFC/DORRAT-TERMUX',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://youtube.com/channel/UClmUwNliV-LH_JKJXEj9M3g' }},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '⚜️𝙼𝙴𝙽𝚄⚜️'}, type: 1}, 
{buttonId: `${usedPrefix}instalarbot`, buttonText: {displayText: '𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝚁𝙱𝙾𝚃🌠'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;𝑉𝐼𝑅𝑈𝑍𝑍 𝑂𝐹𝐶 👑;;;\nFN:𝑉𝐼𝑅𝑈𝑍𝑍 𝑂𝐹𝐶 👑\nORG:𝑉𝐼𝑅𝑈𝑍𝑍 𝑂𝐹𝐶 👑\nTITLE:\nitem1.TEL;waid=593959425714:+593 95 942 5714\nitem1.X-ABLabel:𝑉𝐼𝑅𝑈𝑍𝑍 𝑂𝐹𝐶 👑\nX-WA-BIZ-DESCRIPTION:[❗] ᴄᴏɴᴛᴀᴄᴛᴀ ᴀ ᴇsᴛᴇ ɴᴜᴍ ᴘᴀʀᴀ ᴄᴏsᴀs ɪᴍᴘᴏʀᴛᴀɴᴛᴇs.\nX-WA-BIZ-NAME:𝑩𝒓𝒖𝒏𝒐 𝑺𝒐𝒃𝒓𝒊𝒏𝒐 👑\nEND:VCARD`
//await conn.sendMessage(m.chat, { contacts: { displayName: '𝑉𝐼𝑅𝑈𝑍𝑍 𝑂𝐹𝐶 👑', contacts: [{ vcard }] }}, {quoted: m})
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
export default handler
