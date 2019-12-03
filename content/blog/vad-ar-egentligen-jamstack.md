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

Med hjälp av den här informationen kanske du förstår att JAMStack byggs med hjälpa av samlingen teknologier: JavaScript, API:er och Markup. Det som skiljer JAMStack från andra typer av webbutveckling är inte dessa teknologier, de används på majoriteten av webbplatser nu för tiden.

### Den traditionella webbservern

Det enda sättet att få hemsidor till slutanvändaren har länge varit att använda en webbserver. En webbserver är, som du kanske kan gissa, programvaran som är ansvarig för att servera (skicka) hemsidan till webbläsaren.

Webbservrar använder sig ofta av ett _serverspråk_. Det finns ett antal olika serverspråk, men det vanligaste serverspråket är _PHP_. Det är exempelvis det språket som används av _Wordpress_, det mest populära CMS verktyget_._

Den kanske största uppgiften för dessa språk är att bygga ihop hemsidan innan den skickas till webbläsaren. Det fungerar oftast genom att man hämtar information från en databas och sätter in den informationen på rätt plats i en HTML fil. 

Om inte servern _cachar_ olika förfrågningar, byggs sidan ihop vid varje förfrågan om att hämta en viss sida. Att cacha en sidan innebär att webbservern inte behöver arbeta så mycket eftersom den redan sparat svaret som kommer skickas med en specifik förfrågan.

Som du kanske kan förstå är denna metod inte optimal. Om en server som bygger ihop sidor vid varje hämtning ska fungera när hemsidan får mycket trafik, krävs ganska bra hårdvara och avancerade cache-strategier. Detta kostar självklart en del pengar och är besvärligt för utvecklare att hantera.

Detta betyder även att kostnaderna för att driva en hemsida ökar i stadig takt med antalet besökare till hemsidan. Dessa kostnader kan även mätas i tiden det tar för utvecklare att skapa nya funktioner på webbplatsen.

### Den moderna CDN:en

Jag nämnde innan att det inte var teknologin man bygger JAMStack sidor med som skiljer dem från andra hemsidor. Det som faktiskt skiljer JAMStack från andra hemsidor är saknaden av en traditionell webbserver.

En JAMStack hemsida använder oftast en modern _CDN._ CDN står för **C**ontent **D**elivery **N**etwork och är inte en ny teknik för att leverera innehåll på webben. Dessa innehållsleveransnätverk, som det heter på svenska, har tidigare används för att effektivt servera bilder och andra filer till användaren.

En CDN är ett nätverk av servrar som är geografiskt utspridda för att minska fördröjningen mellan förfrågan att hämta en resurs till den faktiska leveransen av resursen. Dessa nätverk använder cachestrategier för minska användning av serverresurser.

Eftersom en CDN består av flera olika servrar är driftsäkerheten mycket högre än en vanlig webbserver. Om den närmaste servern inte kan hantera din föfrågan kommer den att skickas vidare till nästa. Detta betyder att JAMStack sidor sällan ligger nere.

För att faktiskt dra nytta av cachestrategierna som en CDN erbjuder kan inte hemsidan byggas ihop vid varje hämtning. Istället är alla sidor på webbplatsen redan färdiga när dem laddas upp på CDN:en.

### Statiska sidor

Det finns ett namn för sidor som inte byggs ihop vid varje hämtning, dem kallas statiska hemsidor. Det här namnet kan dock vara lite missvisande eftersom innehållet på dessa sidor inte alls behöver vara statiskt. Dessa hemsidor hanterar bara innehåll på ett annat sätt.





## Fördelar med JAMStack

Det finns ganska många fördelar med JAMStack, både för utvecklare och för företagen. Eftersom jag är både företagare och webbutvecklare så har jag dragit nytta av de flesta fördelar som JAMStack har ett erbjuda, och kan därför styrka många av dessa fördelar med personliga exempel.

### 1. Minskade kostnader

Det här kanske är den fördel med JAMStack som hjälpt mig
