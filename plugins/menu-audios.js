const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let name = await conn.getName(m.sender)
let str = `
*γπ π·πΎπ»π° _${name}_ πε½‘*

*<ππππ ππππππ/>*
*[β] π΄ππ²ππΈπ±π΄ π»π°π ππΈπΆππΈπ΄π½ππ΄π πΏπ°π»π°π±ππ°π πΎ π΅ππ°ππ΄π ππΈπ½ π½πΈπ½πΆππ½ πΏππ΄π΅πΈπΉπΎ (#, /, *, .)*

*[β] ALGUNOS AUDIOS SON NUEVOS, SI VE ALGUN TIPO DE FALLA REPΓRTELO CON #reporte <texto>*

βγπ΅ππππππγ
ββ’βΆοΈ _Quien es tu sempai botsito 7w7_
ββ’βΆοΈ _Te diagnostico con gay_
ββ’βΆοΈ _A nadie le importa_
ββ’βΆοΈ _Fiesta del admin_
ββ’βΆοΈ _Fiesta del administrador_ 
ββ’βΆοΈ _Vivan los novios_
ββ’βΆοΈ _Feliz cumpleaΓ±os_
ββ’βΆοΈ _Noche de paz_
ββ’βΆοΈ _Buenos dias_
ββ’βΆοΈ _Cambiate a Movistar 
ββ’βΆοΈ _Bienvenido_
ββ’βΆοΈ _Calla fan de bts_
ββ’βΆοΈ _Las reglas del grupo_
ββ’βΆοΈ _Buenos tardes_
ββ’βΆοΈ _Buenos noches_
ββ’βΆοΈ _Audio hentai_
ββ’βΆοΈ _Chica lgante_
ββ’βΆοΈ _Feliz navidad_
ββ’βΆοΈ _Vete a la vrg_
ββ’βΆοΈ _Pasa pack Bot_
ββ’βΆοΈ _Atencion grupo_
ββ’βΆοΈ_Marica quien_
ββ’βΆοΈ _Murio el grupo_
ββ’βΆοΈ _Oh me vengo_
ββ’βΆοΈ _tio que rico_
ββ’βΆοΈ _Viernes_
ββ’βΆοΈ _Baneado_
ββ’βΆοΈ _Sexo_
ββ’βΆοΈ _Hola_
ββ’βΆοΈ _Un pato_
ββ’βΆοΈ_Nyanpasu_
ββ’βΆοΈ _Te amo_
ββ’βΆοΈ _Yamete_
ββ’βΆοΈ _BaΓ±ate_
ββ’βΆοΈ _Es puto_
ββ’βΆοΈ _La biblia_
ββ’βΆοΈ _Onichan_
ββ’βΆοΈ _Mierda de Bot_
ββ’βΆοΈ _Siuuu_
ββ’βΆοΈ _Epico_
ββ’βΆοΈ _wtf_
ββ’βΆοΈ _Shitpost_
ββ’βΆοΈ _Rawr_
ββ’βΆοΈ _UwU_
ββ’βΆοΈ _:(
ββ’βΆοΈ _a_
βββββΧβΧβΧβΧββ
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/VIRUZOFC/DORRAT-TERMUX', 'ππΆπΈππ·ππ±', null, null, [
['πΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π»', '/menu']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menu2|audios|menΓΊ2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio)$/i
handler.fail = null
export default  handler
