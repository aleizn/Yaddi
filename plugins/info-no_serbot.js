let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `
*[βππππβ] π»π°π π΅ππ½π²πΈπΎπ½π΄π πΏπ°ππ° ππ΄π π±πΎπ (#ππππππ, #πππππππ, #ππππ, #πππππππ, #πππππππ, #πππππππππ) π½πΎ π΄πππ°π½ π°π²πππ°π»πΌπ΄π½ππ΄ π΅ππ½π²πΈπΎπ½π°π»π΄π πΏπ°ππ° π΄πππ΄ π±πΎπ (πππ ππΌππππ-π΅ππ)*

*ββ πΏππ΄π³π΄ πΏππΎπ±π°π πΈπ½πππ°π»π°π π³π΄ππ³π΄ π²π΄ππΎ π΄π» π±πΎπ ππΈπΆππΈπ΄π½π³πΎ ππ½ tutorial de instalaciΓ³n*

*ββ ππππΎππΈπ°π» π°π²πΈπ³πΈπ²π½πΎπ³π΄π π·πΎππ*
> Tutorial:
entrar a la pagina acidicnodes.com registrarte con una cuenta de gmail, una vez registrado debes vincular tu cuenta de discord y verificar el correo, una vez hecho entrar al apartado de servidores, le da en crear uno, ponen nombre, eligen programing, seleccionan el nodo se recomienda el 2, una vez creado el servidor seleccionan "gestionar" los llevara a otra pagina, ponen su mismo correo y contra con la que se registraron, esperan a que pase la instalaciΓ³n,
luego entran a "Startup" le dan en "seleccionar aplicaciΓ³n" buscan [es] DIEGO-OFC/DORRAT-BOT-MD lo seleccionan, una vez seleccionado van a "settings" tocan en "reinstalle server" confirman y esperan que pase la instalaciΓ³n, luego tocan "console" y dan start escanean qr y listo.
_________________________
> Pagina: https://billing.acidicnodes.ml/register?ref=ADII104p
> Soporte: https://whatsapp.acidicnodes.com
_________________________

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
> npm start*`
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
'title': 'α΄Κ α΄α΄α΄α΄Κ Κα΄α΄ α΄α΄ α΄‘Κα΄α΄sα΄α΄α΄β©',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://youtube.com/channel/UClmUwNliV-LH_JKJXEj9M3g' }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}instalarbot`, buttonText: {displayText: 'πΈπ½πππ°π»π°ππ±πΎπ'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = /^(jadibot|serbot|bots|subbots|getcode)/i
export default handler

