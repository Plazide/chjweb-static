---
type: post
published: false
title: Du behöver antagligen inte använda Google Analytics
date: 2021-01-11T17:20:05.120Z
updated: 2021-01-11T17:20:05.161Z
image: /google-analytics-cover.jpg
description: Google Analytics har länge varit en slags standardtjänst för att
  föra statistik på webbplatser. Det är dock ofta mer än vad många behöver och
  försämrar användarupplevelsen.
---
## Problemet

Är du inne på mycket webbplatser? Har du märkt hur alla frågar efter att använda Cookies? Har detta irriterat dig? Det irriterar mig iallafall.

Genom att använda Google Analytics (GA) måste man även fråga användarna om tillåtelse att använda Cookies. Anledningen är att GA använder spårningskakor för hålla reda på användare över olika webbplatser. Detta låter GA presentera mer korrekt och specialiserad information om användarna.

Detta tillåter många företag att få djupa insikter om sina användare och kan därmed utforma sin webbplats efter användarnas faktiska användning. Jättebra!

MEN! Detta är helt onödigt för de flesta webbplatser. De flesta får inte ens tillräckligt många besökare för att dessa insikter ska ha någon betydelse. Allt man egentligen vill veta är hur många som besöker webbplatsen, och det behöver man inte GA för.

Google använder även datan från din webbplats för egna syften. Det betyder att det inte är du som äger informationen och vet inte vem som kan se den eller vad de gör med den.

GA är gratis att använda eftersom de tjänar pengar på dig och dina besökare.

## En del av problemet

Jag var faktiskt, fram till förra månaden, en del av problemet. Jag använde GA för att föra statistik, men brydde mig bara om antalet besökare och hur det ändrades över tid. Jag insåg dock detta och i samband med en renovering av min webbplats bytte jag ut GA mot [Cloudflare Analytics](https://www.cloudflare.com/web-analytics/) (CA).

## Vad är Cloudflare Web Analytics?

Cloudflare är ett företag som säljer molntjänster och nyligen lanserade de sin egna Analytics-tjänst. Denna är helt gratis att använda, allt du behöver är ett Cloudflare-konto. Bäst av allt är dock att tjänsten är inte kräver att man måste be om användarna att acceptera Cookies.

Det är en integritetsinriktad Analys-tjänst.

## Andra alternativ

Cloudflare Analytics är ett bra alternativ eftersom det är gratis, precis som GA, men det finns andra alternativ som inte kräver cookie-consent.

### Plausible Analytics

[Plausible Analytics](https://plausible.io) är en prenumerations-baserad analys-tjänst. Till skillnad från GA och CA kostar det att använda Plausible. Tjänsten har dock öppen källkod och man är fri att köra Plausible på sina egna servrar om man inte vill använda deras betaltjänst.

Det kommer ju självklart att kosta pengar att ha de servrarna, så det kommer kosta ändå.

### Simple Analytics

[Simple Analytics](https://simpleanalytics.com/) är också en prenumerations-baserad analys-tjänst. Den är betydligt dyrare än Plausible men har ett par funktioner som saknas i andra tjänster.

När du får trafik från en Tweet visar Simple Analytics den faktiska tweeten som användaren kom ifrån. De har även e-post rapporter som kan skickas antingen direkt till dig eller till en kund. Något som fick mig ganska intresserad.

### Matomo

[Matomo](https://matomo.org/) marknadsför sig, precis som alternativen ovan, som ett alternativ till GA. Deras standard inställningar verkar dock kräva att man ber om tillåtelse att samla information, och där skiljer sig Matomo från de andra alternativen.

Man kan ändra inställningar så man inte behöver be om tillåtelse.

## Avslutningsvis

Som avslutning vill jag bara säga: Du/ni behöver inte använda Google Analytics, det finns alternativ. Om en prenumerations-tjänst inte känns rätt, använd då Cloudflare Analytics.
