---
title: CHJ Webblösningar gör om hemsidan och skaffar en blogg
date: 2019-10-02T09:34:40.248Z
updated: 2019-11-21T08:12:25.737Z
description: >-
  Jag har gjort om min hemsida om skaffat en blogg. I det här första inlägget
  skriver jag om varför och hur jag gjorde detta.
image: /static/img_20191119_115251_bokeh.jpg
---
Det här är det absolut första inlägget i den här sprillans nya bloggen. Jag valde att göra om min egen hemsida eftersom den var framtvingad till att börja med, mer om det senare. Samtidigt ville jag även skapa en blogg där jag kan berätta om vad jag håller på med och på så sätt bygga upp en slags tilltro hos potentiella kunder. Så det här inlägget kommer fungera som en slags introduktion till bloggen där jag tar upp nuvarande funktioner och framtida planer. Inlägget kommer självklart också handla om varför jag valde att renovera min hemsida. Så låt oss börja med att prata om bloggen.

## En enkel men genomtänkt blogg

Som du kanske märker är bloggen ganska enkel, det finns inget kommentarsfält eller några knappar för att dela med sig av inlägget. Detta beror på att jag ville få ut en fungerande version av bloggen så fort som möjligt. Detta var en utmaning då jag lägger ner väldigt mycket tid på detaljer när jag bygger mina projekt. Jag ville att bloggen skulle vara lätta att läsa, och lätt att hitta. Jag har tagit ett par åtgärder för att åstadkomma detta.

### ﻿Seriffer över sans-seriffer

Typografi är mycket viktig för en bra användarupplevelse, speciellt när det gäller en blogg. Jag vill att människor ska kunna läsa hela mina inlägg, oavsett hur långa de är. Därför har jag valt använda ett seriff typsnitt på inläggen. Denna grupp av typsnitt lämpar sig ofta bättre till tryckt text snarare än text på skärmar. Detta beror på att detaljerna i seriff typsnitt gör det lättare för våra hjärnor att skilja mellan bokstäverna. Men på grund av att skärmar har mycket färre bildpunkter än tryckt text, blir seriffer ofta svårare att läsa på skärmar. Av denna anledning använder man oftast sans-seriffer för text på webben.

Om seriffer är svårare att läsa på skärmar, varför har jag då valt att använda ett sådant typsnitt? För att seriffer är lättare att läsa när det handlar om stora passager av text. Det som gör seriffer mindre lämpade för webben är upplösningen på skärmen, antalet bildpunkter, därför är en enkel lösning på det här problemet att helt enkelt använda en större storlek på texten. Så istället för att använda 16 eller 18 px på texten använder jag närmare 23 px.

Detta kommer förhoppningsvis visa sig vara ett beslut som bidrar till att besökare på min blogg läser en stor del av varje inlägg.

### Uppskattning av lästid

Att visa en uppskattad lästid verkar som trivial information att visa på ett blogg inlägg. Varför inte bara visa antalet ord i inlägget? Att visa hur lång tid det tar att läsa ett inlägg kan faktiskt öka chansen att besökaren faktiskt läser hela inlägget. Det finns studier som tyder på att ju mer information en person har om något, desto större är chansen att de kommer lägga ner tid på det. Hur lång tid det tar att genomföra något är en av de bitar av information som ökar chansen för människor att lägga ner tid på en aktivitet eller artikel. Därför är den uppskattade lästid en viktig del i att få människor att läsa mina inlägg. Om jag endast skulle visa hur många ord som inlägget innehåller, skulle man antagligen inte få en bra uppfattning om hur lång tid det faktiskt tar att läsa hela inlägget.

Att faktiskt uppskatta tiden är väldigt enkelt. Det enda man behöver göra är att dela antalet ord i inlägget med den genomsnittliga läshastigheten. Eftersom vuxna läser i en hastighet på omkring 200 till 250 ord per minut, kan man välja en siffra där emellan och få ut en uppskattad lästid. Jag valde att använda 250 ord per minut, sen var det bara dela antalet ord i varje inlägg med den siffran. Om jag exempelvis har ett inlägg med 600 ord, så kan jag dela detta med 250 och få 2.4. Detta betyder att det tar 2.4 minuter att läsa inlägget. Sedan avrundar jag den siffran till närmaste heltal, vilket betyder att lästiden för ett inlägg med 600 ord skulle vara runt 2 minuter. Det går självklart att även visa antalet sekunder i den uppskattade lästiden, men eftersom människor läser i högt varierande hastighet känns detta onödigt.

