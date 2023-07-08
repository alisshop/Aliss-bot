let handler = async (m, { conn, command, text }) => {
if (!text) throw `*Ingrese el @ o el nombre de la persona que desee calcular su porcentaje de ${command.replace('how', '')}*`
conn.reply(m.chat, `
_*${text}* *es* *${Math.floor(Math.random() * 2000)}%* *${command.replace('how', '').toUpperCase()}.* *kchudo por idiota!! 🦌*_
`.trim(), m, m.mentionedJid ? {
contextInfo: {
mentionedJid: m.mentionedJid }} : {})}
handler.help = ['cachudo *@user*']
handler.tags = ['game']
handler.command = /^(cachudo)/i
handler.fail = null
module.exports = handler
