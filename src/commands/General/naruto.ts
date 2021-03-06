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
            caption: `đđČđđ I'm đĄđźđżđđđŒ just an ordinary guy who loves watching anime. I'm 16 years old and nothing more to say  
            
đđȘđ”đźđđđźđœđœ;
Wa.me/919645689911

đđȘđ”đźđđđźđœđœ đđżđŒđđœ;
https://chat.whatsapp.com/GKJelH7jBqd6MJ6ulhFd6V
 
đđđ»đđđźđŽđżđźđș;
https://www.instagram.com/l1lexe/
âȘŒđđŠđŠ đșđąđ` }
        )
    }
}
