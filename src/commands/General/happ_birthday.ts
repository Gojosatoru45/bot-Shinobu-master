import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import request from '../../lib/request'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
                        command: "happy_birthday",
                        aliases: ["hbd", "hhp"],
			description: "use for birthday wish",
			category: "general",
			usage: `${client.config.prefix}happy_birthday`,
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
        if (M.quoted?.sender) M.mentioned.push(M.quoted.sender)
        const user = M.mentioned[0] ? M.mentioned[0] : M.sender.jid
        let username = user === M.sender.jid ? M.sender.username : ''
        if (!username) {
            const contact = this.client.getContact(user)
            username = contact.notify || contact.vname || contact.name || user.split('@')[0]
        }
        let pfp: string
        try {
            pfp = await this.client.getProfilePicture(user)
        } catch (err) {
            M.reply(`Profile Picture not Accessible of ${username}`)
            pfp =
                'https://static.wikia.nocookie.net/beb95eee-057e-43b8-b51d-86289bcccb39/scale-to-width/755'
        }
        await M.reply(
            await request.buffer(
                pfp ||
                    'https://o.remove.bg/downloads/ffddf1b0-0b2f-4c50-b561-4ffb1342cfb1/mg498n2v8pj81-removebg-preview.png'
            ),
            MessageType.image,
            undefined,
            undefined,
            `Happy Birthday My Friend,I Wish All Your Birthday Wishes And Dreams Come True.➽ 𝐍𝐀𝐑𝐔𝐓𝐎  *@${user.split('@')[0]}*\n\n`
        )
    }
}
