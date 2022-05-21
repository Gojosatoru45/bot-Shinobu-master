/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "shinobu",
			aliases:['shino'],
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}chitoge`,
                        modsOnly:true,
			baseXp: 200,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://c.tenor.com/OICeyk_kBM4AAAPo/shinobu-kocho-demon-slayer.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `𝐒𝐇𝐈𝐍𝐎𝐁𝐔✿\n\n *Description: 𝐓𝐇𝐄 𝐈𝐍𝐒𝐄𝐂𝐓 𝐇𝐀𝐒𝐇𝐈𝐑𝐀 𝐎𝐅 𝐓𝐇𝐄 𝐃𝐄𝐌𝐎𝐍 𝐒𝐋𝐀𝐘𝐄𝐑 𝐂𝐎𝐑𝐏𝐒*\n\n🐲 *insta : instagram.com/l1lexe/?hl=en* \n`,
			}
		);
	};
}
