# Currency Exchanger Website (Web 1 beadandó weboldal leírása)

Ez a weboldal a Web-es rendszerek programozása 1 nevű tárgy teljesítése céljából készült.

## Oldal témája

Az elkészített weboldal egy valutaváltó alkalmazással ellátott oldal, amely egy API-t használva valósítja meg a váltást az apiban megtalálható valutanemekben. További lehetőségek a weboldalon egy aktuális árfolyam táblázat és egy sötét mód gomb.


## Váltó

Ezen az oldalon található meg a valutaváltó, amely az alábbi API segítségével valósítja meg a váltást. (https://exchangeratesapi.io/)
Az oldalon találunk két számokat elfogadó beviteli mezőt, ahova alapértelmezetten bekerül a kezdő érték induláskor. Az alapértelmezett pénznem az Euro és az 1-es érték.
A valutanemeket egy legördülő menüből tudjuk kiválasztani, ennek változtatásával automatikusan változik az érték is, de természetesen saját számokkal is dolgozhatunk.

## Árfolyamok

Ezen az oldalon egy táblázatban van összefoglalva az API-ból legfrissebben elérhető árfolyamlista, illetve a legfrissebb lista dátuma amit egy useReducer Hookkal az API-ból jelenít meg.

## Témaváltás

A témaváltás gomb az alapértelmezett sárga felületet sötét szürkére változtatja, illetve a betűk színét feketéről fehérre. Ez egyfajta sötétmódként funkcionál.
