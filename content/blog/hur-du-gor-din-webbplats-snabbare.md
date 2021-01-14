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

Hur många besökare din webbserver klarar av på en gång beror på hur kraftfull den är från början. 

#### Hur löser man det?

Om webbplatsen är långsam på grund av mycket trafik