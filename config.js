import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

//cambia los nΓΊmeros que sean propietarios 
global.owner = [
  ['593959425714', 'π°  ππΌππππ-π΅ππ - Creador de β πβπΊπβ―ππβ―π΅παͺ£π­β―πΉβ―πβ€ π°', true],
  ['595986674310', 'π°  ππΌππππ-π΅ππ -  creador de  ππΌππππ-π΅ππ π°', true],
  ['584124807309', 'π°  ππΌππππ-π΅ππ - Colaborator 1 π°', true],

] 
global.suittag = ['595986674310'] 
global.mods = [] 
global.prems = [] 

global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  pencarikode: 'https://pencarikode.xyz',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  hardianto: 'http://hardianto-chan.herokuapp.com',
  shadow: 'https://api.reysekha.xyz',
  apialc: 'https://api-alc.herokuapp.com',
  botstyle: 'https://botstyle-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  ana: 'https://anabotofc.herokuapp.com/',
  kanx: 'https://kannxapi.herokuapp.com/',
  dhnjing: 'https://dhnjing.xyz',
  violetics: 'https://violetics.pw'
},
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api-alc.herokuapp.com': 'ConfuMods',
  'https://api.reysekha.xyz': 'apirey',
  'https://melcanz.com': 'F3bOrWzY',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://api.xteam.xyz': '5bd33b276d41d6b4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.lolhuman.xyz': '9b817532fadff8fc7cb86862',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://violetics.pw': 'beta'
}

//______________________________________________

global.vs = '1.2.15'
global.version = vs
// Sticker WM
global.packname = '(β’αβ’)'
global.author = 'ππΌππππ-π΅ππ'
global.wm = 'ππΌππππ-π΅ππ | ππΌππππ-ππΉπΆ'
global.igfg = 'ππΌππππ-π΅ππ'
global.wait = '*[β] Ζα΄ΚΙ’α΄Ι΄α΄α΄, α΄Ι’α΄α΄Κα΄α΄ α΄Ι΄ α΄α΄α΄α΄Ι΄α΄α΄...*'
//-------------------
global.md = 'https://chat.whatsapp.com/JrOSgGh4XaFBlB3uYI2aqI'
global.dorramd = md

//_____________________________________________

