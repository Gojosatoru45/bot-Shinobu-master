import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help8',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'extras',
            usage: `${client.config.prefix}help8 (command_name)`,
            dm: true,
            aliases: ['h8']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://c.tenor.com/GYjYgE-UCEgAAAPo/shinobu-kocho-dance.mp4'
        ]
        let well = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: well }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `-Creation ๐ป๐ธ๐๐๐๐
โโโโโโโโโโโโโโ
๐ฎ ${this.client.config.prefix}tneon
๐ฎ ${this.client.config.prefix}greenneon
๐ฎ ${this.client.config.prefix}tech
๐ฎ ${this.client.config.prefix}lovewall
๐ฎ ${this.client.config.prefix}devil
๐ฎ ${this.client.config.prefix}thunder
๐ฎ ${this.client.config.prefix}glitch
๐ฎ ${this.client.config.prefix}horror
๐ฎ ${this.client.config.prefix}cloud
๐ฎ ${this.client.config.prefix}firework
๐ฎ ${this.client.config.prefix}blood
๐ฎ ${this.client.config.prefix}loveneon
๐ฎ ${this.client.config.prefix}advanceglow
๐ฎ ${this.client.config.prefix}graffiti
๐ ${this.client.config.prefix}snow
๐ ${this.client.config.prefix}snowc
๐ ๐๐๐๐๐ (โฟโง_โฆ)
๏น๏น๏น๏น๏น๏น๏น๏น๏น๏น๏น๏น๏น
    แดกสแดแด๊ฑแดแดแด สแดแด แดแดแดกแดสแดแด สส ษดแดสแดแดแดใฉ

๏นสแดแดแด สแดแด แดสส สแดแด แด แด แดกแดษดแดแดส๊ฐแดส แดแดส๏น
๏น๏น๏น๏น๏น๏น๏น๏น๏น๏น๏น๏น๏น` }
        )
    }
}
