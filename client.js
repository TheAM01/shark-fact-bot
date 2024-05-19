import {Client, GatewayIntentBits as Intents, PresenceUpdateStatus} from "discord.js";

const client = new Client(
	{
		intents: [
			Intents.Guilds,
			Intents.GuildMessages,
		]
	}
);


export default client;