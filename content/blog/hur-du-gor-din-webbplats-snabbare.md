---
type: post
published: false
title: Hur du gör din webbplats snabbare
date: 2021-01-14T09:39:53.987Z
updated: 2021-01-14T09:39:54.018Z
image: /servers.jpg
description: Ingen vill ha en långsam hemsida. Om du tycker att din webbplats
  tar för lång tid att visas, då är det här inlägget för dig. Jag berättar om
  vanliga orsaker till långsamma hemsidor och hur man åtgärdar problemen.
---
När man pratar om en "snabb hemsida" kan man syfta på olika saker. Dessa kan vara:

* Hämtning av webbplatsen
* Gränssnittets prestanda
* Hämtning av bilder

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

Med en webbplats byggd på JAMstack finns, som sagt, ingen webbserver. Det betyder att du inte kommer få några virus eller buggar. Webbplatsen kommer att serveras snabbare, även för människor på andra sidan världen, och du behöver inte en tjänst som Cloudflare CDN.

Med en tjänst som [Netlify](https://www.netlify.com/) kan du servera webbplatsen gratis upp till en viss användning. 

Som jag nämnt i andra inlägg är det den här metoden jag använder för att bygga webbplatser åt mina kunder. Så, om du är intresserade av att göra om din hemsida med JAMstack kan du med fördel [kontakta mig](/kontakt/).