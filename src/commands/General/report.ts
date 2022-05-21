import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from "../../typings"; 

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'rep',
            aliases: ['report'],
            description: 'Get the group invite link',
            category: 'general',
            usage: `${client.config.prefix}invite`,
            baseXp: 10
        })
    }

    run = async (

		M: ISimplifiedMessage,		{ joined }: IParsedArgs

	): Promise<void> => {
        
             const term = joined.trim()
            await this.client.sendMessage(
               // enter your unique gid
`120363026609808492@g.us`,
                `〩𝐒𝐇𝐈𝐍𝐎𝐁𝐔 𝐁𝐎𝐓 𝐒𝐄𝐑𝐕𝐈𝐂𝐄〩\n\n ${term} by ${M.sender.username} \n
                   From : ${M.groupMetadata?.subject} `,
                MessageType.text
            );
            return void M.reply('Sent the bot admin your report To 𝐍𝐀𝐑𝐔𝐓𝐎 if you used this command for fun you will be banned!!')
        }}
