exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `*MENU ${BotName}*
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───
         
╔════════════════════
║ *About ${BotName}*
╠════════════════════
║├≽️⚜ *AUTHOR*: KELVIN
║├≽️⚜ *DESIGNER*: KELVIN
║├≽️⚜ *YOUTUBE*: https://youtube.com/c/26RizkiRidhoPratama
╠════════════════════
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${grupch1}_
║│2. *YouTube <subscribe>*
║│ _${grupch2}_
║│3. *Instagram <Follow>*
║│ _${instagramlu}_
║│4. *Creator ${BotName}*
║│ _${whatsapplu}_
║╰───────────
║NOTE : BOT ON 
║SENIN PUKUL : 10.00 - 21.00
║MINGGU PUKUL : 18.00 - 22.00
║(kalo bot off berarti ownernya lagi sibuk!)
║╰───────────
╠════════════════════
║ *MADE BY KELVIN*
╚════════════════════`
}