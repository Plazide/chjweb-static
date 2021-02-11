---
type: post
published: false
title: Vad är GatsbyJS?
date: 2021-02-11T15:03:05.406Z
updated: 2021-02-11T15:03:05.483Z
image: /Gatsby_Logo.png
description: Jag använder GatsbyJS för att bygga många av mina webbplatser. I
  det här inlägget diskuterar jag vilka fördelar som finns med verktyget och hur
  det hjälper dig att spara pengar.
---
När jag bygger webbplatser använder jag mig av en rad verktyg. Ett av dessa är GatsbyJS. Jag nämner på min webbplats att jag använder verktyget, men du undrar säkert vad syftet är med det egentligen. Det kommer jag att reda ut för dig.

## En SSG (Static Site Generator)

Du känner säkert till begreppet JAMstack. Om inte kan du läsa mer om det i mitt inlägg där jag förklarar [vad JAMstack är](https://chjweb.se/blogg/vad-ar-egentligen-jamstack). En huvudprincip i JAMstack är att webbplatser ska vara färdiga att serveras så fort en användare går in på en sida. Det är detta som SSG:er löser.

En SSG genererar alltså en statisk webbplats, alltså en webbplats där alla sidor är statiska. En statisk sida innebär att det inte sker någon hantering av sidan på servern, alla sidor är redan färdiga att visas för användaren.

Om man använder ett verktyg som Wordpress däremot, är inte sidorna färdiga innan hämtning. Varje gång en användare försöker hämta en sida på en Wordpress-webbplats måste information hämtas från en databas och sedan läggas in i dokumentet som ska serveras. Detta ökar tiden det tar för en besökare att se sidan.
