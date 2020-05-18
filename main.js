// Developed by martin3lli.
// @0xdwn
// latency0x.dx.am

console.log('\n▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\n\nScript by martin3lli\n@0xdwn\n\n▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀');
const botconfig = require("./config.json");
const Discord = require("discord.js");
const martinelli = new Discord.Client({ disableEveryone: false });

martinelli.on("ready", async () => {
  var x = 0,
    nome_loop = ["m", "ma", "mar", "mart", "marti", "martin", "martin3", "martin3l", "martin3ll", "martin3lli"];
    //nome_loop = ["✈️  🏢", "-✈️    🏢", "--✈️  🏢", "💥"];
    function nome_ale() {
    martinelli.guilds.get('GUILD ID HERE').members.get(martinelli.user.id).setNickname(nome_loop[x++ % nome_loop.length]); // BDT     
  }
  setInterval(nome_ale, 500);
});

martinelli.on("message", async message => {
  //if(message.author.martinelli) return;
  if (message.channel.type === "dm") return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd == "!ping") {
    if (message.author.id != "YOUR ID") return;
    message.delete();
    message.channel.send((Date.now() - message.createdTimestamp) + "ms");
  }

  if (cmd == "!rs") {
    if (message.author.id != "YOUR ID") return;
    message.delete();
    message.channel.send("by martin3lli").then((msg) => {
      msg.edit('✈️           🏠').then(msg.edit("-✈️           🏠").then(msg.edit("---✈️      🏠").then(msg.edit("----✈️     🏠").then(msg.edit("------✈️  🏠").then(msg.edit("💥"))))));
    })
  }

  if (cmd == "!automessage") {
    if (message.author.id != "YOUR ID") return;
    message.delete();
    let message_auto = args.join(" ");
    if (!message_auto) return message.channel.send('coloca a auto message');
    function random_mes() {
      message.channel.send(message_auto);
    }
    setInterval(random_mes, 60000); // Mudar tempo
  }

});

martinelli.login(botconfig.your_token);
