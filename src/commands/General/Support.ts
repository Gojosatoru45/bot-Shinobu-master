import { MessageType, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'support',
            aliases: ['support'],
            description: 'Gets the support group links',
            category: 'general',
            usage: `${client.config.prefix}Support`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        (await this.client.sendMessage(
        M.sender.jid,
        `
       *OWNERS GROUP* *https://chat.whatsapp.com/D8sGt6WHQGb6XqRgqzqSap*
       *GROUP FOR GAMBLE *https://chat.whatsapp.com/C7J8oL0vqlW3qPinpkS3Zy*`,
           MessageType.text
        ))
        const n = [
            'https://c.tenor.com/OICeyk_kBM4AAAPo/shinobu-kocho-demon-slayer.mp4'
        ]
        let beckylynch = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url:beckylynch }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `To Join The Owners Group, Please Check Your DMs \n` }
        )

        }
}
