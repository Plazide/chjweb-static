---
title: CMS alternativ för JAMStack
date: 2020-02-11T09:09:18.719Z
updated: 2020-02-11T09:09:18.730Z
description: >-
  Vilken är den bästa lösningen för JAMStack när det kommer till CMS? I det här
  inlägget går jag igenom fördelar och nackdelar med olika verktyg.
image: /static/wordpress.jpg
---
_Om du inte har koll på vad JAMStack är, så rekommenderar jag att du läser mitt tidigare inlägg om_ [_vad JAMStack egentligen är_](https://chjweb.se/blogg/vad-ar-egentligen-jamstack)_._

CMS (Content Management System) är ett program, eller del av en webbplats, som låter användare hantera innehåll på en webbplats utan att behöva skriva någon kod. Dessa program är en viktig del av webben idag, eftersom många som driver webbplatser saknar programmeringskunskaper och förlitar sig på en CMS.

De flesta har nog hört talas om Wordpress. Det är den mest populära CMS plattformen i världen. Det är så populärt att över en tredjedel av alla webbplatser på nätet drivs med hjälp av Wordpress. 

Det är en siffra som fick mig att höja på ögonbrynen första gången jag hörde den.

Eftersom Wordpress drivs av PHP, ett språk som körs på webbservern, är det inte riktigt kompatibelt med JAMStack. En av de största kännetecknen för JAMStack är ju att webbplatserna inte använder någon webbserver.

_Så, hur får man CMS funktionalitet på en JAMStack webbplats?_

## Git och Headless

Svaret på ovanstående fråga kräver lite bakgrund.

När man talar om CMS lösningar för JAMStack finns två alternativ, Git-baserade CMS:er och huvudlösa (headless) CMS:er.

### Git

Git-baserade CMS:er använder versionshanteringsverktyget Git för att hantera innehållet. Det betyder att innehållet sparas tillsammans med webbplatsens kod, ofta i ett format kallat markdown. 

Det betyder att varje ändring i innehållet är en ny version av webbplatsen, alltså en _commit_ som det heter i Git. Det här betyder också att webbplatsen måste byggas om varje gång en ändring sker.

Att "bygga om" webbplatsen betyder i det här fallet inte att man kodar webbplatsen en gång till, det betyder att en så kallad SSG (Static Site Generator) generar HTML filer från ett template språk och sätter in det sparade innehållet på webbplatsen.

#### Inte omedelbara ändringar

Byggandet kan, beroende på vilken SSG man använder, ta ganska lång tid.

Jag kan ta min egen webbplats som exempel. 

Om jag redigerar ett blogginlägg, så tar det ungefär 2 minuter innan webbplatsen är färdig och ändringarna syns på webbplatsen. 

Jag använder Gatsby som SSG, och de släppte nyligen en molntjänst som snabbar upp byggandet av webbplatsen avsevärt. Nu tar det endast 30 sekunder att bygga webbplatsen.

Det går alltså inte att göra en ändring och sedan se den ändringen omedelbart på webbplatsen.

### Headless

En headless CMS innebär att innehållet och utseendet inte är sammankopplat. Det betyder att innehåll som skapas genom en headless CMS kan användas på flera olika plattformar.

Exempelvis så kan en webbplats och en mobilapp hämta innehåll från samma källa i samma format, trots att dessa använder helt olika teknologier.

En headless CMS sparar innehåll i en databas (t.ex. MySQL, MongoDB). Vilken databas det är spelar ingen större roll för utvecklaren eller användaren. Ingen av dem kommer förmodligen att komma i kontakt med den bakomliggande databasen.

Allt innehåll kan vanligtvis ändras via en API som genereras baserad på hur informationen är strukturerad. De flesta headless CMS:er kommer med ett användargränssnitt där man kan ändra innehåll.

En viktig skillnad mellan Git-baserade och headless CMS:er är alltså att den ena sparar innehållet tillsammans med koden för webbplatsen, och den andra sparar innehållet separat på ett sätt som gör det lätt att hantera oavsett vilken teknologi som används för den visuella delen av appen.

#### Att bygga eller inte bygga om

Eftersom en headless CMS sparar innehåll separat från applikationen och tillåter utvecklaren att hämta data via ett API, kan man välja om webbplatsen ska byggas om eller inte.

Det går att bygga om webbplatsen varje gång en ändring görs på CMS:en genom att ställa in en webhook. Då skickas en HTTP förfrågan till tjänsten som bygger webbplatsen och en ny byggprocess inleds.

Under byggprocessen hämtas helt enkelt data från CMS:en och sätts in i webbplatsen.

Om man inte vill bygga om webbplatsen varje gång en ändring görs, kan man istället hämta information från API:et via en HTTP förfrågan från webbläsaren. Detta kan vara en bra lösning när det sker många ändringar under kort tid.

## Alternativ

Nu när vi förstår vilka typer av CMS:er som finns tillgängliga för JAMStack, kan vi börja prata om vilka lösningar vi kan använda för att implementera CMS funktionalitet med JAMStack.

Vissa av dessa är kostnadsfria med öppen källkod, och andra kräver en betydlig månadskostnad. Git-baserade CMS:er är ofta gratis, och när det kommer till headless CMS:er krävs ofta en avgift.

Även om det finns headless CMS:er med öppen källkod så krävs det ändå en server för att använda dem, något som kostar lite pengar. Detta är dock ofta billigare än att prenumera på de tjänster som CMS:erna erbjuder själva.

Nästan alla CMS:er som jag listar nedan kräver någon form av kodning för att integrera med en SSG. Generellt sett finns det inte någon helt kodlös lösning för CMS när det kommer till JAMStack. Det finns dock ett undantag, men jag tar upp det i listan.

### 1. Netlify CMS

![Netlify CMS kontrollpanel](/static/netlify-cms.jpg "Kontrollpanelen på Netlify CMS")

Netlify CMS är Git-baserad och har öppen källlkod. Netlify erbjuder en tjänst för att hosta JAMStack webbplatser. Dem erbjuder väldigt bra utvecklarverktyg och gör det enkelt att lansera nya versioner av webbplatsen.

Även om CMS:en är utvecklad Netlify, så behöver man inte använda den med deras plattform. Den går faktiskt att använda med vilken plattform eller egen lösning som helst, bara webbplatsen använder Git och sparas på GitHub eller liknande tjänster.

Det är faktiskt den här CMS lösningen som jag använder för min webbplats. Än så länge har den fungerat bra, men jag vet inte om jag skulle rekommendera den för mindre tekniskt inriktade kunder.

Problemet är inte att den är svår att använda. Den fungerar ganska bra, i alla fall för mig. Problemet är att när jag skriver inlägg så måste jag ganska ofta byta mellan markdown och det visuella läget.

Anledningen till det här är antagligen att CMS:en inte är helt färdigutvecklad.

Men det finns en annan del av Netlify CMS som gör lösningen lite mindre tillgänglig för mindre tekniska personer. För att skapa nya typer av innehåll (t.ex blogginlägg, produkter eller galleribilder) måste man skriva en YAML fil och lägga bland webbplatsens källkod.

Detta är självklart inte optimalt om man vill ändra hur vissa typer av innehåll är strukturerat. Men även om CMS:en har ett visuellt gränssnitt för detta (som många andra lösningar har i den här listan) så måste webbplatsen ändå ändras för att läsa rätt innehåll.

Alltså behövs en utvecklare i vilket fall som helst. Jag skulle inte rekommendera Netlify CMS till mina kunder, men jag tycker om att använda den.

Självklart är Netlify CMS helt gratis, då den har öppen källkod och är Git-baserad.

#### Sammanfattning

* Git-baserad
* Öppen källkod
* Gratis
* Kunskap om markdown rekommenderas

[Läs mer om Netlify CMS](https://www.netlifycms.org/)

### 2. Strapi

![Startskärmen för Strapi](/static/strapi.jpg "Startskärmen för Strapi")

Strapi är en headless CMS med öppen källkod. Till skillnad från många andra CMS:er på den här listan erbjuder inte Strapi en molntjänst. För att använda Strapi måste man alltså installera det på en egen server.

Som tur är, så har Strapi ett antal installationsguider för olika plattformar. Det är dock ingenting någon utan kännedom om Unix terminalen ger sig på. Det krävs en utvecklare för att installera Strapi, det går inte att komma ifrån.

Det här betyder dock att det inte går att använda Strapi utan kostnad, du måste köra en server med mer än 1 GB RAM för att installera Strapi. Sen är det inte den bästa lösningen att köra både gränssnittet och databasen på samma server. Det behövs alltså en databasserver eller en databastjänst för att för att använda en optimal lösning.

Detta kan kosta lite, men det skulle nog gå att komma undan med en månadsavgift på runt 200 kr i månaden.

Strapi har ett rätt så bra verktyg för att bygga innehållstyper, de kallar det för _Content Type Builder_. Genom detta verktyg kan du ange olika namn och datatyper för så många fält du vill ha. Det här ger dig möjligheten att enkelt skapa komplexa innehållstyper.

Något som saknas från Strapi är dock möjligheten att skapa en så kallad _slug_. En slug är en URL-vänlig sträng som används för att identifiera innehåll i en databas. Det är _cms-alternativ-for-jamstack_ i det här inlägget.

Det är dock inte omöjligt att skapa en slug, Strapi har guide om hur man gör det i sin dokumentation. Då måste man tyvärr skriva lite JavaScript och koppla titel fältet till ett slug fält och en massa andra saker. Detta är alldeles för komplicerat för en funktion som borde finnas inbyggd.

Med det sagt, så har faktiskt Strapi en inbyggd slug funktion under utveckling just nu. Funktionen förväntas komma någon gång under första kvartalet av 2020.

Bortsett från dessa problem så är faktiskt Strapi en väldigt bra headless CMS. Den har support för flera olika databaser, en av de är MongoDB som jag tycker om ganska mycket.

Det finns även ett rätt så ingående system för konton i Strapi. Du kan alltså olika konton som har tillåtelse att göra olika saker. Du kan till exempel ha anställda som hanterar innehåll, och samtidigt ha separat roll för chefer som kan hantera anställda.

#### Sammanfattning

* Headless
* Öppen källkod
* Krånglig att installera
* Inte helt gratis att driva
* System för att hantera användare

[Läs mer om Strapi](https://strapi.io/)

### 3. Ghost

![Ghost startsida](/static/ghost.jpg "Ghost startsida")

Ghost är egentligen ett svar på Wordpress. Skaparna av Ghost ansåg att Wordpress försökte göra för mycket på en och samma gång, därför skapade de ett verktyg som verkligen fokuserar på att publicera innehåll.

Eftersom Ghost utvecklades som ett alternativ till Wordpress, är det varken en Git-baserad eller headless CMS. Innehållet du ändrar sparas i en databas och hämtas tillsammans med varje förfrågan.

Så varför finns Ghost med på den här listan? Jo, för att Ghost har möjligheten att vara en headless CMS. Det finns en API för att hämta data från en extern källa. Det betyder att man antingen kan hämta innehåll från Ghost och sätta in på webbplatsen på dynamiskt vis, eller så kan man ställa in en webhook som bygger om webbplatsen varje gång ett nytt inlägg publiceras. 

Ghost är alltså en bloggplattform. Det betyder att det inte finns något verktyg för att ändra innehållstyper, allt du har är blogginlägg och undersidor.

Så om du vill ha mer än endast blogginlägg, så är Ghost inget för dig. Men om du är en bloggare så rekommenderar jag dig starkt att testa Ghost. Redigeringsverktyget är otroligt bra och det finns stöd för planerad publicering, e-post utskick och en beta funktion som låter dig ställa in prenumerationer för dina läsare.

Det är alltså möjligt att ta betalt för ditt innehåll.

Jag testade Ghost innan jag bestämde mig för vilken CMS jag skulle använda för min webbplats, och jag övervägde starkt att använda den. Men eftersom jag förväntade mig behöva fler innehållstyper i framtiden, valde jag iställer Netlify CMS.

En annan anledning var att Ghost inte är helt gratis. Trots att Ghost har öppen källkod, krävs fortfarande en server och databas för att använda CMS:en. Som billigast kan du köra Ghost för $10 per månad via en [DigitalOcean](https://m.do.co/c/ced72bda5083) droplet, där finns en så kallad One-Click installation. Eller så kan du använda [Ghosts egna tjänst](https://ghost.org/pricing/) som kostar från $29 per månad.

Till skillnad från Strapi, har Ghost relativt enkla installations metoder. Även om man installerar manuellt så finns ett Command Line verktyg som gör det otroligt enkelt.

Likt Strapi har även Ghost ett system för att hantera användare.

#### Samanfattning

* Headless
* Öppen källkod
* En bloggplattform, kan inte användas för andra innehållstyper
* Relativt lätt att installera
* Inte helt gratis att driva
* System för att hantera användare

[Läs mer om Ghost](https://ghost.org/)
