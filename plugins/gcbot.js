let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
╭═══════════════════════
║╭──❉ 〔 ⳹ ❋ཻུ۪۪⸙𝙕𝙞𝙛𝙖𝙗𝙤𝙩𝙯⳹ ❋ཻུ۪۪ 〕 ❉────── 
║│➸ *_GROUP OFFC ZIFABOTZ_*
║│➸  *https://chat.whatsapp.com/I8Q4oJVw8buHhIgMH5iVAv*
╰─────────❉
▌│█║▌║▌║║▌║▌║█│▌
⳹ ❋ཻུ۪۪⸙𝙕𝙞𝙛𝙖𝙗𝙤𝙩𝙯⳹ ❋ཻུ۪۪⸙ by.rozi
`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'GRUB SIRAD')).buffer(), ext, 'Grub Bot By Raditya', 'SIAP BANG🗿', 'AUTO JOIN', 'Donasi', '.donasi', m)

}
handler.help = ['Gruboffical']
handler.tags = ['main']
handler.command = /^(gruboffical)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
