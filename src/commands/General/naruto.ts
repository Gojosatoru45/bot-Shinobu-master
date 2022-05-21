import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'naruto',
            description: 'Displays info about naruto.',
            category: 'general',
            usage: `${client.config.prefix}savage`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://www.whatspaper.com/wp-content/uploads/2022/05/hd-naruto-wallpaper-whatspaper.jpg'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.image, {quoted:M.WAMessage,
            mimetype: Mimetype.jpeg,
            caption: `𝗛𝗲𝘆👋 I'm 𝗡𝗮𝗿𝘂𝘁𝗼 just an ordinary guy who loves watching anime. I'm 16 years old and nothing more to say  
            
🍀𝗪𝗵𝗮𝘁𝘀𝗮𝗽𝗽;
Wa.me/919645689911

🍀𝗪𝗵𝗮𝘁𝘀𝗮𝗽𝗽 𝗚𝗿𝗼𝘂𝗽;
https://chat.whatsapp.com/GKJelH7jBqd6MJ6ulhFd6V
 
🍀𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺;
https://www.instagram.com/l1lexe/
⪼𝘚𝘦𝘦 𝘺𝘢😌` }
        )
    }
}
