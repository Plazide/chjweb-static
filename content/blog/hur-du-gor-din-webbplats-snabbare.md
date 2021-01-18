---
type: post
published: true
title: Hur du gör din webbplats snabbare
date: 2021-01-18T16:56:52.650Z
updated: 2021-01-18T16:56:54.418Z
image: /snabbare-webbplats-cover.jpg
description: Ingen vill ha en långsam hemsida. Om du tycker att din webbplats
  tar för lång tid att visas, då är det här inlägget för dig. Jag berättar om
  vanliga orsaker till långsamma hemsidor och hur man åtgärdar problemen.
---
När man pratar om en "snabb hemsida" kan man syfta på olika saker. Dessa kan vara:

* Hämtning av webbplatsen
* Gränssnittets prestanda
* Hämtning av bilder

Jag kommer diskutera dessa och ge tips på hur man löser problemen. Det är dock inte garanterat att just ditt problem är relaterat till det jag kommer prata om. Behöver du hjälp med din hemsida efter att ha läst färdigt kan du känna dig fri att kontakta mig.

## Orsaker

Dessa har olika orsaker men kan vara relaterade. Om exempelvis webbplatsen hämtas långsamt är det stor sannolikhet att även bilderna hämtas långsamt.

### Långsam hämtning av webbplatsen

Om din webbplats tar lång tid att visas från när du skriver in adressen eller klickar på en länk är antagligen din webbserver i dåligt skick eller inte tillräckligt kraftfull.

Det kan vara att du har mer trafik än vad den klarar av, då tar det lång tid för den att hantera din förfrågan. I värsta fall kan webbservern inte hantera din förfrågan om att hämta webbplatsen överhuvudtaget.

Det är så DDOS-attacker fungerar. Genom att skicka mer trafik till en webbplats än vad webbservern klarar av kan man temporärt göra webbplatsen otillgänglig.

Det kan också bero på att någon programvara på server-datorn använder väldigt mycket resurser. Det kan skulle kunna orsakas av en bugg i ett program, möjligtvis en så kallad "memory-leak", eller av ett virus.

#### Hur vet jag vad problemet är?

Om du för statistik på din webbplats, genom Google Analytics (läs om varför du [inte borde använda Google Analytics](/blogg/statistik-utan-google)) eller någon annan statistik-tjänst, kan du se hur många besökare du har just nu.

Hur många besökare din webbserver klarar av på en gång beror på hur kraftfull den är från början. Det bästa sättet att ta reda på om din server inte klarar av antalet användare är att testa att lösa det.

#### Hur löser man det?

##### Uppgradera

En vanlig lösning är att uppgradera din webbserver. Detta betyder ofta att uppgradera betalningsplan hos ditt webbhotell. Beroende på hur uppgraderingen sker, om dem flyttar dig till en ny server eller endast ökar resurserna på din nuvarande, kan detta lösa både problemet med antalet användare och problem med buggar eller virus.

Om du uppgraderar och webbplatsen fortfarande är långsam kanske det är dags att kontakta webbhotellet och se om de kan undersöka problemet.

##### Cache
En annan lösning, som kan användas tillsammans med upgraderingen, är att cacha webbplatsen genom en med hjälp av ett CDN (Content Delivery Network). På så sätt kommer hämtningar av webbplatsen inte ske genom din webbserver, utan genom ett nätverk av servrar som är utspridda på olika platser i världen. Detta kan göras genom en tjänst som [Cloudflare CDN](https://www.cloudflare.com/cdn).

Den här lösningen kan snabba upp nästan alla webbplatser, om de inte redan ligger på ett CDN. Det betyder också att du använder mindre bandbredd hos ditt webbhotell, vilket betyder att du kan spara pengar genom att använda en billigare plan.

##### JAMstack
En tredje lösning är att bygga om webbplatsen så att den inte behöver ett webbhotell och ligger på ett CDN från början. Sådana hemsidor brukar kallas "statiska webbplatser" eller ["JAMstack"](/blogg/vad-ar-egentligen-jamstack).

Med en webbplats byggd på JAMstack finns, som sagt, ingen webbserver. Det betyder att du inte kommer få några virus eller buggar. Webbplatsen kommer att serveras snabbare, även för människor på andra sidan världen, och du behöver inte en tjänst som Cloudflare CDN som sitter emellan din server och användarna.

Med en tjänst som [Netlify](https://www.netlify.com/) kan du servera webbplatsen gratis upp till en viss användning. 

Som jag nämnt i andra inlägg, och på andra sidor på min hemsida, är det den här metoden jag använder för att bygga webbplatser åt mina kunder. Så, om du är intresserade av att göra om din hemsida med JAMstack kan du med fördel [kontakta mig](/kontakt/).

### Dålig prestanda i gränssnittet
Det här händer bara om man har en komplicerad webbplats med mycket element som uppdateras på skärmen.

Detta är ofta ett resultat av dåligt optimerad kod.

För att identifiera och lösa det här problemet måste en utvecklare undersöka saken. Chansen är att du redan anlitat en webbutvecklare som byggde sidan åt dig, då är det bäst att kontakta samma utvecklare igen.

Webbplatser som byggs med verktyg som Wix, Squarespace eller Wordpress brukar inte bli avancerade nog för att orsaka problem med prestandan. Det är dock inte omöjligt.

Om du exempelvis har väldigt mycket plugins installerade på din Wordpress-sida kan prestandan påverkas. Då handlar det både om gränssnittets prestanda och hur lång tid det tar för servern att svara.

### Långsamma bilder

#### Gör bilderna mindre
Den här är egentligen ganska enkel att lösa: gör dina bilder mindre.

Du kanske tänker att bilderna får sämre kvalité om du gör de mindre. Det stämmer till viss del, men bilderna på din webbplats behöver aldrig vara större än utrymmet dem tar upp.

Om din bild tar 500x500 pixlar på webbplatsen, behöver bilden vara 1000x1000 pixlar. 

Undvik att ladda större bilder än du behöver.

#### Hämta mindre först
En annan lösning är att göra som [Gatsby](https://gatsbyjs.com), ett verktyg för att skapa webbplatser med JAMstack, och hämta mindre versioner av bilderna först och sedan hämta bilder av högre kvalité.

På det sättet laddar bilderna fort, samtidigt som man får de i bra kvalité. Det är det bästa av två världar.

Jag använder Gatsby för att bygga webbplatser till mina kunder, så alla jag bygger åt får den här optimeringen.

## Avslutningsvis

Det finns många sätt att snabba upp webbplatsen, detta var bara några vanliga problem som gör den långsammare. Om du behöver hjälp med din webbplats är jag tacksam om du kontakta mig.

Tack för att du har läst.