let handler = async (m, { command, text }) => m.reply(`
*⁉️ 𝐏𝐑𝐄𝐆𝐔𝐍𝐓𝐀𝐒 ⁉️*
  
*𝙿𝚁𝙴𝙶𝚄𝙽𝚃𝙰:* ${text}
*𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰:* ${['Si','Tal vez sí','Posiblemente','Probablemente no','No','Imposible','a mi q me importa','calla virgen','por eso no cachas','yo que soy adivinó?','no preguntes webadas','anda estudia mejor','por eso te ponen los kchos'].getRandom()}
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.register = true
handler.command = /^pregunta|preguntas|apakah$/i
export default handler
