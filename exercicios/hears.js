const env = require('../.env')
const Telegraf = require('telegraf')
const moment = require("moment")
const bot = new Telegraf(env.token)


bot.hears('pizza',  ctx => {
    ctx.reply("Quero!")
})

bot.hears(['fígado','chuchu'], ctx => {
    ctx.reply("Passo!")
})

bot.hears("🐷", ctx =>{
    ctx.reply("Humm, bacon!")
})

//expressão regular
//flag i ignora letras maiúsculas ou minúsculas
bot.hears(/burguer/i, ctx =>{
    ctx.reply("Quero!")
})


//array com expressão regular
bot.hears([/burguer/i,/brocolis/i,/salada/i], ctx =>{
    ctx.reply("Passo!")
})

//use regex to find date on text
//flag g é utilizada para achar global
bot.hears(/(\d{2}\/\d{2}\/\d{4})/g, ctx =>{
    moment.locale('pt-BR')
    const data = moment(ctx.match[1], 'DD/MM/YYYY')
    ctx.reply(`${ctx.match[1]} cai em ${data.format('dddd')}`)
})

bot.startPolling()