import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import moment from 'moment-timezone';

global.botnumber = ""
global.confirmCode = ""
global.authFile = `MysticSession`;

// Cambiar a true si el Bot responde a sus comandos con otros comandos.
// Cambiar a false para usar el Bot desde el mismo numero del Bot.
// Error de m.isBaileys marcado como false fix temporal
global.isBaileysFail = false

global.defaultLenguaje = 'es';

global.owner = [
  ['56933051937', '👑 Mystic - Creador 👑', true],
  ['56933051937', '💫 Mystic - Collaborator 2 💫', true],
  ['56933051937', '💫 Mystic - Collaborator 3 💫', true],
  ['56933051937', '💫 Mystic - Collaborator 4 💫', true],
  ['56933051937', '💫 Mystic - Collaborator 5 💫', true],
  ['56933051937', '💫 Mystic - Collaborator 6 💫', true],
  ['56933051937', '💫 Mystic - Rey Endymion 💫', false],
  ['56933051937', '💫 Mystic - Collaborator 8 💫', true],
  ['56933051937', '💫 Mystic - OfcDiego', true],
  ['56933051937', '💫 Mystic - By Alba070503 💫', true],
  ['56933051937', '💫 Mystic - Gabriel Ofc', true], 
  ['56933051937', '💫 Mystic - Tester Fabri115💫', true],
  ['56933051937', '💫 Mystic - Saad 💫', true], 
  ['56933051937', '💫 Mystic - Sarethh 💫', true],
  ['56933051937'],
  ['56933051937'],
  ['56933051937'],
  ['56933051937'],
  ['56933051937'], 
  ['56933051937'],  
  ['56933051937'],
  ['56933051937'],
  ['56933051937'],
  ['56933051937'], 
  ['56933051937'], 
  ['56933051937'],
  ['56933051937'],
  ['56933051937'],
  ['56933051937'],
  ['56933051937'], 
  ['56933051937'],
  ['56933051937'],
  ['56933051937'],
  ['56933051937'],
  ['56933051937'],
  ['56933051937']
];

global.suittag = ['56933051937'];
global.prems = ['56933051937'];

// API
global.BASE_API_DELIRIUS = "https://deliriusapi-official.vercel.app";

global.packname = 'Sticker';
global.author = 'https://www.instagram.com/clan_space_blank?igsh=Ymh3aXBzc2V5ZHE4';
global.wm = 'https://www.instagram.com/clan_space_blank?igsh=Ymh3aXBzc2V5ZHE4';
global.titulowm = 'https://www.instagram.com/clan_space_blank?igsh=Ymh3aXBzc2V5ZHE4';
global.titulowm2 = `https://www.instagram.com/clan_space_blank?igsh=Ymh3aXBzc2V5ZHE4`
global.igfg = 'https://www.instagram.com/clan_space_blank?igsh=Ymh3aXBzc2V5ZHE4';
global.wait = '*_[ ⏳ ] Cargando..._*';

/*global.imagen1 = fs.createReadStream('./src/assets/images/menu/languages/es/menu.png');
global.imagen2 = fs.createReadStream('./src/assets/images/menu/languages/pt/menu.png');
global.imagen3 = fs.createReadStream('./src/assets/images/menu/languages/fr/menu.png');
global.imagen4 = fs.createReadStream('./src/assets/images/menu/languages/en/menu.png');
global.imagen5 = fs.createReadStream('./src/assets/images/menu/languages/ru/menu.png');*/

global.imagen1 = fs.readFileSync('./src/assets/images/menu/languages/es/menu.png');
global.imagen2 = fs.readFileSync('./src/assets/images/menu/languages/pt/menu.png');
global.imagen3 = fs.readFileSync('./src/assets/images/menu/languages/fr/menu.png')
global.imagen4 = fs.readFileSync('./src/assets/images/menu/languages/en/menu.png')
global.imagen5 = fs.readFileSync('./src/assets/images/menu/languages/ru/menu.png')

global.mods = [];

//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `${dia} ${fecha}\nhttps://www.instagram.com/clan_space_blank?igsh=Ymh3aXBzc2V5ZHE4`;
global.gt = 'https://www.instagram.com/clan_space_blank?igsh=Ymh3aXBzc2V5ZHE4';
global.mysticbot = 'https://www.instagram.com/clan_space_blank?igsh=Ymh3aXBzc2V5ZHE4';
global.channel = 'https://whatsapp.com/channel/0029Vaein6eInlqIsCXpDs3y';
global.md = 'https://www.instagram.com/clan_space_blank?igsh=Ymh3aXBzc2V5ZHE4';
global.mysticbot = 'https://www.instagram.com/clan_space_blank?igsh=Ymh3aXBzc2V5ZHE4';
global.waitt = '*_[ ⏳ ] Cargando..._*';
global.waittt = '*_[ ⏳ ] Cargando..._*';
global.waitttt = '*_[ ⏳ ] Cargando..._*';
global.nomorown = '56933051937';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `*[ 📅 ] Fecha:*  ${moment.tz('America/Mexico_City').format('DD/MM/YY')}`;
global.bottime = `*[ ⏳ ] Hora:* ${moment.tz('America/Mexico_City').format('HH:mm:ss')}`;
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./src/assets/images/menu/languages/es/menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
