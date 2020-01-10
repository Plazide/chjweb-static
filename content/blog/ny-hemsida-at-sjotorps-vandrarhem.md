---
title: Ny hemsida åt Sjötorps Vandrarhem
date: 2020-01-10T21:20:05.233Z
updated: 2020-01-10T12:49:03.372Z
description: >-
  CHJ Webblösningar har skapat den första hemsidan till Sjötorps Vandrarhem.
  Detta är den både första hemsidan som Sjötorps Vandrarhem har och den första
  hemsidan som jag skapar åt en kund genom CHJ Webblösningar.
image: /static/framsida.jpg
---
## Sjötorps Vandrarhem har fått sin första egna hemsida

Sjötorps Vandrarhem har fått sin första hemsida, och jag har skapat min första hemsida till en kund som CHJ Webblösningar. Det hela började i augusti 2019 och nu, i Januari 2020, är hemsidan äntligen klar. I det här inlägget kommer jag berätta vilka utmaningar och lärdomar som det här projektet fört med sig.

Om du vill kolla in hemsidan kan du göra det på [sjötorpsvandrarhem.se](https://sjötorpsvandrarhem.se)

![Sjötorps Vandrarhem framsida](/static/hemsida.jpg "Sjötorps Vandrarhem framsida")

## Bokning

När jag träffade ägaren till Sjötorps Vandrarhem för första gången var hans ord tydliga, han ville ha en enkel hemsida. När vi väl började prata om vad som skulle finnas på sidan blev den helt plötsligt mer komplex. 

Tanken var självklart att hemsidan, utöver att vara en presentationssida för vandrarhemmet, skulle fungera som en bokningskanal. Detta var jag något jag förväntade mig innan vi träffades, men hur denna bokning skulle implementeras var en större fråga.

### Använda en Channel Manager

Den mest tidseffektiva och smidiga lösningen skulle ha varit att koppla hemsidan till en Channel Manager. En Channel Manager är ett system för hotell och B&B värdar som tar emot bokningar på flera olika plattformar. 

Sådana används för att automatiskt synka alla bokningar mellan de olika plattformarna, så att värdarna inte behöver göra det manuellt. Det skulle då vara möjligt att lägga till hemsidan som en bokningskanal, och låta Channel Managern sköta kontrollering och uppdatering av tillgänglighet. 

De lösningar som vi tittade på kom dock med en rätt hög månadskostnad, och därför ansåg kunden att en Channel Manager skulle bli för dyr i slutändan. Det hade än så länge gått bra att uppdatera de olika sidorna manuellt, och det kostade inte extra pengar. 

Han ville därför ha en kontrollpanel till sidan som liknar den på booking.com så att han kan enkelt kan uppdatera tillgängligheten själv. Mitt uppdrag blev alltså att skapa ett helt bokningssystem med en kontrollpanel för att uppdatera rum, ändra priser och hantera bokningar.

Det var en utmaning och inte något jag hade räknat med, men i slutändan blev kunden nöjd med resultatet.

### Kontrollpanelen

Huvuddelarna av kontrollpanelen består av tre olika vyer. Den första och mest grundläggande är vyn för att skapa rum. Eftersom det är möjligt att vandrarhemmet bygger om sina rum i framtiden, eller lägger till fler rum, var det viktigt att kunden hade möjligheten att kontrollera inställningar för olika rumstyper. 

Kunden kan ändra hur många rum det finns för varje typ, hur många sängar det finns i varje rum av en typ och namnet på rumstypen såklart. Det går även att ändra priset för de olika tilläggen som går att köpa till rumstypen.

Den andra vyn visar en lista av genomförda bokningar och avbokade vistelser. Kunden har möjlighet att filtrera efter aktiva bokningar och avbokningar, samt efter datum interval. Det går att sortera efter ankomstdatum, avfärdsdatum, och hur många personer som ingår i bokningen.

Genom att klicka på en bokning kan kunden se kontaktuppgifter för personen som genomförde bokningen, samt annan information som är viktig för bokningen. Här är det även möjligt att avboka en vistelse manuellt, ifall någon avbokar via mejl eller telefon.

I den tredje, och kanske den viktigaste vyn, kan kunden kontrollera tillgängligheten för de olika rumstyperna. Det var den här funktionen som kunden frågade efter från början, de andra vyerna var helt enkelt bara nödvändiga för en fungerande bokningshantering. 

Eftersom kunden önskade en tillgänglighetskontroll som liknade den på booking.com, behövde jag inte designa hela gränssnittet från grunden. Jag kunde titta på bilder och videor som visade hur gränssnittet fungerade, och sedan bygga något som var liknande.

Resultatet ser ut så här:

![Tillgänglighetskontrollen på sjötorpsvandrarhem.se](/static/kontrollpanel.jpg "Tillgänglighetskontrollen på sjötorpsvandrarhem.se")

### Bokningsfunktionen

Själva bokningsfunktionen på framsidan var en intressant uppgift. Jag ville att den skulle vara så enkel som möjligt att använda, och även se ganska bra ut. Jag ville att användaren skulle guidas genom bokningsprocessen, och valde därför att dela upp bokningen i flera olika delar.

Användaren går igenom dessa steg:

1. Användaren väljer hur många vuxna personer som ska bo på vandrarhemmet (se bilden nedan)
2. Användaren väljer hur många barn som följer med
3. Baserat på den tidigare informationen måste användaren välja ett visst antal rum. Om antalet vuxna är tre och antalet barn är 1 kan man inte välja mindre än två rum, eftersom det endast finns två sängar i rummen.
4. Baserat på den tidigare informationen presenteras de typer av rum som är tillgängliga
5. Användaren väljer sedan ankomstdatum och avfärdsdatum där pris och tillgänglighet uppdateras i realtid
6. Användaren anger namn
7. Användaren anger e-post och ett frivilligt telefonnummer
8. Användaren visas en sammanfattning av den angivna informationen och kan välja att gå tillbaka eller slutföra bokningen
9. Användaren bekräftar sin e-post

När allt detta är färdigt skickas en bekräftelse på bokningen till både vandrarhemmet och gästen. 

Resultatet blev riktigt bra om jag får säga det själv.

![bokningsfunktionen på sjötorpsvandrarhem.se](/img/bokning_1.jpg "Första sidan i bokningsprocessen på sjötorpsvandrarhem.se")



## Flera språk

Ett annat krav från kunden var att sidan skulle ha stöd för flera olika språk. Dessa var från början svenska, engelska, nederländska och tyska. Kunden valde dock att inte inkludera tyska i slutändan.

Det här var första gången jag gjorde en hemsidan på flera olika språk, så det var en utmaning. Jag fick läsa på en hel del om bästa praxis för både användarupplevelse och SEO.

Det visade sig att man kunde implementera detta på flera olika sätt. Man kunde välja att skriva allting på ett språk och sedan använda automatiska översättningar från Google varje gång en användare gick in på sidan. Eller så kunde man översätta innehållet manuellt och anpassa det efter varje språk.

För innehållet på sidan, alltså informationstexter, använde vi oss av den senare metoden. Eftersom kunden kommer från Nederländerna kunde han översätta texterna till nederländska och engelska. Vissa delar av hemsidan är dock automatiskt översatt till nederländska och sedan granskat av kunden. 

### Språk och SEO

En av de viktigaste faktorerna att ta hänsyn till när det gäller hemsidor med innehåll på flera olika språk är sökmotoroptimering. Som tur är har Google ganska klara riktlinjer på hur man sökmotoroptimerar en flerspråkssida. Man använder `hreflang` taggarna i huvudet på sidan för att peka på vilken sida som gäller för vilket språk. 

Sedan är det rekommenderat att man serverar olika språk på egna undersidor, t.ex. `https://sjötorpsvandrarhem.se/en/boka-rum` istället för att använda cookies eller basera språket på IP adressen.

Jag har dock gjort ett misstag när det gäller detta. För att ge bäst sökresultat på de olika språken, borde även URL:er vara översatta till det gällande språket. Detta var tyvärr inte möjligt på grund av dåliga beslut gällande metoden för att servera sidorna.

## Teknologi

För de som är intresserade av vad jag använt mig av för att skapa hemsidan och kontrollpanelen till Sjötorps Vandrarhem så har jag sammanställt en liten lista av de verktyg som jag använt mig av.

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

Den första tanken med hemsidan till Sjötorps Vandrarhem var att hosta den genom Oderland Webbhotell AB. Jag hade min egen hemsidan hos dem tills för några veckor sedan. Problemet var att jag ville erbjuda ett bättre värde till mina kunder. 

Ett Agency paket, som låter mig hosta sidor åt mina kunder, hos Oderland hade en kostnad på 500 kr i månaden. När jag endast har en betalande kund är detta inte ekonomiskt sunt. Antingen skulle jag vara tvungen att ta minst 500 kr i månaden från bara en kund, eller ha stadiga utgifter som inte ger något tillbaka.

Jag valde istället att göra ett konto på DigitalOcean. Eftersom server delen av Sjötorps Vandrarhem är byggd med Node.js och MongoDB, är fördelarna med ett traditionellt webbhotell minimala. Jag valde faktiskt Oderland från början för att de verkade vara det enda svenska webbhotellet som erbjöd Node.js support. 

Det visade sig senare att de egentligen inte hade något gränssnitt för Node, utan man ändå var tvungen att logga in med SSH och konfigurera Node med Passenger, som de använder som reverse proxy. Detta gav mig stora problem när det kom till min egna hemsida och jag ville inte ha samma upplevelse med Sjötorps Vandrarhem.

Support för MongoDB hade de inte heller, det är faktiskt väldigt ovanligt med hostade lösningar för MongoDB. För att kunna använda MongoDB var jag tvungen att använda Oderlands gör-det-själv servrar, det är deras namn för VPS. 

Detta skulle dock visa sig vara ganska dyrt. Att ha en server med 1 CPU och 500 MB RAM kostade mig runt 150 kr i månaden. Detta kanske inte låter som så mycket, men den summan gäller bara databasen. Tillsammans med själva webbservern blir detta totalt nästan 300 kr i månaden.

När jag sedan flyttade till DigitalOcean kostade både webbserver och databas totalt 50 kr i månaden. Detta är otroligt stor skillnad. Detta låter mig även erbjuda billigare hosting till den här kunden. Det verkar faktiskt som att DigitalOcean erbjuder den billigaste lösningen på marknaden. 

Deras billigaste droplet (VPS) med 1 GB RAM, 1 CPU och 25 GB SSD kostar 50 kr i månaden. En VM Instance från Google Cloud med samma CPU och RAM kostar över 200 kr i månaden, och då har den bara en HDD med 10 GB utrymme.

Till en början hade jag faktiskt webbservern och databasservern på samma VPS. Detta är inte en bra lösning om man någon gång vill skala upp eller om trafiken ökar under en viss period.

Därför flyttade jag sedan databasen till MongoDB Atlas, MongoDBs egna databastjänst. Detta låter mig skala upp databasen ifall det skulle behövas. Och eftersom databasen och webbservern inte längre ligger på samma dator, kan jag klona VPS:en och konfigurera en load balancer för att få extra prestanda om det skulle behövas. 

Det blev lite tekniskt där, förlåt!

### E-post

Eftersom jag inte använder ett webbhotell har jag inte inbyggd e-post. Jag var alltså tvungen att hitta en annan lösning för detta. Jag kollade runt på flera olika webbhotell som erbjöd email hosting. Vissa var dyrare än andra, men de flesta låg på runt 10 kr för varje konto. 

Till slut hittade jag ett Italienskt företag vid namn Qboxmail. De erbjöd inte billigare priser eller så, men deras kontrollpanel och verktyg verkade mycket bättre än något annat jag tittade på.

De erbjöd även ett så kallat reseller konto, vilket betyder att jag kan sälja vidare e-postadresser till mina kunder. Qboxmail erbjuder även en REST API som låter mig använda deras tjänst programmatiskt. 

Detta satte igång idéer i mitt huvud om att skapa en mejlkontrollpanel till mina kunder där de kan skapa nya e-postadressen och liknande. Detta är förmodligen en bit in i framtiden, men möjligheten finns.

## Avslutande ord

Jag kom in lite på villovägar när jag började skriva om hosting, jag hoppas att du kunde hänga med. 

Det här projektet har utan tvekan varit lärorikt, både när det gäller utveckling och serverhantering. Jag hoppas att framtida projekt kommer att vara lika roliga att jobba med.

Det här var allt för mig. Du kan dela inlägget genom någon av knapparna nedanför och fråga mig frågor på sociala medier.

Tack för att du läst och ha en fortsatt bra dag!

PS. Om du är intresserad av att börja använda DigitalOcean så kan du registrera dig genom min [referal länk](https://m.do.co/c/ced72bda5083). Då får du $100 att spendera på deras tjänster under 60 dagar. När du spenderat $25 så får jag $25 på mitt konto. Alla vinner!

Länk: <https://m.do.co/c/ced72bda5083>
