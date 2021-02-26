---
type: post
published: true
title: Vad är GatsbyJS?
date: 2021-02-26T10:34:10.668Z
updated: 2021-02-26T10:34:12.543Z
image: /Gatsby_Logo.png
description: Jag använder GatsbyJS för att bygga många av mina webbplatser. I
  det här inlägget diskuterar jag vilka fördelar som finns med verktyget och hur
  det hjälper dig att spara pengar.
---
När jag bygger webbplatser använder jag mig av en rad verktyg. Ett av dessa är GatsbyJS. Jag nämner på min webbplats att jag använder verktyget, men du undrar säkert vad syftet är med det egentligen. Det kommer jag att reda ut för dig.

## En SSG (Static Site Generator)

Du känner säkert till begreppet JAMstack. Om inte kan du läsa mer om det i mitt inlägg där jag förklarar [vad JAMstack är](https://chjweb.se/blogg/vad-ar-egentligen-jamstack). En huvudprincip i JAMstack är att webbplatser ska vara färdiga att serveras så fort en användare går in på en sida. Det är detta som SSG:er löser.

Man kan bygga en komplicerad webbplats som delar komponenter mellan sidor, hämtar information effektivt och som inte behöver något serverspråk för att fungera. Alla sidor byggs ihop på förhand så att resultatet helt enkelt blir HTML, CSS och JavaScript. Det är i detta steg som all information som ska finnas på sidorna sätts in.

Om man använder ett verktyg som Wordpress däremot, hämtas informationen som ska visas på en sida samtidigt som sidan själv. Detta ökar tiden tar för varje sida att visas för användaren. I normala fall är detta inte ett problem då fördröjning endast är några hundra millisekunder. Det uppstår dock problem när webbplatsen får fler besökare än vanligt. Då är risken att detta blir för mycket för webbservern att hantera och den slutar helt enkelt att fungera.

En webbplats som är statisk (JAMstack) klarar av betydligt mer trafik innan den stöter på problem. En vanlig teknik när man använder en SSG (Gatsby) är att man lägger hela webbplatsen på ett CDN (Content Delivery Network). Då är det nästan omöjligt för webbplatsen att överbelastas.

Ett CDN är ett nätverk av geografiskt utspridda servrar. Om en av dessa servrar blir överbelastad kommer trafiken skickas till en annan server i nätverket. Trafik till nätverket dirigeras även till den närmaste servern, vilket betyder att innehåll även levereras snabbare eftersom det alltid tar den kortaste vägen.

Det finns alltså många fördelar med att använda en SSG för att bygga webbplatser, detta var bara några av dem. Jag kommer fortsätta artikeln med att prata om fördelar med specifika till Gatsby.

## Varför Gatsby

Det finns ett par saker som gör Gatsby till ett äss i min rockärm.

### Automatisk optimering av bilder

När man använder bilder på en webbplats måste man tänka på storleken. Ju större bilderna är desto längre tid tar de att ladda, vilket i sig ger en dålig användarupplevelse. Detta har man länge fått göra manuellt med hjälp av olika bildredigeringsverktyg. Som du kan tänka dig kan detta vara ganska tidskrävande.

När man gör detta brukar man nöja sig med en enda bild som är en kompromiss mellan storlek och kvalitet. Den optimala lösningen skulle dock vara att skapa flera olika storlekar av bilden och hämta den minsta först, och sedan bilden med bättre kvalitet. På så sätt skulle platsen där bilden är placerad på webbplatsen fyllas med innehåll direkt, istället för att vara tom tills den större bilden har laddat.

Detta löser Gatsby genom att skapa flera olika storlekar av bilden och sedan hämta den minsta bilden först. Allt jag behöver göra som utvecklare är att säga till Gatsby var bilderna finns, och sedan sköts resten automatiskt.

Gatsby gör det även enkelt att använda "lazy loading", alltså att bilderna endast visas när användaren tittar på eller är på väg att titta på bilden. Det betyder att webbplatsen inte saktas ner av bilder längre ner på sidan som användaren kanske aldrig kommer att se.

### Effektiv hantering av resurser

När du navigerar en webbplats som är byggd med Gatsby känns det som att du tas till nästa sidan utan att den laddas, den bara finns där helt plötsligt. Detta är för att Gatsby hämtar data från andra sidor på webbplatsen innan du navigerat till dem. Efter att du gått in på en sida kommer Gatsby börja hämta innehåll från alla sidor som den sidan länkar till. På så sätt känns navigeringen blixtsnabb.

Resurserna är även separerade från början. Istället för hämta all CSS och JavaScript när man kommer till den första sidan på webbplatsen, hämtas specifika resurser för varje sida man besöker. Detta minskar storleken på alla sidor då endast nödvändiga resurser hämtas.

### Prioriterar kritiska resurser

Har du någonsin varit med om att en sida ser helt fel ut när du går in på den, som att allting är staplat, bilder är jättestora och det saknas färger? Då har du varit med om att CSS filerna för den sidan laddades några hundra millisekunder (eller sekunder) efter HTML dokumentet.

Gatsby förhindrar att sådant händer genom att inkludera de viktigaste resurserna, alltså CSS och JavaScript, i själva HTML-dokumentet. Detta betyder att resurserna finns tillgängliga direkt när de behövs.

### Hämta data från var du vill

En av de bästa sakerna med Gatsby är att man kan dra in information från nästan vilka källor som helst, och sedan komma åt den data via samma GraphQL gränssnitt. För utvecklare är detta en stor fördel. Det betyder att vi kan hämta data från exempelvis Excel-filer och Wordpress, och sedan komma åt information på samma sätt när vi fyller i informationen på webbplatsen.

Man kan alltså hämta information som sedan görs tillgängligt genom ett separat normaliserat lager. Detta öppnar många dörrar för hantering av information och resurser på webbplatsen.

Det är bland annat den här tekniken Gatsby använder för att optimera bilder. Gatsby hämtar bilder från en eller flera platser i filsystemet, skapar flera olika storlekar av dessa bilder och gör sedan dessa tillgängliga genom samma gränssnitt som resten av informationen på webbplatsen.

### Vad betyder det här för dig som kund

Alla dessa fördelar och funktioner som Gatsby erbjuder kommer att ge dig en snabb webbplats och optimerad webbplats utan extra kostnad. Med hjälpa av Gatsby kan du alltså införskaffa en webbplats som presterar på topp, och samtidigt är billigare att driva än en traditionell webbplats.

## Avslutningsvis

Det finns andra SSG verktyg som gör liknande saker, men ingen av dem har det data lager som Gatsby erbjuder. Detta betyder att flexibiliteten som kommer med att använda Gatsby nästan är oslagbar.

Jag har byggt många webbplatser med hjälp av Gatsby, så om du är intresserad av att skaffa en hemsida byggd på just Gatsby kan du med fördel [kontakta mig](/kontakt/).

Tack för att du läst mitt inlägg och ha en fortsatt trevlig dag.