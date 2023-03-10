import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path' 
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
  
  
const { levelling } = '../lib/levelling.js'
//let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {

let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money } = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
  

/*const sections = [
{
title: `πππππΌ πΏπππππππΌπ½ππ | πΏπππ-πΏπππ ππππ`,
rows: [
{title: "βοΈ πππ£πͺ ππ§ππ£πππ₯ππ‘ |  πΏππ¨πππ€ππ§π βοΈ", description: null, rowId: `${usedPrefix}menu`},
{title: "β³οΈ πππ£πͺ πΎπ€π’π₯π‘ππ©π€ | ππͺπ‘π‘ πππ£πͺ β³οΈ", description: null, rowId: `${usedPrefix}allmenu`},
{title: "β πΎπͺππ£π©ππ¨ πππππππ‘ππ¨ | πΌπππ€πͺπ£π©π¨ β", description: null, rowId: `${usedPrefix}cuentasgatabot`},
{title: "π π½πͺπ¨πππ§ πΌπ£ππ’π | ππππ§ππ πΌπ£ππ’π π", description: "πππΏππΌπ π½πππΎπΌπ πππππππΌπΎπππ πΏπ πΌπππππ\nπππ πΎπΌπ πππΌππΎπ πΌππππ πππππππΌππππ", rowId: `${usedPrefix}animeinfo`},
{title: "π π½πͺπ¨π¦πͺπππ ππ£ ππ€π€ππ‘π | ππ€π€ππ‘π ππππ§ππ π", description: "π½πππΎπΌ ππΌπ πππππππΌπΎπππ πππ ππππππ\nπππΌππΎπ πππ ππππ πππππππΌππππ π½π ππππππ", rowId: `${usedPrefix}google`},
{title: "π π½πͺπ¨πππ§ πππ©π§ππ¨ | ππππ§ππ πππ©π©ππ§π¨ π", description: "ππ½πππ ππΌπ πππππΌ πΏπ ππΌπ πΎπΌππΎπππππ\nπππ πππ πππππΎπ ππ πππ πππππ", rowId: `${usedPrefix}letra`},   
{title: "π π½πͺπ¨ππ π₯π€π§ ππ€πͺππͺππ | ππππ§ππ π€π£ ππ€πͺππͺππ π", description: "π½πππΎπΌ ππππΌπΎππ πΏπ πππΏπππ π πΎπΌππΌπππ\nπππΌππΎπ πππ πππΏππ πππππ ππ πΎππΌπππππ", rowId: `${usedPrefix}ytsearch`},    
{title: "π π½πͺπ¨πππ§ π₯π€π§ πππ ππ₯ππππ | ππππ§ππ ππ? πππ ππ₯ππππ π", description: "πππΎππππππΌ πππππππΌπΎπππ ππ πππππππΏππΌ\nππππΏ πππππππΌππππ ππ πππππππΏππΌ", rowId: `${usedPrefix}wiki`},      
]}, ]*/
//let name = await conn.getName(m.sender)
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
//let user = global.db.data.users[m.sender]
//user.registered = false

let menu = `
π *Β‘HOLA | HI!* ${username}
β­ββγ *${wm}* γβββ¬£
ββοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈ
ββͺ *EXPERIENCIA | EXP βΊ ${exp}*
ββͺ *NIVEL | LEVEL βΊ ${level}*
ββͺ *ROL βΊ* ${role}
βββββββββββββββββββ
ββͺ *FECHA βΊ ${week}, ${date}*
ββͺ *USUARIOS | USERS βΊ ${Object.keys(global.db.data.users).length}* 
ββοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈβοΈ
β°ββββββγ π  *${vs}* γβββββββ¬£

β­βββββγ ππππ πππ γββββββ¬£
βββββββββββββββββββ
βπͺ _${usedPrefix}botemporal *enlace* *cantidad*_
βπͺ _${usedPrefix}addbot *enlace* *cantidad*_
ββοΈβΊ _${usedPrefix}transfer *tipo cantidad @tag*_
ββοΈβΊ _${usedPrefix}dar *tipo cantidad @tag*_
ββοΈβΊ _${usedPrefix}enviar *tipo cantidad @tag*_
ββοΈβΊ _${usedPrefix}balance_
ββοΈβΊ _${usedPrefix}cartera | wallet_
ββοΈβΊ _${usedPrefix}experiencia | exp_
ββοΈβΊ _${usedPrefix}top | lb | leaderboard_
ββοΈβΊ _${usedPrefix}nivel | level | lvl_
ββοΈβΊ _${usedPrefix}rol | rango_
ββοΈβΊ _${usedPrefix}inventario | inventory_
ββοΈβΊ _${usedPrefix}aventura | adventure_
ββοΈβΊ _${usedPrefix}caza | cazar | hunt_
ββοΈβΊ _${usedPrefix}animales | animals_
ββοΈβΊ _${usedPrefix}curar | heal_
ββοΈβΊ _${usedPrefix}minardiamantes | minargemas_
ββοΈβΊ _${usedPrefix}minargatacoins | minarcoins_
ββοΈβΊ _${usedPrefix}minarexperiencia | minarexp_
ββοΈβΊ _${usedPrefix}minar *:* minar2 *:* minar3_
ββοΈβΊ _${usedPrefix}buy *cantidad*_
ββοΈβΊ _${usedPrefix}buyall_
ββοΈβΊ _${usedPrefix}buy2 *cantidad*__
ββοΈβΊ _${usedPrefix}buyall2_
ββοΈβΊ _${usedPrefix}buy3 *cantidad*__
ββοΈβΊ _${usedPrefix}buyall3_
ββοΈβΊ _${usedPrefix}verificar | registrar_
ββοΈβΊ _${usedPrefix}perfil | profile_
ββοΈβΊ _${usedPrefix}myns_
ββοΈβΊ _${usedPrefix}unreg *numero de serie*_
ββοΈβΊ _${usedPrefix}reclamar | regalo | claim_
ββοΈβΊ _${usedPrefix}cofre | abrircofre | coffer_
ββοΈβΊ _${usedPrefix}trabajar | work_
β°ββββββββββββββββββββ¬£`.trim()
conn.sendHydrated(m.chat, menu, wm, pp, 'https://github.com/VIRUZOFC/DORRAT-TERMUX', 'ππΌππππ-π΅ππ', null, null, [
['πππ£πͺΜ ππ€π’π₯π‘ππ©π€ | ππͺπ‘π‘ πππ£πͺ π«', '.allmenu'],
['πππ£πͺ πππ¨π₯π‘πππππ‘π | πππ£πͺ πππ¨π© π', '/menulista'],
['πππ£πͺ ππ§ππ£πππ₯ππ‘ | ππππ£ π’ππ£πͺ β‘', '#menu']
], m,)
}

handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(rpgmenu)$/i
handler.register = true
handler.exp = 70
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