### SEO

Självklart har jag även gjort lite on-page seo, som att lägga till strukturerad data. Jag har även optimerat URL:er så att de ska vara så sökmotorvänliga som möjligt. Detta innebär att de ska vara korta men ändå beskriva innehållet på sidan. Mycket inom SEO handlar om just detta, att vara koncis i sina formuleringar. T.ex. ska även sidtiteln vara kort men beskrivande. Även om strukturerad data är en viktig komponent i sökmotoroptimeringen, tror jag att de koncisa URL:erna kommer ha störst inverkan på sökresultaten.

### Den kan förbättras

Även om det jag har skapat än så länge är genomtänkt, finns det fortfarande mycket kvar att göra. Du märker kanske att det inte finns någon knapp för att dela inlägget eller något alternativ för att följa bloggen. Det här är medvetet och planerat, men dessa funktioner kommer att implementeras i framtiden. Dessa två funktioner är väldigt viktiga för att bloggen ska växa och få mer trafik. Även kontrollpanelen jag använder för att skriva inläggen kan förbättras. Just nu finns den mest nödvändiga funktionaliteten, som att kunna spara och publicera inlägg. Framtida planer för denna kontrollpanel är en funktion som låter mig schemalägga inlägg, något som förmodligen kommer bli nödvändigt om jag ska lägga ut regelbundna inlägg.

## Varför gjorde jag om hemsidan?

Det är mycket möjligt att du som läser detta aldrig såg den tidigare versionen av min hemsida, och det kanske är bra. Det fanns många problem med den, både från ett SEO och ett prestanda perspektiv. Sättet som innehållet var strukturerat på var även mycket dåligt. Jag börjar med att berätta om dessa problem, sedan går jag vidare till att beskriva vilka åtgärder jag tagit för att lösa dessa problem.

### Dålig prestanda och SEO

Prestanda och SEO är väldigt sammanknutna. Om en hemsida tar lång tid att ladda för en användare kommer den att ranka lägre i sökresultaten. Detta beror på flera saker. En av de är att google ser om användare kommer tillbaka till söksidan efter att ha besökt en hemsida. Om de ser att en användare snabbt är inne på en sidan och sedan återvänder, betraktas sidans innehåll som mindre relevant till sökordet. Om en användare går in på min sida och sedan återvänder eftersom den tog för lång tid att ladda, kommer min hemsida placeras sämre i sökresultaten.

Hemsidan tog faktiskt inte speciellt lång tid att ladda, i alla fall inte på datorer med bra uppkoppling. Själva innehållet på sidan var minimalt. Inga stora bilder laddades och inga stora mängder av data hämtades från tredjepart. Det som tog lång tid var mina JavaScript filer, eller rättare sagt: min JavaScript fil. När jag utvecklar har jag min kod i flera olika filer för att organisera och sära på vad som göra vad. När jag sidan bygger sidan och sätter ihop allt, läggs alla JavaScript filer ihop till en fil. Denna fil länkades sedan på varje sida. Detta betyder all JavaScript kod laddas för alla sidor, även för sidor som inte behöver majoriteten av koden. Detta gjorde att det tog lång tid innan användaren faktiskt kunde interagera med sidan, vilket var ett stort problem.

Hemsidans URL:er var även dåligt sökmotoroptimerade. Alla URL:er slutade med förlängningen .html. Detta är naturligtvis det språk och den filtyp som används för att skriva innehåll för webben, men att inkludera denna förlängning i URL:er är inte optimalt för användare och sökmotorer. Det gör det svårare för användare att komma ihåg URL:en, och google rankar sidor med sådana förlängningar något sämre än sidor utan.

### Dåligt strukturerat innehåll

