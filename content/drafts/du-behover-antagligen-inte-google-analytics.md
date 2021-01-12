---
type: post
published: true
title: Du behöver antagligen inte Google Analytics
date: 2021-01-12T15:18:13.078Z
updated: 2021-01-12T15:18:14.842Z
image: /google-analytics-cover.jpg
description: Google Analytics har länge varit en slags standardtjänst för att
  föra statistik på webbplatser. Det är dock ofta mer än vad många behöver och
  försämrar användarupplevelsen. Jag berättar varför och ger dig några
  alternativ.
---

## Problemet

Är du inne på mycket webbplatser? Har du märkt hur alla frågar efter att använda Cookies? Har detta irriterat dig? Det irriterar mig iallafall.

Genom att använda Google Analytics (GA) måste man även fråga användarna om tillåtelse att använda Cookies. Anledningen är att GA använder spårningskakor för hålla reda på användare över olika webbplatser. Detta låter GA presentera mer korrekt och specialiserad information om användarna.

Detta tillåter många företag att få djupa insikter om sina användare och kan därmed utforma sin webbplats efter användarnas faktiska användning. Jättebra!

MEN! Detta är helt onödigt för de flesta webbplatser. De flesta får inte ens tillräckligt många besökare för att dessa insikter ska ha någon betydelse. Allt man egentligen vill veta är hur många som besöker webbplatsen, och det behöver man inte GA för.

Google använder även datan från din webbplats för egna syften. Det betyder att det inte är du som äger informationen och vet inte vem som kan se den eller vad de gör med den.

GA är gratis att använda eftersom de tjänar pengar på dig och dina besökare.

## En del av problemet

Jag var faktiskt, fram till förra månaden, en del av problemet. Jag använde GA för att föra statistik, men brydde mig bara om antalet besökare och hur det ändrades över tid. Jag insåg dock detta och i samband med en renovering av min webbplats bytte jag ut GA mot ett integritets-inriktat statistik-verktyg.

## Andra alternativ

Vad ska man använda istället för Google Analytics? Eftersom hela poängen med att inte använda GA är att bli av med den irriterande cookie-bannern kommer jag att lista och jämföra några olika integritets-inriktade verktyg för att samla statistik från din webbplats.

### Plausible Analytics

![Plausible Dashboard](/plausible.jpg "Plausible Dashboard")

[Plausible Analytics](https://plausible.io) är ett prenumerations-baserat statistik-verktyg. Till skillnad från GA kostar det att använda Plausible. Tjänsten har dock öppen källkod och man är fri att köra Plausible på sina egna servrar om man inte vill använda deras betaltjänst.

I alla deras planer kan man lägga till obegränsat med webbplatser, så du behöver inte flera prenumerationer. Du får även e-post rapporter, egna domäner och förmågan att skapa konverteringsmål. 

Den billigaste planen på Plausible kostar $6 per månad, eller $4 om man betalar årsvis. Detta gör Plausbible till den billigaste av de prenumerations-tjänster jag listar här.

Planerna är baserade på hur många visningar du får totalt mellan alla dina webbplatser. Den billigaste planen låter dig samla 10 000 visningar per månad innan du måste uppgradera.

### Fathom Analytics

![Fathom dashboard](/fathom.jpg "Fathom dashboard")

[Fathom Analytics](https://usefathom.com/) är precis som Plausible en prenumerations-tjänst. Fathom har, till skillnad från Plausible, inte öppen källkod. Det betyder att du inte har alternativet att köra Fathom på egna servrar.

Precis som Plausible kan du lägga till obegränsat med webbplatser. Fathom har också, likt Plausible, obegränsat med domäner, e-post rapporter och konverteringsmål.

Fathoms billigaste plan kostar $14 per månad och tillåter 100 000 visningar. Det betyder att Fathom är lite dyrare än till och med Plausibles tredje billigaste plan om man betalar årsvis, och då får man 200 000 visningar.

### Simple Analytics

![Simple dashboard](/simple-analytics.jpg "Simple dashboard")

[Simple Analytics](https://simpleanalytics.com/) är också en prenumerations-baserad analys-tjänst. Den är betydligt dyrare än både Plausible och Fathom.

Simple Analytics erbjuder ungefär samma saker som Plausible och Fathom men saknar funktionen att lägga till konverteringsmål. Istället har de en fuktion som låter dig se vilken tweet en användare klickade på när de kom ifrån Twitter.

Simple Analytics har, till skillnad från de andra två, begränsningar på antalet användare. I både Plausible och Fathom kan man dela sin dashboard med andra genom en länk och lösenord, detta är inte möjligt med Simple Analytics.

Som sagt är Simple Analytics även dyrare än andra alternativ. Deras billigaste plan börjar på $19 per månad. Då för man obegränsat med webbplatser och 100 000 visningar. Dock begränsas man till 1 användare.

### Cloudflare Analytics

![Cloudflare dashboard](/cloudflare-analytics.jpg "Cloudflare dashboard")

[Cloudflare Analytics](https://www.cloudflare.com/) är det enda alternativet på den här listan som är gratis. Det saknar dock många funktioner som de andra alternativen har.

Med Cloudflare Analytics kan du inte se användare i realtid, skapa konverteringsmål eller dela din dashboard. Analytics verktyget är dock inte Cloudflares enda produkt. De säljer molntjänster som underlättar för utvecklare och har ett annat analys verktyg som fångar data på nätverksnivå.

Med det sagt så är det faktiskt Cloudflare Analytics jag använder på webbplatsen du befinner dig på just nu. Anledningen är helt enkelt att det är gratis, och jag gillar inte att spendera pengar i onödan.

Jag börjar dock tröttna på det (jag har använt det i mindre än 1 månad). Vissa saker som vilken sida en användare tittat på fungerar inte, det är alltid blankt, och deras UI ser bara tråkig och komplicerad ut. 

## Avslutningsvis

Efter att ha skrivit den här jämförelsen funderar jag faktiskt på att byta till Plausible. Fathom och Plausible känns nästan identiska, med skillnaden att Plausible är billigare. 

Simple är dyrare och saknar vissa funktioner som de kompenserar med andra onödiga funktioner (att visa tweets känns tyvärr inte värt de extra kronorna). Cloudflare fungerar knappt, men är gratis.

Det var allt för den här gången! Tack!