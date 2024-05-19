import cron from "node-cron";
import {EmbedBuilder, Events, PresenceUpdateStatus} from 'discord.js';

import client from "./client.js";
import facts from "./Data/facts-new.json" assert {type: "json"};
import pics from "./Data/pics.json" assert {type: "json"};


client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
	client.user.setPresence(
		{
			activities: [
				{ name: 'Under Development' }
			],
			status: PresenceUpdateStatus.Online
		}
	);

	schedule();
});


function schedule() {
	cron.schedule("28 3 * * *", () => {
		console.log(`running every 30 seconds, ${Date()}!`);
		sendFact(client);
	});
}


client.login(process.env.TOKEN);


function sendFact(client) {
	const channel = client.channels.cache.get("910221001651003408");
	const fact = facts[Math.floor(Math.random() * facts.length)];

	const pic = pics[Math.floor(Math.random()*pics.length)];

	const embed = new EmbedBuilder()
		.setColor(0x4287f5)
		.setTitle("Fun fact about sharks!")
		.setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL()})
		.setDescription(fact.fact)
		.setTimestamp()
		.setFooter({text: `ID: ${fact.id} Note: Image may not have relevancy to fact.`})
		.setImage(pic);

	channel.send({embeds: [embed]});

}