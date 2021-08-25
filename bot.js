require("dotenv").config()

const axios = require("axios")
const Discord = require("discord.js")
const client = new Discord.Client()

const prefix = "!"

client.on("ready", () => {
  console.log("Go!")
})

client.on("message", async msg => {
  if (!msg.content.startsWith(prefix)) {
    return
  }
  const args = msg.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g)
  
  const command = args.shift().toLowerCase()

  if (command === "pyi") {
    msg.react("❤️")
  }

  if (command === "vibes") {

    const getVibes = async () => {
      const response = await axios.get('https://www.affirmations.dev/')
      return response.data.affirmation;
    }

    const vibes = await getVibes()
    msg.reply(`Here's your affirmation: \n ${vibes}  ❤️`)
  }
})


client.login(process.env.BOT_TOKEN)