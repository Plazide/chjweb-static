---
title: Vad är egentligen JAMStack?
date: 2019-12-06T10:43:03.024+00:00
updated: 2019-12-06T10:43:03.049+00:00
description: Jag förklarar vad JAMStack är och varför jag använder det för att bygga
  hemsidor till kunder. Förklaringen utgår ifrån att läsaren inte har någon som helst
  kunskap om webbutveckling eller hur hemsidor fungerar.
image: "/img_20191203_120316_01_bokeh.jpg"
published: true

---
På min hemsida nämner jag termen _JAMStack_ exakt 15 gånger om man inkluderar sidtitlar och beskrivningar, det här inlägget ökar den siffran rejält. Anledningen till att jag repeterar denna konstiga term, som verkar ha något med sylt att göra, är för att det är metoden jag använder för att skapa hemsidor.

![Syltburk på bord](/jam_small.jpg "Syltburk")

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

Det enda sättet att få hemsidor till slutanvändaren har länge varit att använda en _webbserver_. En webbserver är, som du kanske kan gissa, programvaran som är ansvarig för att servera (skicka) hemsidan till webbläsaren. Denna webbserver måste finnas på en dator någonstans i världen, helst så nära användaren som möjligt. 

![Korridor med servrar](/servers.jpg "Webbhotell")

Webbservrar använder sig ofta av ett _serverspråk_. Det finns ett antal olika serverspråk, men det vanligaste serverspråket är _PHP_. Det är exempelvis det språket som används av _Wordpress_, det mest populära _CMS_ verktyget_._

Den kanske största uppgiften för dessa språk är att bygga ihop hemsidan innan den skickas till webbläsaren. Det fungerar oftast genom att man hämtar information från en _databas_ och sätter in den informationen på rätt plats i en HTML (Markup) fil. 

Varje gång en användare hämtar en sida, alltså vill titta på den i en webbläsare, bygger det här serverspråket ihop hemsidan på nytt. Alltså, om du tittar på ett blogginlägg så har det hämtats ifrån en databas och satts in i en HTML fil. Om du nu laddar om hemsidan kommer servern göra samma sak igen, även fast innehållet är det samma. 

Som du kanske kan förstå är denna metod inte optimal. Om en server som bygger ihop sidor vid varje hämtning ska fungera när hemsidan får mycket trafik, krävs ganska bra hårdvara. Detta betyder att kostnaderna för att driva en hemsida ökar i stadig takt med antalet besökare till hemsidan.

Det följande diagrammet förklarar hur varje förfrågan hanteras med en traditionell webbserver.

![Diagram över dataflöde med en traditionell webbserver](/traditionell.png "Diagram över dataflöde med en traditionell webbserver")

### Den moderna CDN:en

Jag nämnde innan att det inte var teknologin man bygger JAMStack sidor med som skiljer dem från andra hemsidor. Det som faktiskt skiljer JAMStack från andra hemsidor är saknaden av en traditionell webbserver.

![Ingen server](/computer-2777254_1920.jpg "Ingen server")

En JAMStack hemsida använder oftast en modern _CDN._ CDN står för **C**ontent **D**elivery **N**etwork och är inte en ny teknik för att leverera innehåll på webben. Dessa innehållsleveransnätverk, som det heter på svenska, har tidigare används för att effektivt servera bilder och andra filer till användaren. Att servera hela hemsidor från en CDN är dock något nytt.

En CDN är ett nätverk av servrar som är geografiskt utspridda för att minska fördröjningen mellan förfrågan att hämta en resurs till den faktiska leveransen av resursen. Förfrågningar till en CDN är utspridda över flera olika servrar och inte koncentrerade till en enda.

Effekten av det här blir att en hemsida som ligger på en CDN nästan aldrig kan överbelastas. Om en server i nätverket hanterar för mycket trafik, kommer framtida hämtningar hanteras av en annan server i nätverket. Effekten för slutanvänderen blir som värst att hemsidan är lite långsammare än vanligt.

Eftersom en CDN består av flera olika servrar är driftsäkerheten mycket högre än en vanlig webbserver. Om den närmaste servern inte kan hantera din förfrågan kommer den att skickas vidare till nästa. Detta betyder att JAMStack sidor sällan ligger nere.

För största effektivitet och hastighetsökning, bygger man inte JAMStack sidor med serverspråk. Istället bygger man statiska sidor som är färdiga att serveras vid varje hämtning. Det betyder att den serverande servern inte behöver bygga ihop någon sida, allting finns redan färdigt.

Det följande diagrammet visar hur varje förfrågan hanteras med en JAMStack hemsida.

![Dataflöde med en JAMStack hemsida.](/jamstack.png "Dataflöde med en JAMStack hemsida.")

### Statiska sidor

Namnet "statiska sidor" kan vara lite missvisande eftersom innehållet på dessa sidor inte alls behöver vara statiskt. Att sidorna är statiska syftar på själva koden på den hämtade sidan aldrig förändras. Innehållet på sidan kan dock förändras hur mycket som helst.

Hur en JAMStack sida hanterar dynamiskt innehåll, alltså innehåll som förändras, varierar mellan olika hemsidor. Det går att hämta information via en API efter att sidan har laddats. På min egen hemsida sparar jag mina blogginlägg i mitt _GitHub_ konto. GitHub är en tjänst där utvecklare kan lagra sin källkod.

GitHub är faktiskt ett väldigt viktigt verktyg när man hanterar JAMStack sidor. Det låter utvecklare hantera olika versioner av hemsidan, så att man snabbt kan återställa hemsidan till en tidigare version ifall något inte fungerar.

