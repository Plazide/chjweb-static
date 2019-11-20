---
title: Ny hemsida åt Sjötorps Vandrarhem
date: 2019-11-20T21:20:05.233Z
description: >-
  CHJ Webblösningar har skapat Sjötorps Vandrarhems första hemsida. Läs om vad
  jag har gjort och hur jag har gjort det.
image: /static/framsida.jpg
---
## Sjötorps Vandrarhem har fått sin första egna hemsida

Sjötorps Vandrarhem har fått sin första hemsida, och jag har skapat min första hemsida till en kund som CHJ Webblösningar. Det hela började i augusti och nu, i november 2019, är hemsidan äntligen klar. I det här inlägget kommer jag berätta vilka utmaningar och lärdomar som det här projektet fört med sig.

## Bokning

När jag träffade ägaren till Sjötorps Vandrarhem för första gången var hans ord tydliga, han ville ha en enkel hemsida. När vi väl började prata om vad som skulle finnas på sidan blev den helt plötsligt mer komplex. Tanken var självklart att hemsidan, utöver att vara en presentationssida för vandrarhemmet, skulle fungera som ännu än kanal för att få bokningar. Detta var jag något jag förväntade mig innan vi träffades, men hur denna bokning skulle implementeras var mer hade jag ingen aning om.

### Använda en Channel Manager

Den mest tidseffektiva och smidiga lösningen skulle ha varit att koppla hemsidan till en Channel Manager. En Channel Manager är ett system för hotell och B&B värdar som tar emot bokningar på flera olika plattformar. Den används för att automatiskt synka alla bokningar mellan de olika plattformarna, så att boenden inte behöver göra det manuellt. Det skulle då vara möjligt att lägga till hemsidan som en bokningskanal. Detta skulle betyda att Channel Managern sköter kontrollering och uppdatering av tillgänglighet samtidigt som den har ett användarvänlig gränssnitt för att sköta alla bokningskanaler från en plats.

Tyvärr ansåg kunden att en sådan lösning skulle bli allt för dyr i slutändan då de Channel Managers vi tittade på kom med en månadskostnad. Det hade än så länge gått bra att uppdatera de olika sidorna manuellt, och det kostade inte extra pengar. Han ville därför ha en kontrollpanel till sidan som liknar den på booking.com. Det blev alltså bara att utveckla de nödvändiga funktionerna och kontrollpanelen själv, något som kunden blev riktigt nöjd med i slutändan.

### Bokningsfunktionen

Själva bokningsfunktionen på framsidan var en intressant uppgift. Jag ville att den skulle vara så enkel som möjligt att använda, och även se ganska bra ut. Resultatet blev riktigt bra om jag får säga det själv.

![bokningsfunktionen på sjötorpsvandrarhem.se](/img/bokning_1.jpg "Första sidan i bokningsprocessen på sjötorpsvandrarhem.se")

Bokningen fungerar så här:

1. Användaren väljer hur många vuxna personer som ska bo på vandrarhemmet (se bilden)
2. Användaren väljer hur många barn som följer med
3. Baserat på den tidigare informationen kommer måste användaren välja ett visst antal rum. Om antalet vuxna är tre och antalet barn kan man inte välja mindre än två rum, eftersom det endast finns två sängar i rummen.
4. Baserat på den tidigare informationen presenteras de typer av rum som är tillgängliga
5. Användaren väljer sedan ankomst datum och avfärdsdatum där pris och tillgänglighet uppdateras i realtid
6. Användaren anger namn
7. Användaren anger e-post och ett frivilligt telefonnummer
8. Användaren visas en sammanfattning av den angivna informationen och kan välja att gå tillbaka eller slutföra bokningen
9. Användaren bekräftar sin e-post
10. När e-posten är bekräftad får både vandrarhemmet och användaren en bokningsbekräftelse

## Flera språk

Kunden tar emot många gäster från andra länder, t.ex. Nederländerna och Tyskland. Det var därför viktigt att hemsidan hade stöd för flera olika språk. Jag hade aldrig gjort en hemsida med flerspråksstöd innan, så det här blev en riktigt viktig lärdom.

### Språk och SEO

En av de viktigaste faktorerna att ta hänsyn till när det gäller hemsidan med flera innehåll på flera olika språk är sökmotoroptimering. Som tur är har Google ganska klara riktlinjer på hur man sökmotoroptimerar en flerspråkssida. Man använder `hreflang` taggarna i huvudet på sidan för att peka på vilken sida som gäller för vilket språk. Sedan är det rekommenderat att man serverar olika språk på egna undersidor, t.ex. `https://sjötorpsvandrarhem.se/en/boka-rum` istället för att använda cookies eller basera språket på IP adressen.
