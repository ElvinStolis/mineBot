// подключим библиотеку mineflayer
//const mineflayer = require('mineflayer');

let botArgs = {
    host: "mc.minelandy.com",     // айпи майнкрафт сервера
    //  port: 25565,         // прописывайте, если порт не 25565
    // version: 18,
    botName: "KiraChallenge",        // ник бота
    auth: "microsoft",      // необходимо для первого входа. для пираток нужно заменить на 'offline'
 };

class MFBot {
    constructor( botName = botArgs.botName ) {
        this.botName = botName;
        this.host = botArgs.host;
        if ( botArgs.port ) this.port = botArgs.port;
        if ( botArgs.version ) this.version = botArgs.version;
        if ( botArgs.auth ) this.auth = botArgs.auth;

        this.initBot();

    }

    initBot() {
        //Добавим объект бот при помощи функции createBot библиотеки mineflayer
        /*
        this.bot = mineflayer.createBot({
            username: this.botName,
            host: this.host,
            port: this.port
        })      //  */
        console.log('program running...')
    }


}

let mfBot = new MFBot();

