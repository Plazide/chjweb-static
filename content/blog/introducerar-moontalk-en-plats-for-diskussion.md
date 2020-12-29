---
type: project
published: true
title: MoonTalk - Att bygga med serverless
date: 2020-12-29T15:20:52.263Z
updated: 2020-12-29T15:20:54.815Z
image: /skarmbild-2020-12-14-193350.jpg
description: Under de senaste månaderna har jag arbetat på MoonTalk, en
  plattform för svenska folket att diskutera, rösta, och få sin röst hörd.
  Användare på webbplatsen kan skapa frågor som sedan kan röstas på av resten
  användarna.
---
Äntligen kan jag skriva det här inlägget. Det har tagit lång tid, men nu är MoonTalk släppt. Du undrar säkert vad jag pratar om, men ta det lugnt, jag kommer förklara allt.

## Vad är MoonTalk?

Den första frågan du har är antagligen: "MoonTalk... Vad är det?". Jo, det är en plattform för diskussion. Alla diskussioner startar med en fråga som är öppen eller har tre svarsalternativ. Sedan kan användare svara på denna fråga och yttra sina åsikter.

Man ställer en fråga i en av alla dem kategorier som finns på sidan (Vetenskap, Samhälle, Utbildning, etc...). Varje kategori har en deadline, och när den deadlinen är nådd kommer frågorna med flest röster att publiceras för att börja samla in röster.

Innan en fråga publiceras kan användare diskutera om frågan är bra ställd, om det saknas information, osv. Detta säkerställer att endast frågor av hög kvalité publiceras för att börja diskuteras och samla in röster.

## Hur byggdes sidan?

Det fanns ganska många olika utmaningar med MoonTalk. Några av funktionerna som skulle vara med var:

* Chattfunktion
* E-post notifikationer
* Användarkonton
* Publicering på schema
* Poängsystem

Alla dessa krav kom med sina egna utmaningar, men den största utmaningen här var att webbplatsen skulle kunna drivas billigt. Det var inte krav från kunden, det var ett krav som jag satte för mig själv.

**Hur kan man då åstadkomma en billig drift samtidigt som alla dessa funktioner, som vanligtvis kräver fler olika serverprogram för att fungera, med bra prestanda?**

Svaret är **serverless.**

## Amazon Web Services till vår räddning

Det finns många molntjänster därute, men ingen har samma utbud som Amazon Web Services (AWS). De flesta av tjänsterna som använts för MoonTalk är från AWS, förutom databasen (mer om den senare). Fördelen med att använda tjänster från AWS är att de lätt går att koppla ihop och använda tillsammans.

För att exempelvis skapa chattfunktionen använde jag AWS API Gateway tillsammans med Lambda funktioner. API Gateway låter utvecklare skapa REST, HTTP och Websocket API:er som man kan koppla till andra AWS tjänster.

Genom att skapa en Websocket API kan vi implementera en omedelbar koppling mellan server och webbläsare. Detta är en perfekt lösning för att skapa chattfunktioner samt omedelbara notifikationer för olika händelser.

### Vad är Lambda?

Lambda funktioner är så kallade serverlösa funktioner. Det betyder att de endast startas och körs när de används. Detta betyder också att priset man betalar för Lambda är baserat på hur mycket det används.

Lambda funktioner kan också skalas upp effektivt. Om det exempelvis kommer 10 förfrågningar på samma gång kommer 10 olika instanser av Lambda funktionen köras. Detta är okej eftersom en Lambda funktion inte kan spara någon information längre än dess utvärderingstid, alltså så länge den körs.

Detta har gjort Lambda till en central del i utveckling av så kallade **serverless applications**. Man betalar endast för det man använder och de kan klara av nästintill obegränsat med trafik.

Nästan all serverlogik för MoonTalk händer i Lambda funktioner.

### Schemalagda funktioner

För vissa saker var vi tvungna att köra funktioner på ett schema. En av dessa saker var exempelvis att publicera frågor när deadlinen för en kategori nått sitt slut.

