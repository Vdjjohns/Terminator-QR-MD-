//*THIS DANGEROUS BUG 🐛 CODING BY ICONIC TECH ♻️ THE FATHER OF 3) THANKS FOR USING OUR PROJECT*\\

const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["254108988663@s.whatsapp.net"]
global.botnumber = "254108988663"
global.autotyping = false
global.autorecoding = false
global.botnumber = ['254108988663']
global.DevName = "iconic tech"
global.ownerName = "Vdeejay John's"
global.Botname = "Terminator QR MD"
global.versionBot = "𝟏"
global.packname = "iconic tech"
global.author = "powered by iconic tech"
global.thumb = fs.readFileSync("./TerminatorMedia/iconic.jpg")
global.ThM = 'https://files.catbox.moe/jlrljf.jpg'
let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
