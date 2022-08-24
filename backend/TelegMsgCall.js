import TLGBOT from "node-telegram-bot-api";
const token="111";///token bot
const bot=new TLGBOT(token,{polling: true});

export default   function TelegMsgCall(message)
{
    const chatID="id"
    return new Promise ((res,rej)=>{
        bot.sendMessage(chatID,message,{parse_mode: 'HTML'})
        .then(()=>{
            res();
        })
        .catch((err)=>{rej(err)})
    })
}