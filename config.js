import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'


//Make Changes According to Your Need
global.bname = 'BayMax-md'     //Your Bot Name
global.oname = 'Toshi_kun x Shizo x Gariox 3d'     //Your Name
global.iglink = 'https://instagram.com/itz_toshi_02'     //Your Instagram Link
global.ytlink = 'https://YouTube.com/@errormodsyt'      //Your YouTube Channel Link
global.stkpack = 'Toshi-Kun'      //Here name tha your want on sticker



global.owner = [
  ['919609900020', 'Toshi_Kun', true],
  ['919172389527', 'Shizo The Techie', true],
  ['916207142994', 'Gariox 3D', true]
] 
global.prems = []


// Sticker WM
global.packname = 'TE Developers'
global.author = 'Toshi_kun'

global.copyright = 'TE DEVELOPERS'
global.packname = 'Toshi_kun'
global.author = 'TE DEVELOPERS'

//sticker WM
global.stkpack = 'BayMax-md'
global.stkowner = 'TE DEVELOPERS'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
