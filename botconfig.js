module.exports = {
  Admins: ["592862619484946456", "691496322741567538"], //Admins of the bot
  ExpressServer: true, //If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "-", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/sbySMS7m3v", //Support Server Link
  Token: process.env.Token || "Nzc2MTg2MzExMjM2MjU1NzQ0.X6xN1Q.A8AyGd2R98apSwe3dOC0UoPPquw", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "776186311236255744", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "88sHeDNy-cZQyhqwR1KJEWYwOvq_pttj", //Discord Client Secret
  Scopes: ["guilds"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 50, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205281600, //Bot Inviting Permissions
  Website: process.env.Website || "https://Discord-MusicBot.tomachiro94.repl.co", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku
  
  Presence: {
    status: "online", // You can show online, idle, and dnd
    name: "Musica", // The message shown
    type: "LISTENING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  //Lavalink
  Lavalink: {
    id: "Main",
    host: "lava.Link",
    port: 80, // The port that lavalink is listening to. This must be a number!
    pass: "your password",
    secure: false, // Set this to true if the lavalink uses SSL or you're hosting lavalink on repl.it
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "4bba03ff587e4cbca0e8de8fe943f7c4", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "137edbdd19aa4c61a83817de407c33ba", //Spotify Client Secret
  },
};
