---
title: Vad är egentligen JAMStack?
date: 2019-12-03T10:43:03.024Z
updated: 2019-12-03T10:43:03.049Z
description: >-
  Jag förklarar förklarar vad JAMStack är och varför jag använder det för att
  bygga hemsidor till kunder. Förklaringen försöker vara så otekniskt som
  möjligt för att även människor utan kunskaper om webbutveckling ska förstå.
image: /static/img_20191203_120316_01_bokeh.jpg
---
På min hemsida nämner jag termen _JAMStack_ exakt 15 gånger om man inkluderar sidtitlar och beskrivningar, det här inlägget ökar den siffran rejält. Anledningen till att jag repeterar denna konstiga term, som verkar ha något med sylt att göra, är för att det är metoden jag använder för att skapa hemsidor.

Jag förstår att denna term är främmande för många personer som läser på min hemsida. Det finns många webbutvecklare som ännu inte introducerats för den här typen av utveckling, så jag förväntar mig inte att personer utan teknisk kunskap ska veta vad JAMStack innebär.

I det här inlägget ska jag försöka förklara vad JAMStack är, och jag ska göra det på ett så grundläggande sätt som möjligt. Tanken är att företag som letar efter en ny hemsida, oavsett teknisk kunskap, ska förstå fördelarna med JAMStack och de bakomliggande tekniska orsakerna.

## Vad är JAMStack?

Trots namnets likhet med det engelska ordet för sylt, så har det egentligen ingenting med det att göra. JAM i JAMStack står faktiskt för **J**avaScript, **A**PI:er och **M**arkup. 

**JavaScript** används för att göra webbplatser interaktiva. Det är det enda programmeringsspråk som dagens webbläsare förstår.

**API** är en förkortning av **A**pplication **P**rogramming **I**nterface. En API används för att kommunicera med en tjänst eller plattform programmatiskt. Om jag t.ex. vill hämta data från min Facebook sida och visa på hemsidan skulle jag använda Facebooks API.

**Markup** syftar på HTML (**H**yper**T**ext **M**arkup **L**anguage). Det är språket som används för att bygga strukturen på hemsidor.

Ordet **Stack** används inom programmering för att beskriva en samling teknologier och verktyg som används för att bygga webbplatser och program.

JAMStack är alltså en samling teknologier (JavaScript, API:er och Markup) som man använder för att bygga hemsidor. Det som skiljer JAMStack från andra typer av webbutveckling är dock inte dessa teknologier, de används på majoriteten av webbplatser nu för tiden. 

Jag förklarar det som gör JAMStack speciellt lite senare.

### Den traditionella webbservern

Det enda sättet att få hemsidor till slutanvändaren har länge varit att använda en webbserver. En webbserver är, som du kanske kan gissa, programvaran som är ansvarig för att servera (skicka) hemsidan till webbläsaren.

Webbservrar använder sig ofta av ett _serverspråk_. Det finns ett antal olika serverspråk, men det vanligaste serverspråket är _PHP_. Det är exempelvis det språket som används av _Wordpress_, det mest populära _CMS_ verktyget_._

Den kanske största uppgiften för dessa språk är att bygga ihop hemsidan innan den skickas till webbläsaren. Det fungerar oftast genom att man hämtar information från en _databas_ och sätter in den informationen på rätt plats i en HTML fil. 

Varje gång en användare hämtar en sida, alltså vill titta på den i en webbläsare, bygger det här serverspråket ihop hemsidan på nytt. Alltså, om du tittar på ett blogginlägg så har det hämtats ifrån en databas och satts in i en HTML fil. Om du nu laddar om hemsidan kommer servern göra samma sak igen, även fast innehållet är det samma. 

Som du kanske kan förstå är denna metod inte optimal. Om en server som bygger ihop sidor vid varje hämtning ska fungera när hemsidan får mycket trafik, krävs ganska bra hårdvara. Detta betyder att kostnaderna för att driva en hemsida ökar i stadig takt med antalet besökare till hemsidan.

Det följande diagrammet förklarar hur varje förfrågan hanteras med en traditionell webbserver.

![Diagram över dataflöde med en traditionell webbserver](/static/traditionell.png "Diagram över dataflöde med en traditionell webbserver")

### Den moderna CDN:en

Jag nämnde innan att det inte var teknologin man bygger JAMStack sidor med som skiljer dem från andra hemsidor. Det som faktiskt skiljer JAMStack från andra hemsidor är saknaden av en traditionell webbserver.

En JAMStack hemsida använder oftast en modern _CDN._ CDN står för **C**ontent **D**elivery **N**etwork och är inte en ny teknik för att leverera innehåll på webben. Dessa innehållsleveransnätverk, som det heter på svenska, har tidigare används för att effektivt servera bilder och andra filer till användaren.

