const Telegraf = require('telegraf');
const { Extra, Markup } = require('telegraf');
const fs = require ('fs');

const app = new Telegraf("414752663:AAG0d1MDSQomeSaIpHYQjSK-D5J2bD9OhGk");
var citas = {};

app.command('start', ({ from, reply }) => {
  console.log('start', from);

  fs.readFile("./citas.json", (err,data) =>{
    if(err) throw err;
    citas = JSON.parse(data);
    console.log(citas);
  });

  return reply('Bienvenido al mejor Bot de citas de El Señor de los Anillos, '+ from.first_name +'!. Di "Llegas tarde" o manda un sticker. También puedes usar el comando /personaje seguido del nombre');
});

function getRandomQuoteFrom(person){
  fs.readFile("./citas.json", (err,data) =>{
    if(err) throw err;
    citas = JSON.parse(data);
  });

  for(var i=0; i<citas.length; i++){

    if(citas[i].author == person){
      var random = Math.floor(Math.random() * citas[i].quotes.length);
      console.log(citas[i].quotes[random]);
      return citas[i].quotes[random];
    }
  }

  return '\"No inventes personajes, pequeño hobbit.\"';
};

function getRandomQuote(){
  var n = Math.floor(Math.random()*citas.length);
  var n2 = Math.floor(Math.random()*citas[n].quotes.length);
  return { author: citas[n].author, quote: citas[n].quotes[n2]};
};

app.command('/personaje', (ctx) => {
   // /character legolas
  var parts = ctx.message.text.split(" ");

  if(parts.length>1){
    var character = parts[1].toLowerCase();
  }else {
    var character = "";
  }
  console.log("character: " + character);
  if(character == "")
    ctx.reply('Escribe el nombre de algún personaje!!!');
  else{
    var cita = getRandomQuoteFrom(character);
    ctx.reply(cita);
  }
});

var frases = ['llegas tarde', 'Llegas tarde', 'llegas tarde.', 'Llegas tarde.'];

app.hears(frases, (ctx) => ctx.replyWithMarkdown('*Un mago nunca llega tarde. Ni pronto, llega exactamente cuando se lo propone.*'));
app.on('sticker', (ctx) => ctx.replyWithHTML('<i>Mucho se perdió entonces pero nadie queda ahora para recordarlo.</i>'));
app.startPolling();
