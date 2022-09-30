
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
//let _uptime = process.uptime() * 1000
//let _muptime
//if (process.send) {
//process.send('uptime')
//let uptime = clockString(_uptime)
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
wm = global.wm
vs = global.vs
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
//let name = await conn.getName(m.sender)

const sections = [  

{

title: `⫹⫺ 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴𝙻 𝙼𝙴𝙽𝚄 ⫹⫺`,
rows: [
{title: "│🤴│𝙽Ú𝙼𝙴𝚁𝙾 𝙳𝙴 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚘𝚜 𝚗ú𝚖𝚎𝚛𝚘𝚜 𝚍𝚎 𝚖𝚒 𝚌𝚛𝚎𝚊𝚍𝚘𝚛", rowId: `${usedPrefix}creator`},  
{title: "│🏓│𝙸𝙽𝙵𝙾𝙱𝙾𝚃", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚍𝚎 𝚒𝚗𝚏𝚘𝚋𝚘𝚝", rowId: `${usedPrefix}infobot`},
{title: "│☄️│𝙼𝙴𝙽𝚄 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙾", description: "𝙼𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚍𝚎 𝚖𝚎𝚗𝚞 𝚌𝚘𝚖𝚙𝚕𝚎𝚝𝚘", rowId: `${usedPrefix}allmenu`},
{title: "│🤖│𝙶𝚁𝚄𝙿𝙾𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻 𝙳𝙴𝙻 𝙱𝙾𝚃", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚘𝚜 𝚐𝚛𝚞𝚙𝚘𝚜 𝚘𝚏𝚒𝚌𝚒𝚊𝚕𝚎𝚜 𝚍𝚎𝚕 𝚋𝚘𝚝", rowId: `${usedPrefix}grupos`},
{title: "│🔰│𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝚁𝙱𝙾𝚃-𝙳𝙾𝚁𝚁𝙰𝚃", description: "INFORMACIÓN PARA INSTALAR A 𝑉𝐼𝑅𝑈𝑍𝑍-𝐵𝑂𝑇", rowId: `${usedPrefix}instalarbot`},
{title: "│🌇│𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙻𝙰 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙰", description: "𝙴𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚊𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚛𝚎𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘", rowId: `${usedPrefix}enable welcome`},
{title: "│🌌️│𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙻𝙰 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙰", description: "𝙴𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚊𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚛𝚎𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘", rowId: `${usedPrefix}disable welcome`},
{title: "│⛩️│𝙰𝙽𝙸𝙼𝙴𝚂", description: "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙼𝚎𝚗𝚞 𝙰𝚗𝚒𝚖𝚎", rowId: `${usedPrefix}animesdelbot`},
{title: "│🎇│𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝚂", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚙𝚊𝚛𝚊 𝚌𝚛𝚎𝚊 𝚜𝚝𝚒𝚌𝚔𝚎𝚛", rowId: `${usedPrefix}stickermenu`},
{title: "│👻│𝙸𝙽𝚅𝙾𝙲𝙰𝚁 𝙰𝙻 𝙶𝚁𝚄𝙿𝙾𝚂 ", description: "𝙴𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚊𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚛𝚎𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘", rowId: `${usedPrefix}tagall`},
{title: "│💎│𝙾𝚆𝙽𝙴𝚁 𝙱𝙾𝚃", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚚𝚞𝚎 𝚜𝚘𝚕𝚘 𝚎𝚕 𝚙𝚛𝚘𝚙𝚒𝚎𝚝𝚊𝚛𝚒𝚘/𝚘𝚠𝚗𝚎𝚛 𝚙𝚞𝚎𝚍𝚎 ", rowId: `${usedPrefix}soloparaelpropietario`},
{title: "│♠️│𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙴𝙻 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝚃", description: "𝙴𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚊𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚛𝚎𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙰𝚂 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝙲𝙸𝙾𝙽𝙴𝚂 𝙿𝙰𝚁𝙰 𝚂𝙰𝙲𝙰𝚁 𝙶𝙴𝙽𝚃𝙴 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂", rowId: `${usedPrefix}enable restrict`},
{title: "│♣️│𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙴𝙻 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝚃", description: "𝙴𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚊𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚛𝚎𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘  𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙰𝚂 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝙲𝙸𝙾𝙽𝙴𝚂 𝙿𝙰𝚁𝙰 𝚂𝙰𝙲𝙰𝚁 𝙶𝙴𝙽𝚃𝙴 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂", rowId: `${usedPrefix}disable restrict`}, 
{title: "│🪀│𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙴𝙻 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺", description: "𝙴𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚊𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚛𝚎𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 𝙰𝙲𝚃𝙸𝚅𝙰 𝙾𝙴𝙻 𝙰𝙽𝚃𝙸 𝙴𝙽𝙻𝙰𝙲𝙴𝚂 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂 𝙳𝙴 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿", rowId: `${usedPrefix}enable antilink`},
{title: "│🪀│𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙴𝙻 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺", description: "𝙴𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚊𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚛𝚎𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙴𝙻 𝙰𝙽𝚃𝙸 𝙴𝙽𝙻𝙰𝙲𝙴𝚂 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂 𝙳𝙴 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿", rowId: `${usedPrefix}disable antilink`},
{title: "│💻│𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁", description: "𝙼𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚍𝚎 𝚍𝚎𝚜𝚌𝚊𝚛𝚐𝚊𝚛", rowId: `${usedPrefix}descargasmenu`},
{title: "│📻️│𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙻𝙾𝚂 𝙰𝚄𝙳𝙸𝙾𝚂", description: "𝙴𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚊𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚛𝚎𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝙳𝙴 𝙰𝚄𝙳𝙸𝙾𝚂 𝚂𝙸𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾", rowId: `${usedPrefix}enable audios`},
{title: "│🎧│𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙻𝙾𝚂 𝙰𝚄𝙳𝙸𝙾𝚂", description: "𝙴𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚊𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚛𝚎𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝙳𝙴 𝙰𝚄𝙳𝙸𝙾𝚂 𝚂𝙸𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾", rowId: `${usedPrefix}disable audios`},
{title: "│🎮│𝙶𝙰𝙼𝙴 ", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚍𝚎 𝚓𝚞𝚎𝚐𝚘𝚜 𝚙𝚊𝚛𝚊 𝚍𝚒𝚟𝚎𝚛𝚝𝚒 𝚝𝚞 𝚐𝚛𝚞𝚙𝚘", rowId: `${usedPrefix}juegosdelgrupo`},
{title: "│🎑│𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝙳𝙾𝚁𝙴𝚂️", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚙𝚊𝚛𝚊 𝚌𝚛𝚎𝚊 𝚌𝚘𝚗𝚟𝚎𝚛𝚝𝚒𝚍𝚘𝚛𝚎𝚜", rowId: `${usedPrefix}convertidores`},
{title: "│🏢│𝙶𝚁𝚄𝙿", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚍𝚎 𝚖𝚎𝚗𝚞 𝚍𝚎 𝚐𝚛𝚞𝚙𝚘", rowId: `${usedPrefix}paraGroup`},
{title: "│📣│𝙳𝙴𝚃𝙴𝙲𝚃", description: "𝙴𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚊𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚛𝚎𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙰𝚂 𝙽𝙾𝚃𝙸𝙵𝙸𝙲𝙰𝙲𝙸𝙾𝙽𝙴𝚂 𝙳𝙴 𝙽𝚄𝙴𝚅𝙰 𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙰𝙲𝙸𝙾𝙽 𝙴𝙽 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}enable detect`},
{title: "│📢│𝙳𝙴𝚃𝙴𝙲𝚃", description: "𝙴𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚊𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚛𝚎𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙻𝙰𝚂 𝙽𝙾𝚃𝙸𝙵𝙸𝙲𝙰𝙲𝙸𝙾𝙽𝙴𝚂 𝙳𝙴 𝙽𝚄𝙴𝚅𝙰 𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙰𝙲𝙸𝙾𝙽 𝙴𝙽 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}disable detect`},
{title: "│🎟️│𝚃𝚄𝚃𝙾𝚁𝙸𝙰𝙻 𝙳𝙴 𝙽𝚄𝙼𝙴𝚁𝙾𝚂 𝚅𝙸𝚁𝚃𝚄𝙰𝙻𝙴𝚂", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚍𝚎 𝚒𝚗𝚜𝚝𝚊𝚕𝚊𝚌𝚒ó 𝚙𝚊𝚛𝚊 𝚌𝚛𝚎𝚊𝚛 𝚗ú𝚖𝚎𝚛𝚘𝚜 𝚟𝚒𝚛𝚝𝚞𝚊𝚕𝚎𝚜", rowId: `${usedPrefix}creatunumero`},
{title: "│🏧│𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝚃𝙴 𝙰 𝙼𝙸 𝙱𝙰𝚂𝙴𝙱𝙳𝙰𝚃𝙾𝚂", description: "𝚃𝚎 𝚒𝚗𝚟𝚒𝚝𝚘 𝚊 𝚛𝚎𝚐𝚒𝚜𝚝𝚛𝚊𝚛𝚝𝚎 𝚙𝚊𝚛𝚊 𝚚𝚞𝚎 𝚎𝚜𝚝é𝚜 𝚎𝚗 𝚖𝚒 𝚋𝚊𝚜𝚎 𝚍𝚎 𝚍𝚊𝚝𝚘𝚜 𝚍𝚎𝚕 𝚋𝚘𝚝 𝚛𝚎𝚐𝚒𝚜𝚝𝚎𝚛", rowId: `${usedPrefix}verificar`},
{title: "│🎴│𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙻𝙾𝚂 𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝚂", description: "𝙴𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚊𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚛𝚎𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝚃𝙾𝙳𝙰𝚂 𝙻𝙰𝚂 𝙸𝙼𝙰𝙶𝙴𝙽𝙴𝚂, 𝚅𝙸𝙳𝙴𝙾𝚂 𝙾 𝙴𝙽𝙻𝙰𝙲𝙴𝚂 𝙴𝙽𝚅𝙸𝙰𝙳𝙾𝚂 𝚂𝙴 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝙽 𝙴𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁", rowId: `${usedPrefix}enable autosticker`},
{title: "│🧧️│𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙻𝙾𝚂 𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝚂", description: "𝙴𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚊𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚛𝚎𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝚃𝙾𝙳𝙰𝚂 𝙻𝙰𝚂 𝙸𝙼𝙰𝙶𝙴𝙽𝙴𝚂, 𝚅𝙸𝙳𝙴𝙾𝚂 𝙾 𝙴𝙽𝙻𝙰𝙲𝙴𝚂 𝙴𝙽𝚅𝙸𝙰𝙳𝙾𝚂 𝚂𝙴 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝙽 𝙴𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁", rowId: `${usedPrefix}disable autosticker`},
{title: "│🕋│𝙿𝚁𝙴𝙽𝙳𝙴𝚁 𝚈 𝙰𝙿𝙰𝙶𝙰𝚁", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚍𝚎𝚊𝚌𝚝𝚒𝚟𝚊𝚌𝚒ó𝚗 𝚢 𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚛", rowId: `${usedPrefix}enable`},
{title: "│🖼│𝙸𝙼𝙰𝙶𝙴", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚍𝚎 𝚋𝚞𝚜𝚚𝚞𝚎𝚍𝚊 𝚍𝚎 𝚒𝚖𝚊𝚐𝚎𝚗𝚎𝚜", rowId: `${usedPrefix}buscadores`},
{title: "│🎙│𝙿𝙴𝙽𝙶𝚄𝙱𝙰𝙷 𝚂𝚄𝙰𝚁𝙰", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚍𝚎 𝚎𝚏𝚎𝚌𝚝𝚘𝚜", rowId: `${usedPrefix}suara`},
{title: "│📑│𝚀𝚄𝙾𝚃𝙴𝚂", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚍𝚎 𝚕𝚘𝚐𝚘𝚜", rowId: `${usedPrefix}Quotes`},
{title: "│🌱│𝚁𝙿𝙶", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚍𝚎 𝚎𝚡𝚙", rowId: `${usedPrefix}expp`},
{title: "│📡│𝙲𝚄𝙴𝙽𝚃𝙰𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻𝙴𝚂 𝙳𝙴𝙻 𝙱𝙾𝚃", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚍𝚎 𝚕𝚊𝚜 𝚌𝚞𝚎𝚗𝚝𝚊𝚜 𝚘𝚏𝚒𝚌𝚒𝚊𝚕𝚎𝚜 𝚍𝚎𝚕 𝚋𝚘𝚝", rowId: `${usedPrefix}cuentasoficiales`},
{title: "│📴│𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 ", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚍𝚎 𝚊𝚙𝚊𝚐𝚊𝚛 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜", rowId: `${usedPrefix}enable simi`},
{title: "│🏧│𝙻𝙰 𝚅𝙴𝙻𝙾𝙲𝙸𝙳𝙰𝙳 𝙳𝙴𝙻 𝙱𝙾𝚃", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚟𝚎𝚕𝚘𝚌𝚒𝚍𝚊𝚍 𝚍𝚎𝚕 𝚋𝚘𝚝", rowId: `${usedPrefix}ping`},
{title: "│🎧│𝙰𝚄𝙳𝙸𝙾𝚂", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚍𝚎 𝚊𝚞𝚍𝚒𝚘𝚜", rowId: `${usedPrefix}audios`},
{title: "│🌎|𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙴𝙽 𝙼𝙾𝙳𝙾 𝙿𝚄𝙱𝙻𝙸𝙲𝙾", description: "𝙰𝙲𝚃𝙸𝚅𝙰𝚁𝙴𝙻 𝙱𝙾𝚃 𝚂𝙴 𝚅𝚄𝙴𝙻𝚅𝙴 𝙳𝙴 𝚄𝚂𝙾 𝙿𝚄𝙱𝙻𝙸𝙲𝙾 𝚈/𝙾 𝙿𝚁𝙸𝚅𝙰𝙳𝙾", rowId: `${usedPrefix}enable public`},
{title: "│🎑|𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙴𝙻 𝙼𝙾𝙳𝙾 𝙿𝚄𝙱𝙻𝙸𝙲𝙾 ", description: "𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙴𝙻 𝙱𝙾𝚃 𝚂𝙴 𝚅𝚄𝙴𝙻𝚅𝙴 𝙳𝙴 𝚄𝚂𝙾 𝙿𝚄𝙱𝙻𝙸𝙲𝙾 𝚈/𝙾 𝙿𝚁𝙸𝚅𝙰𝙳𝙾", rowId: `${usedPrefix}disable public`}, 
{title: "│🧼│𝙷𝙴𝙽𝚃𝙰𝙸", description: "𝙼𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚍𝚎 𝚖𝚎𝚗𝚞 +18", rowId: `${usedPrefix}hornymenu`},
{title: "│🥵│𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙼𝙾𝙳𝙾 𝙷𝙾𝚁𝙽𝚈", description: "𝙴𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚊𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚛𝚎𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 𝙰𝙲𝚃𝙸𝚅𝙰  𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +𝟷𝟾", rowId: `${usedPrefix}enable modohorny`},
{title: "│🥶│𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙼𝙾𝙳𝙾 𝙷𝙾𝚁𝙽𝚈", description: "𝙴𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚊𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚛𝚎𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +𝟷𝟾", rowId: `${usedPrefix}disable modohorny`},
{title: "│🛠│𝚃𝙾𝙾𝙻𝚂 𝙼𝙴𝙽𝚄", description: "𝙼𝚞𝚎𝚜𝚝𝚛𝚊 𝚎𝚕 𝚖𝚎𝚗𝚞 𝚑𝚎𝚛𝚛𝚊𝚖𝚒𝚎𝚗𝚝𝚊𝚜", rowId: `${usedPrefix}herramientas`},
{title: "│💬│𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙿𝙲𝙾𝙽𝙻𝚈", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙲𝙷𝙰𝚃 𝙿𝚁𝙸𝚅𝙰𝙳𝙾", rowId: `${usedPrefix}enable gconly`},
{title: "│📔│𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙶𝙲𝙾𝙽𝙻𝚈", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}disable gconly`}, 
{title: "│🏢│𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙶𝙲𝙾𝙽𝙻𝚈", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}enable gconly`},
{title: "│🏛️│𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙶𝙲𝙾𝙽𝙻𝚈", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙲𝙷𝙰𝚃 𝙿𝚁𝙸𝚅𝙰𝙳𝙾", rowId: `${usedPrefix}disable gconly`}, 
{title: "│📌│𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚂𝙸 𝙱𝙾𝚃", description: "𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚎𝚕 𝚖𝚎𝚗𝚞 𝚍𝚎 𝚒𝚗𝚏𝚘𝚛𝚖𝚊𝚌𝚒ó𝚗", rowId: `${usedPrefix}infobot`},          

]}, ] 

let name = await conn.getName(m.sender)

//let name = conn.getName(m.sender)

const listMessage = {

text: `
╭─────────────────────❀\n│${ucapan()}\n│💚•.¸💚¸.• *${name}* •.¸💚¸.•💚\n╰─────────────────────

╔═══〔 *${wm}* 〕═══⬣
║ ⏱️ ▢ *Hora actual | Current Time*	    
║ ⌚ ▢ ${time}   
║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
║ ⚡ ▢ *Activo durante | Active during* 
║ ⚡ ▢ ${uptime}
║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
║ 💎 ▢ *Versión de 𝑉𝐼𝑅𝑈𝑍𝑍-𝐵𝑂𝑇*
║ 💎 ▢ ${vs}
║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
║ 👥 ▢ *Usuario(s) | Users*
║ 💫 ▢ ${Object.keys(global.db.data.users).length} 
║┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
╚══════════════════⬣`, footer: `${wm}`, 
//${name} ${ucapan()}

title: null,

buttonText: "🔰 𝗦𝗘𝗟𝗘𝗖𝗖𝗜𝗢𝗡𝗘 𝗔𝗤𝗨𝗜 🔰", 

sections }

await conn.sendMessage(m.chat, listMessage)

}

handler.help = ['en', 'dis'].map(v => v + 'able <option>')

handler.tags = ['group', 'owner']

handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i

handler.exp = 20

handler.register = true

export default handler

function clockString(ms) {

  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)

  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60

  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60

  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')

}

function ucapan() {

  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto

  let res = "🌉Buenas madrugadas|Good early morning🌠"

  if (time >= 4) {

    res = "🌇Buenos Días|Good Morning⛅"

  }

  if (time >= 11) {

    res = "🏙️Buenas Tardes|Good Afternoon🌤️"

  }

  if (time >= 15) {

    res = "🌆Buenas tardes|Good Afternoon🌥️"

  }

  if (time >= 17) {

    res = "🌃Buenas noches|Good Evening💫"

  }

  return res

}

