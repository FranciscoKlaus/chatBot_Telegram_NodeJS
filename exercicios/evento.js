const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
    const from = ctx.update.message.from

    ctx.reply(`Seja bem vindo, ${from.first_name}!`)
    })

bot.on('text', ctx =>{
    ctx.reply(`Texto '${ctx.update.message.text}' recebido com sucesso!`)
})

bot.on('location', ctx =>{
    const location = ctx.update.message.location
    ctx.reply(`Entendido. Você está em:
    Lat: ${location.latitude},
    Long: ${location.longitude} !`)
})

bot.startPolling() 