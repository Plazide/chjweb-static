---
title: Ny hemsida åt Sjötorps Vandrarhem
date: 2019-12-01T21:20:05.233Z
updated: 2019-12-01T12:49:03.372Z
description: >-
  CHJ Webblösningar har skapat den första hemsidan till Sjötorps Vandrarhem.
  Detta är den både första hemsidan som Sjötorps Vandrarhem har och den första
  hemsidan som jag skapar åt en kund genom CHJ Webblösningar.
image: /static/framsida.jpg
---
## Sjötorps Vandrarhem har fått sin första egna hemsida

Sjötorps Vandrarhem har fått sin första hemsida, och jag har skapat min första hemsida till en kund som CHJ Webblösningar. Det hela började i augusti och i november 2019 är hemsidan äntligen klar. I det här inlägget kommer jag berätta vilka utmaningar och lärdomar som det här projektet fört med sig.

Om du vill kolla in hemsidan kan göra det på [sjötorpsvandrarhem.se](https://sjötorpsvandrarhem.se)

## Bokning

När jag träffade ägaren till Sjötorps Vandrarhem för första gången var hans ord tydliga, han ville ha en enkel hemsida. När vi väl började prata om vad som skulle finnas på sidan blev den helt plötsligt mer komplex. Tanken var självklart att hemsidan, utöver att vara en presentationssida för vandrarhemmet, skulle fungera som ännu än kanal för att få bokningar. Detta var jag något jag förväntade mig innan vi träffades, men hur denna bokning skulle implementeras var mer hade jag ingen aning om.

### Använda en Channel Manager

Den mest tidseffektiva och smidiga lösningen skulle ha varit att koppla hemsidan till en Channel Manager. En Channel Manager är ett system för hotell och B&B värdar som tar emot bokningar på flera olika plattformar. Den används för att automatiskt synka alla bokningar mellan de olika plattformarna, så att boenden inte behöver göra det manuellt. Det skulle då vara möjligt att lägga till hemsidan som en bokningskanal. Detta skulle betyda att Channel Managern sköter kontrollering och uppdatering av tillgänglighet samtidigt som den har ett användarvänlig gränssnitt för att sköta alla bokningskanaler från en plats.

Tyvärr ansåg kunden att en sådan lösning skulle bli allt för dyr i slutändan då de Channel Managers vi tittade på kom med en månadskostnad. Det hade än så länge gått bra att uppdatera de olika sidorna manuellt, och det kostade inte extra pengar. Han ville därför ha en kontrollpanel till sidan som liknar den på booking.com. Det blev alltså bara att utveckla de nödvändiga funktionerna och kontrollpanelen själv, något som kunden blev riktigt nöjd med i slutändan.

### Kontrollpanelen

Huvuddelarna av kontrollpanelen består av tre olika vyer. Den första och mest grundläggande är vyn för att skapa rum. Eftersom det är möjligt att vandrarhemmet bygger om sina rum i framtiden, eller lägger till fler rum, var det viktigt att kunden hade möjligheten att kontrollera inställningar för olika rumtyper. Kunden kan ändra hur många rum det finns för varje typ, hur många sängar det finns i varje rum av en typ och namnet på typen såklart. Det går även att ändra priset för de olika tilläggen som går att köpa till rumtypen.

Den andra vyn visar en lista av genomförda och avbokade bokningar. Kunden har möjlighet att filtrera efter aktiva och avbokade bokningar, samt efter datuminterval. Det går att sortera efter ankomstdatum, avfärdsdatum, och hur många som personer som ingår i bokningen. Genom att klicka på en bokning kan kunden se kontaktuppgifter för personen som genomförde bokningen, samt annan informationen som är viktig för bokningen.

I den tredje, och kanske den viktigaste vyn, kan kunden kontrollera tillgängligheten för de olika rumtyperna. Det var den här funktionen som kunden frågade efter från början, de andra vyerna var helt enkelt bara nödvändiga för en fungerande bokningshantering. Eftersom kunden önskade en tillgänglighetskontroll som liknade den på booking.com, behövde jag inte designa hela gränsnittet från grunden. Jag kunden titta på bilder och videor som visade hur gränssnittet fungerade, och sedan bygga något som var liknande.

Resultatet ser ut så här:

![Tillgänglighetskontrollen på sjötorpsvandrarhem.se](/static/kontrollpanel.jpg "Tillgänglighetskontrollen på sjötorpsvandrarhem.se")

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

### Översättningar

Själva översättningarna på hemsidan gjordes av kunden, i alla fall innehållet. Översättningarna i sidans huvud och fot gjordes med hjälp av DeepL Translate. Även översättningar för texten i bokningsprocessen gjordes med hjälp av DeepL Translate. Kunden behärskar alla språk som används på sidan, så jag har låtit honom granska alla automatiska översättningar för att säkerställa att dem är korrekta.

För att låta kunden göra översättningar på olika språk byggde jag ett enkelt CMS. Det är beroende av vilken sida som användaren redigerar på, och eftersom alla språk har sina egna undersidor behöver man bara navigera till rätt sida och sedan ändra den önskade texten. Detta fungerar bra för det här ändamålet, men jag skulle inte vilja använda det till något annat.

## Teknologi

För de som är intresserade av vad jag använt mig av för att skapa hemsidan och kontrollpanelen till Sjötorps Vandrarhem så har jag sammanställt en liten lista av de program och tjänster som jag använt mig av.

**Frontend**

* Webpack
* Handlebars (för hemsidan)
* React (För kontrollpanelen)
* JavaScript
* HTML
* CSS

**Backend**

* JavaScript
* Node.js
* Express
* MongoDB
* Mongoose

### Hosting

Den första tanken med hemsidan till Sjötorps Vandrarhem var att hosta den genom Oderland Webbhotell AB. Jag hade min egen hemsidan hos dem tills för några veckor sedan. Problemet var att jag ville erbjuda ett bättre värde till mina kunder. Ett Agency paket, som låter mig hosta sidor åt mina kunder, hos Oderland hade en kostnad på 500 kr i månaden. När jag endast har en betalande kund är detta inte ekonomiskt sunt.

Jag valde istället att göra ett konto på DigitalOcean. Eftersom server delen av Sjötorps Vandrarhem är byggd med Node.js och MongoDB, är fördelarna med ett traditionellt webbhotell minimala. Jag valde faktiskt Oderland från början för att de verkade vara det enda svenska webbhotellet som erbjöd Node.js support. Det visade senare att de egentligen inte hade något gränssnitt för Node, utan man var ändå tvungen att logga in med SSH och konfigurera Node med Passenger, som de använder som reverse proxy.

Support för MongoDB hade de inte heller, det finns det nog inget svenskt webbhotell som har. För att kunna använda MongoDB var jag tvungen att använda Oderlands gör-det-själv servrar, det är deras namn för VPS. Detta skulle dock visa sig vara ganska dyrt. Att ha en server med 1 CPU och 500 MB RAM kostade mig runt 150 kr i månaden. Detta kanske inte låter som så mycket, men den summan gäller bara databasen. Tillsammans med själva webbservern blir detta totalt nästan 300 kr i månaden.

När jag sedan flyttade till DigitalOcean kostade både webbserver och databas totalt 50 kr i månaden. Detta är otroligt stor skillnad. Detta låter mig även erbjuda billigare hosting till den här kunden. Det verkar faktiskt som att DigitalOcean erbjuder den billigaste lösningen på marknaden. Deras billigaste droplet (VPS) med 1 GB RAM, 1 CPU och 25 GB SSD kostar 50 kr i månaden. En VM Instance från Google Cloud med samma CPU och RAM kostar över 200 kr i månaden, och då har den bara en HDD med 10 GB utrymme.

Det blev lite tekniskt där, förlåt!

### E-post

Eftersom jag inte använder ett webbhotell har jag inte inbyggd e-post. Jag var alltså tvungen att hitta en annan lösning för detta. Jag kollade runt på flera olika webbhotell som erbjöd email hosting. Vissa var dyrare än andra, men de flesta låg på runt 10 kr för varje konto. Till slut hittade jag ett Italienskt företag vid namn Qboxmail. De erbjöd inte billigare priser eller så, men deras kontrollpanel och verktyg verkade mycket bättre än något annat jag tittade på.

De erbjöd även ett så kallat reseller konto, vilket betyder att jag sälja vidare e-postadresser till mina kunder. Qboxmail erbjuder även en REST API som låter mig använda deras tjänst programmatiskt. Detta satte igång idéer i mitt huvud om att skapa en mejlkontrollpanel till mina kunder där de kan skapa nya e-postadressen och liknande. Detta är förmodligen en bit in i framtiden, men möjligheten finns.

## Avslutande ord

Jag kom in lite på villovägar när jag började skriva om hosting, jag hoppas att du kunde hänga med. Det här projektet har utan tvekan varit lärorikt, både när det gäller utveckling och serverhantering. Jag hoppas att framtida projekt kommer att vara lika roliga att jobba på.

Det här var nog allt för mig. Du kan dela inlägget genom någon av knapparna nedanför och fråga mig frågor på sociala medier.

Tack för att du läst och ha en fortsatt bra dag!

PS. Om du är intresserad av att börja använda DigitalOcean så kan du registrera dig genom min [referal länk](https://m.do.co/c/ced72bda5083). Då får du $50 att spendera på deras tjänster under 30 dagar. När du spenderat $25 så får jag $25 på mitt konto. Alla vinner!

Länk: <https://m.do.co/c/ced72bda5083>
