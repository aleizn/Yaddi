import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[βππππβ] π΄π½π»π°π²π΄ π³π΄ ππΈπΊππΎπΊ π΅π°π»ππ°π½ππ΄, πΏπΎπ π΅π°ππΎπ πΈπ½πΆππ΄ππ΄ π΄π½ π΄π½π»π°π²π΄/π»πΈπ½πΊ π³π΄ π°π»πΆππ½ ππΈπ³π΄πΎ π³π΄ ππΈπΊππΎπΊ*\n\n*ββ π΄πΉπ΄πΌπΏπ»πΎ:*\n*${usedPrefix + command} https://vm.tiktok.com/ZML42vSnn/*`
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw `*[βππππβ] π΄π½π»π°π²π΄ π³π΄ ππΈπΊππΎπΊ πΈπ½π²πΎπππ΄π²ππΎ, πΏπΎπ π΅π°ππΎπ πΈπ½πΆππ΄ππ΄ π΄π½ π΄π½π»π°π²π΄/π»πΈπ½πΊ π³π΄ π°π»πΆππ½ ππΈπ³π΄πΎ π³π΄ ππΈπΊππΎπΊ*\n\n*ββ π΄πΉπ΄πΌπΏπ»πΎ:*\n*${usedPrefix + command} https://vm.tiktok.com/ZML42vSnn/*`
let url = (await fetch(text)).url
let res = await (await fetch(`https://api2.musical.ly/aweme/v1/aweme/detail/?aweme_id=${url.split('?')[0].split('/')[5]}`)).json()
let data = res.aweme_detail.video.play_addr.url_list
if (!data.length) throw '*[βππππβ] π»πΎ π»π°πΌπ΄π½ππΎ, πΎπ²ππππΈπΎ ππ½ π΄πππΎπ π°π» π³π΄ππ²π°ππΆπ°π ππ ππΈπ³π΄πΎ, πΏπΎπ π΅π°ππΎπ πππ΄π»ππ° π° πΈπ½ππ΄π½ππ°ππ»πΎ*'
let meta = await getInfo(url).catch(_ => {})
await m.reply('*[βππππβ] π°πΆππ°ππ³π΄ ππ½ πΌπΎπΌπ΄π½ππΎ π΄π½ π»πΎ πππ΄ π΄π½ππΈπΎ ππ ππΈπ³π΄πΎ π³π΄ ππΈπΊππΎπΊ*')
let buttons = [{ buttonText: { displayText: 'π°ππ³πΈπΎ' }, buttonId: `${usedPrefix}tomp3` }]
conn.sendMessage(m.chat, { video: { url: data[data.length - 1] }, caption: 'ππΌππππ-π΅ππ', footer: await shortUrl(data[data.length - 1]), buttons }, { quoted: m })}

handler.help = ['tiktok']
handler.tags = ['downloader']
handler.alias = ['tiktok', 'tikdl', 'tiktokdl', 'tiktoknowm']
handler.command = /^(tt|tiktok)(dl|nowm)?$/i
export default handler

async function getInfo(url) {
let id = url.split('?')[0].split('/')
let res = await (await fetch(`https://www.tiktok.com/node/share/video/${id[3]}/${id[5]}/`)).json()
return res?.seoProps?.metaParams}
async function shortUrl(url) {
return await (await fetch(`https://tinyurl.com/api-create.php?url=${url}`)).text()}