Innehållet på hemsidan var dåligt strukturerat. Anledningen till det här var att jag hade bestämt vilka sidor som skulle finnas på hemsidan, innan jag hade bestämt innehållet på hemsidan. Jag gjorde alltså sidor med en tanke om vad sidan skulle handla om, men utan en klar plan över vilka sektioner och rubriker som skulle finnas. Jag exempelvis en sidan som hette "Vad jag erbjuder". Den här sidan var mindre än ideal på många sätt, men just nu ska vi fokusera på innehållet. Jag visste att sidan skulle innehålla olika punkter som tryckte på vad jag kan erbjuda mina kunder. Och den gjorde just detta. Jag hade flera olika stycken och rubriker med kompletterande bilder. Problemet var att det var för lite innehåll för endast en sida. Det kändes som att alla undersidor på min hemsida var framtvingade, vilket jag absolut inte tyckte om.

### Lösningar

Dessa problem hade egentligen ganska enkla lösningar. Det var problemet med innehållsstrukturen som tog längst tid att lösa, men det var inte ju inte för att själva uppgiften var svår utan för att omstrukturering av en hemsida helt enkelt tar lite tid. Själva tanken bakom omstruktureringen var att jag skulle flytta den viktigaste informationen till framsidan, och ta bort onödiga sidor. Och det är precis det jag har gjort. Nu finns det endast tre länkar i navigationsfältet, Hem, Blogg och Kontakt. Dessa är mina tre huvudsidor och all information om verksamheten finns på framsidan. På kontaktsidan har jag endast ett kontaktformulär. Detta behöver dock kompletteras med kontaktinformation, så som mejladress, telefonnummer och adress. Men det fixar jag i en framtida uppdatering.

För att lösa mitt JavaScript problem gjorde jag något ganska självklart, jag delade upp min koden i olika filer. Jag har såklart min kod i olika filer under utveckling, men eftersom jag använder Webpack sätts alla filer ihop när jag bygger sidan för lansering. Det var ju detta som orsakade problemet. Lösningen blev att helt enkelt ha flera olika entry points, alltså filer där Webpack bygger ihop alla filer som är beroende av varandra. Det jag gjorde från början var att jag hade en fil där jag importerade alla andra filer, även fast alla sidor inte behövde dessa. Nu har varje sida en egen JavaScript fil som bara innehåller nödvändig kod för just den sidan.

För att lösa problemet med .html förlängningen lade jag bara till en inställning i min express server. Jag använder `express.static()` för att servera mina sidor. I `express.static()` finns ett alternativ som heter extensions. Om man lägger till `{ extensions: ["html"] }` som inställningar i `express.static()` kommer express att använda `.html` som fallback när ingen fil matchar sökvägen. Detta var en rätt så enkel lösning, och jag har vetat om den här inställningen ganska länge. Problemet var att detta inte fungerar i min webpack-dev-server. Jag ansåg det alldeles för omständligt att ändra filnamnen varje gång jag ska lansera. Det fanns självklart andra lösningar för detta, som att använda `webpack.Define` och miljövariabler, men jag ansåg att även detta inte var värt besväret. Den slutliga lösningen, efter mycket googlande, var att använda webpack-dev-server inställningen `staticOptions` och ange samma inställningen som för `express.static()`. Samtidigt var jag tvungen att skriva alla html filer till hårddisken vid varje kompilering, annars skulle inte denna inställning fungera.

## Vad har jag lärt mig?

Det jag har lärt mig från det att göra om hemsidan, förutom vissa tekniska saker, är att jag måste planera bättre. När jag gjorde den här hemsidan var jag stressad och ville få ut den så fort som möjligt. Det misstaget kommer jag inte göra igen. Jag kommer planera framtida hemsidor i förväg, så som jag gjort med min första kund (det kommer ett framtida inlägg om detta).

Jag tror mitt inlägg är slut här. Om du har läst så här långt antar jag att du är intresserad av det jag gör. Om du är det föreslår jag att du följer mig på någon av mina sociala medier, du hittar dem längst ner på sidan. Det finns inte speciellt mycket aktivitet där just nu, men det kommer att förändras framöver.

Tack för att du läst och ha en fortsatt fantastisk dag.

/ Carl Hallén Jansson
