---
type: post
published: true
title: Du behöver antagligen inte ett webbhotell
date: 2021-01-05T13:55:32.087Z
updated: 2021-01-05T13:55:33.559Z
image: /cover-du-behover-antagligen-inte-ett-webhotell.jpg
description: Många av oss betalar varje månad för ett webbhotell som kostar
  flera hundra kronor. Tänk om man inte behövde göra detta. Tänk om man skulle
  kunna driva webbplatsen utan att spendera tusentals kronor per år. Tänk om jag
  har lösningen.
---
När du läser rubriken på det här inlägget kanske du tänker "Går det verkligen att driva en webbplats utan webbhotell?", och det är en förnuftig fråga. De flesta använder ett webbhotell för att driva sina webbplatser, och det är inte konstigt. Länge har det varit det bästa alternativet för att driva hemsidor.

Det är dock inte längre fallet. Under de senaste åren har något som kallas JAMstack växt fram. Jag har förklarat vad detta är i ett annat inlägg, ["Vad är egentligen JAMstack?"](https://chjweb.se/blogg/vad-ar-egentligen-jamstack). Kort betyder det att man inte använder webbservrar för att driva webbplatsen. Istället skapar man en statisk version av webbplatsen som sedan läggs på ett CDN(Content Delivery Network).

Detta är mycket mer kostnadseffektivt. Ta den här webbplatsen som exempel (chjweb.se). I början använde jag ett webbhotell för att driva den, det kostade **300 kr** per månad. Sedan jag gjorde om webbplatsen till en JAMstack-sida har jag betalat **0 kr**.

Jag har inte betalat ett öre för att driva min webbplats på över 1 år. Samtidigt får jag bättre prestanda (sidan laddar snabbare) och förbättrad SEO (sidor som laddar snabbt placerar bättre i sökresultaten). Det är en ganska bra deal.

## Borde jag använda JAMstack?

Om du är intresserad av att börja använda JAMstack till din egen webbplats bör du ställa dig själv ett par frågor:

* Använder jag kommentarer?
* Använder jag en gästbok?
* Finns det innehåll som ändras ofta (oftare än 1 gång per dag)?
* Använder jag ett inloggningssystem?
* Är webbplatsen en webbshop?

### Om du svarar Ja

Om du svarar *Ja* på någon av de frågorna kanske det är lättare att behålla lösningen du redan använder. Det betyder dock inte att det är omöjligt att använda de funktionerna på en JAMstack sida, det är faktiskt ganska vanligt, det blir bara lite svårare.

Det finns faktiskt väldigt många verksamheter som ägnar sig åt att skapa lösningar för JAMstack sidor, alltså inloggningssystem, webbshoppar, kommentarer osv. Det krävs dock att en utvecklare skapar integrationer med dessa lösningar.

Det är dock värt att nämna att det är svårt att skapa detta funktioner utan JAMstack också.

### Om du svarar Nej

Det är mycket troligt att du svarade nej på alla frågor ovan. De flesta webbplatser behöver inte och har inte sådana funktioner. Om du endast behöver en enkel webbplats som presenterar dig eller ditt företag krävs inte avancerade funktioner.

Allt du behöver är lite några sidor med lite information på. Det finns ju trots allt sociala medier där man kan komma i kontakt med kunder, så en gästbok eller kommentarsfunktion är ofta inte nödvändigt.

Om detta är fallet med din hemsida är det mycket möjligt att du kan spara en hel del pengar på att byta till JAMstack.

## Hur börjar jag använda JAMstack?

Hur kan du få en JAMstack-sida? Det finns två alternativ: du kan försöka fixa det själv, eller anlita en utvecklare.

### Utan utvecklare

Tyvärr är det inte speciellt lätt för folk som vill ha en JAMstack-sida utan att anlita en utvecklare. Om du svarat *Nej* på alla frågor ovan är det möjligt att du kan använda Wordpress.

#### Med wordpress

För Wordpress-användare finns ett plugin som heter wp2static. Tyvärr har skaparen tagit bort detta från wordpress.org, men det finns fortfarande tillgängligt att ladda ner från GitHub. Det finns en tråd på wordpress-forumet där [skaparen av wp2static diskuterar borttagningen](https://staticword.press/t/removal-of-wp2static-from-wordpress-org/159).

Om du skulle få detta att fungera kan du ta filerna som spottas ut och ladda upp på [Netlify](https://netlify.com). Där kan du bara dra och släppa filerna på webbplatsen så kommer din sida att publiceras på ett globalt CDN.

#### Med site-builder

Om du använder en site-builder, exempelvis Wix, är det tyärr inte möjligt att skaffa en JAMstack-sida. Dessa visuella verktyg använder sig av egna hosting-lösningar och går inte, såvitt jag vet, att exportera till JAMstack-sidor.

### Med utvecklare

Om du dock är beredd att anlita en utvecklare finns det knappt inga gränser för vad som kan åstadkommas.

#### Med wordpress

Om du gillar Wordpress som CMS är det fullt möjligt för dig att fortsätta använda det för att hantera ditt innehåll. Wordpress har nämligen en API som kan användas för att hämta innehåll och generera en JAMstack-sida.

Varje gång du gör en ändring kommer en ny version av webbplatsen byggas och läggas upp på ett globalt CDN. Detta ger dig användarupplevelsen från Wordpress, men prestandan av en JAMstack-sida.

#### E-handel

Att implementera e-handel är också fullt möjligt. Om du exempelvis gillar Shopify kan du välja att använda [Shopify Lite](https://www.shopify.se/lite) som endast kostar $9 per månad. Jämför det med deras normalt billigaste plan som kostar $29 per månad.

Med Shopify Lite kan du ha en JAMstack-sida, men ta vara på alla funktioner som Shopify erbjuder. En utvecklare kan då skapa en helt skräddarsydd webbshop som användare Shopify för att hantera betalningar, priser, produkter, och mycket mer.

#### Kommentarer

Om du behöver kommentarer på din webbplats går det att använda något som [Disqus](https://disqus.com/). Det går även att bygga en skräddarsydd lösning med en databas som [FaunaDB](https://fauna.com).

#### Inloggninssystem

För inloggningssystem kan man använda [AWS Cognito](https://aws.amazon.com/cognito/), [Auth0](https://auth0.com/) eller en skräddarsydd lösning med FaunaDB. Jag använder faktiskt FaunaDB för [MoonTalk](https://moontalk.se), en avancerad webbplats byggd på JAMstack-principer (mer om den snart).

#### Andra lösningar

Om du skulle behöva något annat är det antagligen också möjligt. Genom att kombinera JAMstack med serverless kan man skapa allt som är möjligt med traditionella metoder, fast med bättre prestanda och lägre priser.

## Exempel på JAMstack-sidor

Om du vill se vad som kan skapas med en JAMstack-sida kan du titta på följande webbplatser.

### MoonTalk

[MoonTalk](https://moontalk.se) är en webbplats jag byggde åt en kund. Den använder FaunaDB som databas och AWS för allt annat som serverlösa funktioner, e-post, API:er, schemalagda funktioner och mycket mer. Det är ett bevis på att webbplatser byggda på JAMstack kan vara lika dynamiska som traditionella webbplatser byggda med serverspråk (PHP, Ruby on Rails osv.).

### Min webbplats

Webbplatsen du är på just nu är en JAMstack-sida byggd med Gatsby och Netlify. Som sagt kostar den inte ett öre att driva och presterar bättre än när den låg på en webbserver.

## Hur mycket kostar det att byta till JAMstack?

Om du skulle ta hjälp av en utvecklare undrar du säkert hur mycket det kostar att byta till JAMstack eller få en webbplats utvecklad. Detta beror såklart på hur avancerad webbplatsen är, men om du kommer till mig kan du förvänta dig någonstans runt 2000 - 5000 kr för enklare webbplatser.

Jag kan inte tala för andra webbutvecklare eller webbyråer.

Beroende på hur mycket du betalar för ditt webbhotell kommer du spara in detta på några månader. 

## Avslutningsvis

Som du förstår finns det många fördelar med JAMstack, men även många hinder för den som inte är utvecklare. Om du är beredd att anlita en utvecklare kan du få en webbplats som presterar fantastiskt bra och kan i många fall drivas gratis.

När du är beredd att ta steget till JAMstack finns jag tillgänglig. Det är bara [höra av dig](/kontakt).

Tack för att du läst!