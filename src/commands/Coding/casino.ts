import { MessageType, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'casino',
            aliases: ['support,casino'],
            description: 'Gets the group links',
            category: 'extras',
            usage: `${client.config.prefix}casino`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        (await this.client.sendMessage(
        M.sender.jid,
                `*Casino Group*\n\n
                 *𝐒𝐇𝐈𝐍𝐎𝐁𝐔(✿≧_≦): Fun Group:https://chat.whatsapp.com/GKJelH7jBqd6MJ6ulhFd6V\n\n
                 *𝐒𝐇𝐈𝐍𝐎𝐁𝐔(✿≧_≦): Gambling:*:https://chat.whatsapp.com/C7J8oL0vqlW3qPinpkS3Zy/n `,
           MessageType.text
        ))
        const n = [
            'https://c.tenor.com/ZkoEfBgFkIUAAAPo/shinobu.mp4'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `Send you the support group links in Personal Message\n` }
        )

        }
}
