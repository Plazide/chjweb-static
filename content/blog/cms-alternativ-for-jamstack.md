---
title: CMS alternativ för JAMStack
date: 2020-02-11T09:09:18.719Z
updated: 2020-02-11T09:09:18.730Z
description: >-
  Vilken är den bästa lösningen för JAMStack när det kommer till CMS? I det här
  inlägget går jag igenom fördelar och nackdelar med olika verktyg.
image: /static/wordpress.jpg
---
Om du inte har koll på vad JAMStack är, så rekommenderar jag att du läser mitt tidigare inlägg om [vad JAMStack egentligen är](https://chjweb.se/blogg/vad-ar-egentligen-jamstack).

De flesta har nog hört talas om Wordpress. Det är den mest populära CMS plattformen i världen. Det är så populärt att över en tredjedel av alla webbplatser på nätet drivs med hjälp av Wordpress. 

Det är en siffra som fick mig att höja på ögonbrynen första gången jag hörde den.

Eftersom Wordpress drivs av PHP, ett språk som körs på webbservern, är det inte riktigt kompatibelt med JAMStack. En av de största kännetecknen för JAMStack är ju att webbplatserna inte använder någon webbserver.

_Så, hur får man CMS funktionalitet på en JAMStack webbplats?_



## Git och Headless

Svaret på ovanstående fråga kräver lite bakgrund.

När man talar om CMS lösningar för JAMStack finns två alternativ, Git-baserade CMS:er och huvudlösa (headless) CMS:er.

Git-baserade CMS:er använder versionshanteringsverktyget Git för att hantera innehållet. Det betyder att innehållet sparas tillsammans med webbplatsens kod, ofta i ett format kallat markdown.
