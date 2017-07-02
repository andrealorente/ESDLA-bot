const Telegraf = require('telegraf');

const app = new Telegraf("414752663:AAG0d1MDSQomeSaIpHYQjSK-D5J2bD9OhGk");
app.command('start', ({ from, reply }) => {
  console.log('start', from);
  return reply('Bienvenido al mejor Bot de citas de El Señor de los Anillos, '+ from.first_name +'!. Di "Llegas tarde" o manda un sticker');
});
app.command('/character', (ctx) => {
   // /character legolas
  let parts = ctx.message.text.split(" ");

  if(parts.length>1)
    var character = parts[1].toLowerCase();
  else {
    var character = "";
  }

  if(character == "")
    ctx.reply('Escribe el nombre de algún personaje!!!');
  else{
    if(character == "legolas")
      ctx.reply('¡Se llevan a los hobbits a Isengard!');
    else if(character == "aragorn")
      ctx.reply('En este día lucharemos por todo aquello que nuestro corazón ama de esta buena tierra.');
    else if(character == "frodo")
      ctx.reply('Oh, Sam. <3');
    else if(character == "gandalf")
        ctx.reply('Con la primera luz del quinto día, al alba, mira al este.');
    else if(character == "bilbo")
      ctx.reply('No conozco a la mitad de vosotros la mitad de lo que desearía, y lo que deseo es menos de la mitad de lo que la mitad merecéis.');
  }
});

app.hears('Llegas tarde', (ctx) => ctx.reply('Un mago nunca llega tarde. Ni pronto, llega exactamente cuando se lo propone.'));
app.on('sticker', (ctx) => ctx.reply('Mucho se perdió entonces pero nadie queda ahora para recordarlo.'));
app.startPolling();
