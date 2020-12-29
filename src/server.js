const tmi = require('tmi.js');
require('dotenv').config();

// const opts = {
//     identity: {
//         username: process.env.CLIENT_ID,
//         password: process.env.CLIENT_SECRET
//     },
//     channels: [
//         'nadflenders'
//     ]
// };

// const client = new tmi.client(opts);

// client.on('message', onMessageHandler);
// client.on('connected', onConnectedHandler);

// // Connect to Twitch:
// client.connect();

// // Called every time a message comes in
// function onMessageHandler (target, context, msg, self) {
//   if (self) { return; } // Ignore messages from the bot


//   // Remove whitespace from chat message
//   const commandName = msg.trim();
//  //   console.log(commandName);
//   // If the command is known, let's execute it
//   if (commandName === '#dicer') {
//     const num = rollDice();
//   //  console.log(num);
//     client.say(target, `You rolled a huhu`);
//     console.log(`* Executed ${commandName} command`);
//   } else {
//     console.log(`falsch`);
//   }
// }


// // Function called when the "dice" command is issued
// function rollDice () {
//   const sides = 6;
//   return Math.floor(Math.random() * sides) + 1;
// }

// // Called every time the bot connects to Twitch chat
// function onConnectedHandler (addr, port) {
//   console.log(`* Connected to ${addr}:${port}`);
// }


// require('dotenv').config();
// const request = require('request');

// const getToken = (url,callback) => {
//     const options = {
//         url: process.env.GET_TOKEN,
//         json: true,
//         body: {
//             client_id: process.env.CLIENT_ID,
//             client_secret: process.env.CLIENT_SECRET,
//             grant_type: 'client_credentials'
//         }
//     };

//     request.post(options, (err, res, body) => {
//         if(err) {
//             return console.log(err)
//         }
//         console.log(`Status: ${res.statusCode}`);
//         console.log(body)

//         callback(res);
//     });
// };

// getToken(process.env.GET_TOKEN,(res) => {
//     console.log(res);
// })

// const tmi = require('tmi.js');

// const client = new tmi.Client({
// 	options: { debug: true },
// 	connection: {
// 		secure: true,
// 		reconnect: true
// 	},
// 	identity: {
// 		username: process.env.TWITCH_USERNAME,
// 		password: process.env.TWITCH_AUTH_CODE
// 	},
// 	channels: [ process.env.TWITCH_USERNAME ]
// });

// client.connection();

// client.on('message', (channel, tags, message, self) => {
// 	// Ignore echoed messages.
// 	if(self) return;

//     console.log(channel, message);
// 	// if(message.toLowerCase() === '!hello') {
// 	// 	// "@alca, heya!"
// 	// 	client.say(channel, `@${tags.username}, heya!`);
// 	// }
// });


const client = new tmi.Client({
	options: { debug: true, messagesLogLevel: "info" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
        username: process.env.CLIENT_ID,
        password: process.env.CLIENT_SECRET
	},
	channels: [ 'nadflenders' ]
});
client.connect().catch(console.error);
client.on('message', (channel, tags, message, self) => {
	if(self) return;
	const result = message.toLowerCase().search('hallo');

	if(result >= 0 ) {
		client.say(channel, `${chatMessages.hello.message} @${tags.username}`)
		client.say(channel, `${chatMessages.hello.mess} @${tags.username}`)
  }

});

function rollDice () {
  const sides = 6;
  return Math.floor(Math.random() * sides) + 1;
}

const chatMessages = {
	hello: {
		message: `Grüße dich`,
		mess: 'Wie geht es dir heute?'
	}
}

