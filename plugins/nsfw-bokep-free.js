let handler  = async (m, { conn, usedPrefix: _p }) => {
m.react(rwait)
let info = `
Selamat, kamu kena prank 🗿
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Tobat Bang', 'status@broadcast')
}
handler.help = ['bokepfree']
handler.tags = ['nsfw']
handler.command = /^(bokepfree)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler