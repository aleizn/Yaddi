import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `*[βππππβ] πΈπ½πΆππ΄ππ΄ ππ½ π΄π½π»π°π²π΄ π³π΄ πΆπΈππ·ππ±, π΄πΉπ΄πΌπΏπ»πΎ: ${usedPrefix + command} https://github.com/VIRUZOFC/DORRAT-TERMUX*`
if (!regex.test(args[0])) throw '*[βππππβ] π»πΈπ½πΊ πΈπ½π²πΎπππ΄π²ππΎ!*'
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
m.reply(`*[βππππβ] π΄ππΏπ΄ππ΄ ππ½ πΌπΎπΌπ΄π½ππΎ π΄π½ π»πΎ πππ΄ π΄π½ππΈπΎ ππ π°ππ²π·πΈππΎ, ππΈ π΄πππ΄ π½πΎ π΄π π΄π½ππΈπ°π³πΎ πΏππ΄π³π΄ π³π΄π±π΄πππ΄ π° πππ΄ π΄π» ππ΄πΏπΎππΈππΎππΈπΎ π΄π πΌππ πΏπ΄ππ°π³πΎ*`)
conn.sendFile(m.chat, url, filename, null, m)
}
handler.help = ['gitclone <url>']
handler.tags = ['downloader']
handler.command = /gitclone/i
export default handler