Detta görs normalt med hjälp av ett Cronjob, men för det krävs en server. Istället använde jag mig av AWS EventBridge som kör Lambda funktioner på ett schema. Uttrycket för att ställa in schema liknar det man använder vid ett Cronjob.

Att köra dessa schema är dessutom helt gratis, det som kostar är Lambda funktionerna.

## En ny typ av databas

Databasen som används för MoonTalk är ganska banbrytande. Den heter [FaunaDB](https://fauna.com) och är världens första riktiga serverlösa databas. Likt Lambda, och många andra serverlösa tjänster, betalar man endast för det man använder.

Databasen är global och skalas upp automatiskt. Med FaunaDB finns ingen databashantering, allting sköts automatiskt.

FaunaDB erbjuder även en GraphQL API, som använts i MoonTalk för att hämta data till klienterna. De har även ett sofistikerat frågespråk(query language) som heter FQL (Fauna Query Language).

Med FQL kan man nästan skriva en hel backend för en applikation. Om det inte vore för e-post meddelanden och autentisering skulle vi kunna lagt all logik i FQL.

### Autentisering med FaunaDB

FaunaDB har inbyggd autentisering, men denna har endast support för användarnamn/e-post och lösenord. Vi ville även att användare skulle kunna registrera och logga in med Facebook och Google.

Fördelarna med att använda FaunaDBs inyggda autentisering var för stora för skötas på något annat sätt. Man kunde enkelt ställa in behörigheter för användare i en JSON-fil. Dessa behörigheter kollas sedan innan varje handling som en användare tar.

Därför valde jag att autentisera Facebook och Google användare i en Lambda funktion och sedan skapa en nyckel kopplat till användaren i FaunaDB så det verkar som användaren har autentiserat normalt.

Det fungerar än så länge riktigt bra.

## Poängsystem

### Hur fungerar det?
Poängsystemet fungerar genom att användare får poäng genom olika handlingar. När man gillar en fråga eller kommentar, när man röstar på en fråga, osv...

Dessa poäng påverkas även av en bonus som kan ses i den privata profilen. Den bonusen är baserad på antalet demografiska uppgifter som användaren har angett.

Användare kan endast se sin egen poäng, aldrig någon annans, men de kan se andra användares rank. Ranken är baserad på antalet poäng en användare har i relation till andra användare och representeras av antalet stjärnor som visas bredvid en användares namn.

Ranken har ingen större inverkan i nuläget, men i framtiden kommer högre rankade användare kunna utföra olika administrativa uppgifter, exempelvis hantera rapporterat innehåll.

### Hur gjordes det?
Poängsystemet är egentligen ganska enkelt. Varje gång en användare utför en poänggivande handling uppdateras deras poäng.

Själva uppdateringen av poängen sker i en FQL funktion, vilket innebär att jag inte behövde skapat en Lambda funktion för det endamålet.

Bonusen uppdateras varje gång man ändrar sina demografiska uppgifter.

Användarnas rank uppdateras på ett schema varje dag. Tanken var från början att uppdatera ranken varje vecka, men detta visade sig inte fungera speciellt bra.

## Avslutningsvis

Det har varit väldigt roligt att arbeta på MoonTalk och jag har lärt mig en hel del. Jag kommer att fortsätta arbetet i långsammare takt, men är fortfarande investerad i att webbplatsens ska gå bra.

Jag tycker att MoonTalk är ett bra exempel på vad som kan byggas med hjälp av serverless. Man behöver inte webbservrar eller hela DevOps teams för att bygga en komplicerad och omfattande applikation.

Tack vare AWS, FaunaDB och andra tjänster kan ensamma utvecklare bygga system som endast var tänkbara för företag med hundratals anställda med miljoner att spendera.

Tack för att du läst och om du är intresserad av en applikation som kan växa obegränsat samtidigt som kostnaderna hålls under kontroll, [kontakta](/kontakt) då mig!