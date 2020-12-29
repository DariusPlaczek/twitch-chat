require('dotenv').config();
const tmi = require('tmi.js');

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

// client.on('message', (channel, tags, message, self) => {
// 	if(self || !message.startsWith('!')) return;

// 	const args = message.slice(1).split(' ');
// 	const command = args.shift().toLowerCase();

// 	console.log(command);
// 	if(command === 'echo') {
// 		client.say(channel, `@${tags.username}, you said: "${args.join(' ')}"`);
// 	}
// 	if(command === 'test') {
// 		client.say(channel, `@${tags.username}, you said: "${args.join(' ')}"`);
// 	}

// });

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

