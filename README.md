# Browser Technologies @cmda-minor-web 20-21

Voor dit project heb ik een app gebouwd waarbij de gebruiker Nerdy T-Shirt's kan customizen. De gebruiker kan kiezen uit t-shirts met verschillende kleuren en teksten. De gebruiker kan ze combineren en toevoegen aan de overzichtspagina.

De bedoeling van de app is dat de app op zo veel mogelijk browsers en devices het op zijn beste manier functioneert. Bijvoorbeeld als een browser JavaScript of een aantal CSS properties niet ondersteunt, dat de app nog steeds moet functioneren. Tijdens dit project hebben we veel aandacht aan Progressive Enhancement besteed.
<br/><br/>

## Case
<b>Nerdy T-shirt</b><br/>
Ik wil mijn eigen t-shirt-met-nerdy-tekst kunnen ontwerpen, opslaan, bestellen, en een volgende keer dat ik de site bezoek kunnen gebruiken.
<br/>

<img src="https://i.ibb.co/5n5m91f/Schermafbeelding-2022-04-07-om-12-56-22.png" alt="screen" width="200px"/>
<br/></br>

## Schetsen
<img src="https://i.ibb.co/D9LxFJ2/IMG-2693.jpg" alt="schets" width="400px"/><br/>
<img src="https://i.ibb.co/Yckw1hh/IMG-2694.jpg" alt="schets" width="400px"/>
<br/><br/>

## Features List
* T-Shirt customizen
* 2e T-Shirt customizen
* T-Shirt's wijzigen
* T-Shirt's verwijderen
* Overzichtspagina
* Bestellen
<br/><br/>

## Dependencies
* Express
* EJS
* Express-EJS-Layouts
* Node-localstorage
<br/>

## Live Demo 🚀
<a href="https://bt-cmd.herokuapp.com/">https://bt-cmd.herokuapp.com/</a><br/>
<br/></br>

## Installeren
1. Clone de repository<br/>
```
  git clone https://github.com/muhammet075/browser-technologies-2122
```

2. Navigeer naar het project<br/>
```
cd browser-technologies-2122
```

3. Installeer NPM<br/>
```
npm i
```
4. Start de app<br/>
```
npm start
```
<br/><br/>

## Test rapport

### Google Chrome
Op de browser Google Chrome functioneert mijn app goed. Alle features functioneren goed en de CSS functioneert ook goed. Als de CSS uit staat functioneert de app ook goed en de gebruiker kan gewoon de formulieren goed invullen met alleen de pure HTML.
<br/><br/>

### Firefox
Net als op de Chromium browsers functioneert de app ook goed op Firefox. Alle CSS properties worden ondersteund die bij mijn app gebruikt zijn. Als JS en CSS ook uitgeschakeld zijn functioneert de app nog steeds en kan de gebruiker de formulier goed invullen net als bij Chrome.
<br/><br/>

### Safari
Op Safari werkt de app nog steeds goed net als bij Chrome en Firefox. Alle CSS properties worden ondersteund die bij mijn app gebruikt zijn net als bij Chrome en Firefox. Als JS en CSS ook uitgeschakeld zijn functioneert de app nog steeds en kan de gebruiker de formulier goed invullen net als bij Chrome en FireFox.
<br/><br/>

### Windows Surface Internet Explorer
De app functioneert nog steeds op dit browser, alleen bij CSS wordt 'root' en de variabels die daarbij horen niet ondersteund. Ook werd de kleurcode voor wit '#ffff' niet ondersteund. Ik heb het aangepast zodat het ook op dit browser het er mooi uit ziet. Als de CSS en JS uitgeschakeld zijn voor dit browser functioneert ook alles naar behoren.
<br/><br/>
