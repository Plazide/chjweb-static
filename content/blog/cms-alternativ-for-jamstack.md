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