GitHub låter även utvecklare lansera nya versioner av hemsidan genom att bara ladda upp sina filer på kontot. En tjänst som _Netlify_ eller _Zeit Now_ kan sedan bygga ihop hemsidan och lägga upp den sin CDN. Detta gör både utveckling och lansering otroligt enkelt med JAMStack.

## Fördelar med JAMStack

Det finns ganska många fördelar med JAMStack, både för utvecklare och för företagen. Eftersom jag är både företagare och webbutvecklare så har jag dragit nytta av de flesta fördelar som JAMStack har att erbjuda, och kan därför styrka många av dessa fördelar med personliga exempel.

### 1. Minskade kostnader

![Spargris](/money-pink-coins-pig-9660.jpg "Spara pengar")

Det här är en av de fördelarna med JAMStack som jag har personlig erfarenhet av. Jag hade nämligen min hemsida på ett traditionellt webbhotell innan jag hittade JAMStack. Det här webbhotellet kostade 137 kr i månaden och fakturerades en gång i kvartalet med en summa 550 kr.

Det här var dock inte hela kostnaden för att driva hemsidan. Eftersom jag använde en databas som webbhotellet inte hade stöd för, var jag tvungen att betala för en _VPS_, eller Virtual Private Server. Det är helt enkelt en serverdator som du kan kontrollera från din egen dator.

På denna VPS installerade jag den programvara som krävdes för att köra databasen och kopplade sedan min hemsidan till denna. Den här VPS:en lade till nästan 200 kr på min driftkostnad. Det betyder att min totala kostnad för att driva hemsidan var över 300 kr i månaden.

När jag sedan bytte till JAMStack har mina driftkostnader bokstavligen försvunnit. Nu driver jag hemsidan utan att betala någonting, den är helt gratis. Detta är något som jag vill kunna erbjuda mina kunder, en kostnadsfri drift av hemsidan.

### 2. Hanterar ökning av trafik utan problem

![Ökning](/space-grey-ipad-air-with-graph-on-brown-wooden-table-187041.jpg "Ökning")

Folk som skriver om JAMStack brukar ofta nämna e-handeln som ett exempel på den här fördelen. Syftning ligger ofta på Black Friday. E-handlar har en dag om året som trafik ökar avsevärt. Med traditionella webbservrar måste man förbereda inför den här dagen med ökade resurser.

På JAMStack är detta inget problem. Det är nästan omöjligt att hemsidan får för mycket trafik och slutar fungera. Eftersom hemsidan använder en CDN är driftsäkerheten väldigt stor, om en server i nätverket slutar fungera skickas hemsidan bara från nästa.

Det här betyder även att JAMStack sidor inte bara är billiga att driva med en vanlig mängd trafik, dem är även billiga under perioder med ovanligt mycket trafik.

JAMStack hemsidor kan alltså skalas upp automatiskt. Det är fantastiskt bra för företag som förväntar sig att växa.

### 3. Snabbare och smidigare utveckling

![Utveckling](/dev.jpg "Utveckling")

Eftersom man inte behöver hantera serverspråk med JAMStack, så kan man bygga hemsidor mycket snabbare. En utvecklare kan alltså fokusera på att skapa en snygg och presterande hemsida, istället för att hantera kopplingar till databaser och andra serverfunktioner.

Om man vill att en hemsida ska bli färdig snabbt, då är JAMStack ett väldigt bra val. Jag gjorde själv om min egen hemsida på JAMStack, och det tog ungefär två veckor. Då var jag även en nybörjare på JAMStack och kunde inte alla principer, så jag lärde mig samtidigt.

För mina kunder betyder det här att jag kan bygga deras hemsidor mycket snabbare än innan. Eftersom jag kan lägga ner mindre tid på varje projekt, blir det också billigare för kunderna.

### 4. Ökad säkerhet

![Övervakningskameror på vägg](/scott-webb-yekglpc3vro-unsplash.jpg "Ökad säkerhet")

Den sista fördelen, men absolut inte den minsta, är säkerhet. Som de flesta fördelarna med JAMStack kommer den här ifrån att man inte använder traditionella webbservrar. Eftersom en JAMStack hemsida saknar en webbserver, finns det mindre att attackera för potentiella hackare.

Det finns överlag mindre kod på en JAMStack sida, vilket betyder att det finns mindre säkerhetshål. Mindre kod betyder även att det finns mindre saker att underhålla, vilket i sin tur betyder mindre risk för utdaterad kod med säkerhetshål. 

## Sammanfattning

Har du hängt med? Det har antagligen nämnts en hel del nya termer, så det kan vara svårt att förstå allt. Men det är lugnt för jag ska sammanfatta allting på ett enkelt sätt.

JAMStack är alltså en samling webbteknologier som används för att bygga statiska sidor. Dessa sidor ligger inte på traditionella webbservrar, utan på moderna nätverk av servrar som kallas för CDN:er. Dessa sidor är snabbare, säkrare och hanterar mycket trafik utan problem.

Förhoppningsvis har jag gett dig någon slags klarhet i vad JAMStack egentligen betyder och vad det innebär för ditt företag. Med den här informationen är det sedan upp till dig att bestämma vilken typ av hemsida som passar ditt företag och dess syften.

Om du har några frågor angående JAMStack eller mitt företag, är det fritt fram att skicka ett e-postmeddelande, eller kontakta på någon av mina social medier. Dessa finner du längst ner på hemsidan tillsammans med min e-postadress.

Tack för att du har läst och ha en fortsatt bra dag!