const Telegraf = require('telegraf');

const app = new Telegraf("414752663:AAG0d1MDSQomeSaIpHYQjSK-D5J2bD9OhGk");
app.command('start', ({ from, reply }) => {
  console.log('start', from);
  return reply('Bienvenido al mejor Bot de citas de El Señor de los Anillos, Jorge!. Di "Llegas tarde" o manda un sticker');
});
app.hears('Llegas tarde', (ctx) => ctx.reply('Un mago nunca llega tarde. Ni pronto, llega exactamente cuando se lo propone.'));
app.on('sticker', (ctx) => ctx.reply('Mucho se perdió entonces pero nadie queda ahora para recordarlo.'));
app.startPolling();
