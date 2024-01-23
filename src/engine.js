import {WechatyBuilder}  from 'wechaty'
import {WechatyWebPanelPlugin}  from 'wechaty-web-panel'
import {PuppetEngine} from 'wechaty-puppet-engine'


const name = 'wechat-assistant-engine';
let bot = ''
console.log('使用puppet-engine协议启动，默认使用大恩wxhook，请在windows 环境下使用')

bot = WechatyBuilder.build({
    name,
    puppet: new PuppetEngine({
        port: '8089', // 对应注入器中的 callBackUrl=http://localhost:8089/wechat/
        httpServer: 'http://127.0.0.1:8055', // 对应注入器参数port=8055
        runLocal: true
    })
});

bot.use(WechatyWebPanelPlugin({
    apiKey: 'a8c21c2f5d2545fd5be9bd0e56c28e47771d82d3', apiSecret: 'dc7168e860c6055b04a2567e1fdf189177e310db',
}))
bot.start()
    .catch((e) => console.error(e));