En CDN är ett nätverk av servrar som är geografiskt utspridda för att minska fördröjningen mellan förfrågan att hämta en resurs till den faktiska leveransen av resursen. Dessa nätverk använder cachestrategier för minska användning av serverresurser.

Eftersom en CDN består av flera olika servrar är driftsäkerheten mycket högre än en vanlig webbserver. Om den närmaste servern inte kan hantera din förfrågan kommer den att skickas vidare till nästa. Detta betyder att JAMStack sidor sällan ligger nere.

För att faktiskt dra nytta av cachestrategierna som en CDN erbjuder kan inte hemsidan byggas ihop vid varje hämtning. Istället är alla sidor på webbplatsen redan färdiga när dem laddas upp på CDN:en.

Det följande diagrammet visar hur varje förfrågan hanteras med en JAMStack hemsida.

![Dataflöde med en JAMStack hemsida.](/static/jamstack.png "Dataflöde med en JAMStack hemsida.")

### Statiska sidor

Det finns ett namn för sidor som inte byggs ihop vid varje hämtning, dem kallas statiska hemsidor. Det här namnet kan dock vara lite missvisande eftersom innehållet på dessa sidor inte alls behöver vara statiskt. Dessa hemsidor hanterar bara innehåll på ett annat sätt.

Hur en JAMStack sida hanterar dynamiskt innehåll, alltså innehåll som förändras, varierar mellan olika hemsidor. På min egen sparar jag mina blogginlägg i mitt _GitHub_ konto. GitHub är en tjänst där utvecklare kan lagra sin källkod.

GitHub är faktiskt ett väldigt viktigt verktyg när man hanterar JAMStack sidor. Det låter utvecklare hantera olika versioner av hemsidan, så att man snabbt kan återställa hemsidan till en tidigare version ifall något inte fungerar.

GitHub låter även utvecklare lansera nya versioner av hemsidan genom att bara ladda upp sina filer på kontot. En tjänst som _Netlify_ eller _Zeit Now_ kan sedan bygga ihop hemsidan och lägga upp den sin CDN. Detta gör både utveckling och lansering otroligt enkelt med JAMStack.

## Fördelar med JAMStack

Det finns ganska många fördelar med JAMStack, både för utvecklare och för företagen. Eftersom jag är både företagare och webbutvecklare så har jag dragit nytta av de flesta fördelar som JAMStack har ett erbjuda, och kan därför styrka många av dessa fördelar med personliga exempel.

### 1. Minskade kostnader

Det här är en av de fördelarna med JAMStack som jag har personlig erfarenhet av. Jag hade nämligen min hemsida på ett traditionellt webbhotell innan jag hittade JAMStack. Det här webbhotellet kostade 137 kr i månaden och fakturerades en gång i kvartalet med en summa 550 kr.

Det här var dock inte hela kostnaden för att driva hemsidan. Eftersom jag använde en databas som webbhotellet inte hade stöd för, var jag tvungen att betala för en _VPS_, eller Virtual Private Server. Det är helt enkelt en server dator som du kan kontrollera från din egen dator.

På denna VPS installerade jag den programvara som krävdes för att köra databasen och kopplade sedan min hemsidan till denna. Den här VPS:en lade till nästan 200 kr på min driftkostnad. Det betyder att min totala kostnad för att driva hemsidan var över 300 kr i månaden.

När jag sedan bytte till JAMStack har mina driftkostnader bokstavligen försvunnit. Nu driver jag hemsidan utan att betala någonting, den är helt gratis. Detta är något som jag vill kunna erbjuda mina kunder, en kostnadsfri drift av hemsidan.

### 2. Hanterar ökning av trafik utan problem

Folk som skriver om JAMStack brukar ofta nämna e-handeln som ett exempel på den här fördelen. Syftning ligger ofta på Black Friday. E-handlar har en dag om året som trafik ökar avsevärt. Med traditionella webbservrar måste man förbereda inför den här dagen med ökade resurser.

På JAMStack är detta inget problem. Det är nästan omöjligt att hemsidan får för mycket trafik och slutar fungera. Eftersom hemsidan använder en CDN är driftsäkerheten väldigt stor, om en server i nätverket slutar fungera skickas hemsidan bara från nästa.

Det här betyder även att JAMStack sidor inte bara är billiga att driva med en vanlig mängd trafik, dem är även billiga under perioder med ovanligt mycket trafik.

JAMStack hemsidor kan alltså skalas upp automatiskt. Det är fantastiskt bra för företag som vill växa.
