import { googleImage } from '@bochilteam/scraper'
var handler = async (m, { conn, text, usedPrefix, command }) => {
m.react(rwait)
    if (!text) throw `Contoh *${usedPrefix}${command}* Minecraft`
    try {
    const res = await googleImage(text)
    let image = res.getRandom()
    let link = image
    conn.sendFile(m.chat, link, 'google.jpg', `☁️ *Result:* ${text}\n☃️ *Source:* Google`, m)
  } catch (e) {
  m.reply(`Tidak Dapat Menemukan Apa Yang Kamu Cari`)
  }
}
handler.help = ['gimage']
handler.tags = ['tools']
handler.command = /^(gimage|image)$/i
handler.limit = true
export default handler
