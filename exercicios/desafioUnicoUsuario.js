//verificar o usuário ID
//se o id for o consultado responder = Ao seu dispor mestre
//caso não seja o ID - responder = Sinto muito, mas eu só falo com meu mestre.

const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)
let idFrom = []

bot.start(ctx => {
    const from = ctx.update.message.from
    console.log(from.id)
    //if(ctx.update.message.from.id === 123){
    if(idFrom.indexOf(from.id) !== -1){
        ctx.reply(`Seja bem vindo, ${from.first_name}!`)
    }else{
        ctx.reply(`Sinto muito, mas eu só falo com o meu Mestre!`)
    }
    
})

bot.startPolling()