const Telegraf = require('telegraf');

const app = new Telegraf("414752663:AAG0d1MDSQomeSaIpHYQjSK-D5J2bD9OhGk");
app.command('start', ({ from, reply }) => {
  console.log('start', from);
  return reply('Welcome!');
});
app.hears('hi', (ctx) => ctx.reply('Hey there!'));
app.on('sticker', (ctx) => ctx.reply('👍'));
app.startPolling();