global.ag = 'βββββββ β π°π³ππ΄πππ΄π½π²πΈπ° | ππ°ππ½πΈπ½πΆ β βββββββββ'
global.advertencia = ag
global.fg = 'ββββββββ β οΈ π΅π°π»π»πΎ | π΅π°π»π» β οΈ βββββββ'
global.fallo = fg
global.mg = 'ββ β π»πΎ πππΎ πΌπ°π» β ββ'
global.mal = mg
global.dorre = 'ππΌππππ-π΅ππ'
global.DORRA = dorre
//---------------
global.imagen1 = fs.readFileSync('./Menu2.jpg')
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg') 
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png')
global.keysZens = ['fiktod', 'c2459db922', 'BF39D349845E', '675e34de8a', '37CC845916', '0b917b905e6f', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.lolkeysapi = ['85faf717d0545d14074659ad']

                 
//β± βββββββββββββββββ.β RPG β.ββββββββ β°

global.flaaa = [

'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',

'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',

'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',

'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',

'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']

global.cmenut = 'βββββββγ'

global.cmenub = 'ββ¦ '

global.cmenuf = 'ββββββββββββΰΉ\n'

global.cmenua = '\nβ ββββββββββββββββββββββββββββββββ β\n     '

global.htki = '*β­β’Μ©Μ©Νβ±β’β’β’β’ βͺ*'

global.htka = '*βͺ β’β’β’β’Μ©Μ©Νβ°β’β­*'

global.comienzo = 'β’ β’ ββββββ'

global.fin = 'ββββββ β’ β’'




//βββββββββββββββββββββββββββββββββββ ΰΈ^β’ο»β’^ΰΈ

global.multiplier = 999 // Cuanto mΓ‘s alto, mΓ‘s difΓ­cil subir de nivel | The higher, The harder levelup 

//Emojis RPG
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      agility: 'π€ΈββοΈ Agilidad : Agility',
      arc: 'πΉ Arco : Arc',
      armor: 'π₯Ό Armadura : Armor',
      ayam: 'π Pollo : Chicken',
      //armordurability: 'π€Ί ',
      babi: 'π Puerco : Pig',
      bank: 'π¦ Banco : Bank',
      Jabali: 'π JabalΓ­ : Wild Boar',
      bibitanggur: 'π Semilla de Uva : Grapeseed',
      bibitapel: 'π Semilla de Manzana : Apple Seed',
      bibitjeruk: 'π Semillas de naranja : Orange Seeds',
      bibitmangga: 'π₯­ Semilla de Mango : Mango Seed',
      bibitpisang: 'π Semillas de PlΓ‘tano : Banana Seeds',
      bow: 'πΉ Super Arco : Super Bow',
      bull: 'π Toro : Bull',    
      buaya: 'π Cocodrilo : Alligator',    
      cat: 'π Gato : Cat',      
      centaur: 'π Centauro : Centaur',
      chicken: 'π Pollo : Chicken',
      common: 'π¦ Caja ComΓΊn : Common Box',
      cow: 'π Vaca : Cow',
      crystal: 'π? Cristal : Crystal',
      darkcrystal: 'β οΈ Cristal Oscuro : Dark Glass',
      diamond: 'π+ Diamante+ : Diamond+',
      dog: 'π Perro : Dog',
      dragon: 'π DragΓ³n : Dragon',
      elephant: 'π Elefante : Elephant',
      emerald: 'π Esmeralda : Emerald',
      exp: 'β‘ Experiencia : Exp',
      fishingrod: 'π£ CaΓ±a de Pescar : Fishing Rod',
      fox: 'π¦ Zorro : Fox',
      gems: 'π Gemas : Gemas',
      giraffe: 'π¦ Jirafa : Giraffe',
      griffin: 'π¦ Ave : Griffin', //Mascota : Griffin',
      gold: 'π Oro : Gold',
      health: 'β€οΈ Salud : Health',
      horse: 'π Caballo : Horse',
      intelligence: 'π§  Inteligencia : Intelligence',
      iron: 'βοΈ Hierro : Iron',
      kambing: 'π Cabra : Goat',
      keygold: 'π Llave de Oro : Key Gold',
      keyiron: 'ποΈ Llave de Hierro : Key Iron',
      kerbau: 'π BΓΊfalo : Buffalo',
      kyubi: 'π Magia : Magic',
      knife: 'πͺ Cuchillo : Knife',
      legendary: 'π Caja Legendaria : Legendary Box',
      level: 'π§¬ Nivel : Level',
      limit: 'π Diamante : Diamond',
      lion: 'π¦ LeΓ³n : Lion',
      magicwand: 'βοΈ Varita MΓ‘gica : Magic Wand',
      mana: 'πͺ Hechizo : Spell',
      money: 'π± GataCoins : CatCoins',
      monyet: 'π Mono : Monkey',
      mythic: 'π³οΈ Caja MΓ­tica : Mythic Box',
      panda: 'πΌ Panda',
      pet: 'π± Caja para Mascota : Pet Box',
      petFood: 'π Alimento para Mascota : Pet Food',
      pickaxe: 'βοΈ Pico : Peak',
      pointxp: 'π§ Puntos Exp : Point Xp',
      potion: 'π₯€ PociΓ³n : Potion',
      phonix: 'ποΈ FΓ©nix : Phoenix',
      rhinoceros: 'π¦ Rinoceronte : Rhinoceros',
      rock: 'πͺ¨ Roca : Rock',
      robo: 'π Robo : Robo',
      snake: 'π Serpiente : Snake',
      stamina: 'π¦Ύ Aguante : Stamina',
      strength: 'π¦Ήβ βοΈ Fuerza : Strength',
      string: 'πΈοΈ Cuerda : Cuerda',
      superior: 'πΌ Superior : Superior',
      sword: 'βοΈ Espada : Sword',
      tiger: 'π Tigre : Tiger',
      joincount: 'πͺ Token',
      trash: 'π Basura : Trash',
      uncommon: 'π₯‘ Caja Poco ComΓΊn : Uncommon',
      upgrader: 'π§° Aumentar Mejora : Upgrade',
      wolf: 'πΊ Lobo : Wolf',
      wood: 'πͺ΅ Madera : Wood'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

global.rpgg = { //Solo emojis 
  emoticon(string) {
    string = string.toLowerCase()
    let emott = {
      agility: 'π€ΈββοΈ',
      arc: 'πΉ',
      armor: 'π₯Ό',
      ayam: 'π',
      //armordurability: 'π€Ί ',
      babi: 'π',
      bank: 'π¦',
      Jabali: 'π',
      bibitanggur: 'π',
      bibitapel: 'π',
      bibitjeruk: 'π',
      bibitmangga: 'π₯­',
      bibitpisang: 'π',
      bow: 'πΉ',
      bull: 'π',
      buaya: 'π',  
      cat: 'π',      
      centaur: 'π',
      chicken: 'π',
      common: 'π¦',
      cow: 'π',
      crystal: 'π?',
      darkcrystal: 'β οΈ',
      diamond: 'π+',
      dog: 'π',
      dragon: 'π',
      elephant: 'π',
      emerald: 'π',
      exp: 'β‘',
      fishingrod: 'π£',
      fox: 'π¦',
      gems: 'π',
      giraffe: 'π¦',
      griffin: 'π¦',
      gold: 'π',
      health: 'β€οΈ',
      horse: 'π',
      intelligence: 'π§ ',
      iron: 'βοΈ',
      kambing: 'π',
      keygold: 'π',
      keyiron: 'ποΈ',
      kerbau: 'π',
      kyubi: 'π',
      knife: 'πͺ',
      legendary: 'π',
      level: 'π§¬',
      limit: 'π',
      lion: 'π¦',
      magicwand: 'βοΈ',
      mana: 'πͺ',
      money: 'π±',
      monyet: 'π',
      mythic: 'π³οΈ',
      panda: 'πΌ',
      pet: 'π±',
      petFood: 'π',
      pickaxe: 'βοΈ',
      pointxp: 'π§',
      potion: 'π₯€',
      phonix: 'ποΈ',
      rhinoceros: 'π¦',
      rock: 'πͺ¨',
      robo: 'π',
      snake: 'π',
      stamina: 'π¦Ύ',
      strength: 'π¦Ήβ βοΈ',
      string: 'πΈοΈ',
      superior: 'πΌ',
      sword: 'βοΈ',
      tiger: 'π',
      joincount: 'πͺ',
      trash: 'π',
      uncommon: 'π₯‘',
      upgrader: 'π§°',
      wolf: 'πΊ',
      wood: 'πͺ΅'      
    }
    let results = Object.keys(emott).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emott[results[0][0]]
  }
}


global.rpgshop = { //Tienda
  emoticon(string) {
    string = string.toLowerCase()
    let emottt = {
      exp: 'β‘ Experiencia : Exp',
      limit: 'π Diamante : Diamond',
      diamond: 'π+ Diamante+ : Diamond+',
      joincount: 'πͺ Token',
      emerald: 'π Esmeralda : Emerald',
      berlian: 'β¦οΈ Joya : Ruby',
      kyubi: 'π Magia : Magic',
      gold: 'π Oro : Gold',
      money: 'π± GataCoins : CatCoins',
      tiketcoin: 'π« Gata Tickers',
            
      potion: 'π₯€ PociΓ³n : Potion',
      aqua: 'π§ Agua : Water',
      trash: 'π Basura : Trash',
      wood: 'πͺ΅ Madera : Wood',
      rock: 'πͺ¨ Roca : Rock',
      batu: 'π₯ Piedra : Stone',
      string: 'πΈοΈ Cuerda : Cuerda',
      iron: 'βοΈ Hierro : Iron',
      coal: 'β±οΈ CarbΓ³n : Coal',
      botol: 'πΆ Botella : Bottle',
      kaleng: 'π₯« Lata : Can',
      kardus: 'πͺ§ CartΓ³n : Paperboard',
      
      eleksirb: 'π‘ Electricidad : Electricity',
      emasbatang: 'γ½οΈ Barra de Oro : Gold bar',
      emasbiasa: 'π§­ Oro ComΓΊn : Common Gold',
      rubah: 'π¦π«οΈ Zorro Grande : Big Fox',
      sampah: 'ππ«οΈ Super Basura : Big Trash',
      serigala: 'πΊπ«οΈ Super Lobo : Big Wolf',
      kayu: 'π· Super Madera : Super Wood',
      sword: 'βοΈ Espada : Sword',
      umpan: 'πͺ± Carnada : Bait', 
      healtmonster: 'πΊ Salud Maligna : Evil Health',
      pancingan: 'πͺ Gancho : Hook',
       
      common: 'π¦ Caja ComΓΊn : Common Box',
      uncommon: 'π₯‘ Caja Poco ComΓΊn : Uncommon',
      mythic: 'π³οΈ Caja MΓ­tica : Mythic Box',
      pet: 'π« Caja de Mascotas : Pet Box',//?
      gardenboxs: 'π Caja de JardinerΓ­a : Garden boxs',//?
      legendary: 'π Caja Legendaria : Legendary Box',
      
      anggur: 'π Uva : Grape',
      apel: 'π Manzana : Apple',
      jeruk: 'π Naranja : Orange',
      mangga: 'π₯­ Mango',
      pisang: 'π Platano : Banana',
      
      bibitanggur: 'πΎπ Semillas de uva : Grape Seeds',
      bibitapel: 'πΎπ Semillas de manzana : Apple seeds',
      bibitjeruk: 'πΎπ Semillas de naranja : Orange Seeds',
      bibitmangga: 'πΎπ₯­ Semillas de Mango : Mango Seeds',
      bibitpisang: 'πΎπ Semillas de plΓ‘tano : Banana Seeds',
      
      centaur: 'π Centauro : Centaur',
      griffin: 'π¦ Ave : Griffin',
      kucing: 'π Gato : Cat',
      naga: 'π DragΓ³n : Dragon',
      fox: 'π¦ Zorro : Fox',
      kuda: 'π Caballo : Horse',
      phonix: 'ποΈ FΓ©nix : Phoenix',
      wolf: 'πΊ Lobo : Wolf',
      //gardenboc:
      //ketake:
      //koinexpg: 
      petFood: 'π Alimento para Mascota : Pet Food', //?
      makanancentaur: 'ππ₯© Comida de Centauro : Centauro Food',
      makanangriffin: 'π¦π₯© Comida de Ave : Griffin Food',
      makanankyubi: 'ππ₯© Comida MΓ‘gica : Magic Food',
      makanannaga: 'ππ₯© Comida de DragΓ³n : Dragon Food',
      makananpet: 'π±π₯© Alimentos de mascotas: Pet Food',
      makananphonix: 'ποΈπ₯© Comida de FΓ©nix : Phoenix Food'  
    }
    let results = Object.keys(emottt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emottt[results[0][0]]
  }
}

global.rpgshopp = { //Tienda
  emoticon(string) {
    string = string.toLowerCase()
    let emotttt = {
      exp: 'β‘',
      limit: 'π',
      diamond: 'π+',
      joincount: 'πͺ',
      emerald: 'π',
      berlian: 'β¦οΈ',
      kyubi: 'π',
      gold: 'π',
      money: 'π±',
      tiketcoin: 'π«',
            
      potion: 'π₯€',
      aqua: 'π§',
      trash: 'π',
      wood: 'πͺ΅',
      rock: 'πͺ¨',
      batu: 'π₯',
      string: 'πΈοΈ',
      iron: 'βοΈ',
      coal: 'β±οΈ',
      botol: 'πΆ',
      kaleng: 'π₯«',
      kardus: 'πͺ§',
      
      eleksirb: 'π‘',
      emasbatang: 'γ½οΈ',
      emasbiasa: 'π§­',
      rubah: 'π¦π«οΈ',
      sampah: 'ππ«οΈ',
      serigala: 'πΊπ«οΈ',
      kayu: 'π·',
      sword: 'βοΈ',
      umpan: 'πͺ±', 
      healtmonster: 'πΊ',
      pancingan: 'πͺ',
       
      common: 'π¦',
      uncommon: 'π₯‘',
      mythic: 'π³οΈ',
      pet: 'π«',//?
      gardenboxs: 'π',//?
      legendary: 'π',
      
      anggur: 'π',
      apel: 'π',
      jeruk: 'π',
      mangga: 'π₯­',
      pisang: 'π',
      
      bibitanggur: 'πΎπ',
      bibitapel: 'πΎπ',
      bibitjeruk: 'πΎπ',
      bibitmangga: 'πΎπ₯­',
      bibitpisang: 'πΎπ',
      
      centaur: 'π',
      griffin: 'π¦',
      kucing: 'π',
      naga: 'π',
      fox: 'π¦',
      kuda: 'π',
      phonix: 'ποΈ',
      wolf: 'πΊ',
      //gardenboc:
      //ketake:
      //koinexpg: 
      petFood: 'π', //?
      makanancentaur: 'ππ₯©',
      makanangriffin: 'π¦π₯©',
      makanankyubi: 'ππ₯©',
      makanannaga: 'ππ₯©',
      makananpet: 'π±π₯©',
      makananphonix: 'ποΈπ₯©'  
    }
    let results = Object.keys(emotttt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emotttt[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
